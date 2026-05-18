"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-black">
      {/* Background Video */}
      <motion.video
        style={{ y }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-85"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-28 sm:px-8 md:px-10">
        {/* Center */}
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:col-span-8">
              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 120,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-5xl text-[2.7rem] sm:text-6xl  font-semibold leading-[0.92] tracking-[-0.08em] text-white sm:text-6xl md:text-[6vw]"
                style={{
                  fontFamily: "var(--font-syne)",
                }}
              >
                <span className="mb-6 block text-base tracking-[-0.03em] text-white/65 md:text-xl">
                  Hi, I’m Akshun Jindal
                </span>
                Software Developer
                <br />
                crafting scalable
                <br />
                <span className="text-[#c8ff00]">digital experiences.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                }}
                className="mt-7 max-w-md text-[15px] leading-6 text-white/60 md:text-lg"
              >
                Focused on building scalable software products, modern web
                applications, and refined digital experiences with clean
                engineering principles.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.45,
                }}
                className="mt-9 flex flex-col items-start gap-3 sm:flex-row "
              >
                {/* Primary */}
                <motion.a
                  href="#work"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c8ff00]  px-4 py-2.5 text-[12px] sm:px-5 sm:py-3 sm:text-[13px] font-medium text-black transition-all duration-300 md:px-6 md:py-3.5 md:text-sm"
                >
                  View Projects
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>

                {/* Secondary */}
                <motion.a
                  href="#contact"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[13px] text-white/70 backdrop-blur-xl transition-all duration-300 hover:text-white md:px-6 md:py-3.5 md:text-sm"
                >
                  Let&apos;s Connect
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.55,
              }}
              className="mt-10 hidden flex-col justify-center gap-8 lg:col-span-4 lg:mt-0 lg:flex lg:items-end"
            >
              {/* Availability */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl lg:self-end"
              >
                <div className="h-2 w-2 rounded-full bg-[#c8ff00]" />

                <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                  Open to Opportunities
                </span>
              </motion.div>

              {/* Info */}
              <div className="space-y-7">
                {/* Stack */}
                <div className="border-r border-white/5 pr-4 text-right">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                    Stack
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-white/70 md:text-sm">
                    React • Next.js • Node.js
                    <br />
                    MongoDB • Tailwind • GSAP
                  </p>
                </div>

                {/* Focus */}
                <div className="border-r border-white/5 pr-4 text-right">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                    Focus
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-white/70 md:text-sm">
                    Full Stack Development
                    <br />
                    Scalable Web Applications
                    <br />
                    Software Engineering
                  </p>
                </div>

                {/* Location */}
                <div className="border-r border-white/5 pr-4 text-right">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                    Based In
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-white/70 md:text-sm">
                    India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
          }}
          className="mt-20 hidden items-center justify-between md:flex"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/25">
            Software Developer Portfolio
          </p>

          <div className="flex items-center gap-3 text-white/25">
            <div className="h-[1px] w-20 bg-white/10" />

            <span className="text-[11px] uppercase tracking-[0.22em]">
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
