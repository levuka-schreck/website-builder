import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CloudCog,
  Database,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Future Tech Holdings | Protected, Predictable Data Infrastructure" },
      {
        name: "description",
        content:
          "S3-compatible storage and adjacent compute for regulated industries, engineered to protect critical data and control infrastructure costs.",
      },
      { property: "og:title", content: "Future Tech Holdings | Data Infrastructure" },
      {
        property: "og:description",
        content: "Infrastructure for data you can't afford to lose — or overpay for.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const proof = [
  ["4+ PB", "Research data in production"],
  ["$4.50", "Per TB-month · Cold tier"],
  ["AES-256", "Encryption at rest"],
  ["TLS 1.3", "Encryption in transit"],
];

const safeguards = [
  {
    icon: LockKeyhole,
    title: "Immutable by design",
    body: "Object lock protects retained data from accidental deletion and ransomware-driven change.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted end to end",
    body: "AES-256 at rest and TLS 1.3 in transit secure information through its full lifecycle.",
  },
  {
    icon: ServerCog,
    title: "Engineers you can name",
    body: "US-operated infrastructure with accountable technical support close to the platform.",
  },
  {
    icon: Database,
    title: "Free to leave. Always.",
    body: "A full data export is free, protecting both access and leverage without an exit tax.",
  },
];

const industries = [
  ["01", "Life Sciences", "Patient, pathology, and research data built for long-term retention."],
  ["02", "Financial Services", "Transaction records and regulated archives protected from change."],
  ["03", "Media & Entertainment", "Unreleased content stored without premium rates on every byte."],
  ["04", "Government", "Research, evidence, and citizen records retained with clear cost control."],
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Future Tech Holdings home">
      <span className="grid h-8 w-8 grid-cols-2 gap-0.5 border border-line p-1.5" aria-hidden="true">
        <span className="bg-signal" />
        <span className="bg-foreground" />
        <span className="bg-foreground" />
        <span className="border border-signal" />
      </span>
      <span className="font-display text-sm font-bold uppercase text-foreground">
        Future Tech <span className="text-muted-foreground">Holdings</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Brand />
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase text-muted-foreground lg:flex" aria-label="Primary navigation">
          <a className="transition-colors hover:text-signal" href="#platform">Platform</a>
          <a className="transition-colors hover:text-signal" href="#industries">Industries</a>
          <a className="transition-colors hover:text-signal" href="#pricing">Pricing</a>
          <a className="transition-colors hover:text-signal" href="#trust">Trust & Security</a>
        </nav>
        <Button asChild className="h-10 rounded-none px-5 font-mono text-[10px] uppercase">
          <a href="#contact">Talk to an architect <ArrowRight /></a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid-surface border-b border-line">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1440px] lg:grid-cols-12">
        <div className="flex flex-col justify-center border-line px-5 py-20 lg:col-span-7 lg:border-r lg:px-10 lg:py-24">
          <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase text-signal">
            <span className="h-2 w-2 animate-pulse bg-signal motion-reduce:animate-none" />
            Data infrastructure · US operated
            <span className="h-px flex-1 bg-line" />
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(3rem,6.3vw,6.6rem)] font-bold leading-[0.94] text-foreground">
            Infrastructure for data you can’t afford to <span className="text-signal">lose</span> — or overpay for.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Tiered S3-compatible storage and adjacent compute for regulated industries, engineered for protection, price clarity, and control.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-13 rounded-none px-7 font-display font-semibold">
              <a href="#contact">Talk to an architect <ArrowRight /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-none border-line bg-transparent px-7 font-display font-semibold">
              <a href="#pricing">Run your numbers</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center px-5 py-14 lg:col-span-5 lg:px-10">
          <div className="relative w-full border border-line bg-panel">
            <div className="flex items-center justify-between border-b border-line px-5 py-4 font-mono text-[10px] uppercase text-muted-foreground">
              <span>Fortilyx / Storage control</span>
              <span className="text-signal">Active</span>
            </div>
            <div className="p-5 sm:p-8">
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground">Production footprint</p>
                  <p className="mt-2 font-display text-6xl font-bold text-foreground">4+ <span className="text-2xl text-signal">PB</span></p>
                </div>
                <div className="flex h-16 items-end gap-1" aria-hidden="true">
                  {[35, 48, 43, 72, 64, 92, 78, 100].map((height, index) => (
                    <span key={index} className="w-2 bg-signal/70" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="space-y-1 border-t border-line pt-5">
                {["NASA research workloads", "University of Utah research data", "S3-compatible object storage"].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-line py-4 text-sm text-muted-foreground">
                    <span>{item}</span><Check className="h-4 w-4 text-signal" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 h-12 w-12 border-b border-l border-signal" />
            <div className="absolute -right-3 -top-3 h-12 w-12 border-r border-t border-signal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <section className="border-b border-line bg-panel" aria-label="Platform proof points">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {proof.map(([value, label], index) => (
          <div key={label} className={`px-5 py-8 lg:px-10 ${index < 3 ? "border-r border-line" : ""} ${index === 1 ? "max-lg:border-r-0" : ""}`}>
            <p className="font-display text-3xl font-bold text-foreground">{value}</p>
            <p className="mt-2 font-mono text-[10px] uppercase leading-5 text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="trust" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow">01 / Protect</p>
            <h2 className="section-title">Keep control of the data that carries your mission.</h2>
          </div>
          <p className="max-w-xl self-end text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Security claims should survive scrutiny. Fortilyx starts with controls already in place and direct access to the engineers operating them.
          </p>
        </div>
        <div className="grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-4">
          {safeguards.map(({ icon: Icon, title, body }, index) => (
            <article key={title} className="group min-h-72 border-b border-r border-line bg-background p-7 transition-colors hover:bg-panel">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-signal" />
                <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-16 font-display text-2xl font-semibold text-foreground">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-panel">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div className="px-5 py-20 lg:col-span-5 lg:px-10 lg:py-24">
          <p className="eyebrow">02 / Price</p>
          <h2 className="section-title">Pay for the tier your data actually needs.</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
            Cold data should not carry a hot-storage bill. Public per-terabyte pricing makes the tradeoff visible before procurement starts.
          </p>
          <div className="mt-10 border-l-2 border-signal pl-5">
            <p className="font-display text-3xl font-bold text-foreground">Free to leave. Always.</p>
            <p className="mt-2 text-sm text-muted-foreground">Full data export carries no exit fee.</p>
          </div>
        </div>
        <div className="border-line lg:col-span-7 lg:border-l">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-line px-5 py-4 font-mono text-[10px] uppercase text-muted-foreground lg:px-8">
            <span>Storage class</span><span>Per TB / month</span><span>Position</span>
          </div>
          <div className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-b border-line bg-signal px-5 py-8 text-primary-foreground lg:px-8">
            <div><p className="font-display text-xl font-bold">Fortilyx Cold</p><p className="mt-1 text-xs opacity-75">Protected archive</p></div>
            <p className="font-display text-3xl font-bold">$4.50</p>
            <p className="font-mono text-xs uppercase">Lowest</p>
          </div>
          {[["Backblaze B2", "$6.95", "+54%"], ["Wasabi", "$7.99", "+78%"], ["AWS S3 Standard", "$23.00", "+411%"]].map((row) => (
            <div key={row[0]} className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-b border-line px-5 py-7 text-sm lg:px-8">
              <span className="font-medium text-foreground">{row[0]}</span><span className="text-muted-foreground">{row[1]}</span><span className="font-mono text-xs text-muted-foreground">{row[2]}</span>
            </div>
          ))}
          <p className="px-5 py-4 text-xs leading-5 text-muted-foreground lg:px-8">Public pricing referenced in the September 2026 strategy. Validate current provider pricing before procurement.</p>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
        <p className="eyebrow">03 / Platform</p>
        <div className="mt-5 grid border border-line lg:grid-cols-3">
          <article className="min-h-96 border-line bg-panel p-8 lg:border-r">
            <Database className="h-7 w-7 text-signal" />
            <p className="mt-24 font-mono text-[10px] uppercase text-muted-foreground">Available now</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-foreground">Fortilyx Storage</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Hot, cold, and high-performance S3-compatible storage with predictable economics.</p>
          </article>
          <article className="min-h-96 border-line p-8 lg:border-r">
            <CloudCog className="h-7 w-7 text-signal" />
            <p className="mt-24 font-mono text-[10px] uppercase text-muted-foreground">Private infrastructure</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-foreground">Private Cloud</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Dedicated environments for organizations that need tighter operational control.</p>
          </article>
          <article className="min-h-96 bg-signal p-8 text-primary-foreground">
            <Sparkles className="h-7 w-7" />
            <p className="mt-24 font-mono text-[10px] uppercase opacity-70">Early access</p>
            <h3 className="mt-3 font-display text-3xl font-bold">AI Compute</h3>
            <p className="mt-4 leading-7 opacity-80">Run compute beside protected data—without moving it to a separate GPU cloud.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">04 / Industries</p>
            <h2 className="section-title">Built around what your industry cannot lose.</h2>
          </div>
          <div className="border-t border-line lg:col-span-8">
            {industries.map(([number, title, body]) => (
              <article key={title} className="grid gap-4 border-b border-line py-7 md:grid-cols-[4rem_1fr_1.4fr] md:items-center">
                <span className="font-mono text-xs text-signal">{number}</span>
                <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="grid-surface">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
        <div className="px-5 py-20 lg:col-span-7 lg:px-10 lg:py-28">
          <p className="eyebrow">Start with the architecture</p>
          <h2 className="section-title max-w-3xl">Bring us the data you cannot lose—and the bill you will not accept.</h2>
        </div>
        <div className="flex flex-col justify-center border-line px-5 py-16 lg:col-span-5 lg:border-l lg:px-10">
          <p className="mb-8 leading-7 text-muted-foreground">Talk directly with an infrastructure architect about protection requirements, capacity, and total cost.</p>
          <Button asChild size="lg" className="h-14 rounded-none font-display font-semibold">
            <a href="mailto:info@future-tech-holdings.com?subject=Infrastructure%20architecture%20conversation">Talk to an architect <ArrowRight /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="mt-3 h-14 rounded-none border-line bg-transparent font-display font-semibold">
            <a href="mailto:info@future-tech-holdings.com?subject=Fortilyx%20TCO%20review">Run your numbers</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between lg:px-10">
        <div><Brand /><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Protected, predictable infrastructure for consequential data.</p></div>
        <div className="font-mono text-[10px] uppercase leading-6 text-muted-foreground md:text-right">
          <p>© 2026 Future Tech Holdings</p><p>US-operated infrastructure</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return <div className="min-h-screen bg-background"><Header /><main><Hero /><ProofBar /><Trust /><Pricing /><Platform /><Industries /><Contact /></main><Footer /></div>;
}