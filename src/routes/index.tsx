import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Factory, FlaskConical, Layers3, Menu, ShieldCheck, Waves, X } from "lucide-react";
import warehouseImage from "@/assets/chempoint-epoxy-warehouse.jpg";
import { Button } from "@/components/ui/button";

const productFamilies = [
  { number: "01", name: "Epoxy flooring systems", eyebrow: "SURFACE PROTECTION", icon: Layers3, summary: "Explore flooring systems for industrial, commercial, and high-performance spaces.", tags: ["Self-leveling", "Epoxy coating", "Primers"] },
  { number: "02", name: "Resins & hardeners", eyebrow: "FORMULATION MATERIALS", icon: FlaskConical, summary: "Discover resin and curing-agent categories for coatings and composite applications.", tags: ["Epoxy resin", "Hardener", "U.P.R."] },
  { number: "03", name: "Protective coatings", eyebrow: "INDUSTRIAL COATINGS", icon: ShieldCheck, summary: "Find coating solutions for demanding surfaces and industrial environments.", tags: ["Anti-corrosion", "Floor coatings", "Topcoats"] },
  { number: "04", name: "Construction chemicals", eyebrow: "BUILDING SYSTEMS", icon: Factory, summary: "Browse chemical solutions designed for construction and building applications.", tags: ["Waterproofing", "Repair", "Adhesives"] },
];

const markets = ["Industrial flooring", "Paints & coatings", "Construction", "Composites & manufacturing"];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Chempoint | Construction & Industrial Chemicals in Saudi Arabia" },
      { name: "description", content: "Discover epoxy flooring, resins, hardeners, protective coatings, and construction chemical categories for industry and projects in Saudi Arabia." },
      { property: "og:title", content: "Chempoint | Construction & Industrial Chemicals in Saudi Arabia" },
      { property: "og:description", content: "Discover chemical product families for flooring, coatings, construction, and manufacturing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2.5 text-xs sm:px-8 lg:px-12">
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" />Chemical solutions for industry and construction</span>
          <a className="hidden items-center gap-1.5 sm:flex" href="#contact">Saudi Arabia <ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
        </div>
      </div>

      <header className="relative z-20 border-b border-border bg-background/95">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a aria-label="Chempoint home" className="flex items-center gap-3" href="#home">
            <span className="flex size-10 items-center justify-center bg-primary text-primary-foreground"><Waves aria-hidden="true" className="size-6" /></span>
            <span className="font-display text-[25px] font-bold leading-none">chem<span className="text-chart-3">point</span><span className="mt-1 block font-body text-[9px] font-medium uppercase tracking-[0.15em] text-muted-foreground">Advanced chemical solutions</span></span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a className="transition-colors hover:text-chart-3" href="#products">Products</a>
            <a className="transition-colors hover:text-chart-3" href="#markets">Industries</a>
            <a className="transition-colors hover:text-chart-3" href="#approach">Our approach</a>
            <a className="transition-colors hover:text-chart-3" href="#contact">Contact</a>
          </nav>

          <Button asChild className="hidden rounded-none px-5 sm:inline-flex">
            <a href="#contact">Discuss a project <ArrowRight aria-hidden="true" className="size-4" /></a>
          </Button>

          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} className="size-10 rounded-none lg:hidden" onClick={() => setMenuOpen((open) => !open)} size="icon" variant="outline">
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-5 py-4 shadow-lg lg:hidden">{[["Products", "#products"], ["Industries", "#markets"], ["Our approach", "#approach"], ["Contact", "#contact"]].map(([label, href]) => <a className="border-b border-border py-3 text-sm font-medium last:border-0" href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <section aria-labelledby="hero-title" className="relative isolate min-h-[620px] overflow-hidden bg-primary lg:min-h-[690px]" id="home">
        <img alt="A bright, modern industrial facility with a polished seamless floor" className="absolute inset-0 -z-20 size-full object-cover object-center" fetchPriority="high" height={1024} src={warehouseImage} width={1536} />
        <div className="hero-image-overlay absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[620px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[690px] lg:px-12">
          <div className="max-w-[690px] text-primary-foreground">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent"><span className="h-px w-9 bg-accent" />CHEMICAL SOLUTIONS · SAUDI ARABIA</p>
            <h1 className="font-display text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl" id="hero-title">Built for the<br />surfaces that<br /><span className="text-accent">move us forward.</span></h1>
            <p className="mt-7 max-w-[510px] text-base leading-7 text-primary-foreground/85 sm:text-lg">Explore chemical product families for industrial flooring, coatings, construction, and manufacturing.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="min-h-12 rounded-none bg-accent px-6 text-foreground hover:bg-accent/85"><a href="#products">Explore product range <ArrowRight aria-hidden="true" className="size-4" /></a></Button>
              <Button asChild className="min-h-12 rounded-none border-primary-foreground/60 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" variant="outline"><a href="#contact">Talk to our team <ArrowUpRight aria-hidden="true" className="size-4" /></a></Button>
            </div>
            <a className="mt-12 inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground" href="#products">Discover what we do <ArrowDown aria-hidden="true" className="size-4" /></a>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[275px] bg-primary px-8 py-6 text-primary-foreground md:block"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-accent">A practical place to start</span><a className="flex items-center justify-between gap-3 text-sm font-medium" href="#products">Explore the product range <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></a></div>
      </section>

      <section className="border-b border-border bg-background" id="products">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-11 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-[650px]"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-chart-3">PRODUCT FAMILIES</p><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">The right chemistry<br className="hidden sm:block" /> for what comes next.</h2></div>
            <p className="max-w-[390px] text-sm leading-6 text-muted-foreground">Start with an application area to explore the product categories relevant to your project.</p>
          </div>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {productFamilies.map(({ number, name, eyebrow, icon: Icon, summary, tags }) => <article className="group flex min-h-[315px] flex-col border-b border-r border-border bg-card p-6 transition-colors hover:bg-secondary/50 sm:p-7" key={name}>
              <div className="flex items-start justify-between"><span className="font-display text-xs font-semibold text-chart-3">{number}</span><Icon aria-hidden="true" className="size-5 text-chart-3" strokeWidth={1.7} /></div>
              <p className="mt-9 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</p>
              <h3 className="mt-2 font-display text-[21px] font-semibold leading-tight">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span className="border border-border px-2 py-1 text-[10px] text-secondary-foreground" key={tag}>{tag}</span>)}</div>
              <a aria-label={`Ask about ${name}`} className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs font-semibold transition-colors group-hover:text-chart-3" href="#contact">Ask about this category <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="blueprint-grid overflow-hidden bg-secondary" id="markets">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12 lg:py-24">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-chart-3">APPLICATIONS</p><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Chemistry for<br />real-world work.</h2><p className="mt-5 max-w-[420px] text-sm leading-7 text-muted-foreground">From protective flooring to manufacturing inputs, explore the areas our product families are made to serve.</p><a className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-chart-3" href="#contact">Find a product for your application <ArrowRight aria-hidden="true" className="size-4" /></a></div>
          <div className="grid content-center sm:grid-cols-2">{markets.map((market, index) => <div className="flex min-h-[90px] items-center gap-4 border-b border-border py-5" key={market}><span className="font-display text-xs font-semibold text-chart-3">0{index + 1}</span><span className="font-display text-lg font-medium">{market}</span><ArrowUpRight aria-hidden="true" className="ml-auto size-4 text-chart-3" /></div>)}</div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground" id="approach">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-24 lg:px-12 lg:py-20">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">FROM QUESTION TO SOLUTION</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Start with the application.<br />Find a better fit.</h2></div>
          <div className="grid gap-7 sm:grid-cols-3">{[["01", "Tell us what you need", "Share the surface, process, or performance goal."], ["02", "Explore the range", "Review product families that fit your application."], ["03", "Request details", "Contact our team for product information."]].map(([number, title, text]) => <div className="border-t border-primary-foreground/25 pt-5" key={number}><span className="font-display text-xs font-semibold text-accent">{number}</span><h3 className="mt-4 font-display text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/75">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-background" id="contact">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-24">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-chart-3">PROJECT ENQUIRIES</p><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Let’s talk<br />about your needs.</h2><p className="mt-5 max-w-[390px] text-sm leading-7 text-muted-foreground">Tell us a little about your project or the product category you’re looking for.</p><div className="mt-7 flex items-start gap-3 border-l-2 border-chart-3 pl-4"><ChevronDown aria-hidden="true" className="mt-0.5 size-4 rotate-[-90deg] text-chart-3" /><span className="text-sm leading-6 text-muted-foreground">Our team can help direct your enquiry to the right product category.</span></div></div>
          <form className="grid content-start gap-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setInquirySent(true); }}>
            <label className="grid gap-2 text-xs font-semibold" htmlFor="contact-name">Name<input autoComplete="name" className="h-12 border border-input bg-card px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring" id="contact-name" name="name" placeholder="Your name" required /></label>
            <label className="grid gap-2 text-xs font-semibold" htmlFor="contact-email">Work email<input autoComplete="email" className="h-12 border border-input bg-card px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring" id="contact-email" name="email" placeholder="you@company.com" required type="email" /></label>
            <label className="grid gap-2 text-xs font-semibold sm:col-span-2" htmlFor="contact-interest">Area of interest<select className="h-12 border border-input bg-card px-3 text-sm font-normal outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring" defaultValue="" id="contact-interest" name="interest" required><option disabled value="">Select a product family</option>{productFamilies.map(({ name }) => <option key={name} value={name}>{name}</option>)}<option value="General enquiry">General enquiry</option></select></label>
            <label className="grid gap-2 text-xs font-semibold sm:col-span-2" htmlFor="contact-message">How can we help?<textarea className="min-h-28 resize-y border border-input bg-card px-3 py-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring" id="contact-message" name="message" placeholder="A few details about your application or project" /></label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2"><Button className="h-12 rounded-none px-6" type="submit">Send enquiry <ArrowRight aria-hidden="true" className="size-4" /></Button>{inquirySent && <p className="flex items-center gap-2 text-sm font-medium text-chart-3" role="status"><Check aria-hidden="true" className="size-4" />Your enquiry is ready. Our contact form needs a verified company email to deliver it.</p>}</div>
          </form>
        </div>
      </section>

      <footer className="border-t border-primary-foreground/15 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-8 text-xs sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a aria-label="Chempoint home" className="flex items-center gap-3 font-display text-xl font-bold" href="#home"><span className="flex size-8 items-center justify-center bg-accent text-foreground"><Waves aria-hidden="true" className="size-5" /></span>chempoint</a>
          <span className="text-primary-foreground/70">Construction &amp; industrial chemical product categories</span>
          <a className="flex items-center gap-2 hover:text-accent" href="#home">Back to top <ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
        </div>
      </footer>
    </main>
  );
}