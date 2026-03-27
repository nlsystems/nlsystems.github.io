import { Database, Cpu, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "Scalable data pipelines built for enterprise workloads",
  },
  {
    icon: Cpu,
    title: "Neural Intelligence",
    description: "LLM-powered systems with deterministic outputs",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "On-premise and local LLM hosting options",
  },
  {
    icon: Zap,
    title: "Low Latency",
    description: "Optimized for real-time inference and retrieval",
  },
]

export function Overview() {
  return (
    <section id="overview" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              // Overview
            </span>
            <h2 className="max-w-xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Bridging the Gap: Raw Data to Neural Intelligence.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              At NL Systems, we build scalable data infrastructure that
              transforms unstructured information into validated, queryable
              assets. We don&apos;t build &quot;chatbots&quot;; we build validated assets.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-card"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:border-primary group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-mono text-sm font-medium uppercase tracking-wider text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          <div className="flex flex-col gap-2 bg-background p-6">
            <span className="font-mono text-3xl font-medium text-primary md:text-4xl">
              99.2%
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Extraction Accuracy
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-background p-6">
            <span className="font-mono text-3xl font-medium text-primary md:text-4xl">
              {"<"}50ms
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Query Latency
            </span>
          </div>
          <div className="flex flex-col gap-2 bg-background p-6">
            <span className="font-mono text-3xl font-medium text-primary md:text-4xl">
              100%
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Data Privacy
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
