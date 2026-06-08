"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useLayoutEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";

interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
  description: string;
  stack: string[];
}

const defaultItems: MenuItem[] = [
  {
    num: "01",
    name: "ResCall",
    clipId: "clip-original",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description:
      "AI-powered career preparation platform focused on resume analysis, interview workflows, and modern learning experiences.",
    stack: ["Next.js", "MongoDB", "AI", "Tailwind"],
  },

  {
    num: "02",
    name: "StudyFlow",
    clipId: "clip-hexagons",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    description:
      "Productivity-focused learning platform with progress tracking, streak systems, and AI-assisted study workflows.",
    stack: ["React", "Node.js", "Express", "GSAP"],
  },

  {
  num: "03",
  name: "Restaurant Management System",
  clipId: "clip-pixels",
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  description:
    "Full-stack restaurant management platform with online ordering, cart system, authentication, order tracking, and admin dashboard for managing products and customers.",
  stack: ["React", "Node.js", "MySQL", "JWT"],
},
];

export default function SelectedWork({
  items = defaultItems,
}: {
  items?: MenuItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<SVGImageElement>(null);

  const mainGroupRef = useRef<SVGGElement>(null);

  const masterTl = useRef<gsap.core.Timeline | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.4, 1, 0.6]);
  const createLoop = (index: number) => {
    const item = items[index];

    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) {
      imageRef.current.setAttribute("href", item.image);
    }

    if (mainGroupRef.current) {
      mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    }

    gsap.set(selector, {
      scale: 0,
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: {
        amount: 0.4,
        from: "random",
      },
      ease: "expo.out",
    })

      .to(selector, {
        scale: 1.03,
        duration: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        stagger: {
          amount: 0.2,
          from: "center",
        },
      })

      .to(selector, {
        scale: 0,
        duration: 0.6,
        stagger: {
          amount: 0.3,
          from: "edges",
        },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);

    createLoop(index);
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative min-h-screen bg-[#080808] px-6 md:px-10 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8ff00]/[0.04] blur-[160px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Section Heading */}
        <div className="mb-24">
          <span
            className="text-xs uppercase tracking-[0.3em] text-white/30"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            Featured Projects
          </span>

          <h2
            className="mt-6 text-5xl md:text-7xl font-bold tracking-[-0.06em] text-white"
            style={{
              fontFamily: "var(--font-syne)",
            }}
          >
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-24">
          {/* LEFT SIDE */}
          <motion.div
            style={{
              y: textY,
              opacity,
            }}
            className="w-full lg:w-1/2"
          >
            <nav>
              <ul className="flex flex-col gap-16">
                {items.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <li
                      key={item.num}
                      onMouseEnter={() => handleItemHover(index)}
                      onClick={() => handleItemHover(index)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start gap-6">
                        {/* Number */}
                        <span
                          className={cn(
                            "text-2xl md:text-3xl font-bold transition-all duration-500 mt-2",
                            isActive
                              ? "text-[#c8ff00] scale-110"
                              : "text-white/20",
                          )}
                        >
                          {item.num}
                        </span>

                        <div>
                          {/* Title */}
                          <a
                            href={
                              item.name === "ResCall"
                                ? "https://res-call-seven.vercel.app/"
                                : item.name === "StudyFlow"
                                  ? "https://study-flow-five.vercel.app/"
                                  : "https://restaurant-working-system.vercel.app/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <h3
                              className={cn(
                                 "text-5xl md:text-6xl font-black tracking-[-0.06em] leading-[0.9] transition-all duration-700 hover:text-[#c8ff00]",
                                isActive
                                  ? "text-white translate-x-4"
                                  : "text-white/25",
                              )}
                              style={{
                                fontFamily: "var(--font-syne)",
                              }}
                            >
                              {item.name}
                            </h3>
                          </a>

                          {/* Description */}
                          <p
                            className={cn(
                              "mt-6 max-w-xl text-base leading-7 transition-all duration-500",
                              isActive
                                ? "opacity-100 text-white/60"
                                : "opacity-0 h-0 overflow-hidden",
                            )}
                          >
                            {item.description}
                          </p>

                          {/* Stack */}
                          <div
                            className={cn(
                              "flex flex-wrap gap-3 mt-6 transition-all duration-500",
                              isActive
                                ? "opacity-100"
                                : "opacity-0 h-0 overflow-hidden",
                            )}
                          >
                            {item.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.15em] text-white/50"
                                style={{
                                  fontFamily: "var(--font-dm-mono)",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <div className="absolute w-[120%] h-[120%] bg-[#c8ff00]/[0.05] blur-[140px] rounded-full" />

            <svg
              viewBox="0 0 500 500"
              className="w-full max-w-[540px] h-auto z-10 drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]"
            >
              <defs>
                {/* Bento Layout */}
                <clipPath id="clip-original">
                  <rect
                    className="path"
                    x="20"
                    y="20"
                    width="220"
                    height="220"
                    rx="18"
                  />

                  <rect
                    className="path"
                    x="260"
                    y="20"
                    width="220"
                    height="100"
                    rx="18"
                  />

                  <rect
                    className="path"
                    x="260"
                    y="140"
                    width="220"
                    height="100"
                    rx="18"
                  />

                  <rect
                    className="path"
                    x="20"
                    y="260"
                    width="460"
                    height="220"
                    rx="18"
                  />
                </clipPath>

                {/* Hex Layout */}
                <clipPath id="clip-hexagons">
                  <rect
                    className="path"
                    x="20"
                    y="20"
                    width="200"
                    height="280"
                    rx="18"
                  />

                  <rect
                    className="path"
                    x="240"
                    y="20"
                    width="240"
                    height="140"
                    rx="18"
                  />

                  <rect
                    className="path"
                    x="240"
                    y="180"
                    width="240"
                    height="120"
                    rx="18"
                  />

                  <rect
                    className="path"
                    x="20"
                    y="320"
                    width="460"
                    height="160"
                    rx="18"
                  />
                </clipPath>

                {/* Grid Layout */}
                <clipPath id="clip-pixels">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <rect
                      key={i}
                      className="path"
                      x={(i % 3) * 160 + 20}
                      y={Math.floor(i / 3) * 160 + 20}
                      width="140"
                      height="140"
                      rx="12"
                    />
                  ))}
                </clipPath>
              </defs>

              <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
                <image
                  ref={imageRef}
                  href={items[0].image}
                  width="500"
                  height="500"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
