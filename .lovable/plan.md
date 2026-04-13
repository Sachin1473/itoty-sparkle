

## Changes

### 1. Navbar — Replace CTA with "Vote Now" linking to #categories
- Change "Get ITOTY Pass" to "Vote Now" in both desktop and mobile nav
- Remove the Razorpay external link (`https://pages.razorpay.com/...`)
- Change to `href="#categories"` (scrolls to categories section)
- Remove `target="_blank"` and `rel="noopener"` attributes

### 2. HeroSection — Remove background banner
- Remove the `ITOTY_banner.png` image and the green overlay div
- Keep the hero text (ITOTY 2026, subheading, tagline) styled on a clean light background with dark text
- Keep the 2025 Winners Strip and Info Cards unchanged

### Files Modified
- `src/components/Navbar.tsx` — CTA button text and link (2 places)
- `src/components/HeroSection.tsx` — Remove banner image/overlay, restyle text for light background

