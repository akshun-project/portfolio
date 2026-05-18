 "use client";

import * as React from "react";
import {
  GraduationCap,
  Layers3,
  Sparkles,
  Rocket,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface JourneyItem {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const journeyItems: JourneyItem[] = [
  {
    id: 1,
    year: "2023",
    title: "Frontend Foundations",
    description:
      "Started exploring frontend development during college while learning Java, DSA, and core programming fundamentals.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    icon: <GraduationCap size={28} />,
  },

  {
    id: 2,
    year: "2024",
    title: "Full Stack Development",
    description:
      "Built MERN stack applications and improved backend architecture, authentication systems, APIs, and scalable workflows.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    icon: <Layers3 size={28} />,
  },

  {
    id: 3,
    year: "2025",
    title: "AI & Product Experiences",
    description:
      "Focused on AI-powered products, cinematic frontend systems, refined UI interactions, and modern user experiences.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    icon: <Sparkles size={28} />,
  },

  {
    id: 4,
    year: "2026",
    title: "Modern Engineering",
    description:
      "Building polished digital products with scalable frontend architecture, product-focused engineering, and premium UX systems.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    icon: <Rocket size={28} />,
  },
];

export default function JourneySection() {
  const [activeIndex, setActiveIndex] =
    React.useState(0);

  return (
    <section
      id="journey"
      className="relative bg-[#080808] px-6 md:px-10 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8ff00]/[0.04] blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-24">
          <span
            className="text-xs uppercase tracking-[0.3em] text-white/30"
            style={{
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            Growth Timeline
          </span>

          <h2
            className="mt-6 text-5xl md:text-7xl font-bold tracking-[-0.06em] text-white"
            style={{
              fontFamily: "var(--font-syne)",
            }}
          >
            Journey
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[540px]">
          {journeyItems.map((item, index) => {
            const isActive =
              activeIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() =>
                  setActiveIndex(index)
                }
                onClick={() =>
                  setActiveIndex(index)
                }
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer transition-all duration-700 flex-1 min-h-[220px] md:min-h-full",
                  isActive
                    ? "md:flex-[5] shadow-[0_0_80px_rgba(200,255,0,0.08)]"
                    : "md:flex-1"
                )}
              >
                {/* Background */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                    isActive
                      ? "scale-100 grayscale-0"
                      : "scale-110 grayscale"
                  )}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

                {/* Spotlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.15),transparent_45%)]" />
                </div>

                {/* Content */}
                <article className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
                  {/* Side Year */}
                  <h3
                    className={cn(
                      "hidden md:block origin-left rotate-90 text-sm uppercase tracking-[0.3em] text-white/40 absolute left-6 bottom-10 transition-all duration-500",
                      isActive
                        ? "opacity-0"
                        : "opacity-100"
                    )}
                    style={{
                      fontFamily:
                        "var(--font-dm-mono)",
                    }}
                  >
                    {item.year}
                  </h3>

                  {/* Active Content */}
                  <div
                    className={cn(
                      "transition-all duration-700",
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 md:translate-y-10"
                    )}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md flex items-center justify-center text-[#c8ff00]">
                      {item.icon}
                    </div>

                    {/* Year */}
                    <span
                      className="block mt-8 text-xs uppercase tracking-[0.25em] text-[#c8ff00]"
                      style={{
                        fontFamily:
                          "var(--font-dm-mono)",
                      }}
                    >
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3
                      className="mt-4 text-3xl md:text-5xl font-bold tracking-[-0.05em] text-white"
                      style={{
                        fontFamily:
                          "var(--font-syne)",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-6 max-w-md text-white/65 leading-8">
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}