"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProposalItem {
  id: string;
  title: string;
  description?: string;
  status?: string;
}

export function ProposalList() {
  // TODO: Fetch Proposals from reactor-mcp
  const proposals: ProposalItem[] = [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Proposals</CardTitle>
        <CardDescription>View and manage all proposals.</CardDescription>
      </CardHeader>
      <CardContent>
        {proposals.length === 0 ? (
          <div className="flex items-center justify-center py-8 text-slate-400">
            <p>No proposals yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="flex items-start justify-between rounded-lg border border-slate-700 p-4"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-slate-100">
                    {proposal.title}
                  </h3>
                  {proposal.description && (
                    <p className="mt-1 text-sm text-slate-400">
                      {proposal.description}
                    </p>
                  )}
                </div>
                <Badge variant="secondary">{proposal.status || "Open"}</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
