import { useMemo } from "react";

export default function Sparkles({ count = 90, colors = ["#F5D27A", "#F9A825", "#FFB703", "#FFF3BF"] }: { count?: number; colors?: string[] }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 2.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      })),
    [count, colors],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: 9999,
            opacity: 0.7,
            filter: "blur(0.2px)",
            animation: `twinkle 3.2s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
