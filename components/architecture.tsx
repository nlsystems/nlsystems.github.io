import { Shield, Server, Lock, FileCheck } from "lucide-react"

const complianceItems = [
  {
    icon: Shield,
    title: "GDPR/CCPA Ready",
    description: "Full compliance with international data protection regulations",
  },
  {
    icon: Server,
    title: "Local LLM Hosting",
    description: "On-premise deployment with Llama 3, Mistral, and other open models",
  },
  {
    icon: Lock,
    title: "PII Scrubbing",
    description: "Automated detection and removal of personally identifiable information",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Complete traceability of all data processing operations",
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">
            // Architecture
          </span>
          <h2 className="max-w-xl text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Built for Enterprise Security
          </h2>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="mb-16 border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              System Architecture
            </span>
          </div>
          <div className="relative flex min-h-[400px] flex-col items-center justify-center gap-8 p-8">
            {/* Simple Architecture Visualization */}
            <div className="grid w-full max-w-3xl gap-4 md:grid-cols-3">
              {/* Data Sources */}
              <div className="flex flex-col gap-2 border border-border p-4">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  Data Sources
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    Documents
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    APIs
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Databases
                  </span>
                </div>
              </div>

              {/* Processing Layer */}
              <div className="flex flex-col gap-2 border border-primary bg-primary/5 p-4">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  NL Systems Core
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    ETL Pipeline
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Vector Store
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    LLM Layer
                  </span>
                </div>
              </div>

              {/* Output */}
              <div className="flex flex-col gap-2 border border-border p-4">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  Outputs
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    Structured JSON
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    RAG Responses
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Flow Arrows */}
            <div className="hidden items-center gap-2 md:flex">
              <span className="h-px w-12 bg-border" />
              <span className="font-mono text-xs text-muted-foreground">
                Secure Data Flow
              </span>
              <span className="h-px w-12 bg-border" />
            </div>
          </div>
        </div>

        {/* Compliance & Privacy Section */}
        <div className="flex flex-col gap-8">
          <h3 className="font-mono text-lg font-medium text-foreground">
            Compliance & Privacy
          </h3>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {complianceItems.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-card"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-primary/30 text-primary transition-colors group-hover:border-primary group-hover:bg-primary/10">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-mono text-sm font-medium uppercase tracking-wider text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
