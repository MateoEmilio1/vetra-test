"use client";

import { Container } from "@/components/common/Container";
import { ProposalCreateForm } from "@/components/proposal/ProposalCreateForm";
import { ProposalList } from "@/components/proposal/ProposalList";
import { useState } from "react";

export default function ProposalsPage() {
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  async function handleReload() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setRefreshKey((prev) => prev + 1);
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen flex-col py-8">
      <Container>
        <div className="mb-6 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300/80">
            Vetra · Document Management
          </p>
          <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Proposals
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Create and manage proposals across your DAOs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProposalCreateForm onCreated={handleReload} />
          <ProposalList key={refreshKey} />
        </div>
      </Container>
    </div>
  );
}
