import Link from "next/link";
import { Container } from "@/components/common/Container";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950 py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-emerald-400">Vetra</div>
          </Link>

          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-slate-300 hover:text-slate-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/daos"
              className="text-sm text-slate-300 hover:text-slate-50 transition-colors"
            >
              DAOs
            </Link>
            <Link
              href="/proposals"
              className="text-sm text-slate-300 hover:text-slate-50 transition-colors"
            >
              Proposals
            </Link>
            <Link
              href="/tasks"
              className="text-sm text-slate-300 hover:text-slate-50 transition-colors"
            >
              Tasks
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
