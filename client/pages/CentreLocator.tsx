import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const address = "Kalinga Vihar, HIG 19 K 6, Kalinga Vihar LIG, Patrapada, Bhubaneswar, Odisha 751019";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export default function CentreLocator() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-5xl font-extrabold headline-gradient">Centre Locator</motion.h1>
          <p className="mt-3 text-slate-600">Find our Ankuram Kids centre in Bhubaneswar.</p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mt-10 grid lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-sm bg-white">
            <iframe title="Ankuram Kids Location" src={mapSrc} className="w-full h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="lg:col-span-2 rounded-2xl p-6 bg-white border border-border shadow-sm">
            <div className="text-lg font-extrabold font-display">Ankuram Kids Preschool</div>
            <p className="mt-2 text-slate-700">{address}</p>
            <ul className="mt-4 text-slate-700 text-sm space-y-1">
              <li>Phone: 8660307204</li>
              <li>Email: info@ankuramkids.com</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild className="btn-gradient font-bold">
                <a href="/contact">Contact Us</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/admissions">Visit the Centre</a>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 max-w-xl mx-auto">
          <input className="w-full rounded-full border border-border bg-white px-4 py-3 text-sm shadow-sm" placeholder="Search centres (more coming soon)..." />
        </div>
      </div>
    </div>
  );
}
