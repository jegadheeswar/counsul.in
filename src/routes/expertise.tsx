import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/SiteLayout";
import { type Expertise, expertise } from "@/lib/profile";
import {
  Globe2,
  Sprout,
  HeartHandshake,
  Feather,
  Landmark,
  Handshake,
  Languages,
  X,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/expertise")({
  component: ExpertisePage,
  head: () => ({
    meta: [
      { title: "Expertise | H.E. Abdul Khader Sowkath Ali" },
      {
        name: "description",
        content:
          "Areas of expertise spanning international diplomacy, sustainable development, humanitarian relief, peacebuilding and multilingual communication.",
      },
      {
        name: "keywords",
        content:
          "international diplomacy, sustainable development goals, humanitarian relief, peacebuilding, government relations, strategic partnerships, multilingual communication, diplomatic expertise",
      },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
});

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  "International Diplomacy": Globe2,
  "Sustainable Development": Sprout,
  "Humanitarian Relief": HeartHandshake,
  Peacebuilding: Feather,
  "Government Relations": Landmark,
  "Strategic Partnerships": Handshake,
  "Multilingual Communication": Languages,
};

const categories = ["All", "Diplomacy", "Development", "Humanitarian", "Communication"] as const;

function ExpertisePage() {
  useReveal();
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Expertise | null>(null);
  const items = useMemo(
    () => (filter === "All" ? expertise : expertise.filter((e) => e.category === filter)),
    [filter],
  );
  const SelectedIcon = selected ? iconFor[selected.title] ?? Globe2 : Globe2;

  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="A practiced range across global affairs"
        description="Click any expertise area to view a brief note on how it supports diplomatic, development and humanitarian work."
      />
      <section className="container-page py-16 md:py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                filter === c
                  ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                  : "border-border text-[var(--navy)] hover:bg-[var(--ivory)]",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => {
            const Icon = iconFor[e.title] ?? Globe2;
            return (
              <button
                key={e.title}
                type="button"
                onClick={() => setSelected(e)}
                className="card-lift rounded-xl border border-border bg-white p-7 text-left outline-none transition-colors hover:border-[var(--maroon)] focus-visible:ring-2 focus-visible:ring-[var(--maroon)]/30"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--ivory)] text-[var(--maroon)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-serif text-xl text-[var(--navy)]">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--slate)]">{e.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--maroon)]">
                    {e.category}
                  </p>
                  <span className="text-xs font-medium text-[var(--navy)]">View brief</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--navy)]/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="expertise-dialog-title"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-xl rounded-xl bg-white p-6 shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--ivory)] text-[var(--maroon)]">
                  <SelectedIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--maroon)]">
                    {selected.category}
                  </p>
                  <h2 id="expertise-dialog-title" className="font-serif text-2xl text-[var(--navy)]">
                    {selected.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full p-2 text-[var(--navy)] hover:bg-[var(--ivory)]"
                aria-label="Close expertise details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-6 leading-relaxed text-[var(--slate)]">{selected.description}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--slate)]">
              {selected.details.map((detail) => (
                <li key={detail} className="border-l-2 border-[var(--maroon)]/40 pl-3">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
