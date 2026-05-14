<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Sydney Surfboard Repair
description: Workshop-to-ocean surfboard repair in Miranda NSW. Drenched aqua, ink type, no decoration.
colors:
  aqua-drench: "#56b6c6"
  ink: "#0d1922"
  aqua-press: "#3a9bae"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 10vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Familjen Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Familjen Grotesk', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "120px"
  section: "clamp(64px, 10vw, 120px)"
components:
  cta-pill:
    backgroundColor: "#0d1922"
    textColor: "#56b6c6"
    rounded: "999px"
    padding: "14px 32px"
  cta-pill-hover:
    backgroundColor: "#1a2d38"
    textColor: "#56b6c6"
    rounded: "999px"
    padding: "14px 32px"
---

# Design System: Sydney Surfboard Repair

## 1. Overview

**Creative North Star: "The Working Shore"**

Sydney Surfboard Repair sits exactly at the intersection of a working trade and the Pacific Ocean. The design system embodies that intersection without metaphor: the aqua is the colour of clean Bondi water on a flat morning; the ink is the colour of resin curing in the shade. There are no illustrations, no icon libraries, no decorative dividers. The site IS the work. Every element either communicates a fact (price, address, turnaround) or shows evidence (workshop photographs, before and after repairs).

The visual strategy is Drenched. The aqua covers the entire substrate. Photographs punch in as clean, un-bordered windows on that colour. Type is ink. There is no third colour. This restraint is the voice: a shop confident enough in its craft to not need visual noise.

Tone follows PRODUCT.md's three words: working, honest, surfed. The copy equivalent of a bloke who will tell you exactly what your board needs and exactly what it costs, and won't add another word.

**Key Characteristics:**
- Two-colour system: aqua drench + ink. No accent, no cream, no white.
- Photography as the primary visual layer. Every section that needs energy gets a real workshop photo, not a gradient or illustration.
- Industrial-signage display type, maximum weight, pushed to the bleed edges.
- Flat elevation: no shadows, no glassmorphism. Depth from photography and the drench itself.
- Mobile-first at every decision: minimum 44px tap targets, 16px minimum body, touch-equivalent for every hover state.


## 2. Colors: The Bondi Two

Two colours. That is the system.

### Primary
- **Aqua Drench** (`#56b6c6`, `oklch(72% 0.08 210)`): The entire page substrate. Every background is aqua. Photos punch holes in it. Type sits on it. Nothing else does.
- **Aqua Press** (`#3a9bae`, `oklch(63% 0.09 210)`): Computed darker variant used exclusively for the CTA pill hover state and interactive pressed states. Never appears as a surface colour.

### Neutral
- **Workshop Ink** (`#0d1922`, `oklch(13% 0.04 240)`): All body type, all display type, all rules, all borders. The CTA pill fill. The drag-handle on the before/after component. Every non-background element is this colour or transparent.

### Named Rules
**The Drench Rule.** The surface IS the aqua. Every background is `#56b6c6`. There are no white sections, no cream sections, no grey sections, no alternate-background rows. A second background colour is prohibited. If a section needs visual separation, it gets a full-bleed photograph or a change in type scale; never a different background colour.

**The Two-Colour Rule.** The palette is aqua and ink. No third colour is ever introduced, not even as an accent. Not coral, not yellow, not white. The system's confidence comes from its restraint.


## 3. Typography: The Workshop Voice

**Display Font:** Big Shoulders Display (900 weight) — Google Fonts, free, no licence friction.
**Body Font:** Familjen Grotesk (400/500 weight) — Google Fonts, free.
**Note at implementation:** These are the committed font choices from the shape brief. If Big Shoulders Display or Familjen Grotesk are unavailable, the fallback stacks are `'Arial Narrow', system-ui` and `'Helvetica Neue', system-ui` respectively. Do not substitute any font from the reflex-reject list (Inter, DM Sans, Outfit, IBM Plex, Space Grotesk, Fraunces, Cormorant, Playfair, Lora, Newsreader).

**Character:** Big Shoulders Display is an industrial signage sans: wide shoulders, condensed proportions, maximum weight. It looks like it was painted on a workshop wall. Familjen Grotesk is a Swedish workhorse with quiet personality — it does not compete with the display type. Together they read as confident trade, not agency polish.

### Hierarchy
- **Display** (900 weight, `clamp(3.5rem, 10vw, 8rem)`, line-height 0.9, tracking −0.02em): The wordmark. SYDNEY / SURFBOARD / REPAIR in the hero. Each word on its own line. Colour: ink on aqua. Pushed to the left bleed edge.
- **Headline** (800 weight, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.0): Section names (WHAT WE FIX, PRICES, THE TEAM). All caps tracked at 0.05em. Colour: ink.
- **Body** (400 weight, `clamp(1rem, 1.5vw, 1.125rem)`, line-height 1.65): All prose. Service descriptions, team bios, contact details. Max line length 68ch. Colour: ink.
- **Label** (500 weight, 0.75rem, letter-spacing 0.12em, uppercase): BEFORE / AFTER on the drag-compare. Price column headers (POLY / EPOXY). Open hours, address metadata. Colour: ink.

### Named Rules
**The Single-Weight Display Rule.** Display type is always Big Shoulders Display at 900. Never use 700 or lighter weights for headings. The weight contrast between display (900) and body (400) carries the entire hierarchy; reducing display weight collapses it.

**The No Italic Rule.** No italic type anywhere in the system. The brand voice is direct. Italics imply hesitation.


## 4. Elevation

This system is flat by default. There are no box shadows, no drop shadows, no glassmorphism blurs, no tonal layering. The aqua drench is a single Z-plane surface. Photographs appear at the same Z level, framed by the surrounding aqua, not elevated above it.

Depth is communicated through:
- **Scale contrast**: large display type against small body type creates visual depth without shadows.
- **Photography**: a full-bleed photo of a dark workshop creates immediate depth against the aqua substrate.
- **The before/after drag-compare component**: the vertical drag handle is the only interactive element that implies a stacking relationship; its ink colour against aqua is the system's one Z-axis signal.

**The Flat-By-Default Rule.** If you are about to add `box-shadow`, stop. There is no shadow in this design system. Depth is earned by photography and scale, not CSS.


## 5. Components

### CTA Pill
The only interactive surface beyond links and the drag-compare. The pill is an inversion of the page: ink background, aqua type. It is the only place aqua appears as a text colour.

- **Shape:** Fully rounded pill (`border-radius: 999px`).
- **Default:** `background: #0d1922`, `color: #56b6c6`, `padding: 14px 32px`, body font at 500 weight, 0.08em letter-spacing, no underline.
- **Hover / Focus:** Background shifts to `#1a2d38` (aqua-press darkened), 200ms `cubic-bezier(0.16, 1, 0.3, 1)`. Focus-visible: 2px solid `#0d1922` outline with 3px offset (AA compliant on the aqua substrate).
- **Touch:** The hover background shift applies on `:active` for touch targets. Minimum tap target: 44×44px.
- **Prohibition:** Never use a pill with an aqua background. The inversion logic is: page = aqua, pill = ink. Reversed, it disappears.

### Before/After Drag-Compare (Signature Component)
The centrepiece of the social-proof section. Shows broken.jpeg (left) and fixed.jpeg (right) of a real ALPA board repair.

- **Container:** Full-width minus `var(--spacing-md)` margins, aspect ratio 4:3 on mobile, 16:9 on desktop. `overflow: hidden`. No border-radius (flat edges match the system's zero-radius doctrine for photo containers).
- **Images:** Both absolutely positioned, `object-fit: cover`. The fixed.jpeg is clipped by a CSS `clip-path: inset(0 0 0 X%)` where X is driven by the drag position (0–100%). The broken.jpeg shows beneath it, full width.
- **Drag handle:** A 2px wide vertical line in ink (`#0d1922`), full height of the container. Centred on it: a circular ink disc, 40px diameter, with two chevron arrows (◀ ▶) in aqua, 16px SVG. No box-shadow on the disc.
- **Labels:** BEFORE (label typography, ink) bottom-left of the container. AFTER (label typography, ink) bottom-right. 12px padding from the corner.
- **Interaction:** Pointer down on the handle initiates drag. `pointermove` updates clip position. Works on touch (pointer events are unified). On `prefers-reduced-motion`: no drag animation easing; position snaps instantly.

### Navigation (Anchor Link Bar)
Slim sticky bar at the top. Sits on the aqua drench; does not introduce a new background colour.

- **Background:** `#56b6c6` (transparent to page, same colour). No border, no shadow, no blur. The only visual signal it is sticky is the ink rule (`1px solid #0d1922`) that appears along its bottom edge once the page has scrolled 1px.
- **Links:** Label typography (0.75rem, 500, 0.12em tracking, uppercase). Ink colour. No underline at rest. Underline on hover/focus.
- **Active section:** 2px ink underline on the currently-visible section's anchor link. Updated by IntersectionObserver.
- **Mobile:** Collapses to a row of the three most important anchors (REPAIRS, PRICES, CALL) plus a hamburger for the rest. No dropdown; a slide-down drawer in aqua with ink type.

### Price Ledger (Content Pattern, not a reusable component)
The prices table is not a `<table>`. It is a CSS grid: `grid-template-columns: 1fr auto auto`. Row separators are 1px ink rules at 20% opacity. No zebra striping, no alternating background colours (The Drench Rule prohibits alternate backgrounds). The most common repair (Ding Repair, $85 poly) gets a label-sized ink annotation: a small "MOST COMMON" label in label typography, 0.8 opacity, positioned top-right of that row.


## 6. Do's and Don'ts

### Do:
- **Do** use `#56b6c6` as the background for every section. There is no off-white, no cream, no grey, no dark band, no alternate section colour.
- **Do** set display type in Big Shoulders Display at weight 900 only. Never reduce to 700.
- **Do** use real workshop photographs — from `assets/source/` — as the primary visual expression in every photo slot. No stock photography, no illustrations, no 3D renders.
- **Do** tap the phone CTA as a `tel:` link and the address as a maps deep-link so the phone OS handles them natively.
- **Do** gate all scroll-driven reveals, the drag-compare easing, and any entrance animations behind `prefers-reduced-motion: no-preference`. The site must be fully functional with zero motion.
- **Do** put specific facts (price in dollars, turnaround in days, street address, email) above the fold or in the first two visible sections. Specifics earn trust; slogans do not.
- **Do** keep body line length to 68ch maximum.
- **Do** make every tap target at least 44×44px.

### Don't:
- **Don't** introduce a third colour, ever. Not even for emphasis, not even briefly. Not coral, not white, not grey. The Two-Colour Rule is the system.
- **Don't** add a box-shadow or drop-shadow to any element. The Flat-By-Default Rule is absolute.
- **Don't** use any font from the reflex-reject list: Inter, DM Sans, Outfit, IBM Plex Sans/Mono, Space Grotesk, Fraunces, Cormorant, Cormorant Garamond, Playfair Display, Lora, Newsreader, Crimson, Syne, Plus Jakarta Sans, Instrument Sans.
- **Don't** use a blue gradient hero, drop-shadow cards, a "Why Choose Us?" three-icon tile grid, or a contact form as the primary CTA. These are the generic Aussie tradie WordPress template patterns PRODUCT.md explicitly rejects.
- **Don't** use palm tree icons, hibiscus motifs, hand-lettered script fonts, or any tropical-paradise imagery. This is a workshop in suburban Miranda, not Byron Bay.
- **Don't** add a "Trusted by" logo bar, a hero metric ("5,000+ boards repaired!"), a gradient mesh, or a paired CTA with a ghost button. These are the corporate SaaS landing page patterns PRODUCT.md explicitly rejects.
- **Don't** use an all-grey palette, ultra-thin type, geometric mesh gradients, or all-white backgrounds. These are the tech-bro minimalism patterns PRODUCT.md explicitly rejects.
- **Don't** use masking tape, typewriter fonts, Riso-print aesthetics, or zine-collage layouts. These were tested as visual probes and confirmed out of scope for this project.
- **Don't** use border-left or border-right greater than 1px as a coloured stripe accent on any element.
- **Don't** use gradient text (background-clip: text). Use a solid ink colour; emphasis via weight or scale.
- **Don't** round photo corners. Photo containers have zero radius. Rounded photo corners add softness that contradicts the working, honest, surfed brand voice.
- **Don't** use italic type. The brand voice is direct.
