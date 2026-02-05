"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDaos, useDeleteDao, useUpdateDao } from "@/hooks/useDaos";

export function DaoList() {
  const { daos, loading, error, refetch } = useDaos();
  const { mutate: deleteDao } = useDeleteDao();
  const { mutate: updateDao } = useUpdateDao();

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`Delete ${name}?`)) {
      await deleteDao(id);
      await refetch();
    }
  };

  const handleEdit = async (id: string, name: string) => {
    const newName = prompt("New name:", name);
    if (newName) {
      await updateDao(id, { name: newName });
      await refetch();
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-slate-400">
          Loading DAOs...
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="text-red-400">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your DAOs</CardTitle>
        <CardDescription>Manage and browse your created DAOs.</CardDescription>
      </CardHeader>
      <CardContent>
        {daos.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-slate-400">
            <p>No DAOs yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {daos.map((dao) => (
              <div
                key={dao.id}
                className="flex items-start justify-between rounded-lg border border-slate-700 p-4"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-slate-100">{dao.name}</h3>
                  {dao.description && (
                    <p className="mt-1 text-sm text-slate-400">
                      {dao.description}
                    </p>
                  )}
                </div>
                <div className="ml-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(dao.id, dao.name || "")}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(dao.id, dao.name || "DAO")}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
