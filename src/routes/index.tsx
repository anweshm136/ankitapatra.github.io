import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";
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
    tint: "from-sky-100/70 via-white to-white",
    tag: "COMPLIANCE RISK MANAGEMENT, ENTERPRISE SAAS",
    tagClass: "text-sky-700",
    title:
      "AI-powered regulatory templates for custom & evolving compliance requirements",
    live: "MICROSOFT PURVIEW",
    stats: [
      { k: "~150-180% YoY growth", v: "in tenant subscription" },
      { k: "Timeline", v: "Apr - Jun 2025" },
      { k: "Contributions", v: "End-to-end UX ownership" },
    ],
    href: "https://www.figma.com/proto/pfkpRsScKCezRkytPPkSea/Microsoft-Purview---Compliance-Manager?node-id=1-4918&p=f&t=032qu2kdO3gitoPP-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4918",
  },
  {
    tint: "from-fuchsia-100/60 via-white to-white",
    tag: "CRM - CUSTOMER CARE, ENTERPRISE SAAS",
    tagClass: "text-fuchsia-700",
    title:
      "Contextual guided flows for customer care agents to grasp & resolve customer queries on call faster",
    live: "MYNTRA",
    stats: [
      { k: "~30% reduction", v: "in average handling time" },
      { k: "Timeline", v: "Feb - Jun 2024" },
      { k: "Contributions", v: "Concept & UX ownership" },
    ],
    href: "https://www.figma.com/proto/IWxoPnCV8V8uR6f4tIF5F5/SA?node-id=4006-26398&t=ESxHyWZvKR8DGDXf-1&scaling=contain&content-scaling=fixed&page-id=4006%3A26397&starting-point-node-id=4006%3A26398&fuid=1148614817063352196",
  },
  {
    tint: "from-pink-100/60 via-white to-white",
    tag: "CONSUMER MOBILE APP, E-COMMERCE",
    tagClass: "text-rose-700",
    title:
      "0→MVP : Conversational AI for non-linear search to aid intent narrowing & personalised recommendation",
    live: "MYNTRA",
    liveLabel: "V2.0 LIVE @",
    stats: [
      { k: "~2% contribution", v: "in overall bag building" },
      { k: "Timeline", v: "Jul - Sep 2023" },
      { k: "Contributions", v: "IA, 0→1 MVP flow, base prompt structure" },
    ],
    href: "https://www.figma.com/proto/6FobWSzEU7bF9nJ3P5Nur4/Maya-OG---2.0?node-id=2001-33079&t=ReJy0iZGVaT2R1xc-1&scaling=contain&content-scaling=fixed&page-id=2001%3A33078&starting-point-node-id=2001%3A33079&fuid=1148614817063352196",
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

function Placeholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-neutral-200/70 ${className}`}
      aria-hidden
    />
  );
}

export const Route = createFileRoute("/")({
  component: Portfolio,
});

export function Portfolio() {
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied", { description: EMAIL });
    } catch {
      toast.error("Couldn't copy — email: " + EMAIL);
    }
  }, []);

  const scrollToWork = useCallback(() => {
    document
      .getElementById("impactful-work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-neutral-900 font-sans antialiased">
      <main className="mx-auto max-w-7xl px-5 pb-40 pt-16 sm:px-8 sm:pt-24 lg:pt-32">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-2xl sm:text-3xl font-light tracking-tight">Heyo!</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              <span className="bg-gradient-to-r from-red-700 via-red-900 to-neutral-900 bg-clip-text text-transparent">
                I'm
              </span>{" "}
              Ankita Patra.
            </h1>
            <p className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
              Product builder passionate about connecting&nbsp;
              user needs, business goals and technical realities, untangling ambiguity into impactful products.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-neutral-800"
              >
                Check my work <ArrowDown className="h-3.5 w-3.5" />
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 hover:text-neutral-600"
              >
                Check my impact in resume <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Placeholder className="aspect-[3/4] w-full max-w-sm" />
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="mt-28 sm:mt-40 space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
            {/* Experience card with hand doodle */}
            <div className="relative">
              <span
                className="absolute -top-8 left-6 text-4xl select-none"
                aria-hidden
              >
                👋
              </span>
              <div className="rounded-3xl border border-neutral-200 bg-white/70 px-8 py-7 sm:px-10 sm:py-8 shadow-sm">
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-5xl sm:text-6xl leading-none">
                      5+
                    </span>
                    <span className="text-sm leading-tight text-neutral-600">
                      years of
                      <br />
                      experience
                    </span>
                  </div>
                  {COMPANIES.map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <img
                        src={c.logo}
                        alt={`${c.name} logo`}
                        className="h-11 w-11 shrink-0 rounded-lg border border-neutral-200 bg-white object-contain p-1.5"
                      />
                      <div className="min-w-0">
                        <div className="font-semibold leading-tight">{c.name}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">
                          {c.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IIT card with grad cap doodle */}
            <div className="relative">
              <span
                className="absolute -top-8 right-6 text-4xl select-none"
                aria-hidden
              >
                🎓
              </span>
              <div className="rounded-3xl border border-neutral-200 bg-white/70 px-8 py-7 sm:py-8 shadow-sm h-full">
                <div className="flex items-center gap-3">
                  <Placeholder className="h-11 w-11 shrink-0 rounded-lg" />
                  <div>
                    <div className="font-semibold leading-tight">IIT Guwahati</div>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      B.Des (2017 - 2021)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-8 py-7 sm:px-10 sm:py-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-[220px_1fr] sm:items-center">
              <div className="font-medium leading-snug text-neutral-800">
                Worked in-depth
                <br />
                across many domains
              </div>
              <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                Agentic experiences, Enterprise SaaS, AI governance, Compliance &
                risk management, CRM,&nbsp;
                Customer care, Marketing campaign management, Ad bidding, Consumer app, e-Commerce.
              </p>
            </div>
          </div>
        </section>

        {/* ANNOUNCEMENTS */}
        <section className="mt-28 sm:mt-40">
          <h2 className="font-display text-2xl sm:text-3xl">
            Global announcements for some of my work
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ANNOUNCEMENTS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200/70">
                  <img
                    src={`https://i.ytimg.com/vi/${a.videoId}/hqdefault.jpg`}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  <span className="font-semibold text-neutral-900">{a.title}</span>
                  {a.body}
                </p>
              </a>
            ))}
          </div>
        </section>


        {/* IMPACTFUL WORK */}
        <section id="impactful-work" className="mt-28 sm:mt-40 scroll-mt-24">
          <h2 className="font-display text-4xl sm:text-5xl">Most impactful work</h2>
          <div className="mt-10 space-y-8">
            {WORKS.map((w) => (
              <a
                key={w.href}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className={`block rounded-3xl border border-neutral-200 bg-gradient-to-br ${w.tint} p-6 sm:p-10 transition hover:shadow-lg`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-medium uppercase tracking-[0.15em] ${w.tagClass}`}
                    >
                      {w.tag}
                    </p>
                    <h3 className="mt-4 font-display text-2xl sm:text-3xl leading-tight">
                      {w.title}
                    </h3>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-700">
                      {w.liveLabel ?? "CURRENTLY LIVE @"}
                      <Placeholder className="h-4 w-4 rounded" /> {w.live}
                    </div>
                    <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/80 p-4 sm:p-5">
                      <div className="grid gap-4 sm:grid-cols-3">
                        {w.stats.map((s) => (
                          <div key={s.k} className="min-w-0">
                            <div className="text-sm font-semibold text-neutral-900">
                              {s.k}
                            </div>
                            <div className="text-xs text-neutral-600 mt-0.5">
                              {s.v}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Placeholder className="aspect-[4/3] w-full" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-28 sm:mt-40">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-[60px] sm:auto-rows-[80px]">
            {/* Text block — top-left */}
            <div className="col-span-12 lg:col-span-5 lg:row-span-6 min-w-0">
              <h2 className="font-display text-4xl sm:text-5xl">About me</h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-neutral-700 max-w-md">
                <p>
                  I'm a lover of all forms of arts. In my free time, I keep
                  experimenting & exploring different skills. These days, I've
                  been spending my time painting and crocheting granny squares.
                  Aside from that, I love to travel, host people and binge
                  content with a hot bowl of Ramen.
                </p>
                <p className="font-semibold text-neutral-900">
                  Want to work with me?
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-neutral-800"
                >
                  Contact me <Copy className="h-3.5 w-3.5" />
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 hover:text-neutral-600"
                >
                  More about me in resume <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Big portrait (sunflowers) — top-center, tall */}
            <Placeholder className="col-span-7 row-span-6 lg:col-span-4 lg:row-span-6" />
            {/* iPad 3D scene — top-right upper */}
            <Placeholder className="col-span-3 row-span-3 lg:col-span-2 lg:row-span-3" />
            {/* Character sheet strip — far right upper */}
            <Placeholder className="col-span-2 row-span-3 lg:col-span-1 lg:row-span-3" />
            {/* Pop-art — right middle */}
            <Placeholder className="col-span-3 row-span-3 lg:col-span-2 lg:row-span-3" />
            {/* Tall painting — far right, extends into bottom band */}
            <Placeholder className="col-span-2 row-span-5 lg:col-span-1 lg:row-span-5" />

            {/* Bottom band — starts from bottom-left, extends right */}
            <Placeholder className="col-span-4 row-span-3 lg:col-span-3 lg:row-span-3" />
            <Placeholder className="col-span-3 row-span-3 lg:col-span-2 lg:row-span-3" />
            <Placeholder className="col-span-2 row-span-3 lg:col-span-3 lg:row-span-3" />
            <Placeholder className="col-span-3 row-span-3 lg:col-span-3 lg:row-span-3" />
          </div>
        </section>
      </main>

      {/* STICKY FOOTER BAR — liquid glass, full-width */}
      <div
        className="pointer-events-auto fixed inset-x-0 bottom-0 z-40 border-t border-white/30 text-neutral-900 backdrop-blur-2xl backdrop-saturate-200"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.10))",
          boxShadow:
            "0 -8px 32px -8px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <div className="min-w-0 truncate text-sm font-semibold">Ankita Patra</div>
          <button
            onClick={copyEmail}
            className="inline-flex min-w-0 shrink-0 items-center gap-2 rounded-full border border-white/50 bg-white/25 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-900 backdrop-blur-xl transition hover:bg-white/45"
          >
            <span className="hidden sm:inline">Contact me :</span>
            <span className="truncate normal-case tracking-normal">{EMAIL}</span>
            <Copy className="h-3.5 w-3.5 shrink-0" />
          </button>
        </div>
      </div>

    </div>
  );
}
