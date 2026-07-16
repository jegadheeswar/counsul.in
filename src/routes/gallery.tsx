import { useState } from "react";
import { X } from "lucide-react";
import { PageHeader } from "@/components/SiteLayout";
import deputyFinanceMinister from "@/assets/gallery/meetings/deputy-finance-minister.jpg";
import africanDiasporaDelegates from "@/assets/gallery/meetings/african-diaspora-delegates.jpg";
import africanDiasporaOffice from "@/assets/gallery/meetings/african-diaspora-office.jpg";
import delegationHonorCeremony from "@/assets/gallery/meetings/delegation-honor-ceremony.jpg";
import delegationHandshake from "@/assets/gallery/meetings/delegation-handshake.jpg";
import sriLankaOfficialGreeting from "@/assets/gallery/meetings/sri-lanka-official-greeting.jpg";
import formalDiplomaticGreeting from "@/assets/gallery/meetings/formal-diplomatic-greeting.jpg";
import globalAwardStage from "@/assets/gallery/awards/global-inspirational-award-stage.jpg";
import globalAwardPresentation from "@/assets/gallery/awards/global-inspirational-award-presentation.jpg";
import houseOfLordsMemberAward from "@/assets/gallery/awards/house-of-lords-member-award.jpg";
import houseOfLordsFormalGathering from "@/assets/gallery/awards/house-of-lords-formal-gathering.jpg";
import britishParliamentNomination from "@/assets/gallery/awards/british-parliament-nomination.jpg";
import globalAwardPlaque from "@/assets/gallery/awards/global-inspirational-award-plaque.jpg";
import hawaiiPresidentHonoring from "@/assets/gallery/hawaii/nation-hawaii-president-honoring.jpg";
import hawaiiPresidentOffice from "@/assets/gallery/hawaii/nation-hawaii-president-office.jpg";
import diplomaticClubPeoplesDiplomacy from "@/assets/gallery/events/diplomatic-club-peoples-diplomacy.jpg";
import culturalDelegationWelcome from "@/assets/gallery/events/cultural-delegation-welcome.jpg";
import strategicPartnershipPresentation from "@/assets/gallery/events/strategic-partnership-presentation.jpg";
import strategicPartnershipExchange from "@/assets/gallery/events/strategic-partnership-exchange.jpg";
import { useReveal } from "@/hooks/use-reveal";

type GalleryItem = {
  src: string;
  caption: string;
  sectionTitle?: string;
  sectionDescription?: string;
};

type GallerySection = {
  title: string;
  eyebrow: string;
  description: string;
  items: GalleryItem[];
};

const sections: GallerySection[] = [
  {
    title: "Diplomatic Meetings",
    eyebrow: "Meetings",
    description:
      "Meetings with ministers, government representatives and institutional leaders across diplomatic and economic forums.",
    items: [
      {
        src: deputyFinanceMinister,
        caption:
          "Meeting with Deputy Finance Minister Dr. Anil Jayanta Fernando, with referral to the Central Bank",
      },
      { src: africanDiasporaDelegates, caption: "Engagement with African Diaspora delegates" },
      { src: africanDiasporaOffice, caption: "Office meeting with African Diaspora representatives" },
      { src: delegationHonorCeremony, caption: "Delegation honor ceremony and formal welcome" },
      { src: delegationHandshake, caption: "Diplomatic delegation greeting and handshake" },
      { src: sriLankaOfficialGreeting, caption: "Official greeting with Sri Lankan representation" },
      { src: formalDiplomaticGreeting, caption: "Formal diplomatic greeting and exchange" },
    ],
  },
  {
    title: "Awards & Recognition",
    eyebrow: "Recognition",
    description:
      "Moments of formal recognition for diplomatic, peacebuilding and humanitarian contributions at global platforms.",
    items: [
      { src: globalAwardStage, caption: "Global Inspirational Award recognition at the summit" },
      { src: globalAwardPresentation, caption: "Global Inspirational Award presentation" },
      {
        src: houseOfLordsMemberAward,
        caption: "Receiving an award from a Member of Parliament in London at the House of Lords",
      },
      { src: houseOfLordsFormalGathering, caption: "Formal gathering connected to House of Lords recognition" },
      { src: britishParliamentNomination, caption: "British Parliament nomination committee engagement" },
      { src: globalAwardPlaque, caption: "Global Inspirational Award plaque presentation" },
    ],
  },
  {
    title: "Nation of Hawaii",
    eyebrow: "Hawaii",
    description:
      "Engagements connected to the Honorary Consul General role and Nation of Hawaii relations.",
    items: [
      { src: hawaiiPresidentHonoring, caption: "With the President of the Nation of Hawaii" },
      { src: hawaiiPresidentOffice, caption: "Nation of Hawaii office engagement" },
    ],
  },
  {
    title: "International Events & Partnerships",
    eyebrow: "Events",
    description:
      "Public appearances, cultural diplomacy moments and partnership exchanges across international forums.",
    items: [
      { src: diplomaticClubPeoplesDiplomacy, caption: "The Diplomatic Club People's Diplomacy event" },
      { src: culturalDelegationWelcome, caption: "Cultural delegation welcome during an international event" },
      { src: strategicPartnershipPresentation, caption: "Strategic partnership presentation" },
      { src: strategicPartnershipExchange, caption: "Strategic partnership exchange" },
    ],
  },
];

export default function GalleryPage() {
  useReveal();
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Gallery & Media"
        title="Moments from a global mandate"
        description="A curated archive of diplomatic meetings, awards, Nation of Hawaii engagements and international events."
      />
      <section className="container-page py-16 md:py-20 space-y-16">
        {sections.map((section) => (
          <section key={section.title} className="reveal">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--maroon)] font-semibold">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-[var(--navy)]">
                {section.title}
              </h2>
              <div className="gold-divider mt-5" />
              <p className="mt-5 text-[var(--slate)] leading-relaxed">{section.description}</p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((it, i) => (
                <button
                  key={it.caption}
                  type="button"
                  onClick={() =>
                    setSelected({
                      ...it,
                      sectionTitle: section.title,
                      sectionDescription: section.description,
                    })
                  }
                  className="card-lift group relative overflow-hidden rounded-xl border border-border bg-white text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--maroon)]/30"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <img
                    src={it.src}
                    alt={it.caption}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full bg-[var(--ivory)] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/90 to-transparent p-4 text-sm text-white">
                    {it.caption}
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--navy)]/80 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-dialog-title"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[var(--navy)] shadow hover:bg-[var(--ivory)]"
              aria-label="Close gallery image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid min-h-0 lg:grid-cols-[1fr_340px]">
              <div className="flex min-h-0 items-center justify-center bg-black p-3">
                <img
                  src={selected.src}
                  alt={selected.caption}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>
              <aside className="border-t border-border p-6 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--maroon)]">
                  {selected.sectionTitle}
                </p>
                <h2 id="gallery-dialog-title" className="mt-3 font-serif text-2xl text-[var(--navy)]">
                  {selected.caption}
                </h2>
                {selected.sectionDescription && (
                  <p className="mt-4 text-sm leading-relaxed text-[var(--slate)]">
                    {selected.sectionDescription}
                  </p>
                )}
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
