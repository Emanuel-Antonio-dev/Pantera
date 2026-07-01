import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ChevronRight, X } from "lucide-react";
import panteraLogo2 from "@/assets/pantera.jpg";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Círculos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="max-w-md text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={panteraLogo2} 
            alt="Pantera Jiu-Jitsu" 
            className="h-20 w-20 rounded-full object-cover shadow-elegant"
          />
        </div>
        
        {/* Número 404 */}
        <h1 className="font-display text-7xl sm:text-8xl font-bold text-foreground">
          404
        </h1>
        
        <h2 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-foreground">
          Esta página não existe
        </h2>
        
        <p className="mt-2 text-sm text-muted-foreground">
          Parece que esta página não existe.
        </p>
        
        <div className="mt-8">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant"
          >
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Voltar ao início
          </Link>
        </div>
        
        {/* Footer decorativo */}
        <div className="mt-8 text-[10px] tracking-[0.4em] text-muted-foreground/40 uppercase">
          Oss.
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />
      
      {/* Círculos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-destructive/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="max-w-md text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={panteraLogo2} 
            alt="Pantera Jiu-Jitsu" 
            className="h-20 w-20 rounded-full object-cover shadow-elegant opacity-80"
          />
        </div>
        
        {/* Ícone de erro */}
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <X className="h-8 w-8 text-destructive" />
        </div>
        
        <h1 className="font-display text-2xl sm:text-3xl tracking-tight text-foreground">
          Algo deu errado
        </h1>
        
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Não foi possível carregar esta página. Isso pode ser um problema temporário. 
          Tente recarregar ou voltar para o início.
        </p>
        
        {/* Mensagem de erro técnica (apenas em desenvolvimento) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-3 rounded-md bg-destructive/5 border border-destructive/10 text-left">
            <p className="text-xs font-mono text-destructive/70 break-words">
              {error.message}
            </p>
          </div>
        )}
        
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant"
          >
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/40 backdrop-blur px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-surface hover:border-primary/30"
          >
            Voltar ao início
          </a>
        </div>
        
        {/* Informação de contato */}
        <p className="mt-8 text-xs text-muted-foreground/60">
          Se o problema persistir, entre em contato:{" "}
          <a 
            href="mailto:contato@panterajiujitsu.com" 
            className="text-primary hover:underline"
          >
            contato@panterajiujitsu.com
          </a>
        </p>
        
        {/* Footer decorativo */}
        <div className="mt-6 text-[10px] tracking-[0.4em] text-muted-foreground/40 uppercase">
          Oss.
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
      { title: "Pantera Jiu-Jitsu Angola — Academia de Brazilian Jiu-Jitsu" },
      {
        name: "description",
        content:
          "Academia Pantera Jiu-Jitsu Angola: tradição, disciplina e evolução no tatame. Aulas para crianças, iniciantes, avançados e competidores. Agende sua aula experimental.",
      },
      { name: "author", content: "Pantera Jiu-Jitsu Angola" },
      { property: "og:title", content: "Pantera Jiu-Jitsu Angola — Mais do que aprender a lutar" },
      {
        property: "og:description",
        content:
          "Academia dedicada ao desenvolvimento técnico, físico e pessoal dos seus alunos. Descubra uma nova versão de si.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
