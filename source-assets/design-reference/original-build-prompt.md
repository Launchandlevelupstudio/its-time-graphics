# Prompt for Claude: build the new It's Time Graphics website

> Copy everything below the line into Claude. Attach the mockup image (`128721e5…3f18b6d4e9477a1925daed4877452413f847b94cdf146333f0f.jpg`) alongside it if you can.

---

You are a senior brand designer and front-end engineer. Build a complete, production-ready marketing website for **It's Time Graphics** ("IT'S TIME GRAPHICS / DESIGN + PRINT"). It's a Maryland vehicle-graphics and print shop focused on **police, municipal and commercial fleet graphics**, with signs, banners, decals and custom apparel as secondary services.

The owner made a concept mockup (attached). **Keep its structure and brand colors, but make the result clearly more premium:** the polish of a national fleet-graphics firm, with the warmth and responsiveness of a local owner-operator shop.

## 1. Hard rules (read first)
1. **Never invent facts.** Do not make up client names, agency names, logos, testimonials, review counts, star ratings, years in business, vehicle counts, certifications, awards, addresses, emails or statistics and present them as real.
   - Put every such slot behind an obvious placeholder: `[CLIENT NAME]`, `[AGENCY LOGO]`, `[X]+ vehicles`, `[YEAR]`, `[TESTIMONIAL – needs owner approval]`.
   - Collect all placeholders in a `CONTENT-TODO.md` at the project root, grouped by page.
2. **Mockup names are sample imagery only.** The mockup is labeled "HOMEPAGE CONCEPT • SAMPLE IMAGERY". The names visible on it (Anne Arundel County Police, Baltimore County Police, Montgomery County Fire and Rescue, WSSC Water, Altec, Maryland Paving, Chesapeake Electrical Solutions, Bayview Facility Services, Parkside Property Maintenance) **must not appear on the site as clients**. Replace them with neutral placeholders until the owner confirms which jobs ITG actually did and has permission to show.
3. **Images:** use clearly labeled placeholder images: solid or neutral blocks with a visible caption such as `PLACEHOLDER – police SUV, 3/4 front, 2400×1600`. No stock photos with watermarks, and no AI images that look like real agency vehicles with real seals or badges. Use `<img>` with `width`/`height`, and use `srcset` and AVIF/WebP-ready markup, so real photos can be dropped in later.
4. **Facts that are confirmed:**
   - Business name: It's Time Graphics.
   - Tagline: Design + Print.
   - Phone: **240-531-3996** (link it as `tel:+12405313996`).
   - Domain: ItsTimeGraphics.com.
   - Region: Maryland / DC / Virginia (DMV).
5. **Facts that must stay placeholders until the owner confirms:**
   - **Owner name:** the current site and listings disagree, so use `[OWNER NAME]`.
   - **Public email:** use `[EMAIL]` (one candidate is hello@itstimegraphics.com, still unconfirmed).
   - **Location:** Frederick, MD 21702 street address vs. service-area-only, and whether there is a second location. Use `[STREET ADDRESS]` / `[CITY, MD ZIP]`.
   - **Business hours, years in business, certifications, warranty terms.**
6. **Certifications:** don't claim "3M Certified", "3M Preferred" or "Avery Certified" installer status. Only the UASG body can grant "3M Certified Graphics Installation Company", and it isn't confirmed for this shop. You may say graphics are produced with premium cast films and reflective sheeting **from manufacturers such as 3M™ and Avery Dennison®**, followed by a placeholder `[confirm materials & any certifications]`.

## 2. Tech and deliverable
- **Default:** a static site of semantic HTML5, one modern CSS file using custom properties, and small vanilla JS modules. No frameworks, and no build step needed to view it. It should deploy as-is to any static host.
- **Allowed instead:** **Next.js (App Router, static export, TypeScript)** if you believe it's materially better, for example for the case-study template. If you choose it, state why in the README, keep it `output: 'export'`, and keep client JS minimal.
- **Deliver:**
  - The full file tree.
  - Every file's complete contents.
  - `README.md` covering local preview, deploy, how to add a case study, how to swap placeholders, and where to put analytics IDs.
  - `CONTENT-TODO.md`.
  - `sitemap.xml`, `robots.txt` (allow all, with a Sitemap line), a `404` page, favicon and app-icon set, and `site.webmanifest`.

## 3. Brand system (elevated from the mockup)
- **Palette:**
  - Base: white `#FFFFFF`, warm off-white `#F7F6F2` for alternate sections, ink `#0E0F11`, graphite `#1B1D21`.
  - Brand yellow: `#F5C518`. Use it sparingly, for CTAs, the accent rule under headings, and focus states.
  - Logo red: placeholder `#D22B2B`; note "match exact logo red" in TODO. Use it only in the logo and maybe one tiny accent.
  - Darker premium option: a `.theme-dark` / `data-theme="dark"` variant built on graphite `#121316` with a deep gold `#C9A227` or brass `#B8912E` accent and yellow kept only for primary CTAs. Implement both themes with CSS variables and show the dark option on the CTA band and footer by default. Document how to switch the whole site.
  - All text/background pairs must meet **WCAG 2.2 AA**. Dark text on yellow buttons, never white on yellow.
- **Typography:**
  - Headings: a confident grotesk or condensed display face, e.g. **"Archivo" / "Archivo Narrow"**, or **"Barlow Condensed"** for eyebrow labels and stats.
  - Body: **"Inter"** or **"Manrope"**.
  - Self-host fonts with `font-display: swap`, subset them, and preload only the heading weight above the fold.
  - Use a fluid type scale with `clamp()`, tight heading letter-spacing, and a 60–70ch body measure.
- **Layout:**
  - Generous whitespace on an 8-pt spacing scale, max content width about 1240px, and a 12-column grid.
  - Restrained 4–8px corner radii and hairline borders instead of heavy shadows.
  - Give each section a clear heading hierarchy, with a small uppercase eyebrow label over each H2.
- **Motion:**
  - Subtle only: fade/translate-in on scroll (IntersectionObserver), a gentle hero image parallax or Ken Burns of ≤4px, and hover lift on cards.
  - Respect `prefers-reduced-motion` (no motion at all).
  - No autoplay carousels.
  - An optional muted hero video slot (`<video>` with poster) is allowed but must be lazy and skippable on mobile and data-saver.
- **Iconography:** one consistent line-icon set as inline SVG.

## 4. Site map and page specs
Global header:
- Logo, plus nav: **Home, Fleet Graphics** (dropdown: Police & Municipal, Commercial Fleets, Upfitter Partnerships), **Other Services, Our Work, About, Contact**, plus a yellow **Request a Quote** button.
- Sticky and compact on scroll.
- On mobile: a full-screen accessible menu, plus a persistent **Call** and **Quote** bar at the bottom of small screens.

Global footer:
- Dark theme.
- Logo and tagline.
- Service links, service-area list, and NAP with placeholders except the phone.
- Social links: Instagram @itstimegraphics; Facebook and Yelp as placeholders to confirm.
- Privacy link, and `© <current year via JS or build>`.

Pages:
1. **Home** (follows the mockup order, elevated):
   - **Hero:** H1 "Your fleet. A stronger impression." Subhead "Vehicle graphics for police, municipalities & commercial fleets." CTAs **Request a Quote** (primary) and **View Our Work** (secondary). Wide placeholder image of a marked police SUV and a branded service van on a Baltimore-harbor-style waterfront, with no real agency marks. Under the hero, a slim **trust bar**: 5–6 grayscale logo placeholders labeled `[AGENCY/MUNICIPAL LOGO – with permission]`, plus `[materials: 3M / Avery – confirm]`.
   - **Three audience cards:** Police & Municipal, Commercial Fleets, Upfitter Partnerships. Each card has an image, a 1–2 line benefit and a link to its page.
   - **Our Work strip:** 4 featured case-study cards (fire apparatus, water-utility van, paving truck, electrical-contractor van), all with placeholder names, plus "View all work".
   - **Process, in 5 steps:** Consult & fleet survey → Design & proof (scale vehicle templates) → Approval & spec sheet → Print & laminate → Install & QA (on-site or in-shop, `[confirm]`).
   - **Materials & warranty band:** cast vinyl vs. calendered explained simply; reflective options; laminate; "manufacturer warranty up to `[X]` years, workmanship warranty `[X]`", flagged to confirm.
   - **Other Services row:** Signs & Banners, Decals, Custom Apparel.
   - **Testimonial block:** placeholder quotes only, marked "needs owner approval".
   - **CTA band:** "Let's get your next project moving." with ItsTimeGraphics.com and a tap-to-call 240-531-3996, on a subtle **Maryland-flag-inspired geometric motif**. Use abstracted quadrants and checker-and-cross shapes in brand tones (SVG, low contrast), not a literal flag.
2. **Fleet Graphics** (overview): fleet programs, consistency across mixed vehicle types, phased rollouts, re-marking and repairs, and a vehicle-type grid (sedan/SUV, pickup, cargo van, box truck, bucket/utility truck, trailer, specialty).
3. **Police & Municipal:**
   - Patrol, unmarked/ghost graphics, K-9, fire/EMS, public works, transit.
   - **Compliance note:** "Marking packages are produced to the agency's specification. Options include retroreflective sheeting (e.g., ASTM D4956 Type-rated films such as 3M™ Diamond Grade™ / Scotchlite™ — `[confirm products]`), chevrons for rear-facing applications per NFPA 1901 where applicable, and DOT-style conspicuity tape for trucks and trailers (49 CFR 571.108) where required. We'll spec to your RFP."
   - Keep the wording factual and hedged. No claim of "certified compliant".
   - RFP and procurement support section (spec sheets, material data sheets, references `[placeholder]`), plus an FAQ.
4. **Commercial Fleets:** contractors, utilities, delivery, service businesses. Includes an ROI explainer with no invented numbers, full/partial/spot graphics comparison, fleet consistency, and a vehicle-type list.
5. **Upfitter Partnerships:** for upfitters, dealers and fleet builders. Covers graphics-ready handoff, scheduling around the upfit, templates, volume programs, and a partner inquiry CTA.
6. **Other Services:** Signs & Banners, Decals & Labels, Custom Apparel, Graphic Design. Each is a section with an image placeholder, a short description, examples and a quote CTA.
7. **Our Work:** a filterable grid by Police & Municipal / Commercial / Upfitter / Signs & Other. Use accessible filter buttons that work without JS, showing all.
8. **Case-study template** (2 sample entries, both clearly placeholders):
   - Hero image.
   - Client `[placeholder]` and sector.
   - **Challenge / Solution / Result** (no invented metrics; use `[result]`).
   - An accessible **before/after slider** (keyboard-operable range input, with labels and still images as fallback).
   - **Spec table:** vehicles & count, film/laminate, reflective type, coverage (full/partial/spot), install location, turnaround.
   - Gallery with lightbox, related projects, and a CTA.
   - Make adding a new case study a matter of copying one file or one data entry.
9. **About:** owner story with `[OWNER NAME]` and `[YEARS]` placeholders, the shop, values, service area, and materials. A placeholder photo slot for the owner and the shop.
10. **Contact / Request a Quote:**
    - **Fleet quote form** with these fields:
      - Name, organization, email, phone (`type="tel"`, `autocomplete`).
      - Preferred contact method.
      - Project type (Police/Municipal, Commercial Fleet, Upfitter, Signs/Banners, Decals, Apparel, Other).
      - **Fleet size** (1, 2–5, 6–20, 21–50, 50+).
      - **Vehicle types** (multi-select checkboxes plus year/make/model text).
      - Coverage (full/partial/spot/lettering/reflective package).
      - **Artwork upload** (multiple files; accept .ai, .eps, .pdf, .svg, .png, .jpg; size note).
      - **Timeline / needed-by date**, budget range (optional), message, and a consent checkbox.
    - Progressive enhancement: works as a normal POST. Make the endpoint configurable (Formspree / Netlify Forms / Basin / custom), with a placeholder `FORM_ENDPOINT`.
    - Spam control: honeypot plus a time-trap, with optional Turnstile.
    - Inline accessible validation, and a success state that sets expectations: "We reply within `[X]` business hours."
    - Beside the form: tap-to-call, email `[EMAIL]`, hours `[HOURS]`, and service-area map placeholder (static image, no heavy embed).
11. **Privacy Policy:** a plain-language template covering form data, analytics, cookies and contact, with `[EFFECTIVE DATE]` and `[EMAIL]` placeholders. Mark it "have a professional review".
12. **404** page with links back to Home and Quote.

## 5. SEO and local search
- Give each page a unique `<title>` (≤60 characters) and meta description (≤155), one H1, a canonical URL on `https://www.itstimegraphics.com/` (configurable), Open Graph and Twitter tags, and a 1200×630 OG image placeholder.
- **JSON-LD:**
  - `LocalBusiness` (type `["LocalBusiness","ProfessionalService"]`) with name, telephone `+1-240-531-3996`, url, `areaServed` (Maryland, District of Columbia, Virginia, plus county placeholders), address, geo and hours **as placeholders that are easy to fill or omit**, and `sameAs` (Instagram confirmed, others placeholders).
  - `Service` entries per service page, `BreadcrumbList`, `FAQPage` on pages with FAQs, and `CreativeWork` on case studies.
  - No `aggregateRating` until real reviews exist.
- Clean URLs (`/fleet-graphics/police-municipal/`), descriptive image alt text patterns, and internal linking between service pages and case studies.
- Generate `sitemap.xml` and `robots.txt` with a Sitemap line. **Do not ship any `noindex`** except on the 404 and form-thank-you pages.

## 6. Performance, accessibility, quality bar
- **Targets:** Lighthouse mobile ≥95 Performance, 100 Accessibility, 100 Best Practices, 100 SEO; LCP < 2.0 s on 4G, CLS < 0.05, total homepage weight < 1 MB excluding the optional video.
- Responsive images (`srcset`/`sizes`), `loading="lazy"` below the fold, `fetchpriority="high"` on the hero image, and critical CSS inlined or kept small. Under 30 KB JS total on Home. No jQuery.
- **Mobile-first**, tested at 360, 390, 768, 1024, 1280 and 1440px. Tap targets ≥44px. No horizontal scroll.
- **Accessibility:**
  - Semantic landmarks (header, nav, main, footer), skip link, and visible focus rings in brand yellow on dark / ink on light.
  - Labeled form controls, `aria-live` for form status, keyboard-operable menus, slider and lightbox, and a sensible heading order.
  - Every color pair checked against AA.
- **Security/hygiene:** HTTPS-only links, no mixed content, `rel="noopener"` on external links, and suggested security headers in the README (HSTS, CSP starter, X-Content-Type-Options, Referrer-Policy).

## 7. Analytics and conversion tracking
- GA4 via `gtag` with a `GA_MEASUREMENT_ID` placeholder, loaded only after consent if you add a consent banner. Keep the banner lightweight and Maryland/US-appropriate; document it.
- A small `track(eventName, params)` helper. Fire these events:
  - `click_to_call` (all `tel:` links, with location label)
  - `click_email`
  - `quote_cta_click` (with button location)
  - `quote_form_start`
  - `quote_form_submit` (fleet_size, project_type; no PII)
  - `file_upload_added`
  - `case_study_view`
  - `work_filter_used`
  - `outbound_social_click`
- Document how to mark `quote_form_submit` and `click_to_call` as key events, and where to add the Google Search Console verification meta tag.

## 8. Copy voice
Confident, plain-spoken and specific. Write like an experienced fleet-graphics pro talking to a fleet manager, procurement officer or business owner. Short sentences and no hype words ("world-class", "best in the industry"). Write real, useful copy for services, process, materials and FAQs. Placeholder only for facts about the business.

## 9. Before you finish
- Self-review against every rule in section 1 and remove anything that reads as an invented fact.
- List in the README:
  - (a) every placeholder the owner must fill,
  - (b) open questions: owner name, public email, location/address and service-area model, hours, years in business, which past jobs and logos can be shown with permission, materials and certifications, warranty terms, form endpoint, GA4 ID,
  - (c) how to replace placeholder images.
