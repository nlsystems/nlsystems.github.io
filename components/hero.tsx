import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-32 pb-20">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.28_0.005_260)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.28_0.005_260)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-8 lg:max-w-4xl">
          {/* Terminal-style label */}
          <div className="flex items-center gap-2 border border-border px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse bg-primary" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              AI Data Engineering Consultancy
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Production-Grade{" "}
            <span className="text-primary">AI Data Engineering.</span>
          </h1>

          {/* Sub-headline */}
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            We build deterministic RAG pipelines and automated data extraction
            systems with a focus on privacy, low latency, and data integrity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group gap-2 border-0 bg-primary px-6 font-mono text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <Play className="h-4 w-4" />
              View Technical Demos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group gap-2 border-border px-6 font-mono text-sm uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
            >
              Request Technical Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Stack:
            </span>
            {["Python", "FastAPI", "LlamaIndex", "PostgreSQL", "pgvector"].map(
              (tech) => (
                <span
                  key={tech}
                  className="border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Code Preview Block */}
        <div className="mt-16 overflow-hidden border border-border bg-card lg:max-w-3xl">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-destructive/50" />
            <span className="h-3 w-3 rounded-full bg-chart-4/50" />
            <span className="h-3 w-3 rounded-full bg-primary/50" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">
              rag_pipeline.py
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-muted-foreground"># Initialize RAG pipeline</span>
              {"\n"}
              <span className="text-primary">from</span>{" "}
              <span className="text-foreground">nlsystems.rag</span>{" "}
              <span className="text-primary">import</span>{" "}
              <span className="text-foreground">Pipeline</span>
              {"\n\n"}
              <span className="text-foreground">pipeline</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-foreground">Pipeline(</span>
              {"\n"}
              {"    "}
              <span className="text-chart-2">vector_store</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-chart-4">{'"pgvector"'}</span>
              <span className="text-muted-foreground">,</span>
              {"\n"}
              {"    "}
              <span className="text-chart-2">llm</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-chart-4">{'"llama-3"'}</span>
              <span className="text-muted-foreground">,</span>
              {"\n"}
              {"    "}
              <span className="text-chart-2">privacy_mode</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-primary">True</span>
              {"\n"}
              <span className="text-foreground">)</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
