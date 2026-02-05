"use client";

import { useEffect, useState } from "react";
import { mcpClient, type Document } from "@/services/mcpClient";

interface Task extends Document {
  id: string;
  title: string;
  description?: string;
  status?: string;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);

    try {
      const documents = await mcpClient.getDocuments("vetra-drive");
      const taskDocuments = documents.filter(
        (d) => d.type === "task"
      ) as Task[];
      setTasks(taskDocuments);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch tasks");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    refetch: fetchTasks,
  };
}

export function useCreateTask() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (data: { title: string; description?: string }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await mcpClient.createDocument("vetra-drive", {
        name: data.title,
        description: data.description,
        type: "task",
      });

      return response;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create task";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    mutate,
    loading,
    error,
  };
}
