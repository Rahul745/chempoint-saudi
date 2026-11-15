# Chempoint multi-page site and 3D upgrade

## What will change
- Replace section-only navigation with distinct pages for Home, Products, Industries, Our approach, and Contact.
- Give each of the four existing product families its own detail page, using only the generic category information already on the site.
- Add a polished, interactive 3D materials visual to the home/product experience, with a lightweight fallback and reduced-motion consideration.
- Keep the shared Chempoint navigation and footer consistent across pages, with page-specific titles and descriptions.
- Include every new public page in the existing static export prerender list so the exported site contains the new pages.

## Technical approach
- Use TanStack file-based routes and typed `Link` navigation; retain `/` and its current claims.
- Extract shared site chrome and small reusable page/visual elements; do not create new company credentials, product specifications, or contact details.
- Use Three.js with React Three Fiber for the abstract 3D material scene, loaded only on the client so server rendering and page metadata remain intact.
- Update routing coverage and the project architecture notes, then run the relevant tests and verify the pages and 3D scene in the preview.
