import { Container } from "@/components/common/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Create Document Models",
    description:
      "Define your document structure with GraphQL schemas and operations.",
  },
  {
    number: "02",
    title: "Build Custom Editors",
    description: "Create React-based editors tailored to your document types.",
  },
  {
    number: "03",
    title: "Manage Documents",
    description:
      "Create, edit, and organize document instances with full version tracking.",
  },
  {
    number: "04",
    title: "Collaborate",
    description: "Share documents and collaborate in real-time with your team.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-slate-50">How It Works</h2>
          <p className="mt-4 text-slate-400">
            A simple workflow to get you up and running with Vetra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-5xl font-bold text-emerald-400/20">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
