import { motion } from "framer-motion";

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

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
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
            title="Life at Ankuram Kids"
            subtitle="A joyful place where curiosity blossoms, friendships flourish, and confident learners take root."
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
                t: "Playful Learning",
                d: "Hands-on, multi-sensory experiences that spark curiosity and build strong foundations in literacy, numeracy, and life skills.",
              },
              {
                t: "Caring Mentors",
                d: "Experienced, warm teachers who nurture every child’s unique potential with patience, encouragement, and positive guidance.",
              },
              {
                t: "Safe & Happy Spaces",
                d: "Bright, child-friendly classrooms with CCTV, hygiene-first practices, and joyful environments where children feel at home.",
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
    </div>
  );
}
