import { PageHeader } from "@/components/SiteLayout";
import { appointments } from "@/lib/profile";
import { Building2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export default function AppointmentsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="Distinguished Appointments"
        title="Roles held across nations and institutions"
        description="A portfolio of appointments representing intergovernmental bodies, sovereign nations and global councils."
      />
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {appointments.map((a, i) => (
            <article
              key={a.role}
              className="reveal card-lift rounded-xl border border-border bg-white p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--ivory)] text-[var(--maroon)]">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-serif text-xl text-[var(--navy)]">{a.role}</h2>
                  <p className="mt-1 text-sm font-medium text-[var(--maroon)]">{a.organization}</p>
                  <p className="mt-3 text-[15px] text-[var(--slate)] leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
