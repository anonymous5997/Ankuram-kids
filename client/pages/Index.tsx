import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { motion, useMotionValue, animate } from "framer-motion";
import { Brain, ShieldCheck, Users, Sparkles, Quote, Laptop, School } from "lucide-react";
import HeroCarousel from "@/components/sections/HeroCarousel";

const features = [
  {
    title: "Pre-Nursery",
    desc: "Foundational play-based learning.",
    icon: "🧩",
    to: "/programs",
  },
  {
    title: "Nursery",
    desc: "Explore, create, and grow.",
    icon: "🎨",
    to: "/programs",
  },
  {
    title: "LKG",
    desc: "Letters, numbers & curiosity.",
    icon: "🔤",
    to: "/programs",
  },
  {
    title: "UKG",
    desc: "Ready for primary school.",
    icon: "📚",
    to: "/programs",
  },
];

function useCount(to: number, duration = 1.2) {
  const v = useMotionValue(0);
  const [val, setVal] = useState(0 as number);
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

function Stat({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
  const displayed = useCount(value, 1.2);
  return (
    <motion.div initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay }} className="flex flex-col items-center">
      <div className="grid place-items-center h-16 w-16 rounded-full bg-white shadow ring-1 ring-border">
        <div className="text-xl font-extrabold text-primary">{displayed}+</div>
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-700">{label}</div>
    </motion.div>
  );
}

function StatBar() {
  return (
    <section className="bg-gradient-to-r from-sky-50 via-amber-50 to-emerald-50 border-t border-b border-border">
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        <Stat value={150} label="Activities" />
        <Stat value={30} label="Teachers" delay={0.05} />
        <Stat value={10} label="Years" delay={0.1} />
        <Stat value={4} label="Centres" delay={0.15} />
        <Stat value={12} label="Awards" delay={0.2} />
        <Stat value={10} label="Student:Teacher" delay={0.25} />
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: <Brain className="w-6 h-6 text-primary" />, title: "Holistic, play‑based", desc: "Scientifically designed 7‑petal approach nurturing all domains." },
    { icon: <Users className="w-6 h-6 text-emerald-600" />, title: "Collaborative learning", desc: "Projects, centres and peer activities that build social skills." },
    { icon: <ShieldCheck className="w-6 h-6 text-amber-600" />, title: "Secure campus", desc: "CCTV, hygiene‑first protocols, and trained staff." },
    { icon: <Sparkles className="w-6 h-6 text-pink-600" />, title: "Multi‑sensory", desc: "Music, movement, art, stories and discovery every day." },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold">Curriculum Highlights</h2>
          <p className="mt-2 text-slate-600">A joyful approach to early years development blending literacy, numeracy, creativity and values.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 p-3">{it.icon}</div>
              <div className="mt-3 font-semibold">{it.title}</div>
              <p className="text-sm text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const data = [
    { name: "Priya M.", text: "Warm teachers and engaging activities. My child loves school!" },
    { name: "Akash P.", text: "Safe, colourful campus and excellent communication with parents." },
    { name: "S. Rathi", text: "Play‑based learning built confidence and early literacy skills." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((p)=> (p+1)%data.length), 5000); return () => clearInterval(id); }, []);
  const t = data[i];
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold">What Parents Say</h2>
          <p className="mt-2 text-slate-600">Trusted by families for joyful early learning.</p>
        </div>
        <div className="mt-8 grid place-items-center">
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .35 }} className="max-w-xl text-center rounded-2xl bg-white p-8 border border-border shadow-sm">
            <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-gradient-to-br from-amber-100 to-pink-100">
              <Quote className="w-7 h-7 text-amber-600" />
            </div>
            <p className="mt-4 text-slate-700">“{t.text}”</p>
            <div className="mt-2 font-semibold">{t.name}</div>
            <div className="mt-4 flex items-center justify-center gap-2">
              {data.map((_, k) => (
                <button key={k} onClick={()=>setI(k)} aria-label={`Go to testimonial ${k+1}`} className={`h-2 w-2 rounded-full ${i===k?"bg-primary w-6":"bg-slate-300"}`} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FranchiseCTA() {
  return (
    <section className="bg-gradient-to-r from-sky-50 via-white to-emerald-50 border-t border-b border-border">
      <div className="container mx-auto px-4 py-14 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold">Open an Ankuram Kids Centre</h3>
          <p className="mt-2 text-slate-700">Partner with us to bring joyful early learning to your neighbourhood. Training, setup, and operational support provided.</p>
          <div className="mt-4 flex gap-3">
            <Link to="/franchise" className="btn-gradient font-bold">Explore Franchise</Link>
            <Link to="/contact" className="btn-accent">Get in touch</Link>
          </div>
        </div>
        <div className="hidden md:block">
          <svg viewBox="0 0 220 140" className="w-full">
            <rect x="10" y="20" width="200" height="90" rx="14" fill="#E0F2FE" />
            <circle cx="55" cy="65" r="20" fill="#FDE68A" />
            <rect x="95" y="45" width="90" height="40" rx="8" fill="#FBCFE8" />
            <circle cx="160" cy="90" r="12" fill="#86EFAC" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function OnlineLearning() {
  const items = [
    { title: "Digital Curriculum", desc: "Age‑appropriate videos, worksheets, and activity kits for home learning." },
    { title: "Live Sessions", desc: "Interactive classes with teachers to keep routines and connections strong." },
    { title: "Parent Support", desc: "Guides and checklists to help families facilitate learning with ease." },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold">Seamless Online Learning</h2>
          <p className="mt-2 text-slate-600">Our pandemic‑ready model ensured continuity through remote education and blended support.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 px-3 py-1 text-sm font-semibold text-slate-700">
                {i===0 && <Laptop className="w-4 h-4" />} {i===1 && <School className="w-4 h-4" />} {i===2 && <Users className="w-4 h-4" />} {it.title}
              </div>
              <p className="mt-3 text-slate-700">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="relative">
      <HeroCarousel />
      <StatBar />
      <Programs />
      <Highlights />
      <Testimonials />
      <FranchiseCTA />
      <OnlineLearning />
      <LeadStrip />
    </div>
  );
}

// Legacy illustration kept for potential reuse
function KidsIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-[85%]">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#2D9CDB" />
          <stop offset="100%" stopColor="#9B5DE5" />
        </linearGradient>
      </defs>
      <g>
        <circle cx="90" cy="160" r="46" fill="#FFD6E7" />
        <circle cx="200" cy="130" r="52" fill="#C5E5FF" />
        <circle cx="300" cy="180" r="44" fill="#FFE9B3" />
        <rect x="70" y="190" width="260" height="18" rx="9" fill="#E2E8F0" />
        <g>
          <path
            d="M70 210c20-18 50-18 70 0"
            fill="none"
            stroke="url(#g1)"
            strokeWidth="6"
          />
          <path
            d="M180 210c20-18 50-18 70 0"
            fill="none"
            stroke="#FFB703"
            strokeWidth="6"
          />
          <path
            d="M290 210c20-18 50-18 70 0"
            fill="none"
            stroke="#9B5DE5"
            strokeWidth="6"
          />
        </g>
        <g>
          <circle cx="200" cy="90" r="6" fill="#2D9CDB" className="twinkle" />
          <circle cx="330" cy="120" r="4" fill="#FFB703" className="twinkle" />
          <circle cx="240" cy="60" r="5" fill="#9B5DE5" className="twinkle" />
        </g>
      </g>
    </svg>
  );
}

function AnimatedShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-10 -left-10 h-40 w-40 rounded-3xl bg-primary/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-24 right-10 h-24 w-24 rounded-full bg-accent/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rotate-12 rounded-xl bg-primary/10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
}

function Programs() {
  return (
    <section>
      <div className="container mx-auto px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold">Our Programs</h2>
            <p className="mt-1 text-slate-600">
              Pre-Nursery to UKG with engaging, age-appropriate learning.
            </p>
          </div>
          <Link to="/programs" className="hidden md:inline-flex btn-accent">
            Explore
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="text-3xl">{f.icon}</div>
              <div className="mt-3 font-semibold">{f.title}</div>
              <p className="text-sm text-slate-600">{f.desc}</p>
              <Link
                to={f.to}
                className="mt-4 inline-flex items-center text-primary font-semibold group-hover:underline"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadStrip() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div>
          <div className="text-sm uppercase tracking-wider text-slate-500">
            Quick Enquiry
          </div>
          <div className="text-xl font-bold">Admissions • NTT • Franchise</div>
        </div>
        <input
          placeholder="Parent Name"
          className="rounded-full border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="flex gap-3">
          <input
            placeholder="Phone"
            className="flex-1 rounded-full border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          />
          <Link to="/admissions" className="btn-gradient">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
