
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CV - Le Khanh",
  description: "Curriculum Vitae of Le Khanh, Senior Frontend / Full-stack Developer",
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-2 border-black">
          {/* Avatar */}
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black">
              <Image 
                src="/profile.jpg" 
                alt="Le Khanh" 
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">LE KHANH</h1>
          <p className="text-lg mb-4">Senior Frontend / Full-stack Developer</p>
          <div className="text-sm space-y-1">
            <p>Tam Binh Ward (Thu Duc), Ho Chi Minh City, Vietnam</p>
            <p>+84 91 463 0145 | khanhlemaiduy123@gmail.com | DOB: 2001</p>
            <p>
              <a href="https://github.com/bongdungyeuem27" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
              {" | "}
              <a href="https://www.linkedin.com/in/khanhlemaiduy123" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
            </p>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Profile
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Dynamic and self-driven <strong>Full-stack Developer</strong> with 4+ years of hands-on experience specializing in frontend engineering, high-performance architectures, blockchain integrations, and modern backend development.
            </p>
            <p>
              Strong expertise in <strong>Next.js, SolidJS, TypeScript, Bun.js</strong>, and production-grade API systems. Experienced in deploying complex applications across multiple environments (Kubernetes, Cloudflare, Nginx, CI/CD).
            </p>
            <p>
              Capable of reading and integrating blockchain protocols (Cosmos SDK, EVM) and building end-to-end features from UI/UX to smart contract interactions. Passionate about delivering secure, scalable, and seamless user experiences.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">University of Information Technology (UIT) – Vietnam National University</h3>
              <div className="mt-2 space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Bachelor of Information System</p>
                  <p className="italic">GPA: 8.22/10</p>
                  <ul className="list-disc list-inside mt-1 ml-2">
                    <li>Published 2 scientific papers.</li>
                    <li>Built department landing website using Nuxt.js: <a href="https://ftisu.vn" target="_blank" rel="noopener noreferrer" className="underline">https://ftisu.vn</a></li>
                    <li>Built blockchain dapps</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Master of Information System</p>
                  <p className="italic">In Progress, Expected graduation: 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employment History */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Employment History
          </h2>
          <div className="space-y-6 divide-y divide-gray-300">
             {/* Cavies Lab */}
            <div className="pt-0 first:pt-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack & Blockchain Developer — Cavies Lab</h3>
                <span className="text-sm italic">Feb 2024 – Oct 2025 | Remote</span>
              </div>
              <p className="text-sm mt-1"><strong>Project highlight:</strong> Sei Blockchain Explorer – <a href="https://seitrace.com" target="_blank" rel="noopener noreferrer" className="underline">https://seitrace.com</a></p>
              <div className="mt-2 space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Frontend (Lead Developer):</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Built entire FE architecture using Next.js, Bun.js, Wagmi, Viem, Chakra-UI, TailwindCSS, custom Webpack modules.</li>
                    <li>Implemented real-time data with WebSockets, integrated Sentry monitoring, Playwright testing.</li>
                    <li>Migrated from Next.js Pages → App Router and implemented full custom SEO per-page.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Backend:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Developed backend services with NestJS, Postgres, TypeORM, Ethereum utils (Ethers.js).</li>
                    <li>Designed scalable indexing services and optimized DB queries.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Blockchain:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Read and understood Cosmos SDK module logic for Sei Network.</li>
                    <li>Wrote and customized Solidity ERC-20/721 contracts.</li>
                    <li>Built Airdrop tools using OpenZeppelin Merkle Tree, cryptography + WASM anti-bot system.</li>
                    <li>Built a lot of tools interact with wallets, tokens, NFTs, marketplaces, earnings, airdrops, ...</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">AI Integration:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Built Chatgpt with AI SDK tools and OpenAI provider.</li>
                    <li>Built MCP server for partners to interact with Seitrace APIs, Chatbot.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">DevOps & Security:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Managed deployments via Caddy, Nginx, Cloudflare DNS, Workers, Tunnels, GitHub CI/CD.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Nhà Hàng Hoà Tuyến */}
            <div className="pt-4 pb-2 mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack Developer — Nhà Hàng Hoà Tuyến (Freelance)</h3>
                <span className="text-sm italic">Sept 2025 – Oct 2025</span>
              </div>
              <ul className="list-disc list-inside mt-1 text-sm ml-2">
                <li>Built marketing landing page for restaurant brand using Next.js.</li>
                <li>Site: <a href="https://nhahanghoatuyen.com" target="_blank" rel="noopener noreferrer" className="underline">https://nhahanghoatuyen.com</a></li>
              </ul>
              <p className="text-sm mt-1"><strong>Tech Stack:</strong> Next.js</p>
            </div>

            {/* Mayfest */}
            <div className="pt-4 pb-2 mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack Developer — Mayfest (Freelance)</h3>
                <span className="text-sm italic">May 2025 – Aug 2025</span>
              </div>
              <ul className="list-disc list-inside mt-1 text-sm ml-2">
                <li>Built a ticket-sale platform handling peak-load purchases from thousands of users.</li>
                <li>Implemented secure checkout with VNPay and Xendit payment gateways.</li>
              </ul>
              <p className="text-sm mt-1"><strong>Tech Stack:</strong> Next.js, NestJS, Postgres, Drizzle</p>
            </div>

           

            {/* Buymed */}
            <div className="pt-4 pb-2 mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack Developer — Buymed</h3>
                <span className="text-sm italic">Aug 2023 – Jan 2024 | Ho Chi Minh</span>
              </div>
              <ul className="list-disc list-inside mt-1 text-sm ml-2">
                <li>Developed a new internal project using SolidJS for the frontend and Golang microservices for backend.</li>
                <li>Worked closely with devops team to deploy microservices to Kubernetes.</li>
                <li>Improved frontend performance and reduced bundle size by adopting SolidJS's fine-grained reactivity.</li>
                <li>Contributed to shared UI components and internal tooling.</li>
              </ul>
              <p className="text-sm mt-1"><strong>Tech Stack:</strong> SolidJS, Next.js, Golang, Kubernetes, MongoDB</p>
            </div>

            {/* Otoman */}
            <div className="pt-4 pb-2 mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack Developer — Otoman (Freelance)</h3>
                <span className="text-sm italic">Jan 2022 – Jul 2024</span>
              </div>
              <ul className="list-disc list-inside mt-1 text-sm ml-2">
                <li>Built a cross-platform mobile app using React Native and Node.js, handling both frontend UI and backend APIs.</li>
                <li>Integrated payment flows and user management modules.</li>
                <li>Built website using Nuxt.</li>
              </ul>
              <p className="text-sm mt-1"><strong>Tech Stack:</strong> React Native, Node.js, Nuxt</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Technical Skills
          </h2>
          <div className="space-y-2 text-sm">
            <div>
              <p><strong>Frontend (Expert):</strong> Next.js, SolidJS, React, TypeScript, Bun.js, Rspack, TailwindCSS, ChakraUI, UI libraries, SSR/ISR, SEO</p>
            </div>
            <div>
              <p><strong>Backend (Mid-level):</strong> NestJS, Node.js, Golang, REST APIs, microservices, performance optimization</p>
            </div>
            <div>
              <p><strong>Blockchain (Junior–Mid):</strong> Solidity (ERC-20/721), OpenZeppelin, Cosmos SDK fundamentals, Wallet integrations (Wagmi, Viem, Reown/AppKit)</p>
            </div>
            <div>
              <p><strong>Database (Junior):</strong> PostgreSQL, MongoDB, Redis, TypeORM, Drizzle, Indexing, query optimization, Insert, copy, processing, manage billions row of data</p>
            </div>
            <div>
              <p><strong>DevOps & Infra:</strong> Nginx, Caddy, Cloudflare Worker/Tunnel/DNS, GitHub Actions CI/CD, Docker, Kubernetes (basic)</p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Languages
          </h2>
          <div className="text-sm">
            <p><strong>English:</strong> Good working proficiency</p>
            <p><strong>Vietnamese:</strong> Native</p>
          </div>
        </section>
      </div>
    </main>
  );
}
