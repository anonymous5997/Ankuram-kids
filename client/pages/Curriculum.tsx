import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const groups = [
  {
    name: "Playgroup",
    age: "2–3 years",
    color: "from-sky-100 to-blue-100",
    summary:
      "Gentle separation, social-emotional comfort, sensory-rich play, rhymes, and exploration to develop curiosity and confidence.",
    details: [
      "Circle time songs and name games",
      "Fine-motor play: blocks, pegboards, dough",
      "Story time with picture talk",
      "Outdoor play and free exploration",
      "Parent updates and reflections",
    ],
    objectives: ["Cognitive", "Motor", "Language", "Socio-emotional"],
  },
  {
    name: "Nursery",
    age: "3��4 years",
    color: "from-emerald-100 to-teal-100",
    summary:
      "Early phonological awareness, pre-math concepts, theme-based activities, and expressive arts to build foundational skills.",
    details: [
      "Phonics readiness and rhyme awareness",
      "Counting, sorting, shapes, and patterns",
      "Free art, music & movement",
      "Thematic discovery centers",
      "Gross motor and yoga time",
    ],
    objectives: ["Cognitive", "Motor", "Language", "Socio-emotional"],
  },
  {
    name: "Lower KG",
    age: "4–5 years",
    color: "from-amber-100 to-yellow-100",
    summary:
      "Emergent literacy and numeracy, problem-solving, collaborative play, and confidence-building performances.",
    details: [
      "Intro to letters and sounds",
      "Number sense to 50 and operations through games",
      "STEM provocations and puzzles",
      "Drama, role play, and festivals",
      "Daily reading corner",
    ],
    objectives: ["Cognitive", "Motor", "Language", "Socio-emotional"],
  },
  {
    name: "Upper KG",
    age: "5–6 years",
    color: "from-fuchsia-100 to-pink-100",
    summary:
      "Reading fluency, writing readiness, math readiness, project work, values, and leadership for Grade 1 transition.",
    details: [
      "Blends and sight words",
      "Writing strokes and sentence building",
      "Number concepts to 100 with operations",
      "Project-based learning and show & tell",
      "Sports, yoga, art, and ICT exposure",
    ],
    objectives: ["Cognitive", "Motor", "Language", "Socio-emotional"],
  },
];

export default function Curriculum() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold leading-tight headline-gradient"
          >
            Our Curriculum
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-3 text-slate-600"
          >
            A joyful, 7-petal holistic approach blending experiential learning, multi-sensory play, literacy, numeracy, arts, movement, and values.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${g.color} border border-border/60`}
            >
              <div className="text-xl font-extrabold font-display">{g.name}</div>
              <div className="text-xs uppercase tracking-wide text-slate-700/80">{g.age}</div>
              <p className="mt-3 text-slate-700">{g.summary}</p>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="details">
                  <AccordionTrigger>Programme Details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {g.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="objectives">
                  <AccordionTrigger>Developmental Objectives</AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-wrap gap-2">
                      {g.objectives.map((o) => (
                        <li key={o} className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold border border-border">{o}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white border border-border shadow-sm"
          >
            <div className="text-lg font-extrabold font-display">Parent Engagement</div>
            <p className="mt-2 text-slate-700">App updates, PTMs, workshops, and portfolio sharing keep families actively involved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white border border-border shadow-sm"
          >
            <div className="text-lg font-extrabold font-display">Daily Schedule</div>
            <ul className="mt-2 text-slate-700 space-y-1">
              <li>Arrival and free play</li>
              <li>Circle time and phonics</li>
              <li>Learning centers and outdoor play</li>
              <li>Snack and quiet time</li>
              <li>Story, music, art, and home connect</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white border border-border shadow-sm"
          >
            <div className="text-lg font-extrabold font-display">Student–Teacher Ratio</div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 px-4 py-2 font-bold">10:1</div>
            <p className="mt-2 text-slate-700">Small groups ensure attention, support, and joyful participation.</p>
          </motion.div>
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg" className="btn-gradient font-bold">
            <a href="/admissions">Enroll Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
