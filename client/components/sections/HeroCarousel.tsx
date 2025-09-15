import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "./ankuram_kids_lottie.json"; // Replace with your Lottie file

const slides = [
  {
    id: 1,
    titleLines: [
      "ANKURAM KIDS",
      "where young hearts",
      "learn & blossom",
    ],
    tagline: "A joyful preschool experience that nurtures growth, creativity and confidence.",
    media: "/Ankuram2.jpg",
    bg: "from-[#4FC3F7] via-[#81C784] to-[#FF8A65]",
    stats: [
      { label: "Centres", value: 5 },
      { label: "Happy Kids", value: 800 },
      { label: "Teachers", value: 60 },
    ],
  },
  {
    id: 2,
    titleLines: [
      "Play",
      "Learn",
      "Grow Together",
    ],
    tagline: "Every day is an adventure in learning through play & discovery.",
    media: "/Ankuram1.jpg",
    bg: "from-[#FFB74D] via-[#4DD0E1] to-[#A1887F]",
    stats: [
      { label: "Activities", value: 120 },
      { label: "Years", value: 3 },
      { label: "Parents Loved Us", value: 150 },
    ],
  },
];

export default function HeroAnkuram() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const active = slides[activeIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className={`absolute inset-0 h-full w-full bg-gradient-to-br ${active.bg}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating playful shapes */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 bg-pink-300/30 rounded-full blur-lg z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className="absolute bottom-20 right-24 w-24 h-24 bg-yellow-200/40 rounded-2xl rotate-12 blur-lg z-10"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-200/60 rounded-full blur-md z-10"
            animate={{ x: [0, 30, -20, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          />
          <div className="relative container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-8 pt-24">
            {/* Left Text & Stats */}
            <motion.div
              className="flex-1 max-w-2xl space-y-6 text-white z-20"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                {active.titleLines.map((line, i) => (
                  <div key={i} className="mb-2">{line}</div>
                ))}
              </div>
              <p className="text-lg md:text-xl text-white/90">
                {active.tagline}
              </p>
              <div className="flex space-x-4 mt-4">
                <Link
                  to="/admissions"
                  className="px-8 py-3 bg-white text-[#4FC3F7] font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
                >
                  Admissions Open
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 bg-white/70 text-white font-bold rounded-full shadow-lg hover:bg-white/90 transition"
                >
                  Learn More
                </Link>
              </div>
              {/* Stats */}
              <div className="mt-8 flex space-x-8">
                {active.stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="flex flex-col items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
                  >
                    <div className="text-4xl font-extrabold">{s.value}</div>
                    <div className="text-sm uppercase">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Right Media & Animation */}
            <motion.div
              className="flex-1 flex flex-col items-center md:justify-end z-20"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={active.media}
                alt="Ankuram Kids"
                className="w-80 md:w-[500px] rounded-2xl shadow-2xl object-cover mb-10 border-4 border-white/80"
              />
              {/* Lottie Animation - replace animationData if needed */}
              <div className="w-48 h-48">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      {/* Logo & Tagline overlay */}
      <div className="absolute top-28 left-8 flex flex-col items-start z-40">
        {/* <img
          src="/ankuram-kids-logo.png"
          alt="Ankuram Kids Logo"
          className="w-48 h-24 mb-2 drop-shadow-xl bg-white/60 rounded-xl p-2 backdrop-blur"
        /> */}
        <span className="bg-white/80 text-[#4FC3F7] px-4 py-2 rounded-full font-bold text-lg shadow-md">
          A BEST PLACE TO NURTURE THE LITTLE MINDS
        </span>
      </div>
    </section>
  );
}
