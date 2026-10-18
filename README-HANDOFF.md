# It's Time Graphics: website build (multi-page)

Static marketing site for **It's Time Graphics (ITG)**, a Maryland shop doing vehicle graphics (police, municipal, commercial fleets, upfitters) plus signs, banners, decals, apparel and design. Domain: **ItsTimeGraphics.com** (with an "s"). Phone shown: 240-531-3996 (confirm).

**Status: design build with real separate pages, not launch-ready.** Read "Known problems" before shipping.

## Structure (one file per menu area)
```
index.html                                  Home
fleet-graphics/index.html                   Fleet Graphics overview
fleet-graphics/police-municipal/index.html
fleet-graphics/commercial-fleets/index.html
fleet-graphics/upfitter-partnerships/index.html
other-services/index.html                   Signs & banners, decals, apparel, design
our-work/index.html                         Filterable project grid
about/index.html
contact/index.html                          Quote form (fields change by project type)
404.html  robots.txt  sitemap.xml
assets/css/site.css   assets/js/site.js     shared by every page
assets/img/                                 web-sized WebP photos + logo (about 1.9 MB total)
source-assets/                              full-size photos, logo file, design mockups, original prompt
screenshots/                                reference renders
```
No build step. Header, menu and footer are repeated in each HTML file, so change them in all pages (or move to a template/partial system such as Eleventy, Astro, or your CMS). Links use folder style (`/our-work/`), so serve over HTTP (`python3 -m http.server`); opening files directly by double-click will not follow folder links.

## Design decisions (keep these)
- Dark header/hero/footer (#111111), white and off-white content sections, yellow (#F5C518) buttons with dark text.
- Maryland-flag theme: gold #E5B53A, red #C8102E, black, white. The flag is one SVG `<symbol id="mdflag">` defined at the top of each page and reused: faint behind the header menu, bold on desktop and soft on phone in the bottom call-to-action band.
- Header is deliberately short (about 53 px desktop, 43 px phone). Owner asked twice for smaller. Do not make it taller.
- Use the real logo file (`assets/img/logo.webp`, source in `source-assets/logo`), never a recreation.
- Hero: harbor skyline with a police SUV, fading to dark on the left. Headline "Your fleet. A stronger impression."
- The "Trusted by" logo bar was removed for the presentation (add back once client logos are approved).

## Tested
All 10 pages load over HTTP; every internal link returns 200; all images load; the right menu item highlights on each page; mobile menu opens; Our Work filter works; quote form shows the right fields for each project type. Not tested: real devices, screen readers, Lighthouse, cross-browser.

## Known problems (priority order)
1. **Quote form does nothing.** `action="FORM_ENDPOINT"` in `contact/index.html`. Connect a real endpoint (owner said he will). Then delete the "Form not connected yet" guard in `assets/js/site.js`. Add server-side spam checks, file size/type limits and a thank-you state.
2. **Unverified claims.** The Police page cites ASTM D4956, NFPA 1901 and 49 CFR 571.108 and names 3M Diamond Grade. They came from the original prompt; the owner has not confirmed them. Do not publish until he does.
3. **Placeholders (partly resolved 2026-10-18).** Now filled from the owner: owner Daniel Whyte, 5+ years in business, 20+ years of experience; Frederick, MD (no street address published); Hours: Monday–Friday, 10 AM–6 PM; "On-site or in-shop" installs; reply time "within 24 business hours"; email removed sitewide (phone only); county list removed; Our Work project names/client lines removed (category labels only); footer social logos for Facebook, Google reviews (share.google link) and Instagram (@itstimegraphics, verified via the old site's social icon link). JSON-LD on Home and 404 now has addressLocality/addressRegion, openingHours and sameAs. **Still open:** warranty terms, materials/certifications, turnaround, police "References" placeholder, the Our Work "confirm each job and client permission" chip, contact-page service-area map placeholder.
4. **Photo permissions and privacy.** New Berwyn Heights PD photos (Mach-E SUV, Charger) show the agency name and a police plate; confirm the department is fine being shown. Photos show client phone numbers, emails, a license plate, agency names, a children's hospital and cartoon characters. Get written permission or blur before launch.
5. **Hero image** is a crop of an AI-generated mockup (about 560 px wide, enlarged 2x, soft) and shows a real agency name ("Anne Arundel County"). Replace with a real, high-resolution ITG vehicle photo.
6. **Other Services photos:** decals, apparel and design cards are still placeholders (no photos supplied). Contact map is still a placeholder. About page now uses the Berwyn Heights police photos (no owner/shop photo yet).
7. **Alt text** is descriptive but generic; refine per photo once projects are confirmed.
8. **Accessibility gaps:** mobile menu has no focus trap and does not lock page scroll; check the Fleet Graphics dropdown on touch devices; re-test contrast after any palette change.
9. **Analytics:** events are pushed to `window.dataLayer` (`click_to_call`, `quote_cta_click`, `quote_form_start`, `quote_form_submit`, `quote_project_type`, `file_upload_added`, `work_filter_used`, `outbound_social_click`) but no analytics tag or consent notice is installed.
10. **SEO to finish:** add address and hours to the JSON-LD, Open Graph images, case-study pages, a privacy page. `sitemap.xml` and `robots.txt` use https://www.itstimegraphics.com/.
11. **Cosmetic:** the header flag shows only a sliver on wide desktop; home card links under photos do not align and repeat card titles.
12. Fonts load from Google Fonts (Archivo, Inter) with system fallbacks; consider self-hosting.
13. `404.html` uses root-relative paths so it works at any depth.

## Facts still needed from the client
Owner name and short bio, years in business · full address, hours, general email, confirmed phone · service-area counties · on-site install, in-shop, or both · materials and brands (3M / Avery), certifications, warranty terms (manufacturer and workmanship), typical turnaround, quote reply time · Instagram, Facebook, Yelp, Google Business links · approved testimonials with names · approved client logos for a "Trusted by" row · logo vector files (.ai/.eps/.svg) and exact brand colors · hero photo (wide, clean, high-res), shop and team photos, photos of signs, decals and apparel · where quote requests go and who handles them · domain, Google Analytics, Search Console and Google Business access · what from the old site (itstimegraphics.com, WordPress) should redirect where. The old site has a `noindex` tag; make sure the new one does not.

## Rules for whoever continues
- Do not invent business facts, specs, warranties, reviews or client names. Leave visible placeholders.
- Keep the look: dark header/hero/footer, yellow buttons, Maryland-flag accents, short header.
- Check every change on desktop and a real phone.
