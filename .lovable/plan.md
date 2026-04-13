

## Hero Section Redesign

### What changes
1. **Remove the 2025 Winners Strip** (lines 28–53) entirely from `HeroSection.tsx`
2. **Redesign the hero banner** — replace the plain text section with a professional, visually striking banner:
   - Deep green gradient background (using the secondary/accent color `hsl(150, 38%, 16%)`) with a subtle pattern or texture effect via CSS
   - Large bold "ITOTY 2026" heading with the year in gold (primary color)
   - "India's Biggest Tractor Awards is Back!" as a prominent subheading
   - "Stay Tuned For More Updates!" as a lighter tagline
   - Generous vertical padding for visual impact
   - Full-width banner feel, professional and clean
3. **Keep the 4 clickable info cards** unchanged below the banner

### File Modified
- `src/components/HeroSection.tsx` — Remove winners strip, redesign hero area with gradient banner

### Visual Layout
```text
┌─────────────────────────────────────┐
│     ██ Deep Green Gradient BG ██    │
│                                     │
│         ITOTY  2026 (gold)          │
│  India's Biggest Tractor Awards     │
│         is Back!                    │
│   Stay Tuned For More Updates!      │
│                                     │
├────────┬────────┬────────┬──────────┤
│  Date  │Location│ Categ. │  Jury    │
│ 17 Jun │New Del │  16    │   8      │
└────────┴────────┴────────┴──────────┘
```

