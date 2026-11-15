import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-shell";
import { productFamilies, pageMeta } from "@/lib/site-content";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const product = productFamilies.find((family) => family.slug === params.category);
    if (!product) throw notFound();
    return product;
  },
  component: ProductDetailPage,
  head: ({ loaderData }) => ({ meta: pageMeta(`${loaderData?.name ?? "Product category"} | Chempoint`, loaderData?.description ?? "Explore product categories for industry and construction.") }),
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const Icon = product.icon;

  return <SiteLayout><main><PageIntro eyebrow={product.eyebrow} title={product.name} description={product.description} /><section className="border-b border-border"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20"><div className="flex min-h-[280px] items-center justify-center bg-secondary"><Icon aria-hidden="true" className="size-24 text-chart-3" strokeWidth={1.1} /></div><div className="flex flex-col justify-center"><p className="mb-4 text-xs font-bold uppercase text-chart-3">CATEGORY OVERVIEW</p><h2 className="font-display text-3xl font-semibold">Explore applications and product types.</h2><p className="mt-5 max-w-[620px] text-sm leading-7 text-muted-foreground">{product.description} Review the category labels below as a starting point for your project enquiry.</p><div className="mt-8 flex flex-wrap gap-2">{product.tags.map((tag) => <span className="border border-border bg-card px-3 py-2 text-xs font-medium" key={tag}>{tag}</span>)}</div><Link className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-chart-3" to="/contact">Ask about this category <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div></div></section><section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><p className="text-xs font-bold uppercase text-accent">NEXT STEP</p><h2 className="mt-2 font-display text-2xl font-semibold">Talk with us about your application.</h2></div><Link className="inline-flex items-center gap-2 border border-primary-foreground/50 px-5 py-3 text-sm font-semibold hover:bg-primary-foreground/10" to="/contact">Start an enquiry <ArrowRight aria-hidden="true" className="size-4" /></Link></div></section><div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12"><Link className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground" to="/products"><ArrowLeft aria-hidden="true" className="size-4" />All product families</Link></div></main></SiteLayout>;
}