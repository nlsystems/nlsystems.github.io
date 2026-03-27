"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#solutions", label: "Solutions" },
  { href: "#architecture", label: "Architecture" },
  { href: "https://github.com/nlsystems", label: "GitHub", external: true },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center border border-primary">
            <span className="font-mono text-sm font-bold text-primary">NL</span>
          </div>
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            NL Systems
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label === "GitHub" && <Github className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label === "GitHub" && <Github className="h-4 w-4" />}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
