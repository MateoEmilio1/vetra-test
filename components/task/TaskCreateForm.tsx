"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useCreateTask } from "@/hooks/useTasks";
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

export interface TaskCreateFormProps {
  onCreated?: () => void | Promise<void>;
}

export function TaskCreateForm({ onCreated }: TaskCreateFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const { mutate, loading, error } = useCreateTask();

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!title.trim()) return;

    try {
      await mutate({ title, description });
      setTitle("");
      setDescription("");

      if (onCreated) {
        await onCreated();
      }
    } catch {
      // Error is handled in the hook
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
        <CardDescription>Create a new task for your team.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-slate-100">Title</label>
            <Input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              disabled={loading}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-100">
              Description
            </label>
            <Textarea
              placeholder="Describe your task..."
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              disabled={loading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading || !title.trim()}>
            {loading ? "Creating..." : "Create Task"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
