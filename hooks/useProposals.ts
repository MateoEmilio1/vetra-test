"use client";

import { useEffect, useState } from "react";
import { mcpClient, type Document } from "@/services/mcpClient";

interface Proposal extends Document {
  id: string;
  title: string;
  description?: string;
  status?: string;
}

export function useProposals() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProposals = async () => {
    setLoading(true);
    setError(null);

    try {
      const documents = await mcpClient.getDocuments("vetra-drive");
      const proposalDocuments = documents.filter(
        (d) => d.type === "proposal"
      ) as Proposal[];
      setProposals(proposalDocuments);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch proposals",
      );
      setProposals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  return {
    proposals,
    loading,
    error,
    refetch: fetchProposals,
  };
}

export function useCreateProposal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (data: { title: string; description?: string }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await mcpClient.createDocument("vetra-drive", {
        name: data.title,
        description: data.description,
        type: "proposal",
      });

      return response;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create proposal";
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
