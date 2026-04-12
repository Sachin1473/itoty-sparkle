

## Hero Section Redesign Plan

### Current State
The hero section has a full background image with an overlay card containing text and a stats bar at the bottom.

### Proposed Changes

**1. Banner-Only Hero**
- Replace the current hero layout with the uploaded ITOTY banner image (`ITOTY_banner.png`) as a full-width banner at the top
- Overlay centered text: **ITOTY 2026** (large heading), **INDIA'S BIGGEST TRACTOR AWARDS IS BACK!** (subheading), **Stay Tuned For More Updates!** (tagline)
- Clean, minimal layout — banner image fills the section, text overlaid on top

**2. 2025 Winner Images Below Banner**
- Add a showcase strip featuring ITOTY 2025 winners (Farmtrac Promaxx 47 as Indian Tractor of the Year 2024, and implement winner) with tractor images, sourced from the banner reference

**3. Four Clickable Info Cards**
- Below the banner/winners area, display 4 styled cards in a row (matching the uploaded reference image style):
  - **Date** — 17th June 2026 (links to #about)
  - **Location** — New Delhi (links to #contact)
  - **Categories** — 16 (links to #categories)
  - **Jury Members** — 8 (links to #jury)
- Each card has an icon (gold colored), bold value, and label — clickable to scroll to the relevant section

### Files Modified
- `src/components/HeroSection.tsx` — Complete rewrite
- Copy `ITOTY_banner.png` to `public/images/`

### Visual Result
```text
┌─────────────────────────────────────┐
│         ITOTY BANNER IMAGE          │
│   ITOTY 2026                        │
│   INDIA'S BIGGEST TRACTOR AWARDS    │
│   Stay Tuned For More Updates!      │
│                                     │
│   [2025 Winner Images]              │
├────────┬────────┬────────┬──────────┤
│  Date  │Location│ Categ. │  Jury    │
│ 17 Jun │New Del │  16    │   8      │
└────────┴────────┴────────┴──────────┘
```

