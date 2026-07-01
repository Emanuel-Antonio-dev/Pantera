import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShieldCheck,
  Users,
  TrendingUp,
  Heart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  ChevronRight,
  Plus,
  Minus,
  Star,
  Wind,
  Car,
  Baby,
  Sparkles,
  Award,
  DoorOpen,
  Trophy,
  Clock,
  Target,
} from "lucide-react";

import logo from "@/assets/pantera-logo.asset.json";
import heroImg from "@/assets/hero-training.jpg";
import modBjj from "@/assets/mod-bjj.jpg";
import modNogi from "@/assets/mod-nogi.jpg";
import modKids from "@/assets/mod-kids.jpg";
import modDefense from "@/assets/mod-defense.jpg";
import panteraLogo from "@/assets/pantera.jpeg"
import panteraLogo2 from "@/assets/pantera.jpg"
import modComp from "@/assets/mod-comp.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import panteraImg1 from "@/assets/pantera-image-1.jpg";
import panteraImg2 from "@/assets/pantera-image-2.jpg";
import panteraImg3 from "@/assets/pantera-image-3.jpg";
import panteraImg4 from "@/assets/pantera-image-4.jpg";
import panteraImg5 from "@/assets/pantera-image-5.jpg";
import panteraImg6 from "@/assets/pantera-image-6.jpg";
import panteraImg7 from "@/assets/pantera-image-7.jpg";
import panteraImg8 from "@/assets/pantera-image-8.jpg";
import panteraImg9 from "@/assets/pantera-image-9.jpg";
import panteraLogo3 from "@/assets/panteraLogo3.png";
import panteraLogo4 from "@/assets/panteraLogo4.jpeg";
import panteraLogo5 from "@/assets/panteraLogo5.png"
import panteraLogo6 from "@/assets/panteraLogo6.png"
import panteraLogo7 from "@/assets/panteraLogo7.png"


import coach3 from "@/assets/coach-3.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";
import gal6 from "@/assets/gal-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Horários", href: "#horarios" },
  { label: "Equipe", href: "#equipe" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={panteraLogo6} alt="Pantera Jiu-Jitsu" className="h-11 w-11 rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-base sm:text-lg tracking-widest">PANTERA</div>
              <div className="text-[8px] sm:text-[10px] tracking-[0.35em] text-muted-foreground">JIU-JITSU</div>
              <div className="text-[8px] sm:text-[10px] tracking-[0.35em] text-muted-foreground">ANGOLA</div>
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Aula Experimental
            </a>
            <button
              className="lg:hidden text-foreground relative z-[60]"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header do sidebar */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <img src={panteraLogo6} alt="Pantera" className="h-8 w-8 rounded-full" />
              <span className="font-display text-sm tracking-widest">PANTERA</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-surface rounded-md transition-colors"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer do sidebar */}
          <div className="p-6 border-t border-border">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors w-full"
            >
              Aula Experimental
              <ChevronRight className="h-4 w-4" />
            </a>
            <div className="mt-4 text-center">
              <span className="text-[10px] tracking-[0.4em] text-muted-foreground/40 uppercase">Oss.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Imagem à direita - visível em todos os tamanhos */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[45%] lg:w-[39%] pointer-events-none">
        <div className="absolute inset-0 overflow-hidden opacity-40 md:opacity-90">
          <img 
            src={panteraLogo7} 
            alt="Treino de Brazilian Jiu-Jitsu" 
            className="h-full w-full object-cover pointer-events-auto"
            style={{ 
              objectPosition: '85% 0%',
              transform: `translateY(${scrollY * 0.1}px)`,
              willChange: 'transform',
            }}
          />
        </div>
        {/* Gradiente - mais forte no mobile */}
        <div className="absolute inset-y-0 left-0 w-full md:w-48 lg:w-64 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative container-page pt-20 pb-16 md:pt-32 md:pb-20 w-full">
        <div className="max-w-full md:max-w-lg lg:max-w-xl reveal">
          <span className="eyebrow">Pantera Jiu-Jitsu Angola</span>
          
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Bem-Vindo
          </h1>
          
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            a <span className="text-primary">Pantera</span>
          </h2>
          
          <h3 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Jiu-Jitsu
          </h3>
          
          <p className="mt-6 md:mt-8 max-w-full sm:max-w-md text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            No tatame da Pantera cultivamos disciplina, respeito e evolução.
            Uma escola de Brazilian Jiu-Jitsu construída sobre tradição, técnica
            e o cuidado com cada aluno — do primeiro dia à faixa preta.
          </p>
          
          {/* Botões - lado a lado sempre */}
          <div className="mt-6 md:mt-8 flex flex-row gap-2 sm:gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-elegant flex-1 sm:flex-none text-center"
            >
              Aula Experimental
              <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform hidden sm:block" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-1 rounded-md border border-border bg-surface/40 backdrop-blur px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-surface transition-colors flex-1 sm:flex-none text-center"
            >
              Academia
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-full sm:max-w-md border-t border-border pt-6">
            <div className="text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">15+</div>
              <div className="mt-1 text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground">Anos</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">500+</div>
              <div className="mt-1 text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground">Alunos</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">12</div>
              <div className="mt-1 text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground">F. Pretas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] text-muted-foreground/50 uppercase z-10">
        <span className="hidden sm:block">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </div>
    </section>
  );
}
function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl text-foreground">{n}</div>
      <div className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">{l}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1]">{title}</h2>
      {subtitle && (
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="section-pad bg-background">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
            <img src={panteraImg1} alt="Alunos na saudação" className="h-full w-full object-cover" />
          </div>
         
        </div>
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="A Academia"
            title={
              <>
                Uma casa construída no <span className="text-primary">respeito</span> e na técnica.
              </>
            }
          />
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-justify">
            <p>
              A Pantera Jiu-Jitsu nasceu do desejo de formar não apenas
              lutadores, mas pessoas. Nosso tatame é um espaço onde a técnica
              apurada convive com valores que ultrapassam a arte suave:
              disciplina, humildade, respeito e senso de pertencimento.
            </p>
            <p>
              Nossos professores são graduados dentro da tradição do Brazilian
              Jiu-Jitsu, com formação sólida e uma paixão real por ensinar.
              Aqui você é acompanhado passo a passo, do primeiro contato com o
              gi até a evolução técnica em faixas avançadas — sempre em um
              ambiente familiar, seguro e acolhedor.
            </p>
            <p>
              Acreditamos que o crescimento no tatame reflete o crescimento na
              vida. E é isso que buscamos, todos os dias, com cada aluno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PHILOSOPHY = [
  {
    icon: ShieldCheck,
    title: "Disciplina",
    text: "Constância acima da motivação. O tatame ensina que o progresso vem do trabalho silencioso e diário.",
  },
  {
    icon: Heart,
    title: "Respeito",
    text: "Ao professor, ao colega, ao adversário e a si mesmo. O respeito é a base sobre a qual toda arte marcial se sustenta.",
  },
  {
    icon: TrendingUp,
    title: "Evolução",
    text: "Cada treino é um pequeno passo. Valorizamos o processo individual, sem pressa e sem comparação.",
  },
  {
    icon: Users,
    title: "Comunidade",
    text: "Aqui não se treina sozinho. Somos uma família que se apoia dentro e fora do tatame.",
  },
];

function Philosophy() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          center
          eyebrow="Nossa Filosofia"
          title={<>Os valores que sustentam o nosso tatame.</>}
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 bg-card border border-border rounded-lg hover:border-primary/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MODALITIES = [
  {
    img: panteraImg4,
    title: "Jiu-Jitsu Brasileiro",
    text: "A arte suave em sua forma tradicional, com gi. Técnica, alavancas e estratégia para todos os níveis.",
  },
  {
    img: panteraImg8,
    title: "No-Gi",
    text: "Treinos sem kimono, com foco em pegadas, ritmo e adaptação ao grappling moderno.",
  },
  {
    img: panteraImg9,
    title: "Jiu-Jitsu Infantil",
    text: "Aulas divertidas e estruturadas para crianças, desenvolvendo coordenação, disciplina e autoconfiança.",
  // },
  // {
  //   img: modDefense,
  //   title: "Defesa Pessoal",
  //   text: "Técnicas práticas e diretas para situações reais, com foco em consciência corporal e controle.",
  // },
  // {
  //   img: modComp,
  //   title: "Treinamento Competitivo",
  //   text: "Preparação física e técnica para atletas que buscam performance em campeonatos.",
  },
];

function Modalities() {
  return (
    <section id="modalidades" className="section-pad">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Modalidades"
            title={<>Um treino para cada fase da sua jornada.</>}
          />
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((m) => (
            <article
              key={m.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/60 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:gap-3 transition-all"
                >
                  Saiba Mais <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    img: panteraImg2,
    name: "Prof. Ricardo Almeida",
    belt: "Faixa Preta 3º Grau",
    spec: "Head Coach — Brazilian Jiu-Jitsu",
    bio: "Mais de 20 anos dedicados ao tatame. Formado dentro da linhagem tradicional, fundou a Pantera com a missão de manter viva a essência do Jiu-Jitsu.",
  },
  {
    img: panteraImg2,
    name: "Prof. Diego Vasques",
    belt: "Faixa Marrom",
    spec: "No-Gi e Competição",
    bio: "Competidor ativo e responsável pela equipe de campeonatos. Traz uma abordagem moderna do grappling ao dia a dia da academia.",
  },
  {
    img: panteraImg2,
    name: "Profª. Beatriz Coelho",
    belt: "Faixa Preta 1º Grau",
    spec: "Turmas Femininas e Infantil",
    bio: "Referência em ensino para mulheres e crianças. Cria um ambiente seguro, atento e transformador para novos alunos.",
  },
];

function Team() {
  return (
    <section id="equipe" className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Equipe"
          title={<>Professores que ensinam com o exemplo.</>}
          subtitle="Nomes fictícios utilizados como exemplo. A equipe real da Pantera Jiu-Jitsu é apresentada em visita à academia."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((t) => (
            <div
              key={t.name}
              className="group overflow-hidden rounded-lg bg-card border border-border"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-widest text-primary">{t.belt}</div>
                <h3 className="mt-2 font-display text-2xl">{t.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{t.spec}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Substitua o componente Schedule atual por este:

const SCHEDULE = {
  headers: ["Turma", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  rows: [
    ["Kids (5–12 anos)", "17:00", "—", "17:00", "—", "17:00", "10:00"],
    ["Iniciantes", "18:00", "18:00", "18:00", "18:00", "18:00", "—"],
    ["Intermediário", "19:30", "19:30", "19:30", "19:30", "19:30", "11:00"],
    ["Avançado", "21:00", "—", "21:00", "—", "21:00", "—"],
    ["No-Gi", "—", "20:30", "—", "20:30", "—", "12:00"],
    ["Competição", "—", "—", "22:00", "—", "22:00", "13:00"],
  ],
};

// Adicione esta interface antes da constante CLASS_INFO
interface ClassInfo {
  description: string;
  duration: string;
  level: string;
  focus: string;
}

// Tipar CLASS_INFO com um index signature
const CLASS_INFO: { [key: string]: ClassInfo } = {
  "Kids (5–12 anos)": {
    description: "Aula lúdica e educativa focada no desenvolvimento motor, disciplina e valores do Jiu-Jitsu. As crianças aprendem técnicas fundamentais de forma divertida e segura, sempre respeitando o ritmo individual.",
    duration: "50 min",
    level: "5 a 12 anos",
    focus: "Coordenação motora, disciplina, defesa pessoal básica, socialização",
  },
  "Iniciantes": {
    description: "Introdução aos fundamentos do Jiu-Jitsu. Aprenda posições básicas, escapes, raspagens e finalizações essenciais. Ideal para quem está começando ou quer revisar a base. Ambiente acolhedor e didático.",
    duration: "60 min",
    level: "Faixa Branca",
    focus: "Postura, movimentação, posições fundamentais, defesa pessoal",
  },
  "Intermediário": {
    description: "Aprofundamento técnico com combinações avançadas, transições e estratégias de luta. Treino dinâmico que desenvolve raciocínio tático e fluidez no jogo. Preparação gradual para níveis avançados.",
    duration: "60 min",
    level: "Faixa Azul e Roxa",
    focus: "Combinações, transições, pressão, guardas avançadas",
  },
  "Avançado": {
    description: "Treino intensivo para faixas superiores. Estudo aprofundado de posições complexas, ajustes finos e refinamento técnico. Preparação completa para campeonatos de alto nível e desenvolvimento de jogo próprio.",
    duration: "60 min",
    level: "Faixa Marrom e Preta",
    focus: "Técnica avançada, estratégia pessoal, sparring intenso",
  },
  "No-Gi": {
    description: "Jiu-Jitsu sem quimono focado em pegadas, clinch e adaptações técnicas. Desenvolve agilidade e transições rápidas, essencial para MMA e submission grappling. Treino dinâmico e moderno.",
    duration: "60 min",
    level: "Todos os níveis",
    focus: "Wrestling, controle de clinch, finalizações sem quimono, ritmo acelerado",
  },
  "Competição": {
    description: "Preparação específica para atletas competidores. Simulações de luta, estratégias de pontuação, drilling intenso e condicionamento físico voltado para alto rendimento em campeonatos IBJJF.",
    duration: "75 min",
    level: "Competidores (todas as faixas)",
    focus: "Estratégia competitiva, ritmo de luta, pontuação IBJJF, condicionamento",
  },
};

function Schedule() {
const [selectedClass, setSelectedClass] = useState<{
  name: string;
  time: string;
  description: string;
  duration: string;
  level: string;
  focus: string;
} | null>(null);  
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCellClick = (className: string, cellValue: string) => {
    if (cellValue !== "—" && CLASS_INFO[className]) {
      setSelectedClass({
        name: className,
        time: cellValue,
        ...CLASS_INFO[className],
      });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedClass(null), 200);
  };

  return (
    <>
      <section id="horarios" className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Horários"
            title={<>Grade semanal de treinos.</>}
            subtitle="Escolha o horário que melhor se encaixa na sua rotina. Turmas divididas por nível e idade. Clique no horário para mais detalhes."
          />
          <div className="mt-14 overflow-x-auto rounded-lg border border-border bg-card shadow-elegant">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  {SCHEDULE.headers.map((h, i) => (
                    <th
                      key={h}
                      className={`px-5 py-5 text-left font-display uppercase tracking-wider text-xs ${
                        i === 0 ? "text-foreground" : "text-muted-foreground text-center"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        onClick={() => handleCellClick(row[0], cell)}
                        className={`px-5 py-5 ${
                          i === 0
                            ? "font-semibold text-foreground"
                            : cell === "—"
                              ? "text-center text-muted-foreground/40"
                              : "text-center text-muted-foreground cursor-pointer group relative"
                        }`}
                      >
                        {cell !== "—" && i !== 0 ? (
                          <span className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                            {cell}
                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedClass && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm animate-in fade-in duration-300" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-card border border-border rounded-lg shadow-elegant max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-border bg-surface/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary">
                    {selectedClass.name.includes("Kids") ? "Infantil" : 
                     selectedClass.name === "Competição" ? "Alto Rendimento" : "Adulto"}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {selectedClass.name}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-surface rounded-md transition-colors shrink-0"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedClass.time}
                </div>
                <div className="text-muted-foreground">•</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">
                  {selectedClass.duration}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {selectedClass.description}
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1">Nível</p>
                    <p className="text-sm font-medium text-foreground">{selectedClass.level}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1">Foco da aula</p>
                    <p className="text-sm font-medium text-foreground">{selectedClass.focus}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-4 border-t border-border bg-surface/30">
              <a
                href="#contato"
                onClick={closeModal}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-elegant"
              >
                Agendar Aula Experimental
                <ChevronRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-center text-muted-foreground">
                Primeira aula gratuita • Sem compromisso
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const FEATURES = [
  { icon: Sparkles, title: "Tatame amplo", text: "Área generosa de treino com material de alta qualidade." },
  { icon: Wind, title: "Ambiente climatizado", text: "Conforto térmico durante todo o ano." },
  { icon: DoorOpen, title: "Vestiários", text: "Estrutura completa para homens e mulheres." },
  { icon: Car, title: "Estacionamento", text: "Vagas exclusivas para alunos e visitantes." },
  { icon: Baby, title: "Turmas Kids", text: "Programa dedicado ao desenvolvimento infantil." },
  { icon: Heart, title: "Turmas femininas", text: "Espaço acolhedor e adaptado às alunas." },
  { icon: Award, title: "Equipe qualificada", text: "Professores faixa preta e assistentes formados." },
  { icon: Trophy, title: "Seminários & eventos", text: "Encontros regulares com convidados de renome." },
];

function Features() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Diferenciais"
          title={<>Estrutura pensada para a sua evolução.</>}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-6 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors"
            >
              <f.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 font-display text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { img: panteraImg6, tag: "Seminários", span: "md:col-span-2 md:row-span-3" },
  { img: panteraImg9, tag: "Graduações", span: "" },
  { img: panteraImg5, tag: "Competições", span: "" },
  { img: panteraImg1, tag: "Respeito", span: "m" },
  { img: panteraImg9, tag: "Treinos", span: "md:col-span-1" },
];

function Gallery() {
  return (
    <section id="galeria" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Galeria"
          title={<>Momentos que definem a Pantera.</>}
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg border border-border ${g.span}`}
            >
              <img
                src={g.img}
                alt={g.tag}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-foreground/90 font-semibold">
                {g.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    initials: "MR",
    name: "Marcos R.",
    role: "Aluno há 3 anos",
    rating: 5,
    text: "Cheguei sem nenhuma experiência e fui recebido como parte da família. Os professores realmente se importam com a evolução de cada aluno.",
  },
  {
    initials: "JS",
    name: "Juliana S.",
    role: "Turma feminina",
    rating: 5,
    text: "Um ambiente seguro, respeitoso e desafiador. O Jiu-Jitsu mudou minha rotina e minha confiança. Recomendo sem pensar duas vezes.",
  },
  {
    initials: "AF",
    name: "André F.",
    role: "Pai de aluno kids",
    rating: 5,
    text: "Meu filho encontrou disciplina, foco e novos amigos. Os professores da turma infantil são atenciosos e extremamente preparados.",
  },
];

function Testimonials() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          eyebrow="Depoimentos"
          title={<>O que dizem os nossos alunos.</>}
          subtitle="Depoimentos fictícios apresentados como exemplo do tipo de experiência vivida no tatame da Pantera."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-lg bg-card border border-border flex flex-col"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 text-foreground leading-relaxed flex-1">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-sm tracking-wider">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Preciso ter experiência prévia para começar?",
    a: "Não. A maioria dos nossos alunos começa do zero. Nossas turmas de iniciantes são estruturadas para acolher quem nunca pisou em um tatame.",
  },
  {
    q: "Existe aula experimental?",
    a: "Sim. Oferecemos uma aula experimental gratuita para que você conheça a estrutura, os professores e a metodologia antes de qualquer decisão.",
  },
  {
    q: "Qual a idade mínima para começar?",
    a: "A partir de 5 anos, nas nossas turmas kids. Não há idade máxima — recebemos alunos de todas as fases da vida.",
  },
  {
    q: "Preciso comprar um kimono antes de começar?",
    a: "Não é necessário. Na aula experimental você pode usar roupa confortável. Após decidir se matricular, orientamos a compra do gi.",
  },
  {
    q: "Há treinos específicos para mulheres?",
    a: "Sim. Contamos com turmas femininas conduzidas por professoras graduadas, em um ambiente acolhedor e seguro.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg sm:text-xl">{q}</span>
        <span className="shrink-0 text-primary">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden text-muted-foreground leading-relaxed">{a}</div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section className="section-pad">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="Perguntas Frequentes" title={<>Antes do primeiro dia no tatame.</>} />
          <p className="mt-6 text-muted-foreground">
            Não encontrou sua dúvida? Fale com a gente pelo WhatsApp — respondemos com carinho.
          </p>
        </div>
        <div className="lg:col-span-7">
          {FAQ.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>
      <div className="relative container-page section-pad text-center">
        <span className="eyebrow">Sua Jornada</span>
        <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] max-w-4xl mx-auto">
          O primeiro passo <br /> começa <span className="text-primary">no tatame.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Venha conhecer a Pantera Jiu-Jitsu. Traga roupa confortável, deixe o
          resto com a gente. Sua aula experimental está reservada.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/926714367"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-elegant"
          >
            Agendar Aula Experimental
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
  <div className="flex items-center gap-3">
    <img src={panteraLogo6} alt="Pantera Jiu-Jitsu" className="h-14 w-14 rounded-full" />
    <div>
      <div className="font-display text-xl tracking-widest">PANTERA</div>
      <div className="text-[10px] tracking-[0.35em] text-muted-foreground">JIU-JITSU</div>
      <div className="text-[10px] tracking-[0.35em] text-muted-foreground">ANGOLA</div>
    </div>
  </div>
  <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
    Tradição, disciplina e evolução no tatame. Uma academia dedicada
    ao desenvolvimento técnico e humano dos seus alunos.
  </p>
  <div className="mt-6 flex gap-3">
    <a
      href="https://www.instagram.com/pantera_jiujitsu_luanda/"
      target="_blank"
      rel="noreferrer"
      className="h-10 w-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
      aria-label="Instagram"
    >
      <Instagram className="h-4 w-4" />
    </a>
    <a
      href="#"
      className="h-10 w-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
      aria-label="Facebook"
    >
      <Facebook className="h-4 w-4" />
    </a>
    <a
      href="#"
      className="h-10 w-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
      aria-label="Youtube"
    >
      <Youtube className="h-4 w-4" />
    </a>
  </div>
</div>
          
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-primary">Contacto</div>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Condomínio Ginga Isabel</p>
                  <p>Referência: Ginga Shopping</p>
                  <p>Luanda, Angola</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a 
                  href="tel:+244926714367" 
                  className="hover:text-foreground transition-colors"
                >
                  +244 926 714 367
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a 
                  href="mailto:contato@panterajiujitsu.com.br" 
                  className="hover:text-foreground transition-colors"
                >
                  contato@panterajiujitsu.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-primary">Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-primary">Localização</div>
            <div className="mt-5 aspect-video rounded-md overflow-hidden border border-border">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Condomínio+Ginga+Isabel+Ginga+Shopping+Luanda+Angola&output=embed"
                className="w-full h-full grayscale contrast-[1.1]"
                loading="lazy"
              />
            </div>
            <a 
              href="https://maps.google.com/?q=Condomínio+Ginga+Isabel+Ginga+Shopping+Luanda+Angola"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <MapPin className="h-3 w-3" />
              Abrir no Google Maps
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Pantera Jiu-Jitsu Angola. Todos os direitos reservados.</div>
          <div className="tracking-widest uppercase">Oss.</div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Modalities />
        <Team />
        <Schedule />
        <Features />
        <Gallery />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
