import { createFileRoute } from "@tanstack/react-router";
import { useCallback, type ReactNode } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUpRight, Copy } from "lucide-react";

const EMAIL = "ankita.patra21@gmail.com";
const RESUME_URL =
  "https://drive.google.com/drive/folders/1TfJdLpQWqvuq3Dpuh2iSPz7JgO3wfsAe";

const ANNOUNCEMENTS = [
  {
    href: "https://www.youtube.com/watch?v=2srbflqimJQ",
    videoId: "2srbflqimJQ",
    title: "Microsoft Purview X Microsoft Foundry:",
    body: " AI-powered regulatory assessment template creation & compliance protection for Microsoft Foundry apps and agents.",
  },
  {
    href: "https://www.youtube.com/watch?v=XmcDFCrOXUg",
    videoId: "XmcDFCrOXUg",
    title: "Microsoft Copilot X Microsoft Purview:",
    body: " Out-of-box compliance for Copilot & option to expand guardrails using AI-powered regulatory assessment template.",
  },
  {
    href: "https://www.youtube.com/live/tEseNXws7-s?t=12850&si=63UYnj9Bk2b3geFk",
    videoId: "tEseNXws7-s",
    title: "Myntra X Figma presents DesignMyx:",
    body: " Shop with Maya: Conversational AI for intent narrowing & personalised recommendation in fashion e-commerce user journey.",
  },
];

const WORKS = [
  {
    surface:
      "bg-[radial-gradient(circle_at_78%_42%,rgba(142,165,255,0.58),transparent_31%),radial-gradient(circle_at_68%_26%,rgba(166,246,255,0.45),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.78))]",
    tag: "COMPLIANCE RISK MANAGEMENT, ENTERPRISE SAAS",
    tagClass: "text-blue-600",
    title:
      "AI-powered regulatory templates for custom & evolving compliance requirements",
    live: "MICROSOFT PURVIEW",
    logo: "logos/microsoft_logo.webp",
    visual: "portfolio/work-purview-template.png",
    visualClass:
      "lg:right-6 lg:top-[5.5rem] lg:h-[58%] lg:w-auto lg:object-contain",
    stats: [
      { k: "~150-180% YoY growth", v: "in tenant subscription" },
      { k: "Timeline", v: "Apr - Jun 2025" },
      { k: "Contributions", v: "End-to-end UX ownership" },
    ],
    href: "https://www.figma.com/proto/pfkpRsScKCezRkytPPkSea/Microsoft-Purview---Compliance-Manager?node-id=1-4918&p=f&t=032qu2kdO3gitoPP-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4918",
  },
  {
    surface:
      "bg-[radial-gradient(circle_at_83%_55%,rgba(165,119,221,0.5),transparent_35%),radial-gradient(circle_at_80%_33%,rgba(255,196,246,0.52),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.8))]",
    tag: "CRM - CUSTOMER CARE, ENTERPRISE SAAS",
    tagClass: "text-violet-600",
    title:
      "Contextual guided flows for customer care agents to grasp & resolve customer queries on call faster",
    live: "MYNTRA",
    logo: "logos/myntra_logo.png",
    visual: "portfolio/work-care-flows.png",
    visualClass:
      "lg:-right-4 lg:bottom-0 lg:h-[70%] lg:w-auto lg:object-contain",
    stats: [
      { k: "~30% reduction", v: "in average handling time" },
      { k: "Timeline", v: "Feb - Jun 2024" },
      { k: "Contributions", v: "Concept & UX ownership" },
    ],
    href: "https://www.figma.com/proto/IWxoPnCV8V8uR6f4tIF5F5/SA?node-id=4006-26398&t=ESxHyWZvKR8DGDXf-1&scaling=contain&content-scaling=fixed&page-id=4006%3A26397&starting-point-node-id=4006%3A26398&fuid=1148614817063352196",
  },
  {
    surface:
      "bg-[radial-gradient(circle_at_82%_45%,rgba(255,85,149,0.58),transparent_38%),radial-gradient(circle_at_70%_68%,rgba(255,204,224,0.72),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.8))]",
    tag: "CONSUMER MOBILE APP, E-COMMERCE",
    tagClass: "text-rose-600",
    title:
      "0 -> MVP : Conversational AI for non-linear search to aid intent narrowing & personalised recommendation",
    live: "MYNTRA",
    liveLabel: "V2.0 LIVE @",
    logo: "logos/myntra_logo.png",
    visual: "portfolio/work-maya.png",
    visualClass:
      "lg:right-4 lg:top-[5.8rem] lg:h-[48%] lg:w-auto lg:object-contain",
    stats: [
      { k: "~2% contribution", v: "in overall bag building" },
      { k: "Timeline", v: "Jul - Sep 2023" },
      { k: "Contributions", v: "IA, 0 -> 1 MVP flow, base prompt structure" },
    ],
    href: "https://www.figma.com/proto/6FobWSzEU7bF9nJ3P5Nur4/Maya-OG---2.0?node-id=2001-33079&t=ReJy0iZGVaT2R1xc-1&scaling=contain&content-scaling=fixed&page-id=2001%3A33078&starting-point-node-id=2001%3A33079&fuid=1148614817063352196",
  },
];

const NDA_PROJECTS = [
  {
    status: "WIP @",
    logo: "logos/microsoft_logo.webp",
    org: "MICROSOFT PURVIEW",
    title:
      "Continuous compliance evaluation and governance for AI Agents at scale",
    stats: [{ k: "Ongoing - since Mar 2026", v: "End-to-end UX ownership" }],
  },
  {
    status: "WIP @",
    logo: "logos/microsoft_logo.webp",
    org: "MICROSOFT PURVIEW",
    title:
      "Agentic workflows for regulatory compliance action management",
    stats: [{ k: "Ongoing - since Dec 2025", v: "End-to-end UX ownership" }],
  },
  {
    status: "CURRENTLY LIVE @",
    logo: "logos/myntra_logo.png",
    org: "MYNTRA",
    title:
      "Framework for rapid iteration in e-commerce conversational AI search & recommendation",
    stats: [
      { k: "~2.5% contribution", v: "in overall bag building" },
      { k: "May - Aug 2024", v: "UX/UI Owner" },
    ],
  },
  {
    status: "CURRENTLY LIVE @",
    logo: "logos/myntra_logo.png",
    org: "MYNTRA",
    title:
      "Seller-facing advertisement bidding platform, supporting campaign & ROI management",
    stats: [
      { k: "~60% registered sellers", v: "with active ad campaigns monthly" },
      { k: "Nov - Jan 2025", v: "UX owner" },
    ],
  },
];

const COMPANIES = [
  {
    name: "Microsoft",
    sub: "Since Feb 2025",
    logo: "logos/microsoft_logo.webp",
  },
  {
    name: "Myntra",
    sub: "Jun 2021 - Feb 2025",
    logo: "logos/myntra_logo.png",
  },
  {
    name: "Sprinklr",
    sub: "May - Jul 2020",
    logo: "logos/sprinklr_logo.svg",
  },
];

const ABOUT_TILES = [
  {
    src: "portfolio/about-sunflower-field.png",
    alt: "Ankita standing in a sunflower field",
    className:
      "lg:left-[50.5rem] lg:top-[11.6rem] lg:h-[34rem] lg:w-[24rem]",
  },
  {
    src: "portfolio/about-3d-desk.png",
    alt: "A 3D desk model",
    className:
      "lg:left-[72rem] lg:top-[19.4rem] lg:h-[14.8rem] lg:w-[26rem]",
  },
  {
    src: "portfolio/about-character-turnaround.png",
    alt: "Character design turnaround sheet",
    className:
      "lg:left-[96rem] lg:top-[10.8rem] lg:h-[8.6rem] lg:w-[15rem]",
  },
  {
    src: "portfolio/about-pop-art-cat.png",
    alt: "Colorful illustration",
    className:
      "lg:left-[96rem] lg:top-[24.2rem] lg:h-[13.2rem] lg:w-[12.2rem]",
  },
  {
    src: "portfolio/about-purple-painting.png",
    alt: "Purple digital portrait painting",
    className:
      "lg:left-[70rem] lg:bottom-0 lg:h-[38.5rem] lg:w-[38.5rem]",
  },
  {
    src: "portfolio/about-mona-lisa-sketch.png",
    alt: "Mona Lisa pencil sketch",
    className: "lg:-left-[16rem] lg:bottom-0 lg:h-[20rem] lg:w-[34rem]",
  },
  {
    src: "portfolio/about-crochet-pink.png",
    alt: "Pink crochet work in progress",
    className: "lg:left-[13rem] lg:bottom-0 lg:h-[17.5rem] lg:w-[25rem]",
  },
  {
    src: "portfolio/about-clay-sculpture.png",
    alt: "Clay figure in progress",
    className: "lg:left-[32rem] lg:bottom-0 lg:h-[28rem] lg:w-[20rem]",
  },
  {
    src: "portfolio/about-kalamkari-pattern.png",
    alt: "Bright ornamental pattern artwork",
    className: "lg:left-[52rem] lg:bottom-0 lg:h-[28rem] lg:w-[28rem]",
  },
];

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[94rem] px-5 sm:px-8 xl:w-[62vw] xl:min-w-[58rem] ${className}`}
    >
      {children}
    </section>
  );
}

function CompanyBadge({
  logo,
  org,
  status,
}: {
  logo: string;
  org: string;
  status: string;
}) {
  return (
    <span className="portfolio-badge inline-flex max-w-full items-center gap-2 rounded-full bg-neutral-100/90 px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <span>{status}</span>
      <img src={logo} alt="" className="h-5 w-5 shrink-0 object-contain" />
      <span className="truncate">{org}</span>
    </span>
  );
}

function StatStrip({
  stats,
  compact = false,
}: {
  stats: Array<{ k: string; v: string }>;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200/85 bg-white/70 shadow-[0_16px_38px_rgba(20,20,20,0.06),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl ${
        compact ? "p-5" : "p-5 sm:p-6"
      }`}
    >
      <div
        className={`grid gap-4 ${
          stats.length === 1
            ? "grid-cols-1"
            : "sm:grid-cols-[1.2fr_1fr]"
        } ${stats.length === 3 ? "lg:grid-cols-3" : ""}`}
      >
        {stats.map((s, index) => (
          <div
            key={`${s.k}-${s.v}`}
            className={`min-w-0 ${
              index > 0 ? "sm:border-l sm:border-neutral-200 sm:pl-6" : ""
            }`}
          >
            <div className="portfolio-stat-key text-base font-bold leading-snug text-neutral-800 sm:text-lg">
              {s.k}
            </div>
            <div className="portfolio-stat-value mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: (typeof WORKS)[number] }) {
  return (
    <a
      href={work.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block min-h-[31rem] overflow-hidden rounded-[1.45rem] border border-neutral-200/85 bg-white shadow-[0_10px_28px_rgba(20,20,20,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(20,20,20,0.08)]"
    >
      <div className={`absolute inset-0 ${work.surface}`} />
      <div className="relative z-10 flex min-h-[31rem] flex-col justify-between p-7 sm:p-10 lg:p-12">
        <div className="relative z-20 max-w-3xl lg:max-w-[70%]">
          <p
            className={`portfolio-work-tag text-xs font-semibold uppercase tracking-[0.2em] ${work.tagClass}`}
          >
            {work.tag}
          </p>
          <h3 className="portfolio-work-title mt-5 max-w-[47rem] font-display text-2xl leading-[1.22] tracking-tight text-neutral-900 sm:text-3xl lg:text-[1.9rem]">
            {work.title}
          </h3>
          <div className="mt-6">
            <CompanyBadge
              logo={work.logo}
              org={work.live}
              status={work.liveLabel ?? "CURRENTLY LIVE @"}
            />
          </div>
        </div>

        <div className="relative z-20 mt-9 max-w-3xl lg:max-w-[66%]">
          <StatStrip stats={work.stats} />
        </div>

        <div className="relative z-0 mt-8 h-56 overflow-hidden rounded-2xl bg-white/35 sm:h-64 lg:pointer-events-none lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[39%] lg:overflow-visible lg:rounded-none lg:bg-transparent">
          <img
            src={work.visual}
            alt=""
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-contain drop-shadow-[0_24px_32px_rgba(26,26,26,0.14)] lg:inset-auto ${work.visualClass}`}
          />
        </div>
      </div>
    </a>
  );
}

function NdaProjectCard({ project }: { project: (typeof NDA_PROJECTS)[number] }) {
  return (
    <article className="flex min-h-[17rem] flex-col justify-between rounded-[1.45rem] border border-neutral-200/85 bg-white/72 p-7 shadow-[0_14px_42px_rgba(20,20,20,0.035)] backdrop-blur-sm sm:p-9">
      <div>
        <CompanyBadge
          logo={project.logo}
          org={project.org}
          status={project.status}
        />
        <h3 className="portfolio-nda-title mt-7 max-w-[32rem] text-xl font-bold leading-[1.38] tracking-tight text-neutral-900 sm:text-2xl">
          {project.title}
        </h3>
      </div>
      <div className="mt-8 max-w-[31rem]">
        <StatStrip stats={project.stats} compact />
      </div>
    </article>
  );
}

export function Portfolio() {
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied", { description: EMAIL });
    } catch {
      toast.error("Couldn't copy - email: " + EMAIL);
    }
  }, []);

  const scrollToWork = useCallback(() => {
    document
      .getElementById("impactful-work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfbf8] text-neutral-900 font-sans antialiased">
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/35 text-neutral-900 backdrop-blur-[24px] backdrop-saturate-200"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.34), rgba(255,255,255,0.13))",
          boxShadow:
            "0 16px 55px rgba(20,20,20,0.045), inset 0 -1px 0 rgba(255,255,255,0.58)",
        }}
      >
        <div className="mx-auto flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-[60px] sm:py-5">
          <div className="portfolio-header-name min-w-0 truncate text-lg font-extrabold tracking-[-0.02em] sm:text-xl">
            Ankita Patra
          </div>
          <button
            onClick={copyEmail}
            className="portfolio-header-contact inline-flex min-w-0 shrink-0 items-center gap-2 rounded-md bg-neutral-900 px-3.5 py-2 text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.16)] transition hover:bg-neutral-800 sm:px-5 sm:text-xs"
          >
            <span className="hidden sm:inline">Contact me :</span>
            <span className="truncate normal-case tracking-[0.08em]">
              {EMAIL}
            </span>
            <Copy className="h-3.5 w-3.5 shrink-0 sm:hidden" />
          </button>
        </div>
      </header>

      <main className="pt-28 sm:pt-36">
        <SectionShell className="portfolio-font-hero pt-8 sm:pt-16">
          <section className="relative grid min-h-[42rem] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative z-20 max-w-4xl">
              <p className="portfolio-hero-kicker text-3xl font-light tracking-tight sm:text-4xl">
                Heyo!
              </p>
              <h1 className="portfolio-hero-title mt-4 max-w-[55rem] font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:w-[72rem] lg:max-w-none lg:whitespace-nowrap lg:text-[5.05rem]">
                <span className="bg-gradient-to-r from-orange-400 via-red-900 to-black bg-clip-text text-transparent">
                  I'm
                </span>{" "}
                Ankita Patra.
              </h1>
              <p className="portfolio-hero-body mt-8 max-w-[32rem] text-base leading-[1.75] text-neutral-700 sm:text-lg">
                Product builder passionate about connecting user needs,
                business goals and technical realities, untangling ambiguity into
                impactful products.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <button
                  onClick={scrollToWork}
                  className="portfolio-section-action inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
                >
                  Check my work <ArrowDown className="h-3.5 w-3.5" />
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-section-action inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 hover:text-neutral-600"
                >
                  Check my impact in resume{" "}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="relative z-0 mx-auto w-full max-w-[38rem] lg:pointer-events-none lg:absolute lg:bottom-[5rem] lg:right-0 lg:w-[20rem] lg:max-w-none lg:origin-bottom-right xl:w-[22rem]">
              <div className="aspect-[0.64] overflow-hidden rounded-[1.1rem] bg-orange-400 shadow-[0_18px_42px_rgba(19,19,19,0.08)]">
                <img
                  src="portfolio/hero-portrait.png"
                  alt="Ankita Patra smiling in front of an orange wall"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        </SectionShell>

        <SectionShell className="portfolio-font-credentials mt-12 space-y-7 sm:mt-20">
          <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_21rem]">
            <div className="relative">
              <img
                src="portfolio/doodle-hand-wave.svg"
                alt=""
                className="absolute -left-20 -top-[5.6rem] z-0 h-[9.8rem] w-[7.8rem] -rotate-6 select-none"
                aria-hidden
              />
              <div className="relative z-10 rounded-[1.45rem] border border-neutral-200/80 bg-white/70 px-7 py-6 shadow-[0_12px_32px_rgba(20,20,20,0.035)] backdrop-blur-sm sm:px-9">
                <div className="grid items-center gap-x-6 gap-y-7 md:grid-cols-2 xl:grid-cols-[1.28fr_1fr_1fr_1fr]">
                  <div className="flex items-center gap-4 pr-6 xl:border-r xl:border-neutral-200">
                    <span className="portfolio-credentials-number font-display text-5xl leading-none sm:text-6xl">
                      5+
                    </span>
                    <span className="portfolio-credentials-title text-lg font-bold leading-tight text-neutral-800">
                      years of
                      <br />
                      experience
                    </span>
                  </div>
                  {COMPANIES.map((company) => (
                    <div key={company.name} className="flex items-center gap-3">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-10 w-10 shrink-0 object-contain"
                      />
                      <div className="min-w-0">
                        <div className="portfolio-credentials-name text-lg font-semibold leading-tight">
                          {company.name}
                        </div>
                        <div className="portfolio-credentials-meta mt-1 text-xs text-neutral-500">
                          {company.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="portfolio/doodle-grad-cap.svg"
                alt=""
                className="absolute -right-12 -top-[2.5rem] z-0 h-[5rem] w-[6.4rem] rotate-3 select-none"
                aria-hidden
              />
              <div className="relative z-10 h-full rounded-[1.45rem] border border-neutral-200/80 bg-white/70 px-6 py-6 shadow-[0_12px_32px_rgba(20,20,20,0.035)] backdrop-blur-sm">
                <div className="flex h-full items-center justify-center gap-4">
                  <div className="portfolio-credentials-logo-text grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-200 bg-white text-[0.62rem] font-black text-blue-700">
                    IIT
                  </div>
                  <div>
                    <div className="portfolio-credentials-school text-lg font-semibold leading-tight">
                      IIT Guwahati
                    </div>
                    <div className="portfolio-credentials-meta mt-1 text-xs text-neutral-500">
                      B.Des (2017 - 2021)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.45rem] border border-neutral-200/80 bg-white/72 px-7 py-7 shadow-[0_12px_32px_rgba(20,20,20,0.035)] backdrop-blur-sm sm:px-10">
            <div className="grid gap-6 sm:grid-cols-[14rem_1fr] sm:items-center">
              <div className="portfolio-credentials-domain-label text-lg font-semibold leading-snug text-neutral-700 sm:border-r sm:border-neutral-200 sm:pr-7">
                Worked in-depth
                <br />
                across many domains
              </div>
              <p className="portfolio-credentials-domain-copy text-lg leading-[1.75] text-neutral-600">
                Agentic experiences, Enterprise SaaS, AI governance, Compliance
                & risk management, CRM, Customer care, Marketing campaign
                management, Ad bidding, Consumer app, e-Commerce.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="portfolio-font-announcements mt-24 sm:mt-32">
          <h2 className="portfolio-section-heading font-display text-3xl tracking-tight sm:text-4xl">
            Global announcements for some of my work
          </h2>
          <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {ANNOUNCEMENTS.map((announcement) => (
              <a
                key={announcement.href}
                href={announcement.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200/70">
                  <img
                    src={`https://i.ytimg.com/vi/${announcement.videoId}/hqdefault.jpg`}
                    alt={announcement.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <p className="portfolio-announcement-copy mt-4 text-base leading-relaxed text-neutral-700">
                  <span className="font-bold text-neutral-900">
                    {announcement.title}
                  </span>
                  {announcement.body}
                </p>
              </a>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="impactful-work"
          className="portfolio-font-work mt-28 scroll-mt-28 sm:mt-36"
        >
          <h2 className="portfolio-section-heading font-display text-5xl leading-none tracking-tight sm:text-6xl">
            Glimpse of my work
          </h2>
          <div className="mt-12 space-y-9">
            {WORKS.map((work) => (
              <WorkCard key={work.href} work={work} />
            ))}
          </div>
        </SectionShell>

        <SectionShell className="portfolio-font-nda mt-28 sm:mt-36">
          <h2 className="portfolio-section-heading font-display text-3xl tracking-tight sm:text-4xl">
            Other noteworthy projects under NDA
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {NDA_PROJECTS.map((project) => (
              <NdaProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionShell>

        <section className="portfolio-font-about mt-28 overflow-hidden sm:mt-36">
          <div className="mx-auto w-full max-w-[94rem] px-5 sm:px-8 xl:w-[62vw] xl:min-w-[58rem] lg:relative lg:h-screen lg:min-h-[760px]">
            <div className="max-w-[33rem] lg:absolute lg:left-8 lg:top-[5.5rem]">
              <h2 className="portfolio-section-heading font-display text-5xl tracking-tight sm:text-6xl">
                About me
              </h2>
              <div className="portfolio-about-copy mt-8 max-w-[31rem] text-lg leading-[1.75] text-neutral-700 sm:text-xl">
                <p>
                  I'm a lover of all forms of arts. In my free time, I keep
                  experimenting & exploring different skills. These days, I've
                  been spending my time painting and crocheting granny squares.
                  Aside from that, I love to travel, host people and binge
                  content with a hot bowl of Ramen.
                </p>
                <p className="mt-2 font-bold text-neutral-900">
                  Want to work with me?
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button
                  onClick={copyEmail}
                  className="portfolio-section-action inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
                >
                  Contact me <Copy className="h-3.5 w-3.5" />
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-section-action inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 hover:text-neutral-600"
                >
                  More about me in resume{" "}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-0 lg:block">
              {ABOUT_TILES.map((tile) => (
                <img
                  key={tile.src}
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className={`h-44 w-full rounded-[1.05rem] object-cover sm:h-56 lg:absolute lg:shadow-none ${tile.className}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
