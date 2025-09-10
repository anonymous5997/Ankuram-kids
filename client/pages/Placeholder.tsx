export default function Placeholder({ title = "Coming Soon" }: { title?: string }) {
  return (
    <div className="relative">
      <section className="bg-hero">
        <div className="container mx-auto px-4 py-14">
          <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight">{title}</h1>
          <p className="mt-3 max-w-2xl text-slate-600">This page is ready to be filled with rich, animated content. Tell us to generate it next. Navigation, styling, and accessibility are already in place.</p>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-slate-500">Content placeholder</div>
        </div>
      </section>
    </div>
  );
}
