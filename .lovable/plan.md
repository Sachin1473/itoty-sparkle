

## Export the entire ITOTY site as a single self-contained HTML file

I'll generate a single `itoty-sparkle.html` file that mirrors the live site at `itoty-sparkle.lovable.app` — all sections inlined, styled with Tailwind via CDN, no build step required. Open it in any browser and it just works.

### What you'll get
A downloadable file `/mnt/documents/itoty-sparkle.html` containing:
- **`<head>`**: Tailwind CDN, Google Fonts (Cormorant Garamond, Barlow, Barlow Condensed), inline `<style>` block with all custom CSS variables (gold, forest, cream palette), section utilities, and animations from `src/index.css`
- **`<body>`**: Static HTML markup for every section in the same order as the React app:
  1. Navbar (sticky, with mobile menu toggle via small inline JS)
  2. Hero banner image + 4 info cards (Date / Location / Categories / Jury)
  3. About Us
  4. Partners (CEAT presented-by, Times Group / JK Tyre / HDFC associate, media partners)
  5. Winners Over the Years (year cards with "View All Winners" linking to `#winners-{year}` anchors lower on the same page)
  6. Categories
  7. Gallery (years in descending order: 2025 → 2019)
  8. Jury
  9. Contact
  10. Footer
- **Winners archive appended at bottom**: All 209 winner entries from `src/data/winners.json` rendered as a grid grouped by year (2025, 2024, 2023, 2022, 2021, 2019), each group anchored so the "View All Winners" buttons jump to the right section
- **Banner image**: Embedded as a base64 data URI from `src/assets/itoty-banner.webp` so the file is fully self-contained (no external image dependency)
- **Minimal vanilla JS**: ~10 lines for the mobile menu open/close and smooth-scroll behavior

### What will NOT be in the export
- React routing — the separate `/winners/:year` page becomes inline anchored sections instead
- Build tooling (Vite, TypeScript, Tailwind compiler) — replaced by Tailwind CDN
- Any interactive React state beyond the mobile menu toggle

### How I'll build it
1. Read `src/index.css`, `tailwind.config.ts`, all section components, and `src/data/winners.json` to capture the exact markup, classes, and content
2. Base64-encode `src/assets/itoty-banner.webp` and embed it as a data URI
3. Translate each React component's JSX into equivalent static HTML (preserving all Tailwind classes so styling matches the live site)
4. Write the assembled file to `/mnt/documents/itoty-sparkle.html`
5. Deliver via a `<lov-artifact>` tag so you can download it directly from chat

### Files Modified
- None in the project codebase
- New artifact: `/mnt/documents/itoty-sparkle.html` (single self-contained file, est. 200–400 KB including base64 banner)

### Caveats
- Tailwind CDN is used for simplicity — page requires internet to load styles and fonts. If you need 100% offline, say so and I'll inline a precompiled Tailwind CSS instead (larger file, ~3 MB).
- Visual fidelity will be very close but not pixel-perfect to the React build, since some shadcn/ui components (if any are visible) are simplified to plain HTML equivalents.

