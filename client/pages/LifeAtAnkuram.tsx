import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dumbbell, Shield, Palette } from "lucide-react";

const images = [
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F23bd1f4e1b954e618b2643e525ada631?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F1b4411ce82714b27a91ec7e779fdcf6d?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F37543dba6c4d4dd2b413b90bbda6fa84?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Ffdcafc6ae57446a8b3ba11f9b4cf15db?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F65242ed61b2749cf8b751ac2f3b4b572?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F6b35a92ca7154ac491dbeef13464a81f?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F6fec88981fb84b87b017d6743945f9fa?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F4bf9d5ba2bd841608c2e36fd98557758?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F6139e27abb0b479c97cfc1c1aedc1439?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fcb62451065c2484ba7b714276f43a3cb?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2F1f35d8224d9940dea7e0711b946cf3e9?format=webp&width=800",
];

const videoUrl =
  "https://cdn.builder.io/o/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fe2769502f59c42c495f2b442f1a91b5b?alt=media&token=d30f9ffc-cda9-4313-8c0c-81b1a37d3223&apiKey=ca48bdd83f664eed8f79c5ce34142229";

function SectionHeader({ title, subtitle, overline }: { title: string; subtitle?: string; overline?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {overline && (
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-widest text-primary font-semibold">
          {overline}
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-5xl font-extrabold leading-tight headline-gradient"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-slate-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default function LifeAtAnkuram() {
  return (
    <div className="pb-20">
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-emerald-50 to-amber-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <SectionHeader
            overline="Life at Ankuram Kids"
            title="Together, we play, learn and grow"
            subtitle="We foster steady growth and multi‑faceted development for ages 2–6 through thoughtfully designed preschool activities."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.slice(0, 5).map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <img src={src} alt="Ankuram moments" className="w-full h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </motion.figure>
            ))}
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-full lg:col-span-1 rounded-2xl overflow-hidden shadow-sm bg-white"
            >
              <video src={videoUrl} controls playsInline className="w-full h-64 object-cover" />
            </motion.figure>
            {images.slice(5).map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <img src={src} alt="Ankuram activities" className="w-full h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </motion.figure>
            ))}
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Ankuram Kids Active Club",
                d: "Sports and physical development program for ages 3–6 to build fitness, coordination, teamwork, and joy.",
              },
              {
                t: "Caring Mentors",
                d: "Experienced, warm teachers who nurture every child’s unique potential with patience, encouragement, and positive guidance.",
              },
              {
                t: "Safe, Child‑Centric Infrastructure",
                d: "Bright, hygienic classrooms with CCTV, ergonomic furniture, and quality learning aids that complement our curriculum.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 bg-white/80 backdrop-blur border border-border shadow-sm"
              >
                <div className="text-lg font-extrabold font-display">{c.t}</div>
                <p className="mt-2 text-slate-600">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <SectionHeader
          title="A Day Filled With Wonder"
          subtitle="Circle time songs, creative centers, outdoor play, story worlds, and celebrations—every day offers new discoveries."
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl p-6 bg-gradient-to-r from-sky-100 via-emerald-100 to-amber-100">
            <ul className="space-y-3 text-slate-700">
              <li>Welcome routines that build confidence and independence</li>
              <li>Inquiry-based projects and playful learning corners</li>
              <li>Music, movement, yoga, art, and storytelling</li>
              <li>Snack, rest, and reflective circle time</li>
              <li>Parent updates and celebrations that build community</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-border shadow-sm">
            <p className="text-slate-700">
              We believe childhood is a time to explore, express, and connect.
              Our environments are carefully designed to be joyful, inclusive,
              and developmentally rich—so little minds grow big dreams.
            </p>
            <a href="/admissions" className="btn-gradient inline-flex mt-4 font-bold">Enroll Now</a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl p-6 bg-white border border-border shadow-sm">
            <div className="flex items-center gap-2 text-xl font-extrabold font-display"><Dumbbell className="w-5 h-5 text-primary" /> Ankuram Kids Active Club</div>
            <p className="mt-2 text-slate-700">A sports and physical development curriculum specially crafted for preschoolers aged 3–6 years.</p>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
              <li>Builds core strength, balance, and coordination</li>
              <li>Encourages teamwork, confidence, and sportsmanship</li>
              <li>Fun circuits, yoga, rhythm, and movement games</li>
            </ul>
            <Button asChild className="btn-gradient font-bold mt-4"><a href="/admissions">Join the Active Club</a></Button>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white border border-border shadow-sm">
            <img src={images[0]} alt="Active Club at Ankuram Kids" className="w-full h-80 object-cover" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-50 via-white to-amber-50 border border-border">
            <div className="flex items-center gap-2 text-xl font-extrabold font-display"><Shield className="w-5 h-5 text-emerald-600" /> Safe, Child‑Centric Infrastructure</div>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
              <li>CCTV, hygiene‑first practices, and restricted entry</li>
              <li>Ergonomic, colourful classrooms that invite exploration</li>
              <li>Quality teaching and learning aids complement our curriculum</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-border shadow-sm">
            <div className="flex items-center gap-2 text-xl font-extrabold font-display"><Palette className="w-5 h-5 text-amber-600" /> Designed for all‑round growth</div>
            <p className="mt-2 text-slate-700">A thoughtful blend of style, aesthetics, reliability, and functionality ensures children feel joyful, safe, and inspired every day.</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {images.slice(7,10).map((src) => (
                <img key={src} src={src} alt="Ankuram infrastructure" className="h-24 w-full object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 bg-white border border-border shadow-sm">
            <div className="text-xl font-extrabold font-display">Quick Contact</div>
            <ul className="mt-2 text-slate-700 space-y-1">
              <li>Phone: 8660307204 / 7735889953 / 7848904465</li>
              <li>Email: info@ankuramkids.com</li>
              <li>Location: Kalinga Vihar, Bhubaneswar</li>
            </ul>
            <Button asChild className="btn-gradient font-bold mt-4"><a href="/admissions">Visit Ankuram Kids</a></Button>
          </div>
          <form onSubmit={(e)=>{e.preventDefault();}} className="rounded-2xl p-6 bg-white border border-border shadow-sm grid gap-3">
            <div className="text-xl font-extrabold font-display">Send a quick inquiry</div>
            <Input placeholder="Your name" required />
            <Input placeholder="Phone number" required />
            <Textarea rows={4} placeholder="How can we help?" required />
            <Button type="submit" className="btn-gradient font-bold">Send Inquiry</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
