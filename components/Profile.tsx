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
        <h2 className="text-3xl font-bold">Profile</h2>
      </div>
      
      <div className="glass-card p-6 md:p-8 rounded-2xl text-lg leading-relaxed text-muted space-y-4 border-l-4 border-primary">
        <p>
          Dynamic and self-driven <span className="text-foreground font-medium">Full-stack Developer</span> with 4+ years of hands-on experience specializing in frontend engineering, high-performance architectures, blockchain integrations, and modern backend development.
        </p>
        <p>
          Strong expertise in <span className="text-primary">Next.js, SolidJS, TypeScript, Bun.js</span>, and production-grade API systems. Experienced in deploying complex applications across multiple environments (Kubernetes, Cloudflare, Nginx, CI/CD).
        </p>
        <p>
          Capable of reading and integrating blockchain protocols (Cosmos SDK, EVM) and building end-to-end features from UI/UX to smart contract interactions. Passionate about delivering secure, scalable, and seamless user experiences.
        </p>
      </div>
    </Section>
  );
}
