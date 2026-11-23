# Kim's Auto Services — Irving, TX

A static, four-page website for **Kim's Auto Services**, 716 S Belt Line Rd, Irving, TX 75060, (469) 565-8006.

English only. No build step, no framework, no backend, no dependencies — three hand-written HTML pages, one stylesheet, one script, one SVG favicon.

**This is a draft prepared for the owner to review. It is not published, not operated by the business, and carries no endorsement from it.** Every page carries a short notice to that effect in its footer.

The site states only what is supported. It does not flag gaps, caveats or unconfirmed details to the visitor — those live in `OWNER-QUESTIONS.md`, which is internal and is linked from nowhere.

---

## 1. Preview it locally

From the parent folder (`WEBSITES-CLD`):

```bash
py -m http.server 8102 --directory kims-auto-services
```

Then open <http://localhost:8102>. A `kims-auto-services` entry is also registered in `../.claude/launch.json`, so the preview pane can start the same server by name.

Opening `index.html` straight from the filesystem works too, but a local server is closer to production behaviour.

---

## 2. Files

```
kims-auto-services/
├─ index.html           Home — hero, the shop's own words, services, hours, location
├─ services.html        What the shop does · what to ask on the call
├─ visit.html           Phone, email, hours, payments, amenities, call prep
├─ README.md            This file
├─ OWNER-QUESTIONS.md   Owner interview checklist — internal, not part of the site
└─ assets/
   ├─ css/styles.css     Whole design system: tokens, components, responsive, print
   ├─ js/site.js         Mobile drawer, live open/closed status, today highlight, scroll reveal
   └─ img/favicon.svg    KAS monogram
```

There are no image files. See §6.

---

## 3. Design system

| Token | Value | Notes |
| --- | --- | --- |
| Ink | `#0e1726` | Deep navy-black — dark panels, body ink (15.9:1 on paper) |
| Paper | `#f3f4f1` | Default background |
| Signal | `#c6f24e` | High-visibility lime — **only ever on ink** (13.4:1); 1.06:1 on paper, so never there |
| Signal deep | `#36520a` | The signal's counterpart for use on paper (7.9:1) |
| Muted | `#52627a` | Secondary text on paper (5.6:1) |
| Clay | `#8f3a1f` | "Owner must confirm" markers (6.9:1) |
| Display | Barlow Condensed | Headings, uppercase, tight leading |
| Body | Barlow | 17px / 1.62 |
| Technical | IBM Plex Mono | Section indices, source lines, hours, buttons |

Recurring motifs: a diagonal hazard-stripe rule under the header and footer, `// 01` mono section indices, a `Source — …` line closing every card that states a fact, and a dashed clay "Owner to confirm" tag. Motion is one short fade-and-rise on scroll, fully disabled under `prefers-reduced-motion`.

The `ui-ux-pro-max` design-system generator proposed a generic corporate blue (`#1E40AF`) with EB Garamond/Lato for this brief — the same output it gave for the sibling `japanese-auto-repair` project. It was rejected again as off-brief; only its structural pattern (hero → proof → clear CTA path) and its pre-delivery accessibility checklist were applied. The Barlow Condensed / Barlow pairing came from the skill's `--domain typography` search ("Sports/Fitness", the closest industrial-condensed match).

---

## 4. Live "open now / closed" status

`site.js` holds the published hours as minute ranges and evaluates them against **America/Chicago** time (via `Intl.DateTimeFormat`, so a visitor in another time zone still sees the shop's status, falling back to the visitor's clock if IANA data is missing). It renders "Open now · Closes 6:00 PM", "Closed · Opens 8:00 AM" or "Closed · Opens Mon 8:00 AM", highlights today's row in both hours tables, and refreshes once a minute.

If the hours change, edit the `SCHEDULE` array in `assets/js/site.js` **and** the `<table>` rows in `index.html` and `visit.html`.

---

## 5. No-JavaScript behaviour

Every page is complete without JavaScript. `site.js` only enhances.

* All copy is in the HTML — nothing is injected at runtime.
* `<html class="no-js">` is swapped to `js` by a one-line inline script; the stylesheet keys its fallbacks off that class.
* Without JS: the live status pill is hidden (`.no-js .pill`), a short mono note appears in its place pointing at the static hours table, the mobile drawer is replaced by a plain wrapped nav list, and all `.reveal` content renders immediately at full opacity.
* No horizontal scroll, no hidden content, no dead controls in either state.

---

## 6. Why there are no photographs

No photographs of this shop were available. Stock pictures of someone else's workshop would read as pictures of this one, so the site is built from type, colour and drawn artwork instead.

The two SVG illustrations on the home page — a dial and a crossroads — are abstract and depict nothing real about the premises. Both are marked `role="img"` with descriptive `aria-label`s.

When the owner supplies real photographs, the natural slots are: the hero (beside or behind the headline), the `// 04 Where it is` locator panel, and a new gallery section on `services.html`.

---

## 7. Where to connect a backend later

There is deliberately **no contact form**. A form posting nowhere is worse than no form. The contact flow is phone-first, with the publicly listed email second.

When the owner confirms a destination:

1. **Simplest** — keep `mailto:kinamkim37@gmail.com`, or swap it for a business address.
2. **A real form** — replace the "There is no contact form on this site" note in `visit.html` §01. Point `action` at a form service (Formspree, Basin, Web3Forms) or your own endpoint. Label every field visibly, keep inputs at least 44px tall, and show errors next to the field.
3. **Online booking** — if the shop adopts a scheduling tool, the "no booking system" wording in the `visit.html` lede and in `index.html` §03 becomes wrong and must be rewritten.

Whatever is added, tick the matching line in `OWNER-QUESTIONS.md`.

---

## 8. Facts and sources

Everything on the site traces to a public listing. This table is internal — the site itself no longer carries a sources page.

| Fact | As published | Source |
| --- | --- | --- |
| Name | Kim's Auto Services | Google Business Profile · Yelp · Facebook |
| Category | Auto repair shop | Google; "Auto Repair" on Yelp; "Automotive Repair Shop" on Facebook |
| Address | 716 S Belt Line Rd, Irving, TX 75060 | Consistent across every listing checked |
| Plus code | R244+HQ Irving, Texas | Google Business Profile |
| Phone | (469) 565-8006 | Google · Yelp · Facebook · the prospect row |
| Email | kinamkim37@gmail.com | Published by the business on its own Facebook page |
| Hours | Mon–Fri 8:00 AM–6:00 PM · Sat 9:00 AM–3:00 PM · Sun closed | Yelp · Birdeye · directory listings, in agreement |
| Ownership attribute | "Identifies as veteran-owned" | Google Business Profile, "From the business" |
| Offerings | Oil change | Google Business Profile, "Offerings" |
| Services offered | Routine automotive maintenance | Yelp listing |
| Service options | Onsite services | Google Business Profile, "Service options" |
| Amenities | Restroom · gender-neutral restroom · mechanic | Google Business Profile, "Amenities" |
| Payments | Credit cards · debit cards · NFC mobile payments | Google Business Profile, "Payments" |
| Self-description | "Your very own One-Stop-Shop for all your Automotive repair/Maintenance needs!" | The intro on the shop's own Facebook page, quoted verbatim |

Checked November 2026.

### Not shown on the site

No prices, labour rates or diagnostic fees. No certifications, accreditations or warranty terms. No years in business, staff names or training. No walk-in policy, turnaround, parking or drop-off detail. No makes or model years serviced. No star ratings, review counts, testimonials or photographs. None of it is published for this business.

"Identifies as veteran-owned" is reproduced in Google's exact wording rather than shortened to a flat claim, because the attribute records what the owner states, not something a third party certified.

### Found but withheld

* **Ratings** — the shop is rated on several platforms and the figures disagree and drift. A number frozen into a page would be wrong within weeks.
* **A second phone number** appears on the shop's business-card photo as an after-hours text line, but the image was too low-resolution to read the digits with confidence. It is not on the site. Confirm it with the owner (§9, item 2).

---

## 9. Owner-confirmation checklist

Nothing below is on the site, because nothing below is published. Each answer either corrects something or unlocks a section that is deliberately thin.

The full interview version lives in **`OWNER-QUESTIONS.md`**, which is internal and is not linked from any page.

- [ ] **Hours** — are Mon–Fri 8–6, Sat 9–3, Sun closed correct, including holidays and anything seasonal?
- [ ] **Phone** — is (469) 565-8006 the number to publish? Is there a second/after-hours number, and what are its digits?
- [ ] **Email** — should `kinamkim37@gmail.com` appear on a public website, or is there a business address to use instead?
- [ ] **Services** — which does the shop actually offer? (Brakes, diagnostics, A/C, tyres, alignment, state inspection, transmission and engine work are not named on the site at all.)
- [ ] **Makes and model years** — including anything the shop does *not* take on.
- [ ] **Business history** — how long has it been open, who runs it, and is there a story worth telling?
- [ ] **Staff** — names, roles, training or certifications worth naming.
- [ ] **Warranty** — is there one on parts or labour, and on what terms?
- [ ] **Prices** — any rate, fee or service the shop is willing to publish a figure for.
- [ ] **Visit logistics** — walk-in or appointment? Where to park, where the service entrance is, typical turnaround, loaner/shuttle/after-hours drop-off.
- [ ] **Preferred contact method** — phone only, email, a form, or a booking tool.
- [ ] **Form destination** — if a form is wanted, which inbox or endpoint does it post to? (See §7. Until this is answered there is no form.)
- [ ] **Reviews** — should the site show a rating, and pulled live from which platform?
- [ ] **Photographs** — of the shop, the bays and the team, to replace the drawn artwork (§6).
- [ ] **Logo** — to replace the `K` monogram and `assets/img/favicon.svg`.
- [ ] **Ownership** — is "veteran-owned" the wording the owner wants, and may the site state it plainly rather than as a Google attribute?

---

## 10. Checks that were run

A static checker (`check_site.py`, run from the session scratchpad) was run across all three pages. See the session output for the result.

It verified: HTML tag nesting and closure; that every local `src`/`href` resolves to a file that exists; that no page links to the removed record page; that every page carries the `tel:+14695658006` link, the Google Maps link, the `#main` landmark and the skip link; that no stray `tel:` targets exist; that `styles.css` braces balance and every `var(--x)` used is defined; and that no `data-i18n*` attributes remain now that the site is English-only.

Browser verification in the preview pane is recorded in the session transcript.

No linter or test runner exists for this project — there is no Node toolchain on this machine — so these are the available checks.

---

## 11. Browser support

Modern evergreen browsers. `IntersectionObserver`, `Intl.DateTimeFormat` with IANA time zones, CSS custom properties, `clamp()` and `dvh` units are used, each with a fallback: without `IntersectionObserver` all content renders immediately; without time-zone data the status falls back to the visitor's clock; without JavaScript at all, see §5.
