import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productFamilies } from "@/lib/site-content";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:px-12 lg:py-20">
        <div><p className="mb-4 text-xs font-bold uppercase text-chart-3">{eyebrow}</p><h1 className="max-w-[740px] font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1></div>
        <p className="max-w-[480px] text-sm leading-7 text-muted-foreground md:justify-self-end">{description}</p>
      </div>
    </section>
  );
}

export function ProductGrid() {
  return (
    <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
      {productFamilies.map(({ number, name, eyebrow, icon: Icon, summary, tags, slug }) => (
        <article className="group flex min-h-[330px] flex-col border-b border-r border-border bg-card p-6 transition-colors hover:bg-secondary/50 sm:p-7" key={name}>
          <div className="flex items-start justify-between"><span className="font-display text-xs font-semibold text-chart-3">{number}</span><Icon aria-hidden="true" className="size-5 text-chart-3" strokeWidth={1.7} /></div>
          <p className="mt-9 text-[10px] font-bold uppercase text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-2 font-display text-[21px] font-semibold leading-tight">{name}</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span className="border border-border px-2 py-1 text-[10px] text-secondary-foreground" key={tag}>{tag}</span>)}</div>
          <Link className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs font-semibold transition-colors group-hover:text-chart-3" params={{ category: slug }} to="/products/$category">Explore this category <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </article>
      ))}
    </div>
  );
}

export function ContactLink({ children = "Discuss a project" }: { children?: React.ReactNode }) {
  return <Button asChild className="min-h-12 rounded-none px-6"><Link to="/contact">{children} <ArrowRight aria-hidden="true" className="size-4" /></Link></Button>;
}