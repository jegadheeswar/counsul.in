import type * as React from "react";
import { useEffect, useMemo } from "react";
import { usePathname } from "@/lib/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/routes/index";
import AboutPage from "@/routes/about";
import AppointmentsPage from "@/routes/appointments";
import ContactPage from "@/routes/contact";
import EngagementsPage from "@/routes/engagements";
import ExpertisePage from "@/routes/expertise";
import GalleryPage from "@/routes/gallery";

export type AppRoute = "/" | "/about" | "/appointments" | "/expertise" | "/engagements" | "/gallery" | "/contact";

type PageMeta = { title: string; description: string; keywords: string };

const routeMeta: Record<AppRoute, PageMeta> = {
  "/": { title: "H.E. Abdul Khader Sowkath Ali | Diplomatic Profile", description: "Official portfolio of H.E. Abdul Khader Sowkath Ali, Special Envoy and Honorary Consul General with two decades of international diplomatic service.", keywords: "H.E. Abdul Khader Sowkath Ali, Sowkath Ali official website, diplomatic profile, Special Envoy, Honorary Consul General, Roving Ambassador, international diplomat, SDG leadership, humanitarian service, peacebuilding" },
  "/about": { title: "About | H.E. Abdul Khader Sowkath Ali", description: "Biography of H.E. Abdul Khader Sowkath Ali, diplomat, envoy and humanitarian with over two decades of service across global forums.", keywords: "Abdul Khader Sowkath Ali biography, H.E. Sowkath Ali about, diplomat biography, humanitarian diplomat, global forums, multilingual diplomat, international service, peace and sustainability" },
  "/appointments": { title: "Appointments | H.E. Abdul Khader Sowkath Ali", description: "Distinguished diplomatic appointments held by H.E. Abdul Khader Sowkath Ali across intergovernmental organizations and nations.", keywords: "Sowkath Ali appointments, Special Envoy UnASDG, Honorary Consul General Nation of Hawaii, Roving Ambassador State of the African Diaspora, United Nations Diplomatic Committee, World Peace Committee Jakarta" },
  "/expertise": { title: "Expertise | H.E. Abdul Khader Sowkath Ali", description: "Areas of expertise spanning international diplomacy, sustainable development, humanitarian relief, peacebuilding and multilingual communication.", keywords: "international diplomacy, sustainable development goals, humanitarian relief, peacebuilding, government relations, strategic partnerships, multilingual communication, diplomatic expertise" },
  "/engagements": { title: "Engagements | H.E. Abdul Khader Sowkath Ali", description: "Selected diplomatic engagements, institutional meetings and civic initiatives involving H.E. Abdul Khader Sowkath Ali.", keywords: "Sowkath Ali engagements, diplomatic meetings, international engagements, civic initiatives, cultural diplomacy, institutional meetings" },
  "/gallery": { title: "Gallery & Media | H.E. Abdul Khader Sowkath Ali", description: "Visual chronicle of diplomatic meetings, awards, Nation of Hawaii engagements and international events involving H.E. Abdul Khader Sowkath Ali.", keywords: "Sowkath Ali gallery, diplomatic meetings, awards recognition, House of Lords, Nation of Hawaii, international events, cultural diplomacy, diplomatic photos" },
  "/contact": { title: "Contact | H.E. Abdul Khader Sowkath Ali", description: "Reach the Office of H.E. Abdul Khader Sowkath Ali for diplomatic correspondence, speaking invitations and partnership inquiries.", keywords: "contact H.E. Abdul Khader Sowkath Ali, diplomatic correspondence, speaking invitation, partnership inquiry, Special Envoy office, diplomatic office contact" },
};

const routes: Record<AppRoute, React.ComponentType> = {
  "/": HomePage,
  "/about": AboutPage,
  "/appointments": AppointmentsPage,
  "/expertise": ExpertisePage,
  "/engagements": EngagementsPage,
  "/gallery": GalleryPage,
  "/contact": ContactPage,
};

function normalizePath(pathname: string): AppRoute | undefined {
  const clean = pathname.replace(/\/$/, "") || "/";
  return Object.prototype.hasOwnProperty.call(routes, clean) ? (clean as AppRoute) : undefined;
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonical(pathname: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = `${window.location.origin}${pathname}`;
}

function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const pathname = usePathname();
  const route = normalizePath(pathname);
  const Page = useMemo(() => (route ? routes[route] : NotFoundPage), [route]);

  useEffect(() => {
    if (!route) {
      document.title = "Page Not Found | H.E. Abdul Khader Sowkath Ali";
      return;
    }
    const meta = routeMeta[route];
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);
    setMeta("og:title", meta.title, true);
    setMeta("og:description", meta.description, true);
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setCanonical(route);
  }, [route]);

  return (
    <SiteLayout>
      <Page />
      <Toaster richColors position="top-center" />
    </SiteLayout>
  );
}

