import { Suspense, lazy, useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";

type MaterialPalette = { base: string; middle: string; surface: string; accent: string };
const ProductMaterialScene = lazy(() => import("@/components/product-material-scene"));

function tokenHex(name: string, context: CanvasRenderingContext2D): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  context.clearRect(0, 0, 1, 1);
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
  return `#${[red, green, blue].map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

function useMaterialPalette() {
  const [palette, setPalette] = useState<MaterialPalette | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return;
    setPalette({
      base: tokenHex("--primary", context),
      middle: tokenHex("--chart-3", context),
      surface: tokenHex("--secondary", context),
      accent: tokenHex("--accent", context),
    });
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  return { palette, reducedMotion };
}

export function MaterialVisual({ className = "" }: { className?: string }) {
  const { palette, reducedMotion } = useMaterialPalette();

  return (
    <div aria-hidden="true" className={className}>
      <ClientOnly fallback={<div className="h-full min-h-[260px] w-full" />}>
        {palette && <Suspense fallback={<div className="h-full min-h-[260px] w-full" />}><ProductMaterialScene palette={palette} reducedMotion={reducedMotion} /></Suspense>}
      </ClientOnly>
    </div>
  );
}