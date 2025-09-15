import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  parentName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  childName: z.string().min(1, "Enter child's name"),
  program: z.enum(["Pre-Nursery", "Nursery", "LKG", "UKG"]),
  city: z.string().min(2, "Enter your city"),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

// Replace this with your actual deployed Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwDYZSc2q80hjnDLtfG2CROgl-b7hONlvTl57wOAvm-TFX0WxWXjLRMMQZOmQ04qmxJCQ/exec";

export default function Admissions() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const next = async () => {
    const ok = await trigger(
      step === 1
        ? ["parentName", "email", "phone"]
        : ["childName", "program", "city"]
    );
    if (ok) setStep((s) => s + 1);
  };

  const onSubmit = async (values: FormValues) => {
    try {
      // Prepare FormData payload to send to Google Apps Script
      const formData = new FormData();

      // Append formType to route submission in Apps Script
      formData.append("formType", "admissions");

      // Append form values keys and values
      for (const key in values) {
        if (values.hasOwnProperty(key) && values[key] !== undefined) {
          formData.append(key, values[key] as string);
        }
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Thanks! We will contact you shortly.");
        setStep(1);
      } else {
        alert("Submission failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-hero">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
            Admissions
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Apply to ANKURAM KIDS for Pre-Nursery, Nursery, LKG, and UKG. Quick
            multi-step form with live validation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 border border-border">
            <h2 className="font-display text-2xl font-bold">
              Your Child's Bright Start Begins Here
            </h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Expert educators and playful learning</li>
              <li>• Safe campus with modern facilities</li>
              <li>• Holistic development through activities</li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border p-6 shadow-sm bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">Step {step} of 3</div>
              <div className="h-2 rounded-full bg-slate-100 w-40 overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {step === 1 && (
              <div className="mt-6 grid gap-4">
                <InputField label="Parent Name" error={errors.parentName?.message}>
                  <input
                    {...register("parentName")}
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </InputField>
                <InputField label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </InputField>
                <InputField label="Phone" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="10-digit number"
                  />
                </InputField>
                <div className="flex justify-end">
                  <button type="button" onClick={next} className="btn-gradient">
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-6 grid gap-4">
                <InputField label="Child's Name" error={errors.childName?.message}>
                  <input
                    {...register("childName")}
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Child's name"
                  />
                </InputField>
                <InputField label="Program" error={errors.program?.message}>
                  <select
                    {...register("program")}
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Pre-Nursery">Pre-Nursery</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                  </select>
                </InputField>
                <InputField label="City" error={errors.city?.message}>
                  <input
                    {...register("city")}
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your city"
                  />
                </InputField>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-accent"
                  >
                    Back
                  </button>
                  <button type="button" onClick={next} className="btn-gradient">
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6 grid gap-4">
                <InputField label="Message (optional)">
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us more..."
                  />
                </InputField>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-accent"
                  >
                    Back
                  </button>
                  <button disabled={isSubmitting} className="btn-gradient">
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium text-slate-700 flex items-center gap-2">
        <span>{label}</span>
        {error && <span className="text-red-600 animate-pulse">{error}</span>}
      </div>
      {children}
    </label>
  );
}
