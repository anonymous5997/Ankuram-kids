import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const certImage = "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F1f35d8224d9940dea7e0711b946cf3e9?format=webp&width=800";

function Badge({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-600">
        <path d="M12 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 14.77 6.22 16.7l.91-5.32L3.27 7.62l5.34-.78L12 2z"/>
      </svg>
      {text}
    </motion.span>
  );
}

export default function NttTraining() {
  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-extrabold leading-tight headline-gradient"
          >
            Nursery Teacher’s Training (NTT)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-3 text-slate-600"
          >
            A premium, industry-aligned NTT program at Ankuram Kids, Bhubaneswar—crafted for passionate educators ready to inspire young learners.
          </motion.p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Badge text="19 Years of Success" />
            <Badge text="Quality Assurance" />
            <Badge text="IAO Accredited" />
          </div>
          <div className="mt-6">
            <Button asChild size="lg" className="btn-gradient font-bold">
              <a href="#apply">Enroll Now</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 border border-border shadow-sm"
          >
            <div className="text-xl font-extrabold font-display">Affiliation</div>
            <p className="mt-2 text-slate-700">
              All India Early Childhood Care & Education, New Delhi (ISO 9001:2015 Certified)
            </p>
            <div className="mt-6 text-xl font-extrabold font-display">Course Options</div>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li>1 & 2 Years Course (Online/Offline) options</li>
              <li>Diploma in Child Education & Psychology (1 Year)</li>
              <li>Advance Diploma in Child Education & Applied Psychology (2 Years)</li>
            </ul>
            <div className="mt-6 text-xl font-extrabold font-display">Authorized Centre</div>
            <p className="mt-2 text-slate-700">Ankuram Kids, Kalinga Vihar, Bhubaneswar</p>
            <div className="mt-6 text-xl font-extrabold font-display">Contact</div>
            <p className="mt-2 text-slate-700">8660307204, 7735889953, 7848904465</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 border border-border shadow-sm"
          >
            <div className="text-xl font-extrabold font-display">Authentic Certificates</div>
            <p className="mt-2 text-slate-700">Certificates issued to successful trainees:</p>
            <img src={certImage} alt="NTT Certificates" className="mt-4 w-full rounded-xl shadow" />
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Expert Mentorship",
              d: "Guidance from experienced early years educators with classroom-based practice.",
              c: "from-sky-100 to-blue-100",
            },
            {
              t: "Modern Curriculum",
              d: "Play-based pedagogy, assessment strategies, and child psychology aligned with NEP-2020.",
              c: "from-emerald-100 to-teal-100",
            },
            {
              t: "Career Support",
              d: "Placement assistance with preschools and the opportunity to intern at Ankuram centres.",
              c: "from-amber-100 to-yellow-100",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${c.c} border border-border/60`}
            >
              <div className="text-lg font-extrabold font-display">{c.t}</div>
              <p className="mt-2 text-slate-700">{c.d}</p>
            </motion.div>
          ))}
        </div>

        <div id="apply" className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center gap-3 rounded-2xl border border-border bg-white px-8 py-6 shadow-sm"
          >
            <div className="text-xl font-extrabold font-display">Ready to Begin?</div>
            <p className="text-slate-600">Seats are limited. Apply today and start your journey as an Early Years Educator.</p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="btn-gradient font-bold">
                <a href="/admissions">Enroll Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+918660307204">Call Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
