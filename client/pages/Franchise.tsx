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
  CheckCircle2,
  Phone,
} from "lucide-react";

const logoUrl =
  "https://cdn.builder.io/api/v1/image/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fd3d4d84ad92947b08a3d91411fd8a979?format=webp&width=500";

// Your deployed Google Apps Script Web App URL for form submission
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwDYZSc2q80hjnDLtfG2CROgl-b7hONlvTl57wOAvm-TFX0WxWXjLRMMQZOmQ04qmxJCQ/exec";

export default function Franchise() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
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
      formData.append("formType", "franchise"); // important for routing in Apps Script
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("city", form.city);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        setStatus("Request submitted! We’ll contact you shortly.");
        setForm({ name: "", phone: "", email: "", city: "" });
      } else {
        setStatus(`Submission failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Submission failed. Please try again.");
    }
  }

  return (
    <div className="relative">
      {/* ... (other sections like Hero, Highlights, etc., remain unchanged) */}
      {/* Keeping those unchanged since you didn’t request those to be edited */}

      {/* Contact Section with updated form */}
      <Section title="Contact Information">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="font-semibold">HEAD OFFICE</div>
            <div className="mt-1 text-slate-700">
              HIG-8, K-6, KALINGA VIHAR, PIN-751019, BHUBANESWAR, ODISHA
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
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
              Ready to join the Ankuram Kids family? Fill out the form below to
              start your exciting journey as a valued franchise partner. We’re
              excited to nurture success together!
            </div>
            <form
              className="mt-3 grid gap-3"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Mail"
                required
                type="email"
                className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="btn-gradient"
                disabled={status === "Submitting..."}
              >
                Request a Callback
              </button>
              {status && (
                <div
                  className={`mt-2 text-sm ${
                    status.includes("failed") ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>

      {/* other sections unchanged */}
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
