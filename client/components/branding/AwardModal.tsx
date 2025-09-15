import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sparkles from "./Sparkles";
import { EmphasizedHeading } from "./AwardModal.helpers";

export interface AwardModalProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  heading?: string;
  subheading?: string;
  supporting?: string;
}

export default function AwardModal({
  open,
  onClose,
  imageSrc,
  heading = "Odisha’s No. 1 School",
  subheading = "Ankuram Kids",
  supporting = "Where Little Minds ,Grow Big Dreams",
}: AwardModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevFocus = useRef<Element | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      prevFocus.current = document.activeElement;
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 0);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (prevFocus.current instanceof HTMLElement) prevFocus.current.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[1000]" aria-hidden={!open}>
          <motion.div
            className="absolute inset-0 bg-black/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="absolute inset-0 grid place-items-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="award-heading"
              aria-describedby="award-desc"
              className="relative w-full max-w-[680px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Sparkles />
              <button
                ref={closeRef}
                aria-label="Close"
                onClick={onClose}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white"
              >
                ×
              </button>
              <div className="px-6 pb-6 pt-12 text-center md:px-10 md:pt-14">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Award Trophy"
                    className="mx-auto w-[72%] max-w-[360px] rounded-xl shadow-[0_0_60px_rgba(251,191,36,.25)] ring-1 ring-white/10"
                  />
                ) : (
                  <div className="mx-auto grid place-items-center w-[72%] max-w-[360px]">
                    <svg
                      viewBox="0 0 200 240"
                      className="w-full drop-shadow-[0_0_40px_rgba(251,191,36,.4)]"
                      aria-label="Number One"
                    >
                      <defs>
                        <linearGradient id="gold" x1="0" x2="1">
                          <stop offset="0%" stopColor="#FDE68A" />
                          <stop offset="50%" stopColor="#FBBF24" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="40"
                        y="190"
                        width="120"
                        height="18"
                        rx="9"
                        fill="#D1A54C"
                        opacity="0.25"
                      />
                      <path
                        d="M110 190V40l-28 18v-22l36-22h12v176h-20z"
                        fill="url(#gold)"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}
                <EmphasizedHeading text={heading} />
                <div className="mt-1 text-[#FBBF24] font-semibold">
                  {subheading}
                </div>
                {/* <p
                  id="award-desc"
                  className="mt-2 text-sm md:text-base text-white/80"
                >
                  {supporting.split("")[0]}
                  <span className="text-red-400 font-semibold">
                  Where Little Minds ,Grow Big Dreams

                  </span>
                  {supporting.includes("") ? "" : null}
                </p> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
