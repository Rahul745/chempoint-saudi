import { Factory, FlaskConical, Layers3, ShieldCheck } from "lucide-react";

export const productFamilies = [
  {
    number: "01",
    name: "Epoxy flooring systems",
    eyebrow: "SURFACE PROTECTION",
    slug: "epoxy-flooring",
    to: "/products/epoxy-flooring",
    icon: Layers3,
    summary: "Explore flooring systems for industrial, commercial, and high-performance spaces.",
    tags: ["Self-leveling", "Epoxy coating", "Primers"],
    description: "Explore epoxy flooring categories for industrial and commercial surfaces, including self-leveling systems, coatings, and primers.",
  },
  {
    number: "02",
    name: "Resins & hardeners",
    eyebrow: "FORMULATION MATERIALS",
    slug: "resins-hardeners",
    to: "/products/resins-hardeners",
    icon: FlaskConical,
    summary: "Discover resin and curing-agent categories for coatings and composite applications.",
    tags: ["Epoxy resin", "Hardener", "U.P.R."],
    description: "Browse resin and hardener categories for coatings, composites, and manufacturing applications.",
  },
  {
    number: "03",
    name: "Protective coatings",
    eyebrow: "INDUSTRIAL COATINGS",
    slug: "protective-coatings",
    to: "/products/protective-coatings",
    icon: ShieldCheck,
    summary: "Find coating solutions for demanding surfaces and industrial environments.",
    tags: ["Anti-corrosion", "Floor coatings", "Topcoats"],
    description: "Explore protective coating categories for industrial surfaces, including anti-corrosion coatings, floor coatings, and topcoats.",
  },
  {
    number: "04",
    name: "Construction chemicals",
    eyebrow: "BUILDING SYSTEMS",
    slug: "construction-chemicals",
    to: "/products/construction-chemicals",
    icon: Factory,
    summary: "Browse chemical solutions designed for construction and building applications.",
    tags: ["Waterproofing", "Repair", "Adhesives"],
    description: "Browse construction chemical categories for building applications, including waterproofing, repair, and adhesives.",
  },
] as const;

export const markets = [
  "Industrial flooring",
  "Paints & coatings",
  "Construction",
  "Composites & manufacturing",
] as const;

export function pageMeta(title: string, description: string) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}