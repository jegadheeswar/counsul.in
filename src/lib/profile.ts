export const profile = {
  name: "H.E. Abdul Khader Sowkath Ali",
  shortName: "Sowkath Ali",
  title: "Diplomatic Profile",
  tagline:
    "Over two decades of service in international diplomacy, sustainable development and humanitarian coordination.",
  summary:
    "His Excellency Abdul Khader Sowkath Ali is a globally engaged diplomat whose work spans sustainable development, humanitarian relief and peacebuilding. He represents nations and intergovernmental bodies in forums that shape policy, partnerships and people-centered outcomes worldwide.",
};

export type Appointment = {
  role: string;
  organization: string;
  description: string;
};

export const appointments: Appointment[] = [
  {
    role: "Special Envoy",
    organization:
      "United Alliance for Sustainable Development Goals (UnASDG, IGO)",
    description:
      "Advances the global Sustainable Development Goals agenda through intergovernmental dialogue, program delivery and cross-sector partnerships.",
  },
  {
    role: "Honorary Consul General",
    organization: "Nation of Hawaii",
    description:
      "Represents the Nation of Hawaii in diplomatic engagements, fostering cultural understanding, sovereignty advocacy and goodwill relations.",
  },
  {
    role: "Roving Ambassador",
    organization: "The State of the African Diaspora",
    description:
      "Champions the unity and economic empowerment of the African Diaspora across continents through diplomatic outreach and strategic partnerships.",
  },
  {
    role: "Deputy of India",
    organization: "United Nations Diplomatic Committee (UNDC)",
    description:
      "Contributes to multilateral discussions and resolutions, supporting India's voice within the UN Diplomatic Committee framework.",
  },
  {
    role: "Council Representative",
    organization: "The World Peace Committee, Jakarta, Indonesia",
    description:
      "Serves on the council advancing global peace initiatives, mediating dialogue and supporting cross-border cooperation from the Jakarta secretariat.",
  },
];

export type Honor = {
  title: string;
  body: string;
  date: string;
};

export const recognitions: Honor[] = [
  {
    title: "World Peace Awareness Award",
    body: "House of Lords, British Parliament",
    date: "September 2023",
  },
  {
    title: "Global Inspirational Award",
    body: "House of Lords, British Parliament",
    date: "January 2023",
  },
];

export type Expertise = {
  title: string;
  description: string;
  details: string[];
  category: "Diplomacy" | "Development" | "Humanitarian" | "Communication";
};

export const expertise: Expertise[] = [
  {
    title: "International Diplomacy",
    description:
      "Bilateral and multilateral engagement, treaty dialogue and statecraft across continents.",
    details: [
      "Represents interests across bilateral and multilateral settings with a focus on constructive dialogue.",
      "Supports protocol-led meetings, delegation exchanges and cross-border institutional cooperation.",
      "Connects public institutions, international bodies and community stakeholders around shared outcomes.",
    ],
    category: "Diplomacy",
  },
  {
    title: "Sustainable Development",
    description:
      "Driving the SDG agenda, climate-conscious policy and inclusive economic growth.",
    details: [
      "Advances programs aligned with the Sustainable Development Goals through partnerships and policy dialogue.",
      "Focuses on inclusive growth, climate-conscious development and practical implementation support.",
      "Encourages collaboration between governments, civic groups and development-focused institutions.",
    ],
    category: "Development",
  },
  {
    title: "Humanitarian Relief",
    description:
      "Coordinating relief operations, disaster response and people-centered recovery.",
    details: [
      "Supports people-centered relief coordination during urgent community and disaster-response needs.",
      "Works with partners to improve response channels, recovery planning and field-level cooperation.",
      "Keeps humanitarian service grounded in dignity, access and practical support for affected communities.",
    ],
    category: "Humanitarian",
  },
  {
    title: "Peacebuilding",
    description:
      "Mediation, conflict-sensitive dialogue and long-term reconciliation programs.",
    details: [
      "Promotes dialogue, reconciliation and trust-building across communities and institutions.",
      "Supports conflict-sensitive engagement that reduces friction and opens space for cooperation.",
      "Links peace awareness with long-term civic, cultural and diplomatic understanding.",
    ],
    category: "Diplomacy",
  },
  {
    title: "Government Relations",
    description:
      "Trusted liaison between ministries, missions and intergovernmental bodies.",
    details: [
      "Maintains working relationships with ministries, missions, councils and intergovernmental offices.",
      "Helps coordinate formal communication, protocol requirements and institutional introductions.",
      "Builds confidence between public offices and international representatives through clear engagement.",
    ],
    category: "Diplomacy",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Building durable alliances across the public, private and civic sectors.",
    details: [
      "Develops partnerships across public, private and civic sectors for diplomacy, development and outreach.",
      "Identifies shared priorities and turns them into practical collaboration opportunities.",
      "Supports long-term alliances around trade, culture, humanitarian work and community development.",
    ],
    category: "Development",
  },
  {
    title: "Multilingual Communication",
    description:
      "Effective communication across six languages and many cultural contexts.",
    details: [
      "Communicates across English, Tamil, Arabic, Hindi, Urdu and Portuguese-speaking contexts.",
      "Uses language and cultural awareness to improve trust in formal and informal diplomatic settings.",
      "Bridges audiences across regions with clear, respectful and culturally sensitive communication.",
    ],
    category: "Communication",
  },
];

export const languages = [
  "English",
  "Tamil",
  "Arabic",
  "Hindi",
  "Urdu",
  "Portuguese",
];

export type Engagement = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export const engagements: Engagement[] = [
  {
    year: "Ongoing",
    title: "Special Envoy",
    organization: "United Alliance for Sustainable Development Goals (UnASDG)",
    description:
      "Leading envoy missions that align national programs with the global SDG framework.",
  },
  {
    year: "Ongoing",
    title: "Honorary Consul General",
    organization: "Nation of Hawaii",
    description:
      "Representing the Nation of Hawaii in consular and ceremonial engagements.",
  },
  {
    year: "Ongoing",
    title: "Roving Ambassador",
    organization: "The State of the African Diaspora",
    description:
      "Advancing diaspora unity, investment and cultural diplomacy across regions.",
  },
  {
    year: "Ongoing",
    title: "Deputy of India",
    organization: "United Nations Diplomatic Committee",
    description:
      "Supporting India's diplomatic presence and dialogue within the UNDC.",
  },
  {
    year: "Ongoing",
    title: "Council Representative",
    organization: "The World Peace Committee, Jakarta",
    description:
      "Serving on the council shaping peace dialogue across the Asia-Pacific.",
  },
  {
    year: "Sep 2023",
    title: "World Peace Awareness Award",
    organization: "House of Lords, British Parliament",
    description:
      "Recognized for sustained contributions to global peace awareness and dialogue.",
  },
  {
    year: "Jan 2023",
    title: "Global Inspirational Award",
    organization: "House of Lords, British Parliament",
    description:
      "Honoured for inspirational leadership across diplomatic and humanitarian arenas.",
  },
];

export const stats = [
  { value: "5", label: "Distinguished Appointments" },
  { value: "20+", label: "Global Engagements" },
  { value: "7", label: "Areas of Expertise" },
  { value: "6", label: "Languages Spoken" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/appointments", label: "Appointments" },
  { to: "/expertise", label: "Expertise" },
  { to: "/engagements", label: "Engagements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
