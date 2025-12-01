"use client";

import { Section } from "@/components/ui/Section";
import { User } from "lucide-react";

export function Profile() {
  return (
    <Section id="profile" className="max-w-4xl mx-auto px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
          <User className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Professional Summary</h2>
      </div>
      
      <div className="glass-card p-6 md:p-8 rounded-2xl text-lg leading-relaxed text-muted space-y-4 border-l-4 border-primary">
        <p>
          Highly driven <span className="text-foreground font-medium">Full-stack Developer</span> with 4+ years of experience building high-performance web platforms, scalable backend systems, and production-ready blockchain integrations. Known for architecting complex systems that handle millions of requests per second, delivering pixel-accurate interfaces, and solving concurrency problems under extreme traffic.
        </p>
        <p>
          Specializes in modern <span className="text-primary">TypeScript ecosystems, Next.js/SolidJS, Bun.js</span>, and secure API infrastructures, with proven ability to ship end-to-end features—from UX and state management to distributed services, cryptographic workflows, and smart-contract interaction.
        </p>
        <p>
          Combines strong system thinking with fast problem-solving: able to read blockchain protocols (Cosmos SDK, EVM), optimize databases, design robust queueing/payment pipelines, and deploy applications across Cloudflare, Kubernetes, and Nginx with CI/CD automation. Passionate about reliability, performance, and building products that scale.
        </p>
      </div>
    </Section>
  );
}
