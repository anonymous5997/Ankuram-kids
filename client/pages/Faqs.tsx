import { useMemo, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, Users2, Ruler, ClipboardList, Shirt, Ban, Languages, Handshake, MoveRight, Clock, MapPin, Plus, Minus } from "lucide-react";

type QA = { q: string; a: (string | { bullet: string[] })[] };

type Section = { key: string; title: string; icon: JSX.Element; items: QA[] };

const sections: Section[] = [
  {
    key: "curriculum",
    title: "Curriculum",
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      {
        q: "What is Ankuram's curriculum focus?",
        a: [
          "A holistic preschool curriculum nurturing cognitive, motor, language, and socio‑emotional development.",
          { bullet: [
            "Multi‑sensory, play‑based learning",
            "Literacy and numeracy foundations",
            "Arts, music, movement, and yoga",
          ]},
        ],
      },
      {
        q: "How is my child evaluated?",
        a: [
          "Continuous evaluation using observations, portfolios, and checklists across developmental domains.",
        ],
      },
    ],
  },
  {
    key: "admission",
    title: "Admission Process",
    icon: <ClipboardList className="w-5 h-5" />,
    items: [
      {
        q: "What is the admission process?",
        a: [
          { bullet: [
            "Book a visit and take a centre tour",
            "Meet our team for program guidance",
            "Submit form and documents; mid‑year admissions open for select programs",
          ]},
        ],
      },
      {
        q: "Age criteria for programs?",
        a: [
          "Playgroup 2–3 yrs, Nursery 3–4 yrs, LKG 4–5 yrs, UKG 5–6 yrs.",
        ],
      },
    ],
  },
  {
    key: "safety",
    title: "Safety & Security",
    icon: <Shield className="w-5 h-5" />,
    items: [
      {
        q: "How do you ensure safety?",
        a: [
          { bullet: [
            "CCTV‑enabled premises, restricted entry",
            "Police verification and trained staff",
            "Fire safety and emergency drills",
          ]},
        ],
      },
    ],
  },
  {
    key: "teachers",
    title: "Teachers & Staff",
    icon: <Users2 className="w-5 h-5" />,
    items: [
      {
        q: "Who teaches at Ankuram?",
        a: [
          "Qualified, trained early‑years educators with ongoing professional development in modern teaching methods.",
        ],
      },
    ],
  },
  {
    key: "ratio",
    title: "Student‑Teacher Ratio",
    icon: <Ruler className="w-5 h-5" />,
    items: [
      { q: "What is the ratio?", a: ["Approximately 10:1 to ensure personal attention and support."] },
    ],
  },
  {
    key: "uniform",
    title: "Uniform",
    icon: <Shirt className="w-5 h-5" />,
    items: [
      { q: "Do children wear uniforms?", a: ["Yes, separate summer and winter uniforms."] },
    ],
  },
  {
    key: "discipline",
    title: "Discipline",
    icon: <Ban className="w-5 h-5" />,
    items: [
      { q: "What is your discipline policy?", a: ["Child‑centric, positive behaviour management. No corporal punishment. Structured engagement and clear routines."] },
    ],
  },
  {
    key: "language",
    title: "Medium of Instruction",
    icon: <Languages className="w-5 h-5" />,
    items: [
      { q: "Which languages are used?", a: ["English medium with Hindi/Regional language support for comfort and inclusion."] },
    ],
  },
  {
    key: "parents",
    title: "Parent Engagement",
    icon: <Handshake className="w-5 h-5" />,
    items: [
      { q: "How are parents involved?", a: ["Centre tours, orientation programs, regular PTMs, workshops, and app‑based updates."] },
    ],
  },
  {
    key: "transfer",
    title: "Transfers",
    icon: <MoveRight className="w-5 h-5" />,
    items: [
      { q: "Are transfers possible?", a: ["Yes, inter‑centre transfers are supported subject to seat availability."] },
    ],
  },
  {
    key: "timings",
    title: "Timings & Calendar",
    icon: <Clock className="w-5 h-5" />,
    items: [
      { q: "What are the timings?", a: ["Typical operating hours align with preschool schedules; the academic calendar and holiday list are shared at admission."] },
    ],
  },
];

function Match({ text, q }: { text: string; q: string }) {
  if (!q) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 text-slate-900 rounded px-0.5">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function Faqs() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return sections;
    const q = query.toLowerCase();
    return sections
      .map((s) => ({
        ...s,
        items: s.items.filter((it) =>
          it.q.toLowerCase().includes(q) || it.a.some((a) => typeof a === "string" ? a.toLowerCase().includes(q) : a.bullet.some((b) => b.toLowerCase().includes(q)))
        ),
      }))
      .filter((s) => s.items.length > 0);
  }, [query]);

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-extrabold headline-gradient">Frequently Asked Questions</motion.h1>
          <p className="mt-3 text-slate-600">Find quick answers about curriculum, admissions, safety, and more.</p>
          <div className="mt-6 flex items-center gap-2 rounded-full border border-border bg-white p-2 shadow-sm">
            <MapPin className="w-5 h-5 text-primary/70" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions..." className="border-0 focus-visible:ring-0" />
          </div>
        </div>

        <div className="mt-12 grid gap-8">
          {filtered.map((sec) => (
            <motion.section key={sec.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white border border-border shadow-sm">
              <header className="flex items-center gap-2 p-4 border-b">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 text-slate-700">{sec.icon}</span>
                <h2 className="text-lg font-extrabold font-display">{sec.title}</h2>
              </header>
              <Accordion.Root type="multiple" className="divide-y">
                {sec.items.map((qa, idx) => (
                  <Accordion.Item key={idx} value={`${sec.key}-${idx}`} className="px-4">
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left font-semibold outline-none">
                        <span className="pr-3"><Match text={qa.q} q={query} /></span>
                        <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors group-data-[state=open]:bg-amber-200">
                          <Plus className="w-4 h-4 group-data-[state=open]:hidden" />
                          <Minus className="w-4 h-4 hidden group-data-[state=open]:block" />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="pb-4 text-slate-700">
                        {qa.a.map((ans, i) => (
                          typeof ans === "string" ? (
                            <p key={i} className="mb-2"><Match text={ans} q={query} /></p>
                          ) : (
                            <ul key={i} className="list-disc pl-6 space-y-1">
                              {ans.bullet.map((b) => (
                                <li key={b}><Match text={b} q={query} /></li>
                              ))}
                            </ul>
                          )
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.section>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg" className="btn-gradient font-bold">
            <a href="/contact">Still have questions? Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
