"use client";

import { Section } from "@/components/ui/Section";
import { Github, Languages as LangIcon, Linkedin, Mail, Phone } from "lucide-react";

export function Languages() {
  return (
    <Section className="max-w-4xl mx-auto px-4 mb-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
          <LangIcon className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Languages</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-xl flex items-center justify-between">
          <span className="font-bold text-lg">English</span>
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Good working proficiency</span>
        </div>
        <div className="glass-card p-6 rounded-xl flex items-center justify-between">
          <span className="font-bold text-lg">Vietnamese</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Native</span>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-black/50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="mailto:khanhlemaiduy123@gmail.com" className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            <span>khanhlemaiduy123@gmail.com</span>
          </a>
          <a href="tel:+84914630145" className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
            <span>+84 91 463 0145</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/bongdungyeuem27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/khanhlemaiduy123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        <div className="mt-8 text-sm text-muted">
          © {new Date().getFullYear()} Le Khanh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
