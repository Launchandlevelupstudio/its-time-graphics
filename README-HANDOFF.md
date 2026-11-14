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
our-work/index.html                         Fleet showcases by department, then the other-work grid
about/index.html
contact/index.html                          Quote form (fields change by project type)
404.html  robots.txt  sitemap.xml
assets/css/site.css   assets/js/site.js     shared by every page
assets/js/fleet.js                          showcase + Our Work photo list and lightbox
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

## Update 2026-10-18 (later)
- **Our Work:** the "[Owner: confirm each job and client permission]" chip in the page intro was removed at the owner's request. (Photo permissions in item 4 still apply.)
- **Contact:** the service-area map placeholder is replaced by a "Service area" section with a static map (`assets/img/its-time-graphics-service-area-map-frederick-md.webp`, 1600×1000, plus a square `-mobile.webp` for ≤700px). It shows a ~110-mile radius (approx. 2 hours) around Frederick, MD, drawn from Natural Earth data (public domain); generator script kept outside the site at /workspace/itg-map/make2.py.
- **About (mobile):** fixed the gap above "Service area" on ≤900px. `section.s{padding:88px 0}` outranked the `.shop-s`/`.sa-m` overrides; the overrides now use `section.s.shop-s` / `section.s.sa-m` (48px gap). Desktop unchanged.
- **Footer social:** Instagram and Facebook on one row, Google 5-star reviews centered below, on every screen size (all pages).


## Update 2026-10-18 (map tweak)

- Contact: per Daniel, the service-area map moved back into the original placeholder spot under "Talk to us", smaller (max 360px, square). The legend box, caption and on-image credit are gone. File: `assets/img/its-time-graphics-service-area-map-frederick-md-v2.webp` (Natural Earth, public domain). The old full-width Service area section and the two earlier map files were removed.

## Update 2026-11-13 (real work photos)

- Homepage hero is the kitchen renovation Ford Transit, full side view. The BubbleGum limousine stays in the commercial and Our Work galleries: its rear bumper sits on the edge of the frame and more than half the photo is empty asphalt. The hero is a side-by-side layout (copy, then the whole photo) so the vehicle is not cover-cropped at desktop or phone width.
- Fleet programs now lead with Commercial Fleets, then Law Enforcement & Security, Municipal (its own page), and Upfitter Partnerships. `/fleet-graphics/police-municipal/` redirects to `/fleet-graphics/law-enforcement-security/`.
- The Atlas International Security walkaround is off the homepage and the law-enforcement page for now. The video file, poster still, and the video CSS and JS are removed.
- Galleries use each photo’s own aspect ratio and `object-fit: contain`, so the layout does not crop vehicles, tires, signs or the portrait.
- Left the site logo as-is. `2026 LOGO VERSION.pdf` is a different stopwatch wordmark, not an update of the current “IT’S TIME GRAPHICS / DESIGN + PRINT” logo. `DPPSolution.pdf` is a “Your Design + Print & Installation Solution” lockup, not a logo.
- Still open from earlier: quote form endpoint, unverified materials/certifications on the law enforcement page, warranty terms, photo permissions (plates and phone numbers are visible on several vehicles), and analytics.

## Update 2026-11-14 (fleet showcases)

Our Work is no longer a filterable mix of every photo. The portfolio is two layers, both driven by `assets/js/fleet.js` so the pages cannot drift apart:

1. **Fleet showcases** on `/our-work/` (Commercial fleet, Law enforcement & security, Municipal). The same cards are mounted on `/fleet-graphics/commercial-fleets/`, `/fleet-graphics/law-enforcement-security/`, and `/fleet-graphics/municipal/`.
2. **More work** — an Instagram-style 3-column square grid of every other photo. Captions show in the lightbox (and on hover on a fine pointer). Nothing in a showcase is repeated in this grid.

A department card shows one lead photo (the file’s own aspect ratio, so the vehicle is not cover-cropped), the department name, a one-line description of what the photos actually show, and the photo count. The card opens one lightbox: full image (`object-fit: contain`), captions, previous/next, swipe, Close, Esc, and a tab loop. Hero files (`p24-hero*`), the logo, the Open Graph image, and the service-area map are not in either gallery.

### How to add ACI photos

ACI is the only commercial-fleet card. There are no ACI photos in the repo, so the card is a text placeholder (“ACI fleet showcase coming soon.”). Do not invent a photo or a claim.

1. Export the real photos to WebP in `assets/img/`. Name them `aci-something.webp`.
2. Open `assets/js/fleet.js`. Add a `pic()` for that file to `CATALOG`, then list the filename in `ACI.photos = take([...])`. Our Work is whatever is left in the catalog after every showcase filename is removed, so the new photo cannot also show up in the grid.
3. Set `ACI.pending` to `false` and replace `ACI.line` with a short factual line about what those photos show. No vehicle counts, dates, or contract language.
4. Run `node assets/js/check-gallery.js`. It fails if a showcase file is repeated in the grid, if an excluded near-duplicate is used, or if the old static grid (`id="wg"`) is back in the HTML. The placeholder becomes a normal department card on Our Work and on Commercial Fleets. Wide or tall photos in the Our Work grid that would cut a vehicle, sign, or face use `fit:"contain"` inside the square. Set `pos` (an `object-position` value) only when `fit` stays `"cover"`.

Near-duplicates left out of both galleries, on purpose: `berwyn-heights-police-mach-e-suv-side-card-4x3.webp` (crop of the Mach-E side wrap), `p2-police-badge-closeup.webp` (same Mount Rainier badge), `p4-special-police-suv.webp` (same Children’s National door close-up already in the collage). The Mount Rainier parking-enforcement Bolt is in More work, not under Mount Rainier Police — the door says Parking Enforcement.
