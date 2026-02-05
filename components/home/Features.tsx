import { Container } from "@/components/common/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Document Models",
    description:
      "Define flexible document structures with custom schemas and operations.",
    icon: "📋",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team on documents with real-time updates.",
    icon: "👥",
  },
  {
    title: "Custom Editors",
    description: "Create tailored editors for your specific document types.",
    icon: "✏️",
  },
  {
    title: "Version Control",
    description:
      "Track all changes with complete version history and rollback capabilities.",
    icon: "📊",
  },
  {
    title: "Type-Safe Operations",
    description: "Use GraphQL schemas for type-safe document operations.",
    icon: "🔒",
  },
  {
    title: "Developer Friendly",
    description:
      "Built with TypeScript and React for a great developer experience.",
    icon: "⚡",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-slate-900/50">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-slate-50">
            Powerful Features
          </h2>
          <p className="mt-4 text-slate-400">
            Everything you need to build and manage documents at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
