import { PageHeader } from "@/components/SiteLayout";
import { engagements } from "@/lib/profile";
import { useReveal } from "@/hooks/use-reveal";

export default function EngagementsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="Engagements"
        title="A chronicle of service"
        description="A timeline of distinguished appointments, recognitions and global engagements."
      />
      <section className="container-page py-16 md:py-20">
        <ol className="relative ml-3 border-l-2 border-[var(--ivory)]">
          {engagements.map((e, i) => (
            <li
              key={i}
              className="reveal relative pl-8 pb-10 last:pb-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[var(--maroon)] ring-4 ring-white" />
              <div className="rounded-xl border border-border bg-white p-6 card-lift">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--maroon)] font-semibold">
                  {e.year}
                </p>
                <h2 className="mt-2 font-serif text-xl text-[var(--navy)]">{e.title}</h2>
                <p className="text-sm font-medium text-[var(--slate)]">{e.organization}</p>
                <p className="mt-3 text-[15px] text-[var(--slate)] leading-relaxed">{e.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
