import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, Waves, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Our approach", to: "/approach" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2.5 text-xs sm:px-8 lg:px-12">
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" />Chemical solutions for industry and construction</span>
          <span className="hidden items-center gap-1.5 sm:flex">Saudi Arabia <ArrowUpRight aria-hidden="true" className="size-3.5" /></span>
        </div>
      </div>
      <header className="relative z-20 border-b border-border bg-background/95">
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link aria-label="Chempoint home" className="flex items-center gap-3" to="/">
            <span className="flex size-10 items-center justify-center bg-primary text-primary-foreground"><Waves aria-hidden="true" className="size-6" /></span>
            <span className="font-display text-[25px] font-bold leading-none">chem<span className="text-chart-3">point</span><span className="mt-1 block font-body text-[9px] font-medium uppercase text-muted-foreground">Advanced chemical solutions</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navigation.map((item) => <Link activeProps={{ className: "text-chart-3" }} className="transition-colors hover:text-chart-3" key={item.to} to={item.to}>{item.label}</Link>)}
          </nav>
          <Button asChild className="hidden rounded-none px-5 sm:inline-flex">
            <Link to="/contact">Discuss a project <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </Button>
          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} className="size-10 rounded-none lg:hidden" onClick={() => setMenuOpen((open) => !open)} size="icon" variant="outline">
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-5 py-4 shadow-lg lg:hidden">
          {navigation.map((item) => <Link activeProps={{ className: "text-chart-3" }} className="border-b border-border py-3 text-sm font-medium last:border-0" key={item.to} onClick={() => setMenuOpen(false)} to={item.to}>{item.label}</Link>)}
        </nav>}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-8 text-xs sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <Link aria-label="Chempoint home" className="flex items-center gap-3 font-display text-xl font-bold" to="/"><span className="flex size-8 items-center justify-center bg-accent text-foreground"><Waves aria-hidden="true" className="size-5" /></span>chempoint</Link>
        <span className="text-primary-foreground/70">Construction &amp; industrial chemical product categories</span>
        <Link className="flex items-center gap-2 hover:text-accent" to="/">Back to home <ArrowUpRight aria-hidden="true" className="size-3.5" /></Link>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader />{children}<SiteFooter /></div>;
}