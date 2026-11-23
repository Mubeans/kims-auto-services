# Owner interview — Kim's Auto Services

**Internal working document. Not part of the website, not linked from any page, not for publication.**

The public site now states only what is already supported. Every question below is a detail the site deliberately leaves out. Each answer either corrects something or unlocks a section that is currently thin.

Business: Kim's Auto Services · 716 S Belt Line Rd, Irving, TX 75060 · (469) 565-8006

---

## A · Must have before the site goes live

| # | Question | Why it matters | Answer |
| --- | --- | --- | --- |
| A1 | Are the hours right — Mon–Fri 8:00–6:00, Sat 9:00–3:00, Sun closed? | Shown on two pages and drives the live "Open now" indicator | |
| A2 | Any holiday or seasonal hours? | The indicator will say "open" on a day you are shut | |
| A3 | Is (469) 565-8006 the number to publish? | Appears 12+ times across the site | |
| A4 | Is there a second or after-hours number? | A text line appears on your business card but is unreadable in the photo | |
| A5 | Should an email address appear publicly, and which one? | Currently `kinamkim37@gmail.com`, from the Facebook page | |
| A6 | Preferred way for customers to make contact — phone, email, form, booking tool? | Decides whether a form gets built at all | |
| A7 | If a form: where should it send? | Without a destination there is no form | |

---

## B · Services — the biggest gap

The services page currently names four things. Confirm which of the following the shop actually does, so each can be written up properly.

- [ ] Brakes — pads, rotors, lines, fluid
- [ ] Suspension and steering
- [ ] Cooling system and radiators
- [ ] Starting, charging, batteries
- [ ] Transmission work
- [ ] Engine repair
- [ ] Check-engine / warning-light diagnosis
- [ ] Texas state inspection
- [ ] Pre-purchase inspection
- [ ] Air conditioning service
- [ ] Tyres, balancing, alignment
- [ ] Exhaust and emissions

**B1 — Anything on that list you do *not* take on?**

**B2 — Which makes and model years do you work on? Anything you turn away?**

**B3 — Is there a job the shop is especially known for, or does more of than anything else?**

---

## C · Trust — what the site currently cannot say

| # | Question | Unlocks |
| --- | --- | --- |
| C1 | How long has the shop been open? | A real "since ____" line in the hero |
| C2 | Who runs it, and what is the story? | An about section — there is none today |
| C3 | Staff names, roles, training, certifications? | A team section |
| C4 | Is there a warranty on parts or labour, and on what terms? | A trust block customers look for |
| C5 | Is "veteran-owned" wording you want stated plainly? | Currently phrased as a Google attribute |
| C6 | Any rate or fee you are happy to publish? | A pricing line, even one, raises conversion |
| C7 | Should the site show a star rating, and from which platform? | Ratings differ by platform and drift |

---

## D · Visit logistics

- [ ] **D1** Walk-in, appointment, or both?
- [ ] **D2** Where do customers park?
- [ ] **D3** Where is the service entrance?
- [ ] **D4** Typical turnaround on a routine job?
- [ ] **D5** Loaner, shuttle, or after-hours drop-off?
- [ ] **D6** Is there a waiting area?
- [ ] **D7** Cash and cheque accepted, alongside cards?

---

## E · Assets to collect

- [ ] **E1** Photographs — the building, the bays, the team, finished work. The site currently uses drawn artwork because no photographs were available.
- [ ] **E2** A logo, to replace the `K` monogram and `assets/img/favicon.svg`.
- [ ] **E3** Any existing print material — business card, signage, flyers — to match the site to.
- [ ] **E4** Does the shop own a domain already, or need one registered?

---

## Where answers get applied

| Answer | File |
| --- | --- |
| Hours | `SCHEDULE` in `assets/js/site.js` **and** the `<table>` in `index.html` + `visit.html` |
| Phone / email | Search-and-replace across all three pages |
| Services | `services.html` §01 and the four cards on `index.html` |
| History, staff, warranty | New sections — none exist yet |
| Photographs | Hero, the locator panel on `index.html`, a new gallery on `services.html` |
| Form | `visit.html` §01 (see README §7) |
