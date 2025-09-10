import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,_rgba(249,168,37,0.15),transparent_60%),_radial-gradient(60%_50%_at_60%_60%,_rgba(45,156,219,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.92 }} />
      <Sparkles />
      <div className="relative text-center text-white px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs tracking-wide text-white/70 mb-3">#1 Kids School in Odisha</motion.div>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fc33be33aaf9a474e8919135a251dd5d3?format=webp&width=800"
          alt="Odisha's No.1 School trophy"
          className="mx-auto w-[74%] max-w-[520px] rounded-2xl shadow-2xl ring-1 ring-white/10"
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-4 font-extrabold text-xl font-display">ANKURAM KIDS</motion.div>
      </div>
    </div>
  );
}
