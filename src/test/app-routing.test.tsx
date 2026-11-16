import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each([
    ["/", "/"],
    ["/products", "/products/"],
    ["/products/epoxy-flooring", "/products/$category"],
    ["/products/resins-hardeners", "/products/$category"],
    ["/products/protective-coatings", "/products/$category"],
    ["/products/construction-chemicals", "/products/$category"],
    ["/industries", "/industries"],
    ["/approach", "/approach"],
    ["/contact", "/contact"],
  ])("matches %s to its content route", (path, expectedRouteId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).toBe(expectedRouteId);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
