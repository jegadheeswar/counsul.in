import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/SiteLayout";
import { z } from "zod";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, Globe2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | H.E. Abdul Khader Sowkath Ali" },
      {
        name: "description",
        content:
          "Reach the Office of H.E. Abdul Khader Sowkath Ali for diplomatic correspondence, speaking invitations and partnership inquiries.",
      },
      {
        name: "keywords",
        content: "contact H.E. Abdul Khader Sowkath Ali, diplomatic correspondence, speaking invitation, partnership inquiry, Special Envoy office, diplomatic office contact",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(3, "Subject is required").max(150),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1500),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const whatsappNumber = "919944363919";
const contactEmail = "sowkathaliabdulkhader@counsul.in";


function ContactPage() {
  useReveal();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setErrors({});
    const payload = result.data;
    const whatsappMessage = [
      "New website enquiry",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Subject: ${payload.subject}`,
      "",
      `Message: ${payload.message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    setSubmitted(true);
    toast.success("Opening WhatsApp with your message.");
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Reach the Office"
        description="For diplomatic correspondence, speaking invitations or partnership inquiries, please complete the form below and send a WhatsApp message to the office."
      />
      <section className="container-page py-16 md:py-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
        <aside className="reveal space-y-6">
          <div className="rounded-xl border border-border bg-[var(--ivory)] p-6">
            <Globe2 className="h-6 w-6 text-[var(--maroon)]" />
            <h3 className="mt-3 font-serif text-lg text-[var(--navy)]">Global presence</h3>
            <p className="mt-2 text-sm text-[var(--slate)]">
              Engagements across Asia, Africa, Europe and the Pacific, with office contacts in India,
              Jakarta and Honolulu.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <Mail className="h-6 w-6 text-[var(--maroon)]" />
            <h3 className="mt-3 font-serif text-lg text-[var(--navy)]">Diplomatic correspondence</h3>
            <p className="mt-2 text-sm text-[var(--slate)]">
              All inquiries open as a prepared WhatsApp message for direct office follow-up.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-block break-all text-sm font-medium text-[var(--navy)] hover:text-[var(--maroon)]"
            >
              {contactEmail}
            </a>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <ShieldCheck className="h-6 w-6 text-[var(--maroon)]" />
            <h3 className="mt-3 font-serif text-lg text-[var(--navy)]">Secure & confidential</h3>
            <p className="mt-2 text-sm text-[var(--slate)]">
              Messages are prepared locally and sent through WhatsApp.
            </p>
          </div>
        </aside>

        <form
          onSubmit={onSubmit}
          noValidate
          className="reveal rounded-2xl border border-border bg-white p-7 md:p-10 shadow-sm"
        >
          {submitted && (
            <div className="mb-6 rounded-lg border border-[var(--navy)]/20 bg-[var(--ivory)] p-4 text-sm text-[var(--navy)]">
              WhatsApp is opening with your message details ready to send.
            </div>
          )}
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Full name"
              required
              error={errors.name}
              value={form.name}
              onChange={(v) => set("name", v)}
              autoComplete="name"
            />
            <Field
              label="Email"
              type="email"
              required
              error={errors.email}
              value={form.email}
              onChange={(v) => set("email", v)}
              autoComplete="email"
            />
            <Field
              label="Phone"
              type="tel"
              error={errors.phone}
              value={form.phone ?? ""}
              onChange={(v) => set("phone", v)}
              autoComplete="tel"
            />
            <Field
              label="Subject"
              required
              error={errors.subject}
              value={form.subject}
              onChange={(v) => set("subject", v)}
            />
          </div>
          <div className="mt-5">
            <label className="block text-sm font-medium text-[var(--navy)]">
              Message <span className="text-[var(--maroon)]">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              rows={6}
              className="mt-2 w-full rounded-lg border border-input bg-white px-4 py-3 text-[15px] text-[var(--navy)] outline-none focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--navy)]/10"
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-[var(--maroon)]">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-7 py-3 text-sm font-medium text-white hover:bg-[var(--maroon)] transition-colors"
          >
            Send via WhatsApp
          </button>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
  autoComplete,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--navy)]">
        {label} {required && <span className="text-[var(--maroon)]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-input bg-white px-4 py-3 text-[15px] text-[var(--navy)] outline-none focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--navy)]/10"
      />
      {error && <p className="mt-1.5 text-xs text-[var(--maroon)]">{error}</p>}
    </div>
  );
}

