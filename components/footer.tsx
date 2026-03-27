import Link from "next/link"
import { Github, Mail, Linkedin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/nlsystems",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/nlsystems",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact@nlsystems.io",
    label: "Email",
  },
]

const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Contact CTA */}
        <div className="mb-16 border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                // Let&apos;s Talk
              </span>
              <h3 className="text-2xl font-medium text-foreground md:text-3xl">
                Ready to Build Production AI?
              </h3>
              <p className="max-w-md text-muted-foreground">
                Available for international contract-based projects in the USA,
                EU, AU, and CA.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 border-0 bg-primary px-6 font-mono text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="mailto:contact@nlsystems.io">
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-border px-6 font-mono text-sm uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
                asChild
              >
                <a
                  href="https://github.com/nlsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center border border-primary">
                <span className="font-mono text-sm font-bold text-primary">
                  NL
                </span>
              </div>
              <span className="font-mono text-sm font-medium tracking-tight text-foreground">
                NL Systems
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Production-grade AI data engineering for enterprise applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Availability
            </span>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                USA, EU, AU, CA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse bg-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                Open for contracts
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NL Systems. All rights reserved.
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Built with precision for production environments.
          </span>
        </div>
      </div>
    </footer>
  )
}
