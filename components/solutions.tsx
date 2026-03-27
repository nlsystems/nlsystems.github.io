import { Database, FileJson, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Database,
    title: "Private RAG Knowledge Bases",
    subtitle: "Context-Aware & Zero Hallucination",
    description:
      "Build production-ready retrieval-augmented generation systems with PostgreSQL/pgvector, FastAPI, and LlamaIndex. Our pipelines ensure accurate, context-aware responses with built-in hallucination prevention.",
    stack: ["PostgreSQL", "pgvector", "FastAPI", "LlamaIndex"],
    features: [
      "Vector similarity search",
      "Hybrid retrieval strategies",
      "Citation tracking",
      "Confidence scoring",
    ],
  },
  {
    icon: FileJson,
    title: "Intelligent Data Pipelines",
    subtitle: "Deterministic Schema Enforcement",
    description:
      "Transform unstructured documents into validated JSON with Pydantic schemas and LLM-powered extraction. Every output is type-safe, validated, and production-ready.",
    stack: ["Pydantic", "LLM Extraction", "Schema Validation", "ETL"],
    features: [
      "Type-safe outputs",
      "Custom schema definitions",
      "Multi-format support",
      "Batch processing",
    ],
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">
            // Solutions
          </span>
          <h2 className="max-w-xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Enterprise-Grade AI Infrastructure
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Purpose-built systems for data extraction, knowledge retrieval, and
            AI-powered automation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group flex flex-col border border-border bg-card transition-colors hover:border-primary/50"
            >
              {/* Card Header */}
              <div className="flex flex-col gap-4 border-b border-border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary bg-primary/10 text-primary">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <span className="border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-xs uppercase tracking-wider text-primary">
                    {solution.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  {solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 border-b border-border p-6">
                {solution.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features List */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                {solution.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="h-1 w-1 bg-primary" />
                    <span className="font-mono text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="border-t border-border p-6">
                <Button
                  variant="ghost"
                  className="group/btn gap-2 p-0 font-mono text-sm uppercase tracking-wider text-primary hover:bg-transparent hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
