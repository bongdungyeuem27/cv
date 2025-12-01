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
          {/* Master's Degree */}
          <div className="mb-6 border-b border-foreground/10 pb-6">
            <h3 className="text-xl font-bold mb-1">University of Information Technology (UIT) – Vietnam National University</h3>
            <h4 className="text-lg font-semibold text-green-500">Master of Information Systems</h4>
            <p className="text-muted">In Progress, Expected graduation: 2026</p>
          </div>

          {/* Bachelor's Degree */}
          <div className="mb-6 border-b border-foreground/10 pb-6">
            <h3 className="text-xl font-bold mb-1">University of Information Technology (UIT) – Vietnam National University</h3>
            <h4 className="text-lg font-semibold text-green-500">Bachelor of Information Systems</h4>
            <p className="text-muted">GPA: 8.22 / 10</p>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">Academic Achievements & Research:</h4>
            <ul className="list-disc list-inside text-muted space-y-3">
              <li>
                <span className="font-medium text-foreground">Published 2 peer-reviewed scientific papers in international conferences:</span>
                <ul className="list-[circle] list-inside ml-4 mt-2 space-y-2">
                  <li>
                    <span>Using Blockchain and Artificial Intelligence to Build a Job Recommendation System for Students in Information Technology – RIVF 2022</span>
                    <br />
                    <a href="https://ieeexplore.ieee.org/abstract/document/10013916" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm ml-4 block truncate">
                      https://ieeexplore.ieee.org/abstract/document/10013916
                    </a>
                  </li>
                  <li>
                    <span>Evaluate the Efficiency of Hybrid Model Based on CNN–LSTM in Information Technology Job Graph Network – FDSE 2023</span>
                    <br />
                    <a href="https://link.springer.com/book/10.1007/978-981-99-8296-7" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm ml-4 block truncate">
                      https://link.springer.com/book/10.1007/978-981-99-8296-7
                    </a>
                  </li>
                </ul>
              </li>
              <li>Eureka Scientific Research Competition — Semi-finalist</li>
              <li>
                Built the official department landing site using Nuxt.js: <a href="https://ftisu.vn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ftisu.vn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
