import { AppLink } from "@/lib/navigation";
import { ArrowRight, Globe2, Star } from "lucide-react";
import portrait from "@/assets/sowkathali-standing.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { appointments, profile, stats } from "@/lib/profile";
import { useReveal } from "@/hooks/use-reveal";

export default function HomePage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--ivory)]">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="container-page relative grid gap-12 py-16 md:py-24 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="fade-in-up">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--maroon)] font-semibold">
              Diplomatic Profile
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] leading-[1.05]">
              {profile.name}
            </h1>
            <div className="gold-divider mt-6" />
            <p className="mt-6 max-w-xl text-lg text-[var(--slate)] leading-relaxed">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppLink
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--maroon)] transition-colors"
              >
                View Profile <ArrowRight className="h-4 w-4" />
              </AppLink>
              <AppLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)] px-6 py-3 text-sm font-medium text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-colors"
              >
                Contact Office
              </AppLink>
            </div>
          </div>
          <div className="fade-in relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 bg-[var(--navy)]/5 rounded-2xl rotate-2" />
            <div className="absolute -inset-2 border border-[var(--maroon)]/30 rounded-2xl -rotate-2" />
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={1024}
              height={1024}
              className="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-white">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal text-center md:text-left" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-serif text-4xl md:text-5xl text-[var(--maroon)]">{s.value}</div>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.15em] text-[var(--slate)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE REVIEW */}
      <section className="border-b border-border bg-[var(--ivory)]">
        <div className="container-page py-10">
          <div className="reveal flex flex-col gap-4 rounded-xl border border-border bg-white px-6 py-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--maroon)]">
                Google Reviews
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[var(--navy)]">
                Rated 4.8 on Google
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-5xl leading-none text-[var(--navy)]">4.8</span>
              <div>
                <div className="flex gap-1 text-[#b08036]" aria-label="4.8 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-[var(--slate)]">Based on Google review rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED APPOINTMENTS */}
      <section className="container-page py-20">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--maroon)] font-semibold">
            Distinguished Appointments
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-[var(--navy)]">
            Service across nations and institutions
          </h2>
          <div className="gold-divider mt-5" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appointments.slice(0, 3).map((a, i) => (
            <article
              key={a.role}
              className="reveal card-lift rounded-xl border border-border bg-white p-7"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--maroon)]">
                <Globe2 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-[var(--navy)]">{a.role}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--maroon)]">{a.organization}</p>
              <p className="mt-3 text-sm text-[var(--slate)] leading-relaxed">{a.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <AppLink
            to="/appointments"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--maroon)]"
          >
            All appointments <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="container-page py-20">
        <div className="reveal rounded-2xl bg-[var(--navy)] text-white p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Engage with the Office</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            For diplomatic correspondence, speaking invitations or partnership inquiries, please send the office a WhatsApp message through the contact form.
          </p>
          <AppLink
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--navy)] hover:bg-[var(--ivory)] transition-colors"
          >
            Contact the Office <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </section>
    </>
  );
}
