import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  { title: "Pre-Nursery", desc: "Foundational play-based learning.", icon: "🧩", to: "/programs" },
  { title: "Nursery", desc: "Explore, create, and grow.", icon: "🎨", to: "/programs" },
  { title: "LKG", desc: "Letters, numbers & curiosity.", icon: "🔤", to: "/programs" },
  { title: "UKG", desc: "Ready for primary school.", icon: "📚", to: "/programs" },
];

export default function Index() {
  return (
    <div className="relative">
      <HeroCarousel />
      <Programs />
      <LeadStrip />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="absolute inset-0 -z-10">
        <AnimatedShapes />
      </div>
      <motion.img
        src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Happy classroom"
        className="absolute inset-y-0 left-0 -z-10 h-full w-1/2 object-cover opacity-20 blur-[1px]"
        initial={{ scale: 1.05 }}
        animate={{ scale: [1.05, 1.1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 pt-16 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow ring-1 ring-primary/20">
                #1 Kids School in Odisha
              </div>
              <motion.h1 className="mt-4 text-4xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="headline-gradient">Where Little Minds</span>
                <br />
                <span className="text-slate-800">Grow Big Dreams</span>
              </motion.h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">A modern, colorful preschool experience with expert educators, engaging activities, and a safe, joyful campus.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/admissions" className="btn-gradient text-base font-bold">Apply Now</Link>
                <Link to="/ntt-training" className="btn-accent">NTT Training</Link>
                <Link to="/franchise" className="btn-accent">Franchise Opportunity</Link>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              className="relative mx-auto w-full max-w-[520px] aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur ring-1 ring-border overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="absolute inset-0">
                <video
                  className="h-full w-full object-cover brightness-[.8] saturate-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Happy preschoolers learning in classroom"
                >
                  <source src="https://videos.pexels.com/video-files/8088526/8088526-sd_426_240_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/15" />
              </div>
            </motion.div>
            <motion.div className="absolute -top-4 -left-6 hidden md:block" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <Badge>Safe & Caring</Badge>
            </motion.div>
            <motion.div className="absolute -bottom-6 -right-4 hidden md:block" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <Badge>Playful Learning</Badge>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <path d="M70 210c20-18 50-18 70 0" fill="none" stroke="url(#g1)" strokeWidth="6" />
          <path d="M180 210c20-18 50-18 70 0" fill="none" stroke="#FFB703" strokeWidth="6" />
          <path d="M290 210c20-18 50-18 70 0" fill="none" stroke="#9B5DE5" strokeWidth="6" />
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow ring-1 ring-border">{children}</div>
  );
}

function AnimatedShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute -top-10 -left-10 h-40 w-40 rounded-3xl bg-primary/20" animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute top-24 right-10 h-24 w-24 rounded-full bg-accent/30" animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 rotate-12 rounded-xl bg-primary/10" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
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
            <p className="mt-1 text-slate-600">Pre-Nursery to UKG with engaging, age-appropriate learning.</p>
          </div>
          <Link to="/programs" className="hidden md:inline-flex btn-accent">Explore</Link>
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
              <Link to={f.to} className="mt-4 inline-flex items-center text-primary font-semibold group-hover:underline">Learn more →</Link>
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
          <div className="text-sm uppercase tracking-wider text-slate-500">Quick Enquiry</div>
          <div className="text-xl font-bold">Admissions • NTT • Franchise</div>
        </div>
        <input placeholder="Parent Name" className="rounded-full border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
        <div className="flex gap-3">
          <input placeholder="Phone" className="flex-1 rounded-full border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
          <Link to="/admissions" className="btn-gradient">Get Started</Link>
        </div>
      </div>
    </section>
  );
}
