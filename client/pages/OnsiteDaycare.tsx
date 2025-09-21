import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone is required"),
  company: z.string().min(2, "Company is required"),
  message: z.string().min(5, "Please add a short note"),
});

// Your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz8_arI44vAi82ycrSPOWxDltN8nDZ7UpQ25GAwXgohJPA3pT0pBuxPzN7fcbKKK2-Ciw/exec";

export default function OnsiteDaycare() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      const formData = new FormData();

      // Add formType for sheet routing
      formData.append("formType", "onsite_day_care");

      // Append all form values
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Thanks for your inquiry! We'll get back within 1–2 business days.");
        form.reset();
      } else {
        alert("Submission failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-emerald-50 pb-24">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-extrabold leading-tight headline-gradient"
          >
            Onsite Daycare Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-3 text-slate-600"
          >
            Safe, modern crèche setups at workplaces to support your teams and their little ones.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Workplace Crèche Setup",
              d: "Turnkey daycare at client offices or campuses.",
              c: "from-sky-100 to-blue-100",
            },
            {
              t: "Seamless Integration",
              d: "Convenient childcare integrated with work schedules.",
              c: "from-emerald-100 to-teal-100",
            },
            {
              t: "Real-time Tracking App",
              d: "Branded app for updates, photos, and progress.",
              c: "from-amber-100 to-yellow-100",
            },
            {
              t: "CCTV & Safety",
              d: "Secure campuses with surveillance and protocols.",
              c: "from-rose-100 to-pink-100",
            },
            {
              t: "Child-friendly Infrastructure",
              d: "Ergonomic furniture, playful zones, and hygiene-first design.",
              c: "from-violet-100 to-indigo-100",
            },
            {
              t: "Pan-India Transfer Support",
              d: "Free transfer facility for parents relocating across India.",
              c: "from-lime-100 to-green-100",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${c.c} border border-border/60`}
            >
              <div className="text-lg font-extrabold font-display">{c.t}</div>
              <p className="mt-2 text-slate-700">{c.d}</p>
            </motion.div>
          ))}
        </div>

        <div
          className="mt-16 grid lg:grid-cols-2 gap-8 items-start"
          id="inquiry"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 border border-border shadow-sm"
          >
            <div className="text-xl font-extrabold font-display">
              Why Partner with Ankuram?
            </div>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>End-to-end setup, staffing, and operations</li>
              <li>Compliance, safety audits, and training</li>
              <li>Curriculum and activity plans aligned to early years best practices</li>
              <li>Transparent reporting and parent communication</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 border border-border shadow-sm"
          >
            <div className="text-xl font-extrabold font-display">
              Inquiry Form
            </div>
            <Form {...form}>
              <form
                className="mt-4 grid gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="company"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Company / Organisation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="name@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Contact number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your requirement"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        We’ll get back within 1–2 business days.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="btn-gradient font-bold">
                  Submit Inquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      <a
        href="#inquiry"
        className="fixed bottom-24 right-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-lg hover:opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75ZM6 6a.75.75 0 0 0-.75.75V9h13.5V6.75A.75.75 0 0 0 18 6H6Zm-.75 5.25v5.25H18v-5.25H5.25Z" />
        </svg>
        Contact
      </a>
    </div>
  );
}
