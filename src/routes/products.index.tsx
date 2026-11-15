import { createFileRoute } from "@tanstack/react-router";
import { MaterialVisual } from "@/components/material-visual";
import { PageIntro, ProductGrid } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-content";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
  head: () => ({ meta: pageMeta("Product Families | Chempoint", "Explore product categories for flooring, resins and hardeners, protective coatings, and construction chemicals.") }),
});

function ProductsPage() {
  return <SiteLayout><main><PageIntro eyebrow="PRODUCT FAMILIES" title="The right chemistry for what comes next." description="Explore product categories across flooring, formulation materials, protective coatings, and construction applications." /><section><div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12"><div className="mb-10 grid items-center gap-8 border-b border-border pb-10 md:grid-cols-[1fr_330px]"><div><p className="mb-3 text-xs font-bold uppercase text-chart-3">MATERIAL STUDY</p><h2 className="font-display text-2xl font-semibold">A closer look at the layers.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">An abstract visual study inspired by the surfaces and materials across these product families.</p></div><MaterialVisual className="h-[250px]" /></div><ProductGrid /></div></section></main></SiteLayout>;
}