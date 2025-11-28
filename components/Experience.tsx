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
    items: string[];
  }[];
  tech?: string[];
  link?: string;
};

const experiences: ExperienceItem[] = [
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
    company: "Mayfest (Freelance)",
    period: "May 2025 – Aug 2025",
    location: "",
    description: [
      "Built a ticket-sale platform handling peak-load purchases from thousands of users.",
      "Implemented secure checkout with VNPay and Xendit payment gateways."
    ],
    tech: ["Next.js", "NestJS", "Postgres", "Drizzle"]
  },
  {
    role: "Full-stack & Blockchain Developer",
    company: "Cavies Lab",
    period: "Feb 2024 – Oct 2025",
    location: "Remote",
    highlight: (
      <span>
        Project highlight: Sei Blockchain Explorer – <a href="https://seitrace.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://seitrace.com</a>
      </span>
    ),
    details: [
      {
        title: "Frontend (Lead Developer)",
        items: [
          "Built entire FE architecture using Next.js, Bun.js, Wagmi, Viem, Chakra-UI, TailwindCSS, custom Webpack modules.",
          "Implemented real-time data with WebSockets, integrated Sentry monitoring, Playwright testing.",
          "Migrated from Next.js Pages → App Router and implemented full custom SEO per-page."
        ]
      },
      {
        title: "Backend",
        items: [
          "Developed backend services with NestJS, Postgres, TypeORM, Ethereum utils (Ethers.js).",
          "Designed scalable indexing services and optimized DB queries."
        ]
      },
      {
        title: "Blockchain",
        items: [
          "Read and understood Cosmos SDK module logic for Sei Network.",
          "Wrote and customized Solidity ERC-20/721 contracts.",
          "Built Airdrop tools using OpenZeppelin Merkle Tree, cryptography + WASM anti-bot system.",
          "Built a lot of tools interact with wallets, tokens, NFTs, marketplaces, earnings, airdrops, ..."
        ]
      },
      {
        title: "AI Integration",
        items: [
          "Built Chatgpt with AI SDK tools and OpenAI provider.",
          "Built MCP server for partners to interact with Seitrace APIs, Chatbot."
        ]
      },
      {
        title: "DevOps & Security",
        items: [
          "Managed deployments via Caddy, Nginx, Cloudflare DNS, Workers, Tunnels, GitHub CI/CD."
        ]
      }
    ],
    link: "https://seitrace.com"
  },
  {
    role: "Full-stack Developer",
    company: "Buymed",
    period: "Aug 2023 – Jan 2024",
    location: "Ho Chi Minh",
    description: [
      "Developed a new internal project using SolidJS for the frontend and Golang microservices for backend.",
      "Worked closely with devops team to deploy microservices to Kubernetes.",
      "Improved frontend performance and reduced bundle size by adopting SolidJS’s fine-grained reactivity.",
      "Contributed to shared UI components and internal tooling."
    ],
    tech: ["SolidJS", "Next.js", "Golang", "Kubernetes", "MongoDB"]
  },
  {
    role: "Full-stack Developer",
    company: "Otoman (Freelance)",
    period: "Jan 2022 – Jul 2024",
    location: "",
    description: [
      "Built a cross-platform mobile app using React Native and Node.js, handling both frontend UI and backend APIs.",
      "Integrated payment flows and user management modules.",
      "Built website using Nuxt."
    ],
    tech: ["React Native", "Node.js", "Nuxt"]
  }
];

export function Experience() {
  return (
    <Section className="max-w-5xl mx-auto px-4">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
          <Briefcase className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Employment History</h2>
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
