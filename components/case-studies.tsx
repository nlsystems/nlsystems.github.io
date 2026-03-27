import { TrendingUp, Clock, Target, CheckCircle } from "lucide-react"

const metrics = [
  {
    icon: Clock,
    value: "85%",
    label: "Reduction in Processing Time",
    description: "Automated document extraction pipeline for legal firm",
  },
  {
    icon: Target,
    value: "99.2%",
    label: "Extraction Accuracy",
    description: "Financial data extraction from unstructured reports",
  },
  {
    icon: TrendingUp,
    value: "10x",
    label: "Query Throughput",
    description: "RAG system optimization for enterprise knowledge base",
  },
  {
    icon: CheckCircle,
    value: "Zero",
    label: "Data Breaches",
    description: "On-premise deployment with full PII compliance",
  },
]

export function CaseStudies() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">
            // Evidence
          </span>
          <h2 className="max-w-xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Measurable Results
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Real-world impact from production deployments across industries.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group flex flex-col border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-primary/30 text-primary transition-colors group-hover:border-primary group-hover:bg-primary/10">
                <metric.icon className="h-5 w-5" />
              </div>
              <span className="mb-2 font-mono text-4xl font-medium text-primary">
                {metric.value}
              </span>
              <span className="mb-3 font-mono text-sm font-medium uppercase tracking-wider text-foreground">
                {metric.label}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Industries */}
        <div className="mt-16 border border-border bg-card p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                Industries Served
              </span>
              <p className="text-sm text-muted-foreground">
                Delivering AI solutions across regulated sectors
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Legal", "Finance", "Healthcare", "Insurance", "Manufacturing"].map(
                (industry) => (
                  <span
                    key={industry}
                    className="border border-border bg-secondary px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    {industry}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
