import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Component as UnicornScene } from "@/components/ui/open-ai-codex-animated-background"
import { Globe } from "@/components/ui/globe"

export default function CraftAndScaleSection() {

  return (
    <section id="craft-and-scale" className="relative mx-auto my-20 max-w-6xl px-4 md:my-28">
      <div className="relative overflow-hidden rounded-2xl border bg-background/60 p-6 shadow-sm backdrop-blur md:p-10">
        {/* soft brand glow */}
        <div
          className="pointer-events-none absolute -inset-40 -z-10 opacity-40 blur-3xl"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(600px circle at 15% 25%, rgba(138,43,226,0.20), transparent 60%), radial-gradient(600px circle at 85% 70%, rgba(91,108,255,0.18), transparent 60%)",
          }}
        />
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Craft & <span className="text-deep-purple">Scale</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-deep-purple rounded-full" />
          <p className="mt-4 text-lg text-muted-foreground">Engineering that feels effortless — and scales anywhere.</p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT — SEAMLESS OPERATIONS */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold md:text-3xl">
                Seamless Operations
              </h3>
              <p className="mt-3 text-muted-foreground">
                We handle the technical side so your brand can flourish.
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-deep-purple to-electric-blue" />
                  <span className="text-muted-foreground">Automated workflows that cut admin time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-deep-purple to-electric-blue" />
                  <span className="text-muted-foreground">Reliable performance with minimal downtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-deep-purple to-electric-blue" />
                  <span className="text-muted-foreground">Solutions tailored to your industry</span>
                </li>
              </ul>
            </div>

            <div className="relative mt-6 flex h-[250px] md:h-[400px] items-center justify-center overflow-hidden rounded-xl border bg-background">
              <UnicornScene />
            </div>
          </div>

          {/* RIGHT — GLOBAL BY DEFAULT */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold md:text-3xl">Global by Default</h3>
              <p className="mt-3 text-muted-foreground">
                From Manchester to the world — CORTEK scales with you.
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-deep-purple to-electric-blue" />
                  <span className="text-muted-foreground">Always available — 99.9% uptime for peace of mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-deep-purple to-electric-blue" />
                  <span className="text-muted-foreground">Fast and seamless, wherever your customers are</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-deep-purple to-electric-blue" />
                  <span className="text-muted-foreground">Data hosted securely in the UK/EU</span>
                </li>
              </ul>
            </div>

            <div className="relative mt-6 flex h-[250px] md:h-[400px] items-center justify-center overflow-hidden rounded-xl border bg-background">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
