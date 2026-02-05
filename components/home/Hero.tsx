import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/common/Container";

export function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-slate-50 sm:text-6xl">
            Manage your documents with{" "}
            <span className="text-emerald-400">Vetra</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            A powerful document management system built on the Powerhouse
            ecosystem. Create, organize, and collaborate on DAOs, proposals, and
            tasks.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/daos">
              <Button size="lg">Get Started</Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
