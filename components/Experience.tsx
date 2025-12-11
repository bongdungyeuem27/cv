"use client";

import { Section } from "@/components/ui/Section";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ReactNode } from "react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description?: (string | ReactNode)[];
  highlight?: string | ReactNode;
  details?: {
    title: string;
    items: (string | ReactNode)[];
  }[];
  tech?: string[];
  link?: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Full-stack & Blockchain Developer",
    company: "Cavies Lab",
    period: "Feb 2024 – Oct 2025",
    location: "Remote",
    highlight: (
      <span>
        Key Project: Sei Blockchain Explorer (Seitrace) — <a href="https://seitrace.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://seitrace.com</a>
        <br/>
        <span className="block mt-2 text-muted-foreground">
          Lead full-stack engineer responsible for architecting, building, and scaling Seitrace, the official block explorer for Sei Network, supporting both EVM and Cosmos environments. Built the platform from the ground up with a strong focus on performance, security, and developer experience.
        </span>
      </span>
    ),
    details: [
      {
        title: "Platform Architecture & Performance",
        items: [
          "Designed and developed the entire Seitrace web platform from scratch using Next.js, Bun.js, React 19, Wagmi, Viem, and a fully custom UI component system.",
          "Engineered high-performance UI components with advanced techniques (Proxy patterns, event delegation, dynamic rendering, caching).",
          "Achieved 3 million requests/second throughput under load-testing with zero latency degradation.",
          "Migrated the whole platform from Node.js → Bun.js to significantly improve server performance and startup times.",
          "Customized Webpack/Rspack modules for automated file-path injection, enabling full automation testing."
        ]
      },
      {
        title: "Frontend Engineering",
        items: [
          "Built >100 custom reusable UI components with clean code, strict typing, and full cross-platform responsiveness (mobile & desktop).",
          "Implemented per-page SEO optimization compliant with Google Search Console guidelines.",
          "Wrote extensive Playwright component tests and unit tests for complex data-processing functions.",
          "Customized react-chartjs-2, implemented interactive blockchain charts, price trends, NFT metrics.",
          "Delivered pixel-perfect UI from Figma with high accuracy and performance."
        ]
      },
      {
        title: "Backend Engineering & Indexing",
        items: [
          "Built backend services using NestJS, GraphQL, Hasura, Redis, TypeORM, Drizzle.",
          "Implemented scalable blockchain indexing pipelines, optimized Postgres queries, and background workers.",
          "Integrated automatic NFT & token pricing via multi-source aggregation (oracles, APIs, market feeds).",
          "Implemented authentication, role-based access control, and asset-license management for Seitrace Logo system."
        ]
      },
      {
        title: "Blockchain Development",
        items: [
          "Wrote and customized Solidity ERC-20 / ERC-721 contracts for internal tools and partner integrations.",
          "Built advanced wallet-interaction tools: signing, transaction builder, token/NFT reader, marketplace utilities.",
          "Implemented large-scale Airdrop systems for millions of users using OpenZeppelin Merkle Tree, advanced cryptography, and WASM-based anti-bot algorithms to detect abnormal claim patterns.",
          "Able to read and understand Cosmos SDK modules to support Sei-specific transaction parsing and features."
        ]
      },
      {
        title: "AI & MCP Integration",
        items: [
          "Built an AI-powered chatbot using ai-sdk, integrating OpenAI & Gemini models.",
          "Developed a full MCP (Model Context Protocol) server, enabling partners to interact with Seitrace APIs through AI tools."
        ]
      },
      {
        title: "Security & DevOps",
        items: [
          "Experienced with Cloudflare security stack: DNS, Workers, Argo Tunnel, Turnstile, bot protection patterns.",
          "Configured Nginx for load balancing, reverse proxy, and gateway for multi-service server infrastructure.",
          "Implemented Sentry monitoring for FE/BE error tracking and performance analytics.",
          "Managed CI/CD pipelines with Docker, GitHub Actions, Caddy, and multi-environment deployments.",
          "Strong proficiency in Linux environments and command-line tooling."
        ]
      },
      {
        title: "Additional Project: BOB Airdrop Claim Platform",
        items: [
          "Built the production airdrop claim platform for BOB Network (The Gateway to Bitcoin DeFi), handling eligibility checks, Merkle-proof claims, and bot-resistant client-side cryptography.",
          "Implemented a custom Reown/AppKit connector restricted to OKX Wallet for secure user authentication.",
          "Used OpenZeppelin Merkle Proof to verify on-chain eligibility during airdrop claims.",
          "Added WASM-based encryption with per-session random SEED to protect Merkle proofs and prevent automated bot claims.",
          <span key="bob-link">
            Main link: <a href="https://claimhq.xyz/bob" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://claimhq.xyz/bob</a>
          </span>
        ]
      }
    ],
    tech: [
      "React 19", "Next.js", "Bun.js", "Zod", "Zustand", "Wagmi", "Viem", "TanStack Query",
      "NestJS", "GraphQL", "Hasura", "Redis", "Postgres", "Drizzle",
      "Solidity", "Cosmos SDK", "Docker", "Cloudflare", "Playwright", "AI SDK",
      "Reown/AppKit", "OKX Wallet", "Merkle Proof", "WASM"
    ],
    link: "https://seitrace.com"
  },

  {
    role: "Full-stack Developer",
    company: "Mayfest (Freelance)",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    highlight: "Project: High-traffic Event Ticketing Platform",
    description: [
      "Engineered a high-concurrency ticketing platform capable of handling tens of thousands of simultaneous users, ensuring system stability during peak sale windows.",
      "Eliminated double-booking and race conditions by designing a seat-locking + transactional reservation mechanism that protects against overlapping purchases when multiple users select the same seat.",
      "Implemented a dynamic queueing system that activates during heavy traffic, enabling fair, ordered access and preventing server overload under extreme peak demand.",
      "Reduced payment failure rates by ~40% through robust integration with VNPay and Xendit, including retry logic, idempotent payment handlers, and reconciliation workflows.",
      "Developed secure event check-in flow using digitally signed QR codes with cryptographic verification to prevent forgery, duplication, and unauthorized entry.",
      "Built asynchronous order & payment pipelines using RabbitMQ, enabling parallel queue processing, scalable payment handling, and fast order confirmation.",
      "Automated PDF ticket generation with brand-consistent templates and email dispatch for purchase receipts, group orders, and event reminders.",
      "Improved backend throughput by 3× by optimizing NestJS services, database indexes, and Drizzle-based query paths for real-time seat availability.",
      "Enhanced platform reliability through Sentry monitoring, structured logging, failure-alert systems, and graceful degradation strategies.",
      "Delivered responsive, mobile-first UI using Next.js and modern React patterns, ensuring seamless user experience from seat selection to checkout."
    ],
    tech: ["Next.js", "React 19", "NestJS", "Postgres", "Drizzle ORM", "RabbitMQ", "VNPay", "Xendit", "Sentry", "Docker"]
  },
  {
    role: "Full-stack Developer",
    company: "Nhà Hàng Hoà Tuyến (Freelance)",
    period: "Sept 2025 – Oct 2025",
    location: "",
    description: [
      "Built marketing landing page for restaurant brand using Next.js.",
      <span key="link">
        Site: <a href="https://nhahanghoatuyen.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://nhahanghoatuyen.com</a>
      </span>
    ],
    tech: ["Next.js"],
    link: "https://nhahanghoatuyen.com"
  },
  {
    role: "Full-stack Developer",
    company: "Buymed",
    period: "Aug 2023 – Jan 2024",
    location: "Ho Chi Minh City",
    highlight: (
      <span>
        Project: CSM System for Pharmacy Network Operations — <a href="https://thuocsi.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://thuocsi.com</a>
      </span>
    ),
    description: [
      "Architected and implemented a full CSM (Customer/Clinic/Store Management) system managing the operational workflow of a nationwide pharmacy network, covering procurement, warehousing, transportation, and retail sale processes.",
      "Designed the end-to-end pharmaceutical order lifecycle, enabling seamless processing from: (1) Creating drug intake documents → (2) Approval flow with signatures & validations → (3) Import request verification → (4) Warehouse receiving & internal movement → (5) Inter-warehouse transportation → (6) Delivery to pharmacy → (7) Final confirmation & audit logging.",
      "Reduced approval time by ~35% by building digital workflows with role-based access control, hierarchical authorization, and digital signatures for critical documents.",
      "Implemented scheduling & automated reminders, ensuring teams never missed warehouse deadlines, transport windows, or approval cycles, improving operational compliance across departments.",
      "Built robust tracking modules for: Order progress & shipment stages, Department responsibilities & handover checkpoints, Historical document storage, retrieval, and timestamped activity logs.",
      "Enhanced UI performance by 40% using SolidJS’s fine-grained reactivity model, reducing bundle size and improving rendering speed for large datasets and multi-step forms.",
      "Developed shared UI components and internal tooling that were later adopted across multiple internal Buymed platforms, increasing development speed for other teams.",
      "Collaborated with DevOps team to deploy Golang microservices to Kubernetes, ensuring zero-downtime rollouts, improved scalability, and better observability across environments.",
      "Optimized backend throughput by designing efficient Golang service handlers and MongoDB query strategies for high-volume pharmaceutical order data."
    ],
    tech: ["SolidJS", "Next.js", "Golang", "Kubernetes", "MongoDB", "Docker", "RBAC", "Digital Signature Workflows"]
  },
  {
    role: "Full-stack Developer",
    company: "Otoman (Freelance)",
    period: "Jan 2022 – Jul 2024",
    location: "",
    description: [
      "Built a cross-platform mobile app using React Native and Node.js, handling both frontend UI and backend APIs.",
      "Integrated payment flows and user management modules.",
      "Built website using Nuxt.",
      <span key="link">
        Site: <a href="https://otoman.net" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://otoman.net</a>
      </span>
    ],
    tech: ["React Native", "Node.js", "Nuxt"],
    link: "https://otoman.net"
  }
];

export function Experience() {
  return (
    <Section className="max-w-5xl mx-auto px-4">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
          <Briefcase className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Professional Experience </h2>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-black" />
            
            <div className="glass-card p-6 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-lg text-purple-500 dark:text-purple-400 font-medium">{exp.company}</div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {exp.highlight && (
                <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20 text-primary text-sm">
                  {exp.highlight}
                </div>
              )}

              <div className="space-y-4 text-muted">
                {exp.description && (
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {exp.details && (
                  <div className="space-y-4 mt-4">
                    {exp.details.map((detail, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-foreground mb-2">{detail.title}:</h4>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          {detail.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {exp.tech && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-foreground border border-foreground/10">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
