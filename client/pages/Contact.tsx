import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const address =
  "Kalinga Vihar, HIG 19 K 6, Kalinga Vihar LIG, Patrapada, Bhubaneswar, Odisha 751019";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-extrabold headline-gradient"
          >
            Contact Us
          </motion.h1>
          <p className="mt-3 text-slate-600">
            Reach out to Ankuram Kids. We’re happy to help.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm bg-white"
          >
            <iframe
              title="Ankuram Kids Location"
              src={mapSrc}
              className="w-full h-[420px]"
              loading="lazy"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl p-6 bg-white border border-border shadow-sm grid gap-4"
          >
            <div className="text-xl font-extrabold font-display">
              Send us a message
            </div>
            <Input name="name" placeholder="Name" required />
            <Input type="email" name="email" placeholder="Email" required />
            <Input name="phone" placeholder="Phone Number" required />
            <Input name="subject" placeholder="Subject" required />
            <Button type="submit" className="btn-gradient font-bold">
              Submit
            </Button>
            {submitted && (
              <div className="text-green-700 text-sm">
                Thanks! We’ll get back to you shortly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
