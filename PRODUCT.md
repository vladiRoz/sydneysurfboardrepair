# Product

## Register

brand

## Users

Sydney surfers of every level who just put a ding, crease, fin pop, or rail crunch in their board and need it fixed properly. Most arrive on a phone, often near the carpark, often the morning after the damage. They want three things in under thirty seconds: is this place legit, how much will it cost, and where do I drop the board off. A meaningful subset are 30+ year locals who've been doing this for decades and can smell a bad glass job from across the bay. Trust is earned through specifics, not marketing language. Visiting surfers (interstate, international) hit the same flow but lean harder on the address, photos of actual work, and turnaround time.

## Product Purpose

A marketing site that turns a phone-in-hand surfer into a phone call or a drop-off at 34b Kareena Road, Miranda. Success is measured by the percentage of visitors who either call the shop, screenshot the price list, or save the address. There is no online booking, no quote form, no account system. The site exists to communicate competence, show real repairs on real boards, list real prices, and make the next physical step obvious. Secondary purpose: replace a dated WordPress site whose visual language undersells the actual craft happening in the workshop.

## Brand Personality

Local craftsman, raw and real. Three words: working, honest, surfed. Voice is the bloke behind the counter who has been glassing boards since before you were born and is happy to tell you exactly what your board needs and exactly what it costs, no upsell. The brand sits at the intersection of trade workshop and surf culture. It is shaped by resin-stained benches, sanded fiberglass dust, taped repair tickets, and the actual ocean two suburbs east. Confidence comes from doing the work, not from talking about it. The site should feel like the shop, not like an agency's idea of the shop.

## Anti-references

The site explicitly should not look like any of the following:

- **Generic Aussie tradie WordPress template.** Blue gradient hero, drop-shadow cards, stock photo of a happy tradesman with thumbs up, contact form below the fold, "Why choose us?" with three identical icon-tiles. The current sydneysurfboardrepair.com.au sits dangerously close to this lane.
- **Tropical surf-resort cliche.** Palm-tree icons, hibiscus motifs, paradise postcard photography, Hawaiian-shirt color palette, hand-lettered script fonts, "Hang loose" tone of voice. This is a workshop in suburban Sydney, not a resort in Byron Bay.
- **Corporate SaaS landing page.** Hero metric ("5,000+ boards repaired"), gradient mesh background, identical feature cards in a 3-up grid, Inter set tight everywhere, "Trusted by" logo bar, hero CTA pair with a ghost button next to it.
- **Tech-bro / AI-startup minimalism.** All-grey palette, ultra-thin Helvetica, Vercel-style geometric gradients, oversized whitespace, monochrome workshop renders. Feels nothing like a place where resin gets on the floor.

## Design Principles

1. **Show the work, not the marketing.** Real workshop photography wins over any stock image, any illustration, any abstract graphic. The existing source photos (paint cans with drips, repaired rails, a Sydney wave shot from above) are the brand. Lean into them, do not crop them into politeness.
2. **Specific beats slogan.** "5 to 7 days for poly, 5 to 10 for epoxy" earns more trust than "Fast turnaround". Address, phone, and the actual price table belong above the fold, not gated behind a contact form. Prices are listed publicly because the shop has nothing to hide.
3. **Mobile is the only first.** The default reader is one-handed, outdoors, on patchy 4G. Layouts ship to phone first. Tap targets are large. Hero loads usable in under one second on 3G. Hover states must have a touch equivalent.
4. **Texture is the visual language.** Resin gloss, sanded matte, masking tape edges, ocean grain. The site uses photography and material color as primary expression. Decorative graphics, illustrations, and 3D renders are out. If a section needs visual energy, it gets a workshop photo, not a gradient.
5. **Treat the surfer like a peer, not a lead.** No countdown timers, no "Get a free quote!" buttons in a contrasting color, no popup capturing email. The only CTAs that exist are call the shop and get directions. Both are static facts presented honestly.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Mobile-first layouts, minimum 16px body type on phones, tap targets at least 44px. Color contrast checked at AA on every text-on-photo combination (gritty workshop photography invites contrast failures, so text-on-image needs a solid or scrim treatment, not transparent overlay alone). Functionality must not depend on hover (touch users have no hover). Respect `prefers-reduced-motion`: parallax, scroll-driven animation, and video autoplay all gate behind it. Phone number and address are real text, not images, and use `tel:` and `geo:` / maps links so the phone OS handles them natively.
