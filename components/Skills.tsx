"use client";

import { Section } from "@/components/ui/Section";
import { Code2, Cpu, Database, Server, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend (Expert)",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "Next.js", "SolidJS", "React", "TypeScript", "Bun.js", "Rspack",
      "TailwindCSS", "ChakraUI", "UI libraries", "SSR/ISR", "SEO"
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "Backend (Mid-level)",
    icon: <Server className="w-5 h-5" />,
    skills: [
      "NestJS", "Node.js", "Golang",
      "REST APIs", "microservices", "performance optimization"
    ],
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    title: "Blockchain (Junior–Mid)",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      "Solidity (ERC-20/721)", "OpenZeppelin",
      "Cosmos SDK fundamentals",
      "Wallet integrations (Wagmi, Viem, Reown/AppKit)"
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    title: "Database (Junior)",
    icon: <Database className="w-5 h-5" />,
    skills: [
      "PostgreSQL", "MongoDB", "Redis", "TypeORM", "Drizzle",
      "Indexing", "query optimization",
      "Insert, copy, processing, manage billions row of data"
    ],
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  },
  {
    title: "DevOps & Infra",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      "Nginx", "Caddy", "Cloudflare Worker/Tunnel/DNS",
      "GitHub Actions CI/CD",
      "Docker", "Kubernetes (basic)"
    ],
    color: "text-red-400",
    bg: "bg-red-500/10"
  }
];

export function Skills() {
  return (
    <Section className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
          <Code2 className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, index) => (
          <div key={index} className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${cat.bg} ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className={`font-bold ${cat.color}`}>{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 text-sm rounded bg-foreground/5 text-muted border border-foreground/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
