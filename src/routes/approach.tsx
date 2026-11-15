import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-content";

const steps = [
  ["01", "Tell us what you need", "Share the surface, process, or performance goal."],
  ["02", "Explore the range", "Review product families that fit your application."],
  ["03", "Request details", "Contact our team for product information."],
] as const;

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () => ({ meta: pageMeta("Our Approach | Chempoint", "A simple path from sharing your application to exploring relevant product categories and requesting details.") }),
});

function ApproachPage() {
  return <SiteLayout><main><PageIntro eyebrow="FROM QUESTION TO SOLUTION" title="Start with the application. Find a better fit." description="A practical way to begin an enquiry: share your needs, explore relevant product families, and request information." /><section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"><div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase text-accent">THREE STEPS</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">From the first question to a product conversation.</h2></div><div className="grid gap-8 sm:grid-cols-3">{steps.map(([number, title, text]) => <article className="border-t border-primary-foreground/25 pt-6" key={number}><span className="font-display text-sm font-semibold text-accent">{number}</span><h3 className="mt-5 font-display text-xl font-semibold">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/75">{text}</p></article>)}</div><Link className="mt-12 inline-flex min-h-12 items-center gap-2 border border-primary-foreground/50 px-5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10" to="/contact">Tell us about your project <ArrowRight aria-hidden="true" className="size-4" /></Link></div></section></main></SiteLayout>;
}