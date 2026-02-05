"use client";

import { Container } from "@/components/common/Container";
import { TaskCreateForm } from "@/components/task/TaskCreateForm";
import { TaskList } from "@/components/task/TaskList";
import { useState } from "react";

export default function TasksPage() {
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
            Tasks
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Organize and track tasks for your DAOs and proposals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TaskCreateForm onCreated={handleReload} />
          <TaskList key={refreshKey} />
        </div>
      </Container>
    </div>
  );
}
