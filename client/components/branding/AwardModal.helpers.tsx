export function EmphasizedHeading({ text }: { text: string }) {
  const firstOne = text.indexOf("1");
  if (firstOne === -1) {
    return (
      <h2
        id="award-heading"
        className="mt-6 font-display text-2xl md:text-3xl font-extrabold"
      >
        {text}
      </h2>
    );
  }
  const before = text.slice(0, firstOne);
  const after = text.slice(firstOne + 1);
  return (
    <h2
      id="award-heading"
      className="mt-6 font-display text-2xl md:text-3xl font-extrabold"
    >
      {before}
      <span className="relative inline-block">
        1
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_12px_rgba(251,191,36,.6)]"
        ></span>
      </span>
      {after}
    </h2>
  );
}
