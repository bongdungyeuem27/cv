"use client";

import { Section } from "@/components/ui/Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section className="max-w-4xl mx-auto px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Education</h2>
      </div>

      <div className="grid gap-6">
        <div className="glass-card p-6 rounded-xl border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-2">University of Information Technology (UIT) – Vietnam National University</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-green-500">Bachelor of Information System</h4>
            <p className="text-muted">GPA: 8.22/10</p>
          </div>

          <ul className="list-disc list-inside text-muted space-y-2 mb-6">
            <li>Published 2 scientific papers.</li>
            <li>Built department landing website using Nuxt.js: <a href="https://ftisu.vn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ftisu.vn</a></li>
            <li>Built blockchain dapps</li>
          </ul>

          <div className="pt-4 border-t border-foreground/10">
            <h4 className="text-lg font-semibold text-green-500">Master of Information System</h4>
            <p className="text-muted">In Progress, Expected graduation: 2026</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
