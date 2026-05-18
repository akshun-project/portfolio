 "use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  FileText,
  Copy,
  
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { InteractiveGrid } from "../ui/interactive-grid";

export default function ContactSection() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "akshunjindal7889@gmail.com"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 md:px-10"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8ff00]/[0.03] blur-[180px]" />

      {/* Interactive Grid */}
      <InteractiveGrid
        dotDistance={38}
        dotRadius={1}
        minProximity={140}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">

          <span
            className="text-[11px] uppercase tracking-[0.25em] text-white/30"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            Let&apos;s Connect
          </span>

          <h2
            className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-white md:text-6xl"
            style={{
              fontFamily: "var(--font-syne)",
            }}
          >
            Let&apos;s build
            <br />
            something
            <br />

            <span className="text-[#c8ff00]">
              exceptional.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            Open to software development opportunities,
            full stack engineering roles, and building
            scalable digital products with modern
            technologies.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* LEFT SIDE */}
          <div className="grid gap-[1px] border border-white/10 bg-white/10 lg:col-span-7">

            {/* Email Card */}
            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              className="group relative overflow-hidden bg-[#0b0b0b] p-8 md:p-10"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.10),transparent_45%)]" />
              </div>

              <div className="relative z-10 flex items-start justify-between">

                <div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#c8ff00]">
                    <Mail size={22} />
                  </div>

                  {/* Label */}
                  <p className="mt-7 text-[11px] uppercase tracking-[0.25em] text-white/30">
                    Email Address
                  </p>

                  {/* Email */}
                  <h3 className="mt-4 break-all text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                    akshunjindal7889@gmail.com
                  </h3>
                </div>

                {/* Copy */}
                <button
                  onClick={copyEmail}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:text-[#c8ff00]"
                >
                  <Copy size={16} />
                </button>
              </div>
            </motion.div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 gap-[1px] bg-white/10 md:grid-cols-3">

              {/* GitHub */}
              <motion.a
                whileHover={{
                  scale: 1.01,
                }}
                href="https://github.com/akshun-project"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#0b0b0b] p-8"
              >

                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.10),transparent_45%)]" />
                </div>

                <div className="relative z-10">

                 <FaGithub
  size={20}
  className="text-[#c8ff00]"
/>

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    GitHub
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-white/40 transition-colors group-hover:text-[#c8ff00]">
                    <span className="text-sm">
                      View Profile
                    </span>

                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{
                  scale: 1.01,
                }}
                href="https://www.linkedin.com/in/akshun-jindal-9534b0303/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#0b0b0b] p-8"
              >

                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.10),transparent_45%)]" />
                </div>

                <div className="relative z-10">

                 <FaLinkedinIn
  size={20}
  className="text-[#c8ff00]"
/>

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    LinkedIn
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-white/40 transition-colors group-hover:text-[#c8ff00]">
                    <span className="text-sm">
                      Connect
                    </span>

                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.a>

              {/* Resume */}
              <motion.a
                whileHover={{
                  scale: 1.01,
                }}
                href="/AKSHUN RESUME.pdf"
                download="Akshun_Jindal_Resume.pdf"
                className="group relative overflow-hidden bg-[#0b0b0b] p-8"
              >

                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.10),transparent_45%)]" />
                </div>

                <div className="relative z-10">

                  <FileText
                    size={22}
                    className="text-[#c8ff00]"
                  />

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    Resume
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-white/40 transition-colors group-hover:text-[#c8ff00]">
                    <span className="text-sm">
                      Download
                    </span>

                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="group relative overflow-hidden border border-white/10 bg-[#0b0b0b] p-8 md:p-10 lg:col-span-5"
          >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.10),transparent_45%)]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

                <span className="text-[11px] uppercase tracking-[0.25em] text-[#c8ff00]">
                  Currently Available
                </span>

                <h3
                  className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-5xl"
                  style={{
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  Available for
                  <br />
                  2026 SDE
                  <br />
                  roles.
                </h3>

                <p className="mt-8 max-w-md text-base leading-7 text-white/55">
                  Looking for opportunities in software
                  engineering, full stack development,
                  scalable systems, and product-focused
                  teams.
                </p>
              </div>

              {/* CTA */}
              <motion.a
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="mailto:akshunjindal7889@gmail.com"
                className="mt-14 inline-flex items-center justify-between rounded-2xl bg-[#c8ff00] px-8 py-5 font-semibold text-black"
              >
                <span>Get In Touch</span>

                <ArrowUpRight />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}