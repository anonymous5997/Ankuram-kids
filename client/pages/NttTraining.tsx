import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const certImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F1f35d8224d9940dea7e0711b946cf3e9?format=webp&width=800";

function Badge({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-amber-600"
      >
        <path d="M12 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 14.77 6.22 16.7l.91-5.32L3.27 7.62l5.34-.78L12 2z" />
      </svg>
      {text}
    </motion.span>
  );
}

export default function NttTraining() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const formData = new FormData();
      formData.append("formType", "ntt");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("subject", form.subject);

      // Replace with your deployed Apps Script URL
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwDYZSc2q80hjnDLtfG2CROgl-b7hONlvTl57wOAvm-TFX0WxWXjLRMMQZOmQ04qmxJCQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (data.status === "success") {
        setStatus("Submitted! We'll contact you soon.");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
        });
      } else {
        setStatus(`Submission failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Submission failed. Please try again.");
    }
  }

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
            A premium, industry-aligned NTT program at Ankuram Kids,
            Bhubaneswar—crafted for passionate educators ready to inspire young
            learners.
          </motion.p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Badge text="19 Years of Success" />
            <Badge text="Quality Assurance" />
            <Badge text="IAO Accredited" />
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 border border-border shadow-sm"
          >
            <div className="text-xl font-extrabold font-display mb-2">
              Benefits and Career Opportunities
            </div>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>
                Entry to a fast-growing demand for qualified nursery teachers and early childhood educators
              </li>
              <li>
                Preparation for roles such as:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Nursery Teacher</li>
                  <li>Preschool Educator</li>
                  <li>Childcare Centre Administrator</li>
                  <li>Educational Resource Designer</li>
                  <li>Parent Educator</li>
                  <li>Special Education Assistant</li>
                </ul>
              </li>
              <li>
                Access to support from experienced tutors and comprehensive curriculum aligned with NEP 2020 and international standards
              </li>
            </ul>
            <div className="mt-6 text-xl font-extrabold font-display">Affiliation</div>
            <p className="mt-2 text-slate-700">
              All India Early Childhood Care & Education, New Delhi (ISO 9001:2015 Certified)
            </p>
            <div className="mt-6 text-xl font-extrabold font-display">
              Course Options
            </div>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li>1 & 2 Years Course (Online/Offline) options</li>
              <li>Diploma in Child Education & Psychology (1 Year)</li>
              <li>Advance Diploma in Child Education & Applied Psychology (2 Years)</li>
            </ul>
            <div className="mt-6 text-xl font-extrabold font-display">
              Authorized Centre
            </div>
            <p className="mt-2 text-slate-700">
              Ankuram Kids, Kalinga Vihar, Bhubaneswar
            </p>
            <div className="mt-6 text-xl font-extrabold font-display">Contact</div>
            <p className="mt-2 text-slate-700">
              8660307204, 7848904465
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 border border-border shadow-sm"
          >
            <div className="text-xl font-extrabold font-display">
              Authentic Certificates
            </div>
            <p className="mt-2 text-slate-700">
              Certificates issued to successful trainees:
            </p>
            <img
              src={certImage}
              alt="NTT Certificates"
              className="mt-4 w-full rounded-xl shadow"
            />
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
          ].map((feature, i) => (
            <motion.div
              key={feature.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${feature.c} border border-border/60`}
            >
              <div className="text-lg font-extrabold font-display">{feature.t}</div>
              <p className="mt-2 text-slate-700">{feature.d}</p>
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
            <p className="text-slate-600 mb-1">
              Seats are limited. Fill the form to apply for NTT Training.
            </p>

            <form
              className="w-full max-w-md flex flex-col gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring"
              />
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring"
              />
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring"
              />
              <input
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring"
              />
              <Button size="lg" className="btn-gradient font-bold" type="submit">
                Submit
              </Button>
              {status && (
                <div className="text-sm text-slate-500 mt-2 whitespace-pre-wrap">{status}</div>
              )}
            </form>

            <div className="mt-2 text-xs text-slate-500">
              We’ll get back within 1–2 business days.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}