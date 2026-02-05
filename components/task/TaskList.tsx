"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TaskItem {
  id: string;
  title: string;
  description?: string;
  status?: string;
}

export function TaskList() {
  // TODO: Fetch Tasks from reactor-mcp
  const tasks: TaskItem[] = [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <CardDescription>View and manage all tasks.</CardDescription>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-slate-400">
            <p>No tasks yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start justify-between rounded-lg border border-slate-700 p-4"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-slate-100">{task.title}</h3>
                  {task.description && (
                    <p className="mt-1 text-sm text-slate-400">
                      {task.description}
                    </p>
                  )}
                </div>
                <Badge variant="secondary">{task.status || "Todo"}</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
