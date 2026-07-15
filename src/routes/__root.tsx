import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/SiteLayout";
import { Toaster } from "@/components/ui/sonner";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "H.E. Abdul Khader Sowkath Ali | Diplomatic Profile" },
      {
        name: "description",
        content:
          "Official diplomatic profile of H.E. Abdul Khader Sowkath Ali, Special Envoy, Honorary Consul General and Roving Ambassador with two decades of international service.",
      },
      {
        name: "keywords",
        content:
          "H.E. Abdul Khader Sowkath Ali, Abdul Khader Sowkath Ali, Sowkath Ali, diplomat, diplomatic profile, Special Envoy, Honorary Consul General, Roving Ambassador, United Alliance for Sustainable Development Goals, UnASDG, Nation of Hawaii, State of the African Diaspora, United Nations Diplomatic Committee, World Peace Committee, sustainable development, peacebuilding, humanitarian relief, international diplomacy",
      },
      {
        name: "google-site-verification",
        content: "7jlFzdctT6WKQaZIbz05-IDz6u7p0vapcUtOqZHglkU",
      },
      { name: "author", content: "Office of H.E. Abdul Khader Sowkath Ali" },
      { property: "og:title", content: "H.E. Abdul Khader Sowkath Ali | Diplomatic Profile" },
      {
        property: "og:description",
        content:
          "Official profile of H.E. Abdul Khader Sowkath Ali, covering diplomatic appointments, recognitions, peacebuilding, sustainable development and humanitarian service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B2D45" },
      { name: "twitter:title", content: "H.E. Abdul Khader Sowkath Ali | Diplomatic Profile" },
      {
        name: "twitter:description",
        content:
          "Official profile of H.E. Abdul Khader Sowkath Ali, covering diplomacy, SDG leadership, peacebuilding and humanitarian service.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb91a194-64c2-47bc-b89e-d31015d096b7/id-preview-7cb828bb--d02b5cc5-d6e0-4b8b-a439-e9d9436f9341.lovable.app-1779425425477.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb91a194-64c2-47bc-b89e-d31015d096b7/id-preview-7cb828bb--d02b5cc5-d6e0-4b8b-a439-e9d9436f9341.lovable.app-1779425425477.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}

