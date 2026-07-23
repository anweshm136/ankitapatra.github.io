import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useResponsive, type Breakpoint } from "@/hooks/use-responsive";

const EMAIL = "ankita.patra21@gmail.com";
const RESUME_URL =
  "https://drive.google.com/drive/folders/1TfJdLpQWqvuq3Dpuh2iSPz7JgO3wfsAe";
const publicAssetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
const HERO_TITLE_BACKGROUND = `url("${publicAssetUrl("noise.png")}"), url("${publicAssetUrl("hero-title-texture.svg")}")`;

const LOGOS = {
  iitg: "logos/iitg.png",
  microsoft: "logos/microsoft.png",
  myntra: "logos/myntra.png",
  purview: "logos/purview.png",
  sprinklr: "logos/sprinklr.png",
} as const;

const ANNOUNCEMENTS = [
  {
    href: "https://www.youtube.com/watch?v=2srbflqimJQ",
    thumbnail: "portfolio/announcement-purview.png",
    title: "Microsoft Purview X Microsoft Foundry:",
    body: " AI-powered regulatory template & compliance protection for Microsoft Foundry apps and agents.",
  },
  {
    href: "https://www.youtube.com/watch?v=XmcDFCrOXUg",
    thumbnail: "portfolio/announcement-copilot.png",
    title: "Microsoft Copilot X Microsoft Purview:",
    body: " Out-of-box compliance for Copilot & option to expand guardrails using AI-powered regulatory assessment template.",
  },
  {
    href: "https://www.youtube.com/live/tEseNXws7-s?t=12850&si=63UYnj9Bk2b3geFk",
    thumbnail: "portfolio/announcement-designmyx.png",
    title: "Myntra X Figma presents DesignMyx:",
    body: " Conversational AI for intent narrowing & personalised recommendation in e-commerce user journey.",
  },
];

const WORKS = [
  {
    backgroundOver768: "portfolio/work-purview-background-over768.png",
    backgroundBelow768: "portfolio/work-purview-background-below768.png",
    tag: "COMPLIANCE RISK MANAGEMENT, ENTERPRISE SAAS",
    tagClass: "text-blue-600",
    title:
      "AI-powered regulatory templates for custom & evolving compliance requirements",
    live: "MICROSOFT PURVIEW",
    logo: LOGOS.purview,
    visual: "portfolio/work-purview-template.png",
    impactPanelMaxWidth: "730px",
    visualClassXl:
      "lg:right-0 lg:bottom-0 lg:w-[1194px] lg:h-auto",
    visualClassSm:
      "bottom-[-0.75rem] left-1/2 w-[94%] -translate-x-1/2 object-contain",
    stats: [
      { k: "~150-180% YoY growth", v: "in tenant subscription" },
      { k: "Timeline", v: "Apr - Jun 2025" },
      { k: "Contributions", v: "End-to-end UX ownership" },
    ],
    href: "https://www.figma.com/proto/pfkpRsScKCezRkytPPkSea/Microsoft-Purview---Compliance-Manager?node-id=1-4918&p=f&t=032qu2kdO3gitoPP-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4918",
  },
  {
    backgroundOver768: "portfolio/work-care-flows-background-over768.png",
    backgroundBelow768: "portfolio/work-care-flows-background-below768.png",
    tag: "CRM - CUSTOMER CARE, ENTERPRISE SAAS",
    tagClass: "text-violet-600",
    title:
      "Contextual guided flows for customer care agents to grasp & resolve customer queries on call faster",
    live: "MYNTRA",
    logo: LOGOS.myntra,
    visual: "portfolio/work-care-flows.png",
    impactPanelMaxWidth: "730px",
    visualClassXl:
      "lg:right-0 lg:bottom-0 lg:w-[1194px] lg:h-auto",
    visualClassSm:
      "bottom-[-1.8rem] left-1/2 w-[96%] -translate-x-1/2 object-contain",
    stats: [
      { k: "~30% reduction", v: "in average handling time" },
      { k: "Timeline", v: "Feb - Jun 2024" },
      { k: "Contributions", v: "Concept & UX ownership" },
    ],
    href: "https://www.figma.com/proto/IWxoPnCV8V8uR6f4tIF5F5/SA?node-id=4006-26398&t=ESxHyWZvKR8DGDXf-1&scaling=contain&content-scaling=fixed&page-id=4006%3A26397&starting-point-node-id=4006%3A26398&fuid=1148614817063352196",
  },
  {
    backgroundOver768: "portfolio/work-maya-background-over768.png",
    backgroundBelow768: "portfolio/work-maya-background-below768.png",
    tag: "CONSUMER MOBILE APP, E-COMMERCE",
    tagClass: "text-rose-600",
    title:
      "0 -> MVP : Conversational AI for non-linear search to aid intent narrowing & personalised recommendation",
    live: "MYNTRA",
    liveLabel: "V2.0 LIVE @",
    logo: LOGOS.myntra,
    visual: "portfolio/work-maya.png",
    impactPanelMaxWidth: "720px",
    visualClassXl:
      "lg:right-0 lg:bottom-0 lg:w-[1194px] lg:h-auto",
    visualClassSm:
      "bottom-[0.9rem] left-1/2 w-[92%] -translate-x-1/2 object-contain",
    stats: [
      { k: "~2% contribution", v: "in overall bag building" },
      { k: "Timeline", v: "Jul - Sep 2023" },
      { k: "Contributions", v: "IA, 0 -> 1 MVP flow, base prompt structure", vXlLines: ["IA, 0 -> 1 MVP flow,", "base prompt structure"] },
    ],
    href: "https://www.figma.com/proto/6FobWSzEU7bF9nJ3P5Nur4/Maya-OG---2.0?node-id=2001-33079&t=ReJy0iZGVaT2R1xc-1&scaling=contain&content-scaling=fixed&page-id=2001%3A33078&starting-point-node-id=2001%3A33079&fuid=1148614817063352196",
  },
];

const NDA_PROJECTS = [
  {
    status: "WIP @",
    logo: LOGOS.purview,
    org: "MICROSOFT PURVIEW",
    title:
      "Continuous compliance evaluation & governance for AI Agents at scale",
    stats: [{ k: "Ongoing - since Mar 2026", v: "with end-to-end UX ownership" }],
  },
  {
    status: "WIP @",
    logo: LOGOS.purview,
    org: "MICROSOFT PURVIEW",
    title:
      "Agentic workflows for regulatory compliance action management",
    stats: [{ k: "Ongoing - since Dec 2026", v: "with end-to-end UX ownership" }],
  },
  {
    status: "CURRENTLY LIVE @",
    logo: LOGOS.myntra,
    org: "MYNTRA",
    title:
      "Seller-facing advertisement bidding platform, supporting campaign & ROI management",
    stats: [
      { k: "~60% registered sellers", v: "with active ad campaigns monthly" },
      { k: "Timeline", v: "Nov - Jan 2025 as UX owner" },
    ],
  },
  {
    status: "CURRENTLY LIVE @",
    logo: LOGOS.myntra,
    org: "MYNTRA",
    title:
      "Framework for rapid iteration in e-commerce conversational AI search & recommendation",
    stats: [
      { k: "~2.5% contribution", v: "in overall bag building" },
      { k: "Timeline", v: "May - Aug 2024 as UX owner" },
    ],
  },
];

const COMPANIES = [
  {
    name: "Microsoft",
    sub: "Since Feb 2025",
    logo: LOGOS.microsoft,
    href: "https://www.microsoft.com/en-us/security/business/microsoft-purview?msockid=0b9e2238286c666914d8345929596710",
  },
  {
    name: "Myntra",
    sub: "Jun 2021 - Feb 2025",
    logo: LOGOS.myntra,
    href: "https://www.myntra.com/",
  },
  {
    name: "Sprinklr",
    sub: "May - Jul 2020",
    logo: LOGOS.sprinklr,
    href: "https://www.sprinklr.com/",
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
      className={`mx-auto w-full px-6 md:px-14 xl:max-w-[1197px] xl:px-0 ${className}`}
    >
      {children}
    </section>
  );
}

function CompanyBadge({
  logo,
  org,
  status,
  breakpoint,
  ndaDesktopExtraLeftPadding = false,
}: {
  logo: string;
  org: string;
  status: string;
  breakpoint?: "sm" | "md" | "xl";
  ndaDesktopExtraLeftPadding?: boolean;
}) {
  const isSm = breakpoint === "sm";
  return (
    <div className={`portfolio-badge ${isSm ? 'inline-flex flex-col gap-0 rounded-[12px] px-[12px] py-[6px]' : 'inline-flex items-center gap-2 rounded-[20px] px-2 pb-[13px] pr-4 pt-3'} bg-[rgba(37,5,53,0.05)] backdrop-blur-[5px]`}>
      {isSm ? (
        <>
          <span className="text-[12px] tracking-[1.2px] font-semibold uppercase leading-[22px] text-[#1b1f22]">
            {status}
          </span>
          <div className="flex gap-[2px] items-center shrink-0">
            <div className="relative shrink-0 size-[20px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logo} />
            </div>
            <span className="text-[12px] tracking-[1.2px] font-semibold uppercase leading-[22px] text-[#1b1f22]">
              {org}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-start shrink-0 w-fit">
            <div className={`flex items-center justify-center w-fit ${ndaDesktopExtraLeftPadding ? 'pl-[6px]' : 'pl-[4px]'}`}>
              <p className="text-[16px] tracking-[1.6px] font-semibold leading-[22px] uppercase text-[#1b1f22]">
                {status}
              </p>
            </div>
          </div>
          <div className="flex gap-[2px] items-center shrink-0 h-[12px]">
            <div className="relative shrink-0 size-[34px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logo} />
            </div>
            <p className="text-[16px] tracking-[1.6px] font-semibold leading-[22px] uppercase text-[#1b1f22] truncate whitespace-nowrap">
              {org}
            </p>
          </div>
        </>
      )}
    </div>
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

function WorkCard({ work, breakpoint }: { work: (typeof WORKS)[number]; breakpoint: Breakpoint }) {
  const isSm = breakpoint === "sm";
  const isMd = breakpoint === "md";
  const isXl = breakpoint === "xl";
  const isAtLeastMd = isMd || isXl;
  const cardBackground = isSm ? work.backgroundBelow768 : work.backgroundOver768;

  return (
    <a
      href={work.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative block overflow-hidden rounded-[20px] border-2 border-[rgba(27,31,34,0.05)] bg-white shadow-[0_4px_50px_rgba(0,0,0,0.01)] transition duration-300 hover:shadow-[0_24px_52px_rgba(20,20,20,0.08)] ${isSm ? 'h-auto' : isMd ? 'min-h-[39rem]' : 'min-h-[28rem]'}`}
    >
      <img
        src={cardBackground}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute right-0 bottom-0 w-[1194px] h-auto max-w-none object-cover pointer-events-none"
      />
      <div className={`relative z-10 flex flex-col origin-center transition group-hover:scale-[1.015] ${isSm ? 'px-8 pb-[322px] pt-9' : isMd ? 'h-full p-[56px] gap-[69px]' : 'h-full p-[56px] gap-[69px]'}`}>
        <div className={`relative z-20 ${isXl ? 'max-w-[760px] flex flex-col gap-[20px]' : isMd ? 'max-w-[45.625rem]' : 'max-w-full'}`}>
          <div className={`flex flex-col ${isXl ? 'gap-[16px]' : 'gap-0'}`}>
            <p className={`portfolio-work-tag font-semibold uppercase ${isSm ? 'text-[12px] leading-[22px] tracking-[1px]' : 'text-[16px] leading-[22px] tracking-[1.6px]'} ${work.tagClass}`}>
              {work.tag}
            </p>
            <h3 className={`portfolio-work-title font-bold text-neutral-900 ${isSm ? 'text-[24px] leading-[1.48]' : 'text-[32px] leading-[1.48]'}`}>
              {work.title}
            </h3>
          </div>
          <div className={`${isSm ? 'mt-4 inline-flex flex-col gap-0 rounded-[12px] bg-[rgba(37,5,53,0.05)] px-[12px] py-[6px]' : 'mt-5 inline-flex items-center w-fit gap-[2px] rounded-[20px] bg-[rgba(37,5,53,0.05)] px-[12px] pb-[4px] pt-[3px]'} backdrop-blur-[5px]`}>
            <span className={`${isSm ? 'pl-0 text-[12px] tracking-[1.2px]' : 'text-[16px] tracking-[1.6px]'} font-semibold uppercase leading-[22px] text-[#1b1f22]`}>
              {work.liveLabel ?? "CURRENTLY LIVE @"}
            </span>
            {isSm ? (
              <div className="flex gap-[2px] items-center shrink-0">
                <div className="relative shrink-0 size-[20px]">
                  <img
                    src={work.logo}
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <span className="text-[12px] tracking-[1.2px] font-semibold uppercase leading-[22px] text-[#1b1f22]">
                  {work.live}
                </span>
              </div>
            ) : (
              <>
                <div className="relative shrink-0 size-[34px]">
                  <img
                    src={work.logo}
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <span className="text-[16px] tracking-[1.6px] font-semibold uppercase leading-[22px] text-[#1b1f22]">
                  {work.live}
                </span>
              </>
            )}
          </div>
        </div>

        <div className={`w-full pl-0 ${isSm ? '' : isMd ? 'pr-[364px]' : 'pr-[348px]'}`}>
          <div
            className={`relative z-20 w-full rounded-[20px] border-2 border-[rgba(27,31,34,0.05)] bg-[rgba(254,255,252,0.8)] ${isSm ? 'mt-6 max-w-full py-[24px]' : isMd ? 'py-[24px] min-w-[274px]' : 'py-[24px]'} shadow-[0_0_50px_rgba(190,168,239,0.1)]`}
            style={isMd ? { maxWidth: work.impactPanelMaxWidth } : undefined}
          >
            <div className={`${isSm ? 'grid gap-6 px-[32px]' : isXl ? 'inline-flex flex-wrap gap-y-[16px] gap-x-[0px] items-center' : 'flex flex-wrap items-center gap-y-[24px]'}`}>
              {work.stats.map((s, index) => (
                <div
                  key={`${s.k}-${s.v}`}
                  className={`${isSm ? '' : isMd ? index === 0 ? 'w-fit shrink-0 px-[32px]' : 'w-fit shrink-0 border-l border-[rgba(27,31,34,0.1)] px-[32px]' : index === 0 ? 'w-fit shrink-0 px-[32px]' : 'w-fit shrink-0 border-l border-[rgba(27,31,34,0.1)] px-[32px]'}`}
                >
                  <div className="portfolio-stat-key leading-[1] text-[#1b1f22]">
                    <span className={`${isSm ? 'text-[16px]' : 'text-[20px]'} font-bold leading-[1.6]`}>
                      {s.k}
                    </span>
                  </div>
                  <div className="portfolio-stat-value text-[#1b1f22] opacity-90">
                    {isXl && s.vXlLines ? (
                      <div className="text-[20px] font-normal leading-[1.6]">
                        {s.vXlLines.map((line) => (
                          <span key={line} className="block">{line}</span>
                        ))}
                      </div>
                    ) : (
                      <span className={`${isSm ? 'text-[16px]' : 'text-[20px]'} font-normal leading-[1.6]`}>
                        {s.v}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </a>
  );
}

function NdaProjectCard({ project, breakpoint }: { project: (typeof NDA_PROJECTS)[number]; breakpoint: Breakpoint }) {
  const isSm = breakpoint === "sm";
  const [isExpanded, setIsExpanded] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied", { description: EMAIL });
      if (isSm) {
        setIsExpanded(false);
      }
    } catch {
      toast.error("Couldn't copy - email: " + EMAIL);
    }
  }, [isSm]);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isSm && !isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
    }
  };

  return (
    <article 
      className={`group relative flex flex-col gap-[10px] overflow-clip rounded-[20px] border-2 border-[rgba(27,31,34,0.05)] bg-[#fffffc] ${isSm ? 'pb-[12px] pt-[24px] px-[32px]' : 'pb-[16px] pt-[32px] px-[40px]'}`}
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[20px] w-full items-start">
          <CompanyBadge
            logo={project.logo}
            org={project.org}
            status={project.status}
            breakpoint={breakpoint}
            ndaDesktopExtraLeftPadding={!isSm}
          />
          <h3 className={`portfolio-nda-title font-bold leading-[1.48] text-[#1b1f22] w-full ${isSm ? 'text-[20px]' : 'text-[24px]'}`}>
            {project.title}
          </h3>
        </div>
        <div className="w-full">
          {project.stats.map((stat) => (
            <div key={stat.k} className="border-t border-[rgba(27,31,34,0.1)] py-[16px] w-full">
              <p className={`font-bold opacity-90 text-[#1b1f22] leading-[0] ${isSm ? 'text-[16px]' : 'text-[20px]'}`}>
                <span className="leading-[1.6]">{stat.k} </span>
                <span className="font-normal leading-[1.6]">{stat.v}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* NDA Overlay */}
      <div 
        className={`absolute inset-0 z-20 rounded-[20px] backdrop-blur-sm bg-white/70 flex flex-col items-center justify-center gap-5 py-6 px-8 transition-opacity duration-300 ${isSm ? (isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none') : 'group-hover:opacity-100 opacity-0 pointer-events-none group-hover:pointer-events-auto'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <img
              src="logos/lock-closed.svg"
              alt=""
              aria-hidden
              className={`w-auto shrink-0 ${isSm ? 'h-[20px]' : 'h-[24px]'}`}
            />
            <h4 className={`font-bold leading-[1.05] text-[#1b1f22] ${isSm ? 'text-xl' : 'text-[24px]'}`}>
              Protected by NDA
            </h4>
          </div>
          <p className={`leading-[1.6] font-normal text-neutral-500 max-w-xs ${isSm ? 'text-[15px]' : 'text-[17px]'}`}>
            Detailed case study available upon request. Get in touch to learn more.
          </p>
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const breakpoint = useResponsive();
  const isSm = breakpoint === "sm";
  const isMd = breakpoint === "md";
  const isXl = breakpoint === "xl";
  const isAtLeastMd = !isSm;
  const isAtLeastXl = isXl;
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const copiedResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const footerArtSrc = isXl
    ? "portfolio/Footer.png"
    : isMd
      ? "portfolio/Footer-1.png"
      : "portfolio/Footer-2.png";

  useEffect(() => {
    return () => {
      if (copiedResetTimeoutRef.current) {
        clearTimeout(copiedResetTimeoutRef.current);
      }
    };
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsEmailCopied(true);
      if (copiedResetTimeoutRef.current) {
        clearTimeout(copiedResetTimeoutRef.current);
      }
      copiedResetTimeoutRef.current = setTimeout(() => {
        setIsEmailCopied(false);
      }, 1000);
    } catch {
      toast.error("Couldn't copy - email: " + EMAIL);
    }
  }, []);

  const scrollToWork = useCallback(() => {
    document
      .getElementById("impactful-work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  const preventImageOpen = useCallback((event: MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
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
        <div className="mx-auto flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 md:px-[60px] sm:py-5">
          <div className="portfolio-header-name min-w-0 truncate text-2xl font-extrabold sm:text-2xl md:text-3xl">
            Ankita Patra
          </div>
          <button
            onClick={copyEmail}
            className="portfolio-header-contact inline-flex min-w-0 shrink-0 items-center gap-2 rounded-[8px] bg-neutral-900 px-[16px] py-[8px] text-[16px] font-semibold uppercase tracking-[1.6px] text-white cursor-pointer transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-100"
          >
            {isEmailCopied ? (
              <>
                <Check className="h-[18px] w-[18px] shrink-0" />
                EMAIL COPIED
              </>
            ) : (
              <>
                CONTACT ME
                <Copy className="h-[18px] w-[18px] shrink-0" />
              </>
            )}
          </button>
        </div>
      </header>

      <main className="pt-28 sm:pt-36">
        <SectionShell className="portfolio-font-hero pt-8 sm:pt-16">
          <section className="relative min-h-[42rem]">
            {/* XL Layout: Side-by-side with photo right */}
            {isXl && (
              <div className="grid min-h-[42rem] gap-12 xl:gap-0 xl:grid-cols-[minmax(0,1fr)_381px] xl:items-center">
                <div className="relative z-20 w-full max-w-none">
                  <p className="portfolio-hero-kicker text-[48px] leading-none font-extralight">
                    Heyo!
                  </p>
                  <h1
                    className="portfolio-hero-title mt-4 w-full max-w-none bg-clip-text font-display font-extrabold text-[clamp(6rem,8vw,7.4375rem)] leading-[0.98] text-transparent whitespace-nowrap"
                    style={{
                      backgroundImage: HERO_TITLE_BACKGROUND,
                      backgroundSize: "160px 160px, cover",
                      backgroundPosition: "center, center",
                      backgroundRepeat: "repeat, no-repeat",
                      backgroundBlendMode: "overlay, normal",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      paddingRight: "100px",
                    }}
                  >
                    I'm Ankita Patra.
                  </h1>
                  <p className="portfolio-hero-body mt-7 w-full text-[clamp(2rem,3vw,2.25rem)] leading-[1.2] text-neutral-900">
                    Experienced in taking features from 0→1
                  </p>
                  <p className="portfolio-hero-body mt-6 xl:pr-[56px] w-full text-[clamp(1.25rem,1.9vw,1.5rem)] leading-[1.6] text-neutral-700">
                    Product builder passionate about connecting user needs,
                    business goals and technical realities, untangling ambiguous ideas
                    into impactful products.
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <button
                      onClick={scrollToWork}
                      className="portfolio-section-action inline-flex h-[36px] items-center gap-2 rounded-[8px] bg-neutral-900 px-[16px] py-[8px] text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-100"
                    >
                      CHECK  MY  WORK <ArrowDown className="h-[18px] w-[18px]" />
                    </button>
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-section-action inline-flex h-[36px] items-center gap-2 text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] text-neutral-900 hover:text-neutral-600"
                    >
                      check  my  impact  In  RESUME{" "}
                      <ArrowUpRight className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>

                <div className="relative z-0 h-[602px] w-[381px] shrink-0 justify-self-end xl:pointer-events-none">
                  <div className="h-full w-full overflow-hidden rounded-[20px] bg-orange-400 shadow-[0_18px_42px_rgba(19,19,19,0.08)]">
                    <img
                      src="portfolio/hero-portrait.png"
                      alt="Ankita Patra smiling in front of an orange wall"
                      draggable={false}
                      onContextMenu={preventImageOpen}
                      className="h-full w-full select-none pointer-events-none object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* MD Layout: Adjusted side-by-side */}
            {isMd && (
              <div className="grid min-h-[42rem] gap-12 md:grid-cols-[minmax(0,1fr)_381px] md:items-center">
                <div className="relative z-20 min-w-0 w-full max-w-none">
                  <p className="portfolio-hero-kicker text-[48px] leading-none font-extralight">
                    Heyo!
                  </p>
                  <h1
                    className="portfolio-hero-title mt-4 w-full max-w-none bg-clip-text font-display font-extrabold text-[clamp(4.2rem,9.2vw,7.4375rem)] leading-[0.98] text-transparent"
                    style={{
                      backgroundImage: HERO_TITLE_BACKGROUND,
                      backgroundSize: "160px 160px, cover",
                      backgroundPosition: "center, center",
                      backgroundRepeat: "repeat, no-repeat",
                      backgroundBlendMode: "overlay, normal",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    I'm Ankita Patra.
                  </h1>
                  <p className="portfolio-hero-body mt-6 w-full text-[clamp(2rem,4vw,2.25rem)] leading-[1.2] text-neutral-900">
                    Experienced in taking features from 0→1
                  </p>
                  <p className="portfolio-hero-body mt-5 w-full text-[clamp(1.25rem,2.2vw,1.5rem)] leading-[1.6] text-neutral-700">
                    Product builder passionate about connecting user needs,
                    business goals and technical realities, untangling ambiguous ideas
                    into impactful products.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      onClick={scrollToWork}
                      className="portfolio-section-action inline-flex h-[36px] items-center gap-2 rounded-[8px] bg-neutral-900 px-[16px] py-[8px] text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] text-white cursor-pointer transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-100"
                    >
                      CHECK  MY  WORK <ArrowDown className="h-3 w-3" />
                    </button>
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-section-action inline-flex h-[36px] items-center gap-2 text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] text-neutral-900 hover:text-neutral-600"
                    >
                      check  my  impact  In  RESUME <ArrowUpRight className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>

                <div className="relative z-0 h-[602px] w-[381px] shrink-0 justify-self-end">
                  <div className="h-full w-full overflow-hidden rounded-[20px] bg-orange-400 shadow-[0_18px_42px_rgba(19,19,19,0.08)]">
                    <img
                      src="portfolio/hero-portrait.png"
                      alt="Ankita Patra smiling in front of an orange wall"
                      draggable={false}
                      onContextMenu={preventImageOpen}
                      className="h-full w-full select-none pointer-events-none object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SM Layout: Text-only, portrait below */}
            {isSm && (
              <div className="space-y-[80px]">
                <div className="relative z-20 max-w-full">
                  <p className="portfolio-hero-kicker text-[48px] leading-none font-extralight">
                    Heyo!
                  </p>
                  <h1
                    className="portfolio-hero-title mt-3 bg-clip-text font-display font-extrabold text-[80px] leading-[1] text-transparent"
                    style={{
                      backgroundImage: HERO_TITLE_BACKGROUND,
                      backgroundSize: "160px 160px, cover",
                      backgroundPosition: "center, center",
                      backgroundRepeat: "repeat, no-repeat",
                      backgroundBlendMode: "overlay, normal",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    I'm Ankita Patra.
                  </h1>
                  <p className="portfolio-hero-body mt-5 text-[24px] leading-[1.25] text-neutral-900">
                    Experienced in taking features from 0→1
                  </p>
                  <p className="portfolio-hero-body mt-4 text-[20px] leading-[1.6] text-neutral-700">
                    Product builder passionate about connecting user needs,
                    business goals and technical realities, untangling ambiguous ideas
                    into impactful products.
                  </p>
                  <div className="mt-6 flex flex-wrap items-start gap-y-4 gap-x-10 px-[3px]">
                    <button
                      onClick={scrollToWork}
                      className="portfolio-section-action inline-flex h-[36px] shrink-0 items-center gap-2 rounded-[8px] bg-neutral-900 pb-[9px] pl-[16px] pr-[14px] pt-[7px] text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] whitespace-nowrap text-white cursor-pointer transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-100"
                    >
                      CHECK  MY  WORK <ArrowDown className="h-[18px] w-[18px]" />
                    </button>
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="portfolio-section-action inline-flex h-[36px] shrink-0 items-center justify-end gap-2 rounded-[8px] py-[9px] text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] text-neutral-900 hover:text-neutral-600"
                    >
                      check  my  impact  In  RESUME <ArrowUpRight className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>

                <div className="relative z-0 w-full">
                  <div className="aspect-[0.64] overflow-hidden rounded-[1.1rem] bg-orange-400 shadow-[0_18px_42px_rgba(19,19,19,0.08)]">
                    <img
                      src="portfolio/hero-portrait.png"
                      alt="Ankita Patra smiling in front of an orange wall"
                      draggable={false}
                      onContextMenu={preventImageOpen}
                      className="h-full w-full select-none pointer-events-none object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </section>
        </SectionShell>

        <SectionShell className="portfolio-font-credentials mt-[120px] sm:mt-[140px] md:mt-[160px] space-y-[35px]">
          {/* Row 1: Work History + Education */}
          <div className={`flex gap-[36px] ${isXl ? 'flex-row items-stretch' : 'flex-col'}`}>
            {/* Work History Card */}
            <div className="flex-[3] relative">
  
              <div className="relative z-10 flex flex-col overflow-clip rounded-[20px] border-2 border-[rgba(27,31,34,0.05)] bg-[#fefffc] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.03)] p-[24px]">
                {/* Experience Count */}
                <div className={`flex gap-[16px] items-center border-b border-[rgba(27,31,34,0.1)] pb-[10px] ${isSm ? '' : 'px-[36px]'}`}>
                  <span className={`portfolio-credentials-number font-display font-extrabold leading-none text-[#1b1f22] ${isSm ? 'text-[36px]' : 'text-[56px]'}`}>
                    5+
                  </span>
                  <span className={`portfolio-credentials-title font-bold leading-[1.33] text-[#1b1f22] ${isSm ? 'text-[16px]' : 'text-[20px]'}`}>
                    years of experience
                  </span>
                </div>
                {/* Companies */}
                <div className="flex flex-wrap gap-[10px] pt-[16px]">
                  {COMPANIES.map((company) => (
                    <div key={company.name} className="min-w-[260px] flex-1 flex flex-wrap items-start pl-[24px] pr-[12px]">
                      <div className="flex gap-[8px] items-center pl-[8px] pr-[16px] py-[8px] rounded-[8px]">
                        <a
                          href={company.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${company.name} website`}
                          className="shrink-0"
                        >
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className={`shrink-0 object-contain ${isSm ? 'h-[40px] w-[40px]' : 'h-[64px] w-[64px]'}`}
                          />
                        </a>
                        <div>
                          <a
                            href={company.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit ${company.name} website`}
                            className="inline-block"
                          >
                            <div className={`portfolio-credentials-name font-semibold leading-[1.6] text-[#1b1f22] ${isSm ? 'text-[16px]' : 'text-[20px]'}`}>
                              {company.name}
                            </div>
                          </a>
                          <div className={`portfolio-credentials-meta font-normal text-[#1b1f22] opacity-60 ${isSm ? 'text-[14px]' : 'text-[16px]'}`}>
                            {company.sub}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className={`relative ${isXl ? 'flex-[1] min-w-[183px] shrink-0' : ''}`}>

              <div className="relative z-10 overflow-clip rounded-[20px] border-2 border-[rgba(27,31,34,0.05)] bg-[#fefffc] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.03)] h-full">
                {isXl ? (
                  <div className="flex flex-col items-center gap-[12px] justify-center h-full px-[20px] py-[24px] text-center">
                    <div>
                      <div className="portfolio-credentials-school font-semibold text-[20px] leading-[1.6] text-[#1b1f22] whitespace-nowrap">
                        IIT Guwahati
                      </div>
                      <div className="portfolio-credentials-meta font-normal text-[14px] text-[#1b1f22] opacity-60">
                        B.Des (2017 - 2021)
                      </div>
                    </div>
                    <a
                      href="https://www.iitg.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit IIT Guwahati website"
                      className="shrink-0"
                    >
                      <img
                        src={LOGOS.iitg}
                        alt="IIT Guwahati logo"
                        className="h-[64px] w-[64px] shrink-0 object-contain"
                      />
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center gap-[12px] px-[56px] py-[20px]">
                    <a
                      href="https://www.iitg.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit IIT Guwahati website"
                      className="shrink-0"
                    >
                      <img
                        src={LOGOS.iitg}
                        alt="IIT Guwahati logo"
                        className={`shrink-0 object-contain ${isSm ? 'h-[48px] w-[48px]' : 'h-[64px] w-[64px]'}`}
                      />
                    </a>
                    <div>
                      <div className={`portfolio-credentials-school font-semibold leading-[1.6] text-[#1b1f22] ${isSm ? 'text-[16px]' : 'text-[20px]'}`}>
                        IIT Guwahati
                      </div>
                      <div className={`portfolio-credentials-meta font-normal text-[#1b1f22] opacity-60 ${isSm ? 'text-[14px]' : 'text-[16px]'}`}>
                        B.Des (2017 - 2021)
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Domain Experience Card */}
          <div className="rounded-[20px] border-2 border-[rgba(27,31,34,0.05)] bg-[#fefffc] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.03)] px-[36px] py-[28px]">
            <div className="border-b border-[rgba(27,31,34,0.1)] pb-[12px]">
              <p className={`portfolio-credentials-domain-label font-bold leading-[1.6] text-[#1b1f22] opacity-90 ${isSm ? 'text-[16px]' : 'text-[20px]'}`}>
                Worked in-depth across many domains
              </p>
            </div>
            <p className={`portfolio-credentials-domain-copy font-normal leading-[1.6] text-[#1b1f22] opacity-90 pt-[22px] ${isSm ? 'text-[16px]' : 'text-[20px]'}`}>
              Agentic experiences,{"   "}Enterprise SaaS,{"   "}AI governance,{"   "}Compliance &amp; risk management,{"   "}CRM,{"   "}Customer care,{"   "}Marketing campaign management,{"   "}Ad bidding,{"   "}Consumer app,{"   "}e-Commerce.
            </p>
          </div>
        </SectionShell>

        <SectionShell className="portfolio-font-announcements mt-[120px] sm:mt-[140px] md:mt-[160px]">
          <h2 className="portfolio-section-heading font-display font-extrabold text-[32px] leading-[1.2] text-[#1b1f22]">
            Global announcements for some of my work
          </h2>
          <div className={`mt-6 grid gap-x-[36px] gap-y-[44px] sm:mt-8 ${isXl ? 'md:grid-cols-2 lg:grid-cols-3' : isMd ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {ANNOUNCEMENTS.map((announcement) => (
              <a
                key={announcement.href}
                href={announcement.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg sm:rounded-xl border border-neutral-200 bg-neutral-200/70">
                  <img
                    src={announcement.thumbnail}
                    alt={announcement.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <p className={`portfolio-announcement-copy mt-3 leading-relaxed text-neutral-700 ${isSm ? 'text-lg' : 'text-xl'}`}>
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
          className="portfolio-font-work mt-[120px] scroll-mt-28 sm:mt-[140px] md:mt-[160px]"
        >
          <h2 className={`portfolio-section-heading font-display font-extrabold leading-[1.2] text-[#1b1f22] ${isSm ? 'text-[40px]' : 'text-[56px]'}`}>
            Glimpses of my work
          </h2>
          <div className="mt-8 space-y-6 sm:mt-10 md:space-y-8 md:mt-12">
            {WORKS.map((work) => (
              <WorkCard key={work.href} work={work} breakpoint={breakpoint} />
            ))}
          </div>
        </SectionShell>

        <SectionShell className="portfolio-font-nda mt-[120px] sm:mt-[140px] md:mt-[160px]">
          <h2 className="portfolio-section-heading font-display font-extrabold text-[32px] leading-[1.2] text-[#1b1f22]">
            Other noteworthy projects under NDA
          </h2>
          <div className={`mt-8 grid gap-6 md:mt-10 ${isXl ? 'lg:grid-cols-2' : isMd ? 'grid-cols-1' : 'grid-cols-1'}`}>
            {NDA_PROJECTS.map((project) => (
              <NdaProjectCard key={project.title} project={project} breakpoint={breakpoint} />
            ))}
          </div>
        </SectionShell>

        <section className="portfolio-font-about mt-[120px] overflow-visible sm:mt-[140px] md:mt-[160px]">
          <div className="mx-auto w-full px-6 md:px-14 xl:max-w-[1197px] xl:px-0">
            <div className={`${isXl ? 'w-1/2' : isMd ? 'max-w-[40rem]' : 'max-w-full'}`}>
              <h2 className="portfolio-section-heading font-display font-extrabold text-[56px] leading-[1.2] text-[#1b1f22] mb-2 sm:mb-0">
                About me
              </h2>
              <div className={`portfolio-about-copy ${isSm ? 'text-base leading-[1.6]' : isMd ? 'text-lg leading-[1.7] mt-6' : 'text-xl leading-[1.75] sm:text-2xl mt-8'} ${isXl ? 'w-full' : 'max-w-[31rem]'} text-neutral-700`}>
                <p>
                  I'm a lover of all forms of arts. In my free time, I keep
                  experimenting & exploring different skills. These days, I've
                  been spending my time painting and crocheting granny squares.
                  Aside from that, I love to travel, host people and binge
                  content with a hot bowl of Ramen.
                </p>
                <p className={`font-bold text-neutral-900 ${isSm ? 'mt-3' : 'mt-2'}`}>
                  Want to work with me?
                </p>
              </div>
              <div className={`${isSm ? 'mt-4' : isMd ? 'mt-6' : 'mt-8'} flex w-full flex-col items-start gap-4`}>
                <div className="flex w-full flex-wrap items-center gap-3">
                  <button
                    onClick={copyEmail}
                    className="portfolio-section-action inline-flex h-[36px] shrink-0 items-center gap-2 rounded-[8px] bg-neutral-900 pb-[9px] pl-[16px] pr-[14px] pt-[7px] text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] whitespace-nowrap text-white cursor-pointer transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-100"
                  >
                    {isEmailCopied ? (
                      <>
                        <Check className="h-[18px] w-[18px] shrink-0" />
                        EMAIL COPIED
                      </>
                    ) : (
                      <>
                        EMAIL ME
                        <Copy className="h-[18px] w-[18px] shrink-0" />
                      </>
                    )}
                  </button>
                  <a
                    href="https://www.linkedin.com/in/artphiltre/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#0A66C2] text-white transition-transform duration-200 hover:scale-[1.04]"
                  >
                    <FaLinkedinIn className="h-[26px] w-[26px]" />
                  </a>
                  <a
                    href="https://www.instagram.com/artphiltre/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#E4405F] text-white transition-transform duration-200 hover:scale-[1.04]"
                  >
                    <FaInstagram className="h-[26px] w-[26px]" />
                  </a>
                </div>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-section-action inline-flex h-[36px] shrink-0 items-center justify-end gap-2 rounded-[8px] py-[9px] text-[16px] font-semibold uppercase tracking-[1.6px] leading-[20px] whitespace-nowrap text-neutral-900 hover:text-neutral-600"
                >
                  More about me in resume{" "}
                  <ArrowUpRight className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

          </div>

          <div
            className={`pointer-events-none bg-transparent ${isMd ? 'mt-[-156px]' : isXl ? 'mt-[-180px]' : 'mt-3 sm:mt-4'}`}
            aria-label="Footer artwork"
          >
            <div className={`mx-auto w-full ${isSm ? 'pt-[100px] px-0 pb-2' : isMd ? 'pt-5 px-0 pb-0' : 'p-0'}`}>
              <img
                src={footerArtSrc}
                alt="Decorative collage artwork"
                loading="lazy"
                decoding="async"
                draggable={false}
                onContextMenu={preventImageOpen}
                className="block h-auto w-full select-none pointer-events-none object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
