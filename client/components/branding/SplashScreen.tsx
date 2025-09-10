import Confetti from "./Confetti";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <Confetti />
      <div className="text-center">
        <div className="text-xs tracking-wide text-slate-500 mb-2">#1 Kids School in Odisha</div>
        <div className="relative inline-flex items-center justify-center">
          <img src="/ankuram-favicon.svg" alt="Ankuram Kids" className="h-16 w-16 animate-[bounce_0.9s_ease-in-out]" />
        </div>
        <div className="mt-3 font-extrabold text-2xl font-display">ANKURAM KIDS</div>
      </div>
    </div>
  );
}
