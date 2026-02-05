"use client";

import { useEffect, useState } from "react";
import { mcpClient, type Document } from "@/services/mcpClient";

interface Dao extends Document {
  id: string;
  name: string;
  description?: string;
}

export function useDaos() {
  const [daos, setDaos] = useState<Dao[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDaos = async () => {
    setLoading(true);
    setError(null);

    try {
      // Usar el drive ID conocido
      const documents = await mcpClient.getDocuments("vetra-drive");
      const daoDocuments = documents.filter(
        (d) => d.type === "dao"
      ) as Dao[];
      setDaos(daoDocuments);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch DAOs");
      setDaos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDaos();
  }, []);

  return {
    daos,
    loading,
    error,
    refetch: fetchDaos,
  };
}

export function useCreateDao() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (data: { name: string; description?: string }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await mcpClient.createDocument("vetra-drive", {
        name: data.name,
        description: data.description,
        type: "dao",
      });

      return response;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create DAO";
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

export function useDeleteDao() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      await mcpClient.deleteDocument(id);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete DAO";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}

export function useUpdateDao() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (id: string, data: { name?: string; description?: string }) => {
    setLoading(true);
    setError(null);

    try {
      await mcpClient.updateDocument(id, data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to update DAO";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}
