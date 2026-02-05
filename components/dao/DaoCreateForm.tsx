"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useCreateDao } from "@/hooks/useDaos";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export interface DaoCreateFormProps {
  onCreated?: () => void | Promise<void>;
}

export function DaoCreateForm({ onCreated }: DaoCreateFormProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { mutate, loading, error } = useCreateDao();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!name.trim()) return;

    try {
      await mutate({ name, description });
      setName("");
      setDescription("");

      if (onCreated) {
        await onCreated();
      }
    } catch {
      // Error is already handled by the hook
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create DAO</CardTitle>
        <CardDescription>
          Create a new DAO to organize proposals and tasks.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-slate-100">Name</label>
            <Input
              type="text"
              placeholder="DAO name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-100">
              Description
            </label>
            <Textarea
              placeholder="Describe your DAO..."
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
              disabled={loading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading || !name.trim()}>
            {loading ? "Creating..." : "Create DAO"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
