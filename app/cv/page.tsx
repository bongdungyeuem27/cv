
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CV - Le Khanh",
  description: "Curriculum Vitae of Le Khanh, Middle Frontend / Full-stack Developer",
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
          <p className="text-lg mb-4">Middle Frontend / Full-stack Developer</p>
          <div className="text-sm space-y-1">
            <p>Tam Binh Ward (Thu Duc), Ho Chi Minh City, Vietnam</p>
            <p>+84 91 463 0145 | khanhlemaiduy123@gmail.com | DOB: 2001</p>
            <p>
              <a href="https://github.com/bongdungyeuem27" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">GitHub</a>
              {" | "}
              <a href="https://www.linkedin.com/in/khanhlemaiduy123" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">LinkedIn</a>
              {" | "}
              <a href="https://khanhle.ftisu.vn/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Portfolio</a>
            </p>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Professional Summary
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Highly driven <strong>Full-stack Developer</strong> with 4+ years of experience building high-performance web platforms, scalable backend systems, and production-ready blockchain integrations. Known for architecting complex systems that handle millions of requests per second, delivering pixel-accurate interfaces, and solving concurrency problems under extreme traffic.
            </p>
            <p>
              Specializes in modern <strong>TypeScript ecosystems, Next.js/SolidJS, Bun.js</strong>, and secure API infrastructures, with proven ability to ship end-to-end features—from UX and state management to distributed services, cryptographic workflows, and smart-contract interaction.
            </p>
            <p>
              Combines strong system thinking with fast problem-solving: able to read blockchain protocols (Cosmos SDK, EVM), optimize databases, design robust queueing/payment pipelines, and deploy applications across Cloudflare, Kubernetes, and Nginx with CI/CD automation. Passionate about reliability, performance, and building products that scale.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Education
          </h2>
          <div className="space-y-4">
            {/* Master's Degree */}
            <div className="pb-4 border-b border-gray-300 mb-4">
              <h3 className="font-bold">University of Information Technology (UIT) – Vietnam National University</h3>
              <div className="mt-1">
                <p className="font-semibold">Master of Information Systems</p>
                <p className="italic text-sm">In Progress, Expected graduation: 2026</p>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="pb-4 border-b border-gray-300 mb-4">
              <h3 className="font-bold">University of Information Technology (UIT) – Vietnam National University</h3>
              <div className="mt-1">
                <p className="font-semibold">Bachelor of Information Systems</p>
                <p className="italic text-sm">GPA: 8.22 / 10</p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-bold mb-2">Academic Achievements & Research:</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>Published 2 peer-reviewed scientific papers in international conferences:</strong>
                  <ul className="list-[circle] list-inside ml-4 mt-1 space-y-1">
                    <li>
                      <span>Using Blockchain and Artificial Intelligence to Build a Job Recommendation System for Students in Information Technology – RIVF 2022</span>
                      <a href="https://ieeexplore.ieee.org/abstract/document/10013916" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline ml-4 truncate">
                        https://ieeexplore.ieee.org/abstract/document/10013916
                      </a>
                    </li>
                    <li>
                      <span>Evaluate the Efficiency of Hybrid Model Based on CNN–LSTM in Information Technology Job Graph Network – FDSE 2023</span>
                      <a href="https://link.springer.com/book/10.1007/978-981-99-8296-7" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline ml-4 truncate">
                        https://link.springer.com/book/10.1007/978-981-99-8296-7
                      </a>
                    </li>
                  </ul>
                </li>
                <li>Eureka Scientific Research Competition — Semi-finalist</li>
                <li>
                  Built the official department landing site using Nuxt.js: <a href="https://ftisu.vn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ftisu.vn</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience  */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase border-b border-black pb-1 flex items-center gap-2">
            <span className="text-2xl">●</span> Professional Experience 
          </h2>
          <div className="space-y-6 divide-y divide-gray-300">
             {/* Cavies Lab */}
            <div className="pt-0 first:pt-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack & Blockchain Developer — Cavies Lab</h3>
                <span className="text-sm italic">Feb 2024 – Oct 2025 | Remote</span>
              </div>
              <p className="text-sm mt-1"><strong>Key Project:</strong> Sei Blockchain Explorer (Seitrace) — <a href="https://seitrace.com" target="_blank" rel="noopener noreferrer" className="underline">https://seitrace.com</a></p>
              <p className="text-sm mt-1 italic">Lead full-stack engineer responsible for architecting, building, and scaling Seitrace, the official block explorer for Sei Network, supporting both EVM and Cosmos environments. Built the platform from the ground up with a strong focus on performance, security, and developer experience.</p>
              <div className="mt-2 space-y-2 text-sm">
                <div>
                  <p className="font-semibold">Platform Architecture & Performance:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Designed and developed the entire Seitrace web platform from scratch using Next.js, Bun.js, React 19, Wagmi, Viem, and a fully custom UI component system.</li>
                    <li>Engineered high-performance UI components with advanced techniques (Proxy patterns, event delegation, dynamic rendering, caching).</li>
                    <li>Achieved 3 million requests/second throughput under load-testing with zero latency degradation.</li>
                    <li>Migrated the whole platform from Node.js → Bun.js to significantly improve server performance and startup times.</li>
                    <li>Customized Webpack/Rspack modules for automated file-path injection, enabling full automation testing.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Frontend Engineering:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Built {">"}100 custom reusable UI components with clean code, strict typing, and full cross-platform responsiveness (mobile & desktop).</li>
                    <li>Implemented per-page SEO optimization compliant with Google Search Console guidelines.</li>
                    <li>Wrote extensive Playwright component tests and unit tests for complex data-processing functions.</li>
                    <li>Customized react-chartjs-2, implemented interactive blockchain charts, price trends, NFT metrics.</li>
                    <li>Delivered pixel-perfect UI from Figma with high accuracy and performance.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Backend Engineering & Indexing:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Built backend services using NestJS, GraphQL, Hasura, Redis, TypeORM, Drizzle.</li>
                    <li>Implemented scalable blockchain indexing pipelines, optimized Postgres queries, and background workers.</li>
                    <li>Integrated automatic NFT & token pricing via multi-source aggregation (oracles, APIs, market feeds).</li>
                    <li>Implemented authentication, role-based access control, and asset-license management for Seitrace Logo system.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Blockchain Development:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Wrote and customized Solidity ERC-20 / ERC-721 contracts for internal tools and partner integrations.</li>
                    <li>Built advanced wallet-interaction tools: signing, transaction builder, token/NFT reader, marketplace utilities.</li>
                    <li>Implemented large-scale Airdrop systems for millions of users using OpenZeppelin Merkle Tree, advanced cryptography, and WASM-based anti-bot algorithms to detect abnormal claim patterns.</li>
                    <li>Able to read and understand Cosmos SDK modules to support Sei-specific transaction parsing and features.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">AI & MCP Integration:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Built an AI-powered chatbot using ai-sdk, integrating OpenAI & Gemini models.</li>
                    <li>Developed a full MCP (Model Context Protocol) server, enabling partners to interact with Seitrace APIs through AI tools.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Security & DevOps:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Experienced with Cloudflare security stack: DNS, Workers, Argo Tunnel, Turnstile, bot protection patterns.</li>
                    <li>Configured Nginx for load balancing, reverse proxy, and gateway for multi-service server infrastructure.</li>
                    <li>Implemented Sentry monitoring for FE/BE error tracking and performance analytics.</li>
                    <li>Managed CI/CD pipelines with Docker, GitHub Actions, Caddy, and multi-environment deployments.</li>
                    <li>Strong proficiency in Linux environments and command-line tooling.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mayfest */}
            <div className="pt-4 pb-2 mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack Developer — Mayfest (Freelance)</h3>
                <span className="text-sm italic">May 2025 – Aug 2025 | Remote</span>
              </div>
              <p className="text-sm mt-1"><strong>Project:</strong> High-traffic Event Ticketing Platform</p>
              <ul className="list-disc list-inside mt-1 text-sm ml-2">
                <li>Engineered a high-concurrency ticketing platform capable of handling tens of thousands of simultaneous users, ensuring system stability during peak sale windows.</li>
                <li>Eliminated double-booking and race conditions by designing a seat-locking + transactional reservation mechanism that protects against overlapping purchases when multiple users select the same seat.</li>
                <li>Implemented a dynamic queueing system that activates during heavy traffic, enabling fair, ordered access and preventing server overload under extreme peak demand.</li>
                <li>Reduced payment failure rates by ~40% through robust integration with VNPay and Xendit, including retry logic, idempotent payment handlers, and reconciliation workflows.</li>
                <li>Developed secure event check-in flow using digitally signed QR codes with cryptographic verification to prevent forgery, duplication, and unauthorized entry.</li>
                <li>Built asynchronous order & payment pipelines using RabbitMQ, enabling parallel queue processing, scalable payment handling, and fast order confirmation.</li>
                <li>Automated PDF ticket generation with brand-consistent templates and email dispatch for purchase receipts, group orders, and event reminders.</li>
                <li>Improved backend throughput by 3× by optimizing NestJS services, database indexes, and Drizzle-based query paths for real-time seat availability.</li>
                <li>Enhanced platform reliability through Sentry monitoring, structured logging, failure-alert systems, and graceful degradation strategies.</li>
                <li>Delivered responsive, mobile-first UI using Next.js and modern React patterns, ensuring seamless user experience from seat selection to checkout.</li>
              </ul>
              <p className="text-sm mt-1"><strong>Tech Stack:</strong> Next.js, React 19, NestJS, Postgres, Drizzle ORM, RabbitMQ, VNPay, Xendit, Sentry, Docker</p>
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

            {/* Buymed */}
            <div className="pt-4 pb-2 mb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold">Full-stack Developer — Buymed</h3>
                <span className="text-sm italic">Aug 2023 – Jan 2024 | Ho Chi Minh City</span>
              </div>
              <p className="text-sm mt-1"><strong>Project:</strong> CSM System for Pharmacy Network Operations — <a href="https://thuocsi.com" target="_blank" rel="noopener noreferrer" className="underline">https://thuocsi.com</a></p>
              <ul className="list-disc list-inside mt-1 text-sm ml-2">
                <li>Architected and implemented a full CSM (Customer/Clinic/Store Management) system managing the operational workflow of a nationwide pharmacy network, covering procurement, warehousing, transportation, and retail sale processes.</li>
                <li>Designed the end-to-end pharmaceutical order lifecycle, enabling seamless processing from: (1) Creating drug intake documents → (2) Approval flow with signatures & validations → (3) Import request verification → (4) Warehouse receiving & internal movement → (5) Inter-warehouse transportation → (6) Delivery to pharmacy → (7) Final confirmation & audit logging.</li>
                <li>Reduced approval time by ~35% by building digital workflows with role-based access control, hierarchical authorization, and digital signatures for critical documents.</li>
                <li>Implemented scheduling & automated reminders, ensuring teams never missed warehouse deadlines, transport windows, or approval cycles, improving operational compliance across departments.</li>
                <li>Built robust tracking modules for: Order progress & shipment stages, Department responsibilities & handover checkpoints, Historical document storage, retrieval, and timestamped activity logs.</li>
                <li>Enhanced UI performance by 40% using SolidJS’s fine-grained reactivity model, reducing bundle size and improving rendering speed for large datasets and multi-step forms.</li>
                <li>Developed shared UI components and internal tooling that were later adopted across multiple internal Buymed platforms, increasing development speed for other teams.</li>
                <li>Collaborated with DevOps team to deploy Golang microservices to Kubernetes, ensuring zero-downtime rollouts, improved scalability, and better observability across environments.</li>
                <li>Optimized backend throughput by designing efficient Golang service handlers and MongoDB query strategies for high-volume pharmaceutical order data.</li>
              </ul>
              <p className="text-sm mt-1"><strong>Tech Stack:</strong> SolidJS, Next.js, Golang, Kubernetes, MongoDB, Docker, RBAC, Digital Signature Workflows</p>
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
                <li>Site: <a href="https://otoman.net" target="_blank" rel="noopener noreferrer" className="underline">https://otoman.net</a></li>
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
