 "use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Sparkles,
  Wand2,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Engineering",
    icon: <Code2 size={24} />,
    description:
      "Building scalable, responsive, and performant interfaces with modern frontend technologies and clean UI systems.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Responsive UI",
    ],
    className: "md:col-span-7",
  },

  {
    title: "Backend Systems",
    icon: <Database size={24} />,
    description:
      "Developing secure APIs, authentication systems, and scalable backend architectures for modern applications.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    className: "md:col-span-5",
  },

  {
    title: "Problem Solving",
    icon: <Sparkles size={24} />,
    description:
      "Strong understanding of data structures, algorithms, debugging, and performance optimization.",
    tech: [
      "DSA",
      "OOPs",
      "Optimization",
      "Debugging",
      "JavaScript",
    ],
    className: "md:col-span-5",
  },

  {
    title: "Software Engineering",
    icon: <Wand2 size={24} />,
    description:
      "Focused on building scalable software products with clean architecture and modern development practices.",
    tech: [
      "Git",
      "API Design",
      "Clean Code",
      "Deployment",
      "Scalable Systems",
    ],
    className: "md:col-span-7",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8ff00]/[0.025] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20">

          <span
            className="text-[11px] uppercase tracking-[0.25em] text-white/30"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            Core Expertise
          </span>

          <h2
            className="mt-5 text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl"
            style={{
              fontFamily: "var(--font-syne)",
            }}
          >
            Skills & Systems
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-[1px] border border-white/10 bg-white/10 md:grid-cols-12">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.01,
              }}
              className={`group relative overflow-hidden bg-[#0b0b0b] p-8 md:p-10 backdrop-blur-sm transition-all duration-500 ${skill.className}`}
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.10),transparent_45%)]" />
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-[#c8ff00]/10" />

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#c8ff00]"
                >
                  {skill.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="mt-7 text-2xl font-bold tracking-[-0.05em] text-white md:text-3xl"
                  style={{
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
                  {skill.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {skill.tech.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{
                        scale: 1.04,
                      }}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-white/50 transition-all duration-300"
                      style={{
                        fontFamily:
                          "var(--font-dm-mono)",
                      }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Accent Glow */}
              <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#c8ff00]/[0.03] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}