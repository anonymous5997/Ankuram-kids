import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  HandCoins,
  Clock,
  ShieldCheck,
  Medal,
  MapPin,
  Users,
  Building2,
  IndianRupee,
  Factory,
  Sparkle,
  BookOpenCheck,
  Phone,
  CheckCircle2,
} from "lucide-react";

const logoUrl =
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=500";

export default function Franchise() {
  return (
    <div className="relative">
      <Hero />
      <Highlights />
      <Ages />
      <Opportunity />
      <Supports />
      <Motivation />
      <Contact />
      <Partners />
      <Procedures />
      <Terms />
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl font-bold"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="grid md:grid-cols-[1fr,480px] gap-8 items-center">
          <div>
            <img
              src={logoUrl}
              alt="Ankuram Kids"
              className="h-14 w-auto logo-glow"
            />
            <motion.h1
              className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              A BEST PLACE TO NURTURE THE LITTLE MINDS
            </motion.h1>
            <motion.p
              className="mt-3 text-lg text-slate-700 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              BE YOUR OWN BOSS AND START YOUR OWN PRE-SCHOOL
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="btn-gradient">
                Enquire Now
              </a>
              <a href="tel:8660307204" className="btn-accent">
                Call 8660307204
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-white p-6 shadow-xl"
          >
            <div className="text-sm text-slate-500">Franchise Snapshot</div>
            <ul className="mt-3 grid grid-cols-2 gap-3">
              {[
                { icon: HandCoins, t: "Minimum Investment" },
                { icon: Medal, t: "High Returns" },
                { icon: ShieldCheck, t: "No Royalty Fees" },
                { icon: Clock, t: "Few Hours/Day" },
              ].map((i, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 rounded-xl bg-primary/5 px-3 py-2 text-sm"
                >
                  <i.icon className="h-4 w-4 text-primary" /> {i.t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: HandCoins, t: "MINIMUM INVESTMENT" },
    { icon: Medal, t: "HIGH RETURNS" },
    { icon: BadgeCheck, t: "EASY TO RUN" },
    { icon: ShieldCheck, t: "HEALTHY WORKING ENVIRONMENT" },
    { icon: ShieldCheck, t: "NO ROYALTY FEES" },
    { icon: Building2, t: "EFFECTIVE MANAGEMENT" },
    { icon: Clock, t: "REQUIRES ONLY FEW HOURS PER DAY" },
    { icon: MapPin, t: "NO OTHER FRANCHISE WITHIN 5KM RADIUS" },
  ];
  return (
    <Section title="Franchise Highlights">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <i.icon className="h-5 w-5 text-primary" />
              <div className="font-semibold">{i.t}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Ages() {
  const levels = [
    { t: "PLAY GROUP", a: "2.5 TO 3.5 YEARS" },
    { t: "NURSERY", a: "3 TO 4 YEARS" },
    { t: "LKG", a: "4 TO 5 YEARS" },
    { t: "UKG", a: "5 TO 6 YEARS" },
  ];
  return (
    <Section title="Age Criteria">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {levels.map((l, i) => (
          <motion.div
            key={l.t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-5 text-center"
          >
            <div className="font-display text-xl font-bold">{l.t}</div>
            <div className="mt-1 text-slate-700">{l.a}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Opportunity() {
  const items = [
    { t: "BE THE OWNER OF A PREOWNED PLAY SCHOOL", icon: Building2 },
    { t: "ONE TIME INVESTMENT 5 TO 7 LAKHS", icon: IndianRupee },
    { t: "MINIMUM SPACE 1500 SQUARE FEET+", icon: Factory },
    { t: "WILLINGNESS TO WORK IN THE EDUCATIONAL SECTOR", icon: Users },
    { t: "QUICK RETURN ON INVESTMENT", icon: HandCoins },
  ];
  return (
    <Section title="Opportunity Details">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <i.icon className="mt-1 h-5 w-5 text-primary" />
              <div className="font-semibold">{i.t}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Supports() {
  const items = [
    { t: "SET-UP SUPPORT" },
    { t: "ACADEMIC SUPPORT" },
    { t: "TRAINING SUPPORT" },
    { t: "MANAGEMENT SUPPORT" },
  ];
  return (
    <Section title="Service and Supports">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm"
          >
            <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div className="font-semibold">{i.t}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Motivation() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="font-display text-2xl font-bold">
          FULFILL YOUR DREAM BY PROVIDING THE BETTER EDUCATION TO THE TINY-TOTS
          WITH A PROFITABLE PLATFORM IN PRE-SCHOOLING EDUCATION
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.append("formType", "franchise");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz8_arI44vAi82ycrSPOWxDltN8nDZ7UpQ25GAwXgohJPA3pT0pBuxPzN7fcbKKK2-Ciw/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        alert("Thank you! We will contact you soon.");
        form.reset();
      } else {
        alert("Submission failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <Section title="Contact Information">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="font-semibold">HEAD OFFICE</div>
          <div className="mt-1 text-slate-700">
            ANKURAM KIDS , A unit of Ekagrata Shiksha Foundation , HIG-8, k-6 , Pin-751019 , Kalinga Vihar, Bhubaneswar ,Odisha
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />{" "}
            <a className="hover:underline" href="tel:8660307204">
              8660307204
            </a>{" "}
            /{" "}
            <a className="hover:underline" href="tel:7848904465">
              7848904465
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="font-semibold">
            Ready to join the Ankuram Kids family? Fill out the form below to start your exciting journey as a valued franchise partner. We’re excited to nurture success together!
          </div>
          <form className="mt-3 grid gap-3" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              name="email"
              placeholder="Mail"
              type="email"
              className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              name="city"
              placeholder="City"
              className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              className="btn-gradient"
              disabled={loading}
              type="submit"
            >
              {loading ? "Submitting..." : "Request a Callback"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Partners() {
  const centres = [
    "ANKURAM KIDS CENTRE – COLLEGE SQUARE, SPINNING MILL, ASKA, GANJAM",
    "ANKURAM KIDS CENTRE – COLLEGE ROAD, NEAR SHIV TEMPLE, UDAYAGIRI, KANDHAMAL",
    "ANKURAM KIDS CENTRE – KHAJURINALA, BALIGUDA, KANDHAMAL",
    "ANKURAM KIDS CENTRE – SOM VIHAR, BALIANTA, NEAR ATALA, BHUBANESWAR",
  ];
  return (
    <Section title="Our Franchise Partners">
      <ul className="grid gap-2 md:grid-cols-2">
        {centres.map((c) => (
          <li
            key={c}
            className="rounded-lg border border-border bg-white p-3 text-sm shadow-sm"
          >
            {c}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Procedures() {
  const items = [
    "REMAIN IN YOUR CITY/TOWN",
    "SAVE TIME, EFFORT, AND EXPENSES INVOLVED IN CREATING A BRAND NAME",
    "CREATE YOUR OWN PERSONALITY OF BEING AN ESTEEMED EDUCATIONIST",
    "EFFECTIVE MANAGEMENT",
  ];
  return (
    <Section title="Procedures to Join the Ankuram Kids Family">
      <ul className="grid gap-2 md:grid-cols-2">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-start gap-2 rounded-lg border border-border bg-white p-3 text-sm shadow-sm"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {i}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Terms() {
  const items = [
    "Agreement will be for 3 years initially",
    "No Royalty",
    "Non-Refundable Franchise Fee",
    "No other Ankuram Kids Centre will be established within 5km radius",
    "All transactions shall be made in favor of Ekagrata Shiksha Foundation",
  ];
  return (
    <Section title="Terms and Conditions">
      <ul className="grid gap-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {i}
          </li>
        ))}
      </ul>
    </Section>
  );
}
