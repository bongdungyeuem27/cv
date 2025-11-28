"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-32 pb-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 dark:bg-purple-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-black p-1">
          <div className="w-full h-full rounded-full overflow-hidden relative">
             <Image 
               src="/profile.jpg" 
               alt="Le Khanh" 
               fill 
               className="object-cover"
               priority
             />
          </div>
        </div>
      </motion.div>

      <motion.h1 
        className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_auto]">
          LE KHANH
        </span>
      </motion.h1>

      <motion.h2 
        className="text-xl md:text-3xl text-muted mb-8 font-light"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Senior Frontend / Full-stack Developer
      </motion.h2>

      <motion.div 
        className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-muted mb-12 max-w-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>Tam Binh Ward (Thu Duc), HCMC</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-500" />
          <span>+84 91 463 0145</span>
        </div>
        <a href="mailto:khanhlemaiduy123@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail className="w-4 h-4 text-red-500" />
          <span>khanhlemaiduy123@gmail.com</span>
        </a>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-yellow-500" />
          <span>DOB: 2001</span>
        </div>
      </motion.div>

      <motion.div 
        className="flex gap-4 mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a 
          href="https://github.com/bongdungyeuem27" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-all hover:scale-110 text-foreground"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/khanhlemaiduy123" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-all hover:scale-110 text-foreground"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground/50 hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </Section>
  );
}
