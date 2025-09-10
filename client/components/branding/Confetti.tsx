import { useEffect, useMemo } from "react";

const COLORS = ["#2D9CDB", "#6C63FF", "#9B5DE5", "#FFB703", "#F9A825", "#4ADE80", "#F472B6"];

export default function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2.2 + Math.random() * 1.4,
      size: 6 + Math.random() * 10,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: Math.random() * 360,
    })), []);

  useEffect(() => {
    // no-op, confetti is CSS animated
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map(p => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: -20,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            transform: `rotate(${p.rotate}deg)`,
            borderRadius: p.size > 10 ? 4 : 2,
            opacity: 0.9,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
