"use client";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { InteractiveGrid } from "../ui/interactive-grid";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/akshun-project",
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akshun-jindal-9534b0303/",
  },

  {
    name: "Resume",
    href: "/AKSHUN RESUME.pdf",
  },

  {
    name: "Email",
    href: "mailto:akshunjindal7889@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c8ff00]/[0.025] blur-[160px]" />

      {/* Interactive Grid */}
      <InteractiveGrid dotDistance={42} dotRadius={0.8} minProximity={120} />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        {/* Main */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            <h2
              className="text-4xl font-bold leading-[0.95] tracking-[-0.07em] text-white md:text-6xl"
              style={{
                fontFamily: "var(--font-syne)",
              }}
            >
              Crafting scalable
              <br />
              software products
              <br />
              <span className="text-[#c8ff00]">for modern experiences.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg">
              Software Developer focused on building scalable digital products,
              modern web applications, and refined user experiences.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="flex flex-col gap-5"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 4,
                }}
                className="group flex items-center gap-4 text-white/45 transition-all duration-300 hover:text-[#c8ff00]"
              >
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/25">
                  0{index + 1}
                </span>

                <span className="text-lg tracking-[-0.03em]">{link.name}</span>

                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/25">© 2026 Akshun Jindal</p>

          <p className="text-sm text-white/25">
            Designed & Developed by Akshun Jindal
          </p>
        </div>
      </div>
    </footer>
  );
}
