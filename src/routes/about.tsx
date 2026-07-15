import { PageHeader } from "@/components/SiteLayout";
import portrait from "@/assets/sowkathali-seated.jpg";
import { languages, profile } from "@/lib/profile";
import { useReveal } from "@/hooks/use-reveal";

export default function AboutPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A life devoted to diplomacy and human dignity"
        description={profile.tagline}
      />
      <section className="container-page py-16 md:py-20 grid gap-12 md:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="reveal">
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-2xl object-cover w-full aspect-[4/5] shadow-xl"
          />
        </div>
        <div className="reveal space-y-5 text-[var(--slate)] leading-relaxed text-[17px]">
          <p>
            His Excellency Abdul Khader Sowkath Ali is a distinguished diplomat whose career spans
            over two decades of dedicated service across diplomacy, governance, humanitarian
            coordination, sustainable development and global multilateral forums. His work
            consistently bridges nations and intergovernmental institutions in pursuit of measurable
            human outcomes.
          </p>
          <p>
            As Special Envoy for the United Alliance for Sustainable Development Goals (UnASDG, IGO),
            he champions the SDG agenda through intergovernmental dialogue and cross-sector
            partnerships. As Honorary Consul General for the Nation of Hawaii, he advances cultural
            understanding and goodwill relations. As Roving Ambassador for The State of the African
            Diaspora, he amplifies the diaspora's unity and economic empowerment.
          </p>
          <p>
            Within the United Nations Diplomatic Committee, he serves as Deputy of India, supporting
            multilateral discussions that shape global policy. From Jakarta, he represents the World
            Peace Committee, contributing to dialogue and mediation across the Asia-Pacific region.
          </p>
          <p>
            Twice honored at the House of Lords, British Parliament, receiving the Global
            Inspirational Award in January 2023 and the World Peace Awareness Award in September
            2023. His Excellency continues to advance an agenda rooted in peace, sustainability and
            principled engagement.
          </p>

          <div className="pt-4">
            <h3 className="font-serif text-xl text-[var(--navy)]">Languages</h3>
            <div className="gold-divider mt-3" />
            <ul className="mt-4 flex flex-wrap gap-2">
              {languages.map((l) => (
                <li
                  key={l}
                  className="rounded-full border border-border bg-[var(--ivory)] px-4 py-1.5 text-sm text-[var(--navy)]"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
