"use client";

import Link from "next/link";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { useState } from "react";

const links = [
  {
    name: "Work",
    href: "#work",
  },

  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Journey",
    href: "#journey",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined) return;

    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: {
          y: 0,
          opacity: 1,
        },

        hidden: {
          y: "-120%",
          opacity: 0,
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="px-4 pt-4 sm:px-6 md:px-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-5 shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:h-[72px] sm:px-7">
          {/* LEFT */}
          <Link
            href="/"
            className="group relative"
            style={{
              fontFamily: "var(--font-syne)",
            }}
          >
            <span
              className="text-lg font-semibold tracking-[-0.08em] text-white transition-colors duration-300 group-hover:text-[#c8ff00] sm:text-xl"
              style={{
                fontFamily: "var(--font-syne)",
              }}
            >
              A J .
            </span>

            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#c8ff00] transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* CENTER */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative overflow-hidden text-[11px] uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{link.name}</span>

                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c8ff00] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <motion.a
            href="mailto:akshunjindal7889@gmail.com"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-4 py-2 text-[12px] font-medium text-black transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Let&apos;s Talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
