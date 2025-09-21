import { useState } from "react";
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
];

const videoUrl =
  "https://cdn.builder.io/o/assets%2Fca48bdd83f664eed8f79c5ce34142229%2Fe2769502f59c42c495f2b442f1a91b5b?alt=media&token=d30f9ffc-cda9-4313-8c0c-81b1a37d3223&apiKey=ca48bdd83f664eed8f79c5ce34142229";

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz8_arI44vAi82ycrSPOWxDltN8nDZ7UpQ25GAwXgohJPA3pT0pBuxPzN7fcbKKK2-Ciw/exec";

function SectionHeader({
  title,
  subtitle,
  overline,
}: {
  title: string;
  subtitle?: string;
  overline?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {overline && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-primary font-semibold"
        >
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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  // Combined gallery items: images + video in order
  const galleryItems = [
    ...images.slice(0, 5).map((src) => ({ type: "image", src })),
    { type: "video", src: videoUrl },
    ...images.slice(5).map((src) => ({ type: "image", src })),
  ];

  // Submit quick enquiry form
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const formData = new FormData();
      formData.append("formType", "quick_enquiry");
      formData.append("parentName", form.name);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.status === "success") {
        setResponseMsg("✅ Thanks! We received your inquiry.");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setResponseMsg("❌ Submission failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      setResponseMsg("❌ Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
            {galleryItems.map((item, i) => {
              if (item.type === "image") {
                return (
                  <motion.figure
                    key={item.src}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group rounded-2xl overflow-hidden shadow-sm bg-white"
                  >
                    <img
                      src={item.src}
                      alt="Ankuram gallery"
                      className="w-full h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </motion.figure>
                );
              } else if (item.type === "video") {
                return (
                  <motion.figure
                    key="video"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="col-span-full rounded-2xl overflow-hidden shadow-sm bg-white"
                  >
                    <video
                      src={item.src}
                      controls
                      playsInline
                      className="w-full h-64 object-cover"
                    />
                  </motion.figure>
                );
              }
              return null;
            })}
          </motion.div>

          {/* Other sections remain unchanged */}

          <div className="container mx-auto px-4 mt-16 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <div className="rounded-2xl p-6 bg-white border border-border shadow-sm">
                <div className="text-xl font-extrabold font-display">
                  Quick Contact
                </div>
                <ul className="mt-2 text-slate-700 space-y-1">
                  <li>Phone: 8660307204 / 7848904465</li>
                  <li>Email: info@ankuramkids.com , pandaminati635@gmail.com</li>
                  <li>Location: Ankuram Kids , HIG-8, k-6 ,Pin-751019 ,Kalinga Vihar, Bhubaneswar , Odisha</li>
                </ul>
                <Button asChild className="btn-gradient font-bold mt-4">
                  <a href="/admissions">Visit Ankuram Kids</a>
                </Button>
              </div>
              {/* Quick Inquiry form */}
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 bg-white border border-border shadow-sm grid gap-3"
              >
                <div className="text-xl font-extrabold font-display">
                  Send a quick inquiry
                </div>
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-gradient font-bold"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </Button>
                {responseMsg && (
                  <div
                    className={`mt-2 text-sm ${
                      responseMsg.startsWith("✅")
                        ? "text-green-700"
                        : "text-red-600"
                    }`}
                  >
                    {responseMsg}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
