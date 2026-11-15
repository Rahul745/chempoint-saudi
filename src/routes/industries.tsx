import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Factory } from "lucide-react";
import { PageIntro } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-shell";
import { markets, pageMeta } from "@/lib/site-content";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({ meta: pageMeta("Industries & Applications | Chempoint", "Explore industrial flooring, paints and coatings, construction, and manufacturing applications.") }),
});

function IndustriesPage() {
  return <SiteLayout><main><PageIntro eyebrow="APPLICATIONS" title="Chemistry for real-world work." description="Explore the application areas connected to the product families featured on this site." /><section className="blueprint-grid bg-secondary"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-24"><div className="flex flex-col justify-center"><Factory aria-hidden="true" className="mb-8 size-10 text-chart-3" strokeWidth={1.4} /><h2 className="font-display text-3xl font-semibold">Find a starting point for your application.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Each area provides a way to begin exploring relevant product categories. Specific product recommendations depend on project requirements.</p><Link className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-chart-3" to="/products">Browse product families <ArrowRight aria-hidden="true" className="size-4" /></Link></div><div className="grid sm:grid-cols-2">{markets.map((market, index) => <Link className="group flex min-h-[150px] flex-col justify-between border-b border-r border-border p-6 transition-colors hover:bg-background/70" key={market} to="/products"><span className="font-display text-xs font-semibold text-chart-3">0{index + 1}</span><span className="flex items-center justify-between gap-3 font-display text-xl font-medium">{market}<ArrowUpRight aria-hidden="true" className="size-4 text-chart-3" /></span></Link>)}</div></div></section></main></SiteLayout>;
}