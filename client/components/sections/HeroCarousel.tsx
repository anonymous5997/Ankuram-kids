import { useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  titleTop: string;
  titleBottom: string;
  ctas?: { label: string; to: string }[];
  Mascot: () => JSX.Element;
  bg?: string;
  stats: { label: string; value: number }[];
}

function useCount(to: number, duration = 1.2) {
  const v = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(v, to, { duration, ease: "easeOut" });
    const unsub = v.on("change", (latest) => setVal(Math.round(latest)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, duration]);
  return val;
}

function CountBubble({
  value,
  label,
  delay = 0,
}: {
  value: number;
  label: string;
  delay?: number;
}) {
  const displayed = useCount(value);
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", bounce: 0.4, delay }}
      className="rounded-full bg-white/90 px-4 py-2 shadow ring-1 ring-border flex items-center gap-2"
    >
      <span className="text-lg font-extrabold text-primary">{displayed}</span>
      <span className="text-sm font-semibold text-slate-700">{label}</span>
    </motion.div>
  );
}

function MascotSwing() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-[80%] max-w-[420px]"
      initial={{ rotate: -4 }}
      animate={{ rotate: [-6, 6, -6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#2D9CDB" />
          <stop offset="100%" stopColor="#9B5DE5" />
        </linearGradient>
      </defs>
      <g>
        <path d="M100 20 v30" stroke="#444" strokeWidth="3" />
        <g>
          <circle cx="100" cy="60" r="22" fill="#FFD6E7" />
          <rect x="70" y="80" width="60" height="44" rx="10" fill="url(#g1)" />
          <rect x="80" y="124" width="40" height="36" rx="10" fill="#FFB703" />
        </g>
      </g>
    </motion.svg>
  );
}

function MascotKite() {
  return (
    <motion.svg
      viewBox="0 0 240 200"
      className="w-[80%] max-w-[420px]"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity }}
    >
      <polygon
        points="120,30 180,90 120,150 60,90"
        fill="#FFB703"
        stroke="#F59E0B"
        strokeWidth="4"
      />
      <polyline
        points="120,150 110,170 100,160 90,175 80,165"
        fill="none"
        stroke="#2D9CDB"
        strokeWidth="4"
      />
      <circle cx="60" cy="90" r="6" fill="#9B5DE5" />
    </motion.svg>
  );
}

const slides: Slide[] = [
  {
    id: 1,
    titleTop: "Where Little Minds",
    titleBottom: "Grow Big Dreams",
    Mascot: MascotSwing,
    bg: "from-primary/10 to-accent/10",
    ctas: [
      { label: "Apply Now", to: "/admissions" },
      { label: "Franchise", to: "/franchise" },
    ],
    stats: [
      { label: "Students", value: 500 },
      { label: "Centres", value: 4 },
      { label: "Awards", value: 12 },
    ],
  },
  {
    id: 2,
    titleTop: "Play. Learn.",
    titleBottom: "Shine Together.",
    Mascot: MascotKite,
    bg: "from-accent/10 to-primary/10",
    ctas: [
      { label: "NTT Training", to: "/ntt-training" },
      { label: "Programs", to: "/programs" },
    ],
    stats: [
      { label: "Activities", value: 150 },
      { label: "Teachers", value: 30 },
      { label: "Years", value: 3 },
    ],
  },
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const go = (n: number) =>
    setIdx((p) => (p + n + slides.length) % slides.length);
  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, []);
  const active = slides[idx];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${active.bg}`}
      />
      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "text"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow ring-1 ring-primary/20">
                #1 Kids School in Odisha
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
                <span className="headline-gradient">{active.titleTop}</span>
                <br />
                <span className="text-slate-800">{active.titleBottom}</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                {active.ctas?.map((c) => (
                  <Link
                    key={c.label}
                    to={c.to}
                    className="btn-gradient text-base font-bold"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {active.stats.map((s, i) => (
                  <CountBubble
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "art"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="relative grid place-items-center"
            >
              <active.Mascot />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${idx === i ? "bg-primary w-6" : "bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="rounded-full p-3 bg-white/80 ring-1 ring-border hover:bg-white shadow"
            >
              {" "}
              <ChevronLeft className="h-5 w-5" />{" "}
            </button>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="rounded-full p-3 bg-white/80 ring-1 ring-border hover:bg-white shadow"
            >
              {" "}
              <ChevronRight className="h-5 w-5" />{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
