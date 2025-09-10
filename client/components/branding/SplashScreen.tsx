import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <Confetti />
      <div className="text-center">
        <div className="text-xs tracking-wide text-slate-500 mb-2">#1 Kids School in Odisha</div>
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative inline-flex items-center justify-center">
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=400" alt="Ankuram Kids" className="h-14 w-auto logo-glow" />
        </motion.div>
        <div className="mt-3 font-extrabold text-2xl font-display">ANKURAM KIDS</div>
      </div>
    </div>
  );
}
