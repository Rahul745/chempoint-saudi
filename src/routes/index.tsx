import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import warehouseImage from "@/assets/chempoint-epoxy-warehouse.jpg";
import { MaterialVisual } from "@/components/material-visual";
import { ProductGrid } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-shell";
import { markets, pageMeta } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({ meta: pageMeta("Chempoint | Industrial & Construction Chemicals in Saudi Arabia", "Explore product categories for flooring, coatings, construction, and manufacturing applications in Saudi Arabia.") }),
});

function HomePage() {
  return (
    <SiteLayout>
      <main>
        <section aria-labelledby="home-title" className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <img alt="Bright industrial facility with a polished seamless floor" className="absolute inset-0 -z-20 size-full object-cover object-center opacity-40" fetchPriority="high" height={1024} src={warehouseImage} width={1536} />
          <div className="hero-image-overlay absolute inset-0 -z-10" />
          <div className="mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-4 px-5 py-16 sm:px-8 lg:min-h-[700px] lg:grid-cols-[1fr_0.9fr] lg:px-12">
            <div className="max-w-[680px]">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-accent"><span className="h-px w-9 bg-accent" />CHEMICAL SOLUTIONS · SAUDI ARABIA</p>
              <h1 className="font-display text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl" id="home-title">Built for the<br />surfaces that<br /><span className="text-accent">move us forward.</span></h1>
              <p className="mt-7 max-w-[510px] text-base leading-7 text-primary-foreground/85 sm:text-lg">Explore chemical product families for industrial flooring, coatings, construction, and manufacturing.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link className="inline-flex min-h-12 items-center gap-2 bg-accent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent/85" to="/products">Explore product range <ArrowRight aria-hidden="true" className="size-4" /></Link><Link className="inline-flex min-h-12 items-center gap-2 border border-primary-foreground/50 px-5 text-sm font-medium transition-colors hover:bg-primary-foreground/10" to="/contact">Talk to our team <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div>
              <Link className="mt-10 inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground" to="/products">Discover what we do <ArrowDown aria-hidden="true" className="size-4" /></Link>
            </div>
            <div className="relative mx-auto h-[340px] w-full max-w-[510px] sm:h-[440px] lg:h-[510px]">
              <MaterialVisual className="absolute inset-0" />
              <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap border-t border-primary-foreground/30 pt-3 text-[10px] font-semibold uppercase text-primary-foreground/80"><span className="size-1.5 rounded-full bg-accent" />Layered material study <span className="text-accent">01 / 04</span></div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden w-[275px] bg-primary px-8 py-6 text-primary-foreground md:block"><span className="mb-2 block text-[10px] font-bold uppercase text-accent">A practical place to start</span><Link className="flex items-center justify-between gap-3 text-sm font-medium" to="/products">Explore the product range <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link></div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="mb-11 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div className="max-w-[650px]"><p className="mb-4 text-xs font-bold uppercase text-chart-3">PRODUCT FAMILIES</p><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">The right chemistry<br className="hidden sm:block" /> for what comes next.</h2></div>
              <p className="max-w-[390px] text-sm leading-6 text-muted-foreground">Start with an application area to explore the product categories relevant to your project.</p>
            </div>
            <ProductGrid />
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-chart-3" to="/products">View all product families <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </section>

        <section className="blueprint-grid overflow-hidden bg-secondary">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12 lg:py-24">
            <div><p className="mb-4 text-xs font-bold uppercase text-chart-3">APPLICATIONS</p><h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Chemistry for<br />real-world work.</h2><p className="mt-5 max-w-[420px] text-sm leading-7 text-muted-foreground">From protective flooring to manufacturing inputs, explore the areas our product families are made to serve.</p><Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-chart-3" to="/industries">Explore industries <ArrowRight aria-hidden="true" className="size-4" /></Link></div>
            <div className="grid content-center sm:grid-cols-2">{markets.map((market, index) => <Link className="flex min-h-[90px] items-center gap-4 border-b border-border py-5" key={market} to="/industries"><span className="font-display text-xs font-semibold text-chart-3">0{index + 1}</span><span className="font-display text-lg font-medium">{market}</span><ArrowUpRight aria-hidden="true" className="ml-auto size-4 text-chart-3" /></Link>)}</div>
          </div>
        </section>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-20"><div><p className="mb-4 text-xs font-bold uppercase text-accent">FROM QUESTION TO SOLUTION</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Start with the application.<br />Find a better fit.</h2></div><Link className="inline-flex min-h-12 items-center gap-3 border border-primary-foreground/50 px-5 text-sm font-semibold hover:bg-primary-foreground/10" to="/approach">See our approach <ArrowRight aria-hidden="true" className="size-4" /></Link></div>
        </section>
      </main>
    </SiteLayout>
  );
}