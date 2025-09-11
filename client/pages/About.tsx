import { motion } from "framer-motion";
import { BookOpen, Sprout, School, Stars, Quote, CheckCircle2, Handshake, Lightbulb, Users, Leaf, HeartHandshake, BadgeCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const values = [
  { label: "Self-management", icon: BadgeCheck },
  { label: "Individuality", icon: Users },
  { label: "Self-learning", icon: BookOpen },
  { label: "Environmental awareness", icon: Leaf },
  { label: "Creativity", icon: Lightbulb },
  { label: "Teamwork", icon: Handshake },
  { label: "Empathy", icon: HeartHandshake },
  { label: "Respect", icon: Stars },
  { label: "Loyalty", icon: CheckCircle2 },
  { label: "Honesty", icon: CheckCircle2 },
];

const goldenRules = [
  "Always speak the truth.",
  "Respect and obey teachers.",
  "Honour elders.",
  "Help fellow students.",
  "Be punctual.",
  "Never speak ill of others.",
  "Keep words soft and sweet.",
  "Do everything decently and orderly.",
];

export default function About() {
  return (
    <div className="relative">
      <HeroCard />
      <ChairDirector />
      <Values />
      <Curriculum />
      <Fees />
      <Golden />
      <Gallery />
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="container mx-auto px-4 py-14">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-bold">
        {title}
      </motion.h2>
      {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function HeroCard() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-border bg-white/80 backdrop-blur p-6 md:p-10 shadow-xl relative overflow-hidden">
          <motion.div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-primary/20" animate={{ y: [0, 12, 0] }} transition={{ duration: 8, repeat: Infinity }} />
          <div className="flex items-start gap-6">
            <div className="hidden md:block text-5xl">🌱</div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">About Us</h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-slate-700 leading-relaxed max-w-4xl">
                The ANKURAM KIDS is an English medium pre-school founded in 2022, run by the Board of Trustees of Ekagrata Shiksha Foundation. The school aims to provide a nurturing environment that fosters intellectual, emotional, social, and cultural growth in every child. The vision is to nurture little minds and create a vibrant, engaging learning community where young learners can thrive and develop essential life skills in a joyful setting.
              </motion.p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Badge icon={Sprout}>Growth</Badge>
                <Badge icon={School}>Safe Campus</Badge>
                <Badge icon={BookOpen}>Playful Learning</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
      <Icon className="h-4 w-4" /> {children}
    </span>
  );
}

function ChairDirector() {
  return (
    <Section title="Messages from the Chairman and Director">
      <div className="grid gap-6 md:grid-cols-2">
        <FlipCard
          name="Chairman’s Message"
          photo="https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=200"
          text="Preschool is the first impression a child gets of schooling. At Ankuram Kids Pre-school, we create a healthy, creative, and vibrant atmosphere, engaging each child in a playful, nurturing way. Beyond personal interaction, digital media like animations, infographics, videos, and interactive games augment the learning process, supporting growth in both academics and social behavior. A strong, fun, and safe environment is our foundation."
        />
        <FlipCard
          name="Director’s Message"
          photo="https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=200"
          text="Welcome to Ankuram Kids—a place where the seeds of knowledge are planted with care. Our commitment is to early education, ensuring every child feels secure, supported, and excited to learn, helping them become well-rounded individuals."
        />
      </div>
    </Section>
  );
}

function FlipCard({ name, text, photo }: { name: string; text: string; photo?: string }) {
  return (
    <div className="[perspective:1000px]">
      <div className="group relative h-full min-h-[260px] w-full rounded-2xl border border-border bg-white shadow-sm transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 p-6 [backface-visibility:hidden]">
          <div className="flex items-center gap-3">
            {photo && <img src={photo} alt="Profile" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30" />}
            <div>
              <div className="font-display text-xl font-bold underline decoration-wavy decoration-accent">{name}</div>
              <div className="text-slate-600">Hover to read →</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Values() {
  return (
    <Section title="Core Values" subtitle="Instilled from the earliest years to shape successful, independent learners.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {values.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.04 }}
            className="group rounded-xl border border-border bg-white p-4 text-center shadow-sm hover:shadow-md"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <v.icon className="h-6 w-6" />
            </div>
            <div className="mt-2 font-semibold">{v.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Curriculum() {
  const steps = [
    { t: "Explore", d: "Hands-on discovery with peers.", icon: Stars },
    { t: "Discover", d: "Identify interests through play.", icon: Lightbulb },
    { t: "Express", d: "Communicate ideas confidently.", icon: Quote },
    { t: "Grow", d: "Build skills and readiness.", icon: Sprout },
  ];
  return (
    <Section title="Curriculum Model" subtitle="Designed to match each child's developmental stage.">
      <div className="relative overflow-x-auto">
        <div className="min-w-[720px] md:min-w-0 grid md:grid-cols-4 gap-8 items-start">
          {steps.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%+0.5rem)] right-0 h-1 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full" />
              )}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/20 text-accent">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="font-display text-xl font-bold">{s.t}</div>
                </div>
                <p className="mt-2 text-slate-600">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Fees() {
  return (
    <Section title="Fee Rules">
      <div className="rounded-2xl border border-border bg-white p-2 md:p-4">
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: "Payment cycles", a: "Fees are due monthly, quarterly, or annually, paid in advance." },
            { q: "Vacation months", a: "Vacation month fees (April, May) must be paid before term end." },
            { q: "Refund policy", a: "Fees, once paid, are non-refundable." },
            { q: "Absences", a: "Monthly fees are due even during absences." },
            { q: "Payment method", a: "No fees are to be sent via children—parents must visit to pay fees." },
          ].map((r, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{r.q}</AccordionTrigger>
              <AccordionContent>
                <div className="text-slate-600">{r.a}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

function Golden() {
  return (
    <Section title="Golden Rules for Students">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {goldenRules.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="min-w-[260px] rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-primary font-semibold"><Stars className="h-5 w-5" /> Rule {i + 1}</div>
            <div className="mt-2">{r}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const imgs = [
    "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8613083/pexels-photo-8613083.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8613076/pexels-photo-8613076.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8612864/pexels-photo-8612864.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];
  return (
    <Section title="Life at Ankuram Kids" subtitle="Vibrant campus moments and joyful learning.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {imgs.map((src, i) => (
          <motion.div key={src} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-border">
            <img src={src} alt="Campus" className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
