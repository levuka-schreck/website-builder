import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import heroImg from "@/assets/opifex/hero.jpg";
import serviceImg from "@/assets/opifex/service.jpg";
import t1 from "@/assets/opifex/t1.jpg";
import t2 from "@/assets/opifex/t2.jpg";
import t3 from "@/assets/opifex/t3.jpg";
import contactImg from "@/assets/opifex/contact.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Opifex Group — Enterprise Construction Consulting" },
      { name: "description", content: "Enterprise-grade consulting that helps contractors optimize operations, control cost, and deliver precision-engineered results." },
      { property: "og:title", content: "The Opifex Group" },
      { property: "og:description", content: "Enterprise construction consulting. Engineering excellence at scale." },
    ],
  }),
  component: Home,
});

const services = [
  { n: "01", title: "Project Planning", body: "Strategic roadmapping and feasibility studies that ensure commercial viability from day one." },
  { n: "02", title: "Construction Management", body: "End-to-end oversight ensuring safety, compliance, and deadline adherence at every stage." },
  { n: "03", title: "Cost Estimation", body: "Detailed budgetary analysis and risk-adjusted forecasting for multi-scale infrastructure." },
  { n: "04", title: "Process Optimization", body: "Lean methodologies applied to streamline workflows and eliminate operational waste." },
  { n: "05", title: "Risk Management", body: "Quantitative mitigation strategies for complex regulatory and site-specific challenges." },
  { n: "06", title: "Architectural Services", body: "Technical design bridging aesthetics and structural integrity for enterprise builds." },
];

const stats = [
  { n: "150+", l: "Projects Completed" },
  { n: "85", l: "Satisfied Clients" },
  { n: "25", l: "Years Experience" },
  { n: "12", l: "Industry Awards" },
];

const testimonials = [
  { img: t1, name: "John Smith", role: "CEO, Smith Construction", quote: "The Opifex Group transformed our approach to project management. Their expertise and attention to detail have saved us countless hours and resources while improving the quality of our builds." },
  { img: t2, name: "Emily Johnson", role: "Principal Architect, Johnson & Partners", quote: "Working with The Opifex Group has been a game-changer for our architectural practice. Their technical knowledge and innovative solutions have elevated our designs to new heights." },
  { img: t3, name: "Michael Rodriguez", role: "Director, Metropolitan Developments", quote: "The team at Opifex brought exceptional value to our commercial development. Their strategic insights helped us navigate complex challenges with confidence." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`font-display font-black text-base tracking-tight uppercase ${light ? "text-white" : "text-ink"}`}>
      The <span className="text-slate-mid">Opifex</span> Group
    </span>
  );
}

function SolidButton({ children, href, className = "", type = "button", onClick }: { children: React.ReactNode; href?: string; className?: string; type?: "button" | "submit"; onClick?: () => void }) {
  const cls = `font-display inline-flex items-center justify-center gap-2 bg-ink text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-steel transition-colors cursor-pointer ${className}`;
  if (href) return <a href={href} className={cls}>{children}<ArrowRight className="h-4 w-4" /></a>;
  return <button type={type} onClick={onClick} className={cls}>{children}<ArrowRight className="h-4 w-4" /></button>;
}

function OutlineButton({ children, href, className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  const cls = `font-display inline-flex items-center justify-center gap-2 border border-ink text-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-surface transition-colors cursor-pointer ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <span className={cls}>{children}</span>;
}

function Nav() {
  const links = ["Home", "About", "Services", "Testimonials", "Contact"];
  return (
    <header className="border-b border-border bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-8 h-20">
        <a href="#home"><Logo /></a>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-steel font-body">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-ink transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="font-display bg-ink text-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-steel transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative grid grid-cols-12 min-h-[85vh] border-b border-border">
      <div className="col-span-12 lg:col-span-7 px-6 py-16 lg:p-20 flex flex-col justify-center lg:border-r border-border">
        <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-mid mb-6">
          Enterprise Construction Consulting
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
          Engineering<br />
          <span className="text-steel">Excellence.</span>
        </h1>
        <p className="font-body text-lg text-steel max-w-lg mb-10 leading-relaxed">
          Deploying enterprise-grade consulting solutions that empower contractors to optimize operations, maximize efficiency, and deliver precision-engineered results.
        </p>
        <div className="flex flex-wrap gap-4">
          <SolidButton href="#services">Our Services</SolidButton>
          <OutlineButton href="#contact">Inquire Now</OutlineButton>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 relative overflow-hidden min-h-[400px] bg-surface">
        <img src={heroImg} alt="Construction project" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        <div className="absolute inset-6 border border-white/20 pointer-events-none" />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-border">
      {stats.map((s, i) => (
        <div key={s.l} className={`p-10 flex flex-col items-center text-center ${i < stats.length - 1 ? "border-r border-border" : ""} ${i === 1 ? "border-r-0 lg:border-r" : ""}`}>
          <span className="font-display text-4xl lg:text-5xl font-black text-ink mb-2">{s.n}</span>
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold">{s.l}</span>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-mid mb-4 block">Section 01 — About</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Your trusted partner in <span className="text-slate-mid">construction excellence.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pl-12 lg:border-l border-border space-y-6 font-body text-steel leading-relaxed">
          <p>
            The Opifex Group is a premier consulting firm delivering innovative solutions for construction professionals and contractors. Decades of combined experience bring unparalleled insight to every project we touch.
          </p>
          <p>
            We work shoulder-to-shoulder with clients to develop tailored strategies that optimize efficiency, reduce cost exposure, and enhance long-term project outcomes at enterprise scale.
          </p>
          <div className="pt-4">
            <SolidButton href="#contact">Start a Project</SolidButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-mid mb-4 block">Section 02 — Capabilities</span>
            <h2 className="font-display text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Precision-built strategic <span className="text-slate-mid">solutions.</span>
            </h2>
          </div>
          <p className="font-body text-steel max-w-sm text-sm leading-relaxed">
            Comprehensive consulting across the full project lifecycle — from early planning to final delivery — tailored to the realities of modern construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article key={s.title} className="group bg-white p-10 hover:bg-ink transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-xs font-bold text-slate-mid group-hover:text-slate-soft tracking-widest">{s.n}</span>
                <ArrowRight className="h-4 w-4 text-ink group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <div className="w-12 h-px bg-steel mb-8 group-hover:bg-slate-soft transition-colors" />
              <h3 className="font-display text-2xl font-bold mb-4 text-ink group-hover:text-white transition-colors">{s.title}</h3>
              <p className="font-body text-sm text-slate-mid group-hover:text-slate-soft leading-relaxed transition-colors">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden border border-border">
          <img src={serviceImg} alt="On-site engineering" className="w-full h-64 object-cover grayscale" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-mid mb-4 block">Section 03 — Testimonials</span>
            <h2 className="font-display text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Trusted by construction <span className="text-slate-mid">leaders.</span>
            </h2>
          </div>
          <p className="font-body text-steel max-w-sm text-sm leading-relaxed">
            Real outcomes from real partnerships. Here's what construction leaders say about working with The Opifex Group.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <article key={t.name} className="bg-white p-10 flex flex-col">
              <p className="font-display text-lg leading-snug text-ink mb-10 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img src={t.img} alt={t.name} className="w-14 h-14 object-cover grayscale" />
                <div>
                  <p className="font-display font-bold text-sm text-ink uppercase tracking-wide">{t.name}</p>
                  <p className="font-body text-xs text-slate-mid mt-0.5">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBar() {
  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-steel/20 -skew-x-12 translate-x-20 hidden lg:block" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to optimize your next major build?
          </h2>
          <p className="font-body text-slate-soft text-lg">
            Partner with Opifex Group for industry-leading expertise and uncompromising results.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <a href="#contact" className="font-display bg-white text-ink px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-soft transition-colors text-center">
            Start a Project
          </a>
          <a href="#services" className="font-display border border-slate-mid text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors text-center">
            View Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-mid mb-4 block">Section 04 — Contact</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black mb-8 tracking-tight">Let's Build.</h2>
          <p className="font-body text-steel mb-10 leading-relaxed">
            Partner with industry experts to bring your vision to life. Our team is standing by to discuss your next construction venture.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <MapPin className="h-5 w-5 text-ink flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-1">Office</p>
                <p className="font-body text-ink leading-relaxed">1234 Construction Ave, Suite 500<br />New York, NY 10001</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Mail className="h-5 w-5 text-ink flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-1">Email</p>
                <p className="font-body text-ink">info@theopifexgroup.com</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Phone className="h-5 w-5 text-ink flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-1">Phone</p>
                <p className="font-body text-ink">(555) 123-4567</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Clock className="h-5 w-5 text-ink flex-shrink-0 mt-1" />
              <div>
                <p className="font-display text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-1">Hours</p>
                <p className="font-body text-ink">Monday – Friday · 9:00 AM – 5:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-7 bg-surface border border-border p-8 lg:p-10 flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-display block text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-2">Full Name</label>
              <input type="text" placeholder="Ex. John Doe" className="font-body w-full bg-white border border-border px-5 py-4 text-sm text-ink placeholder:text-slate-soft outline-none focus:border-ink transition-colors" />
            </div>
            <div>
              <label className="font-display block text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-2">Email Address</label>
              <input type="email" placeholder="Ex. johndoe@xyz.abc" className="font-body w-full bg-white border border-border px-5 py-4 text-sm text-ink placeholder:text-slate-soft outline-none focus:border-ink transition-colors" />
            </div>
          </div>
          <div>
            <label className="font-display block text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-2">Subject</label>
            <input type="text" placeholder="Subject Here" className="font-body w-full bg-white border border-border px-5 py-4 text-sm text-ink placeholder:text-slate-soft outline-none focus:border-ink transition-colors" />
          </div>
          <div>
            <label className="font-display block text-[10px] uppercase tracking-[0.25em] text-slate-mid font-bold mb-2">Your Message</label>
            <textarea rows={5} placeholder="Type your message" className="font-body w-full bg-white border border-border px-5 py-4 text-sm text-ink placeholder:text-slate-soft outline-none focus:border-ink resize-none transition-colors" />
          </div>
          <SolidButton type="submit" className="w-full">Submit Inquiry</SolidButton>
        </form>
      </div>

      <div className="border-t border-border">
        <img src={contactImg} alt="Opifex office" className="w-full h-72 object-cover grayscale" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-12">
        <div className="space-y-6 md:col-span-2">
          <Logo light />
          <p className="font-body text-sm text-slate-soft leading-relaxed max-w-md">
            Delivering excellence in construction and architecture consulting for over two decades. Our mission is to transform the built environment through technical innovation and strategic expertise.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 border border-slate-mid/40 flex items-center justify-center hover:bg-white hover:text-ink transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-white text-xs uppercase tracking-[0.25em] font-bold mb-5">Services</h4>
          <ul className="space-y-3 font-body text-sm text-slate-soft">
            {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-white transition-colors">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-white text-xs uppercase tracking-[0.25em] font-bold mb-5">Company</h4>
          <ul className="space-y-3 font-body text-sm text-slate-soft">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((i) => (
              <li key={i}><a href={`#${i.toLowerCase()}`} className="hover:text-white transition-colors">{i}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-mid/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-slate-soft">© 2025 The Opifex Group. All rights reserved.</p>
          <p className="font-display text-[10px] uppercase tracking-[0.25em] text-slate-soft font-bold">Enterprise Construction Consulting</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <CtaBar />
      <Contact />
      <Footer />
    </div>
  );
}
