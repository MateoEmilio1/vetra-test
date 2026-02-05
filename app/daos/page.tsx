"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/common/Container";
import { DaoCreateForm } from "@/components/dao/DaoCreateForm";
import { DaoList } from "@/components/dao/DaoList";

export default function DaosPage() {
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
            DAOs
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Create and manage your DAOs with Vetra. Each DAO serves as a
            container for proposals and tasks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DaoCreateForm onCreated={handleReload} />
          <DaoList key={refreshKey} />
        </div>
      </Container>
    </div>
  );
}
