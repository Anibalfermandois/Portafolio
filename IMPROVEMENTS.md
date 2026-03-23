# Portfolio Improvement Suggestions

## Priority Order

If picking the **top 3 highest-impact changes**: typography (#1), entrance animations (#3), and hero visual interest (#4). These three alone would transform the feel from "template" to "crafted." [DONE]

---

## 1. Typography — Replace `font-sans` [DONE]

Using Tailwind's default `font-sans` (system UI fonts) is the single biggest "generic" signal. Consider a distinctive pairing:

- **Headings:** Something with character — e.g. _Outfit_, _Satoshi_, _Cabinet Grotesk_, or _Clash Display_
- **Body:** A readable complement — e.g. _General Sans_, _Switzer_, or _Geist_

Load via [Fontsource](https://fontsource.org/) (`vp add @fontsource-variable/outfit`) and define in the Tailwind theme.

## 2. Color — The slate+blue palette is too safe

Every other dev portfolio uses `slate-900` + `blue-600`. Consider:

- A **warm neutral** base (stone, zinc) instead of slate
- A **distinctive accent** — amber, emerald, rose, or even a custom brand color
- Use CSS variables in `global.css` so it's easy to tweak later

## 3. Motion — No animations at all [DONE]

The page loads as a static block. Adding entrance animations would make a big difference:

- **Staggered fade-in** on Hero elements (name, title, buttons appearing sequentially)
- **Scroll-triggered reveals** on Experience and Projects cards (CSS `@keyframes` + `IntersectionObserver` or Astro's `<script>`)
- **Subtle hover micro-interactions** beyond color changes — e.g. cards lifting with shadow shift

## 4. Hero section lacks visual interest [DONE]

Currently it's text + image + buttons on a white background. Ideas:

- A **gradient or patterned background** (there's a `background.svg` in assets — is it used?)
- An **asymmetric layout** instead of centered stack
- A **typing effect** or animated role title
- Show a code snippet or terminal aesthetic that reflects the dev identity

## 5. Technologies section is underwhelming

The flat list of icons at the bottom feels like an afterthought. Consider:

- Moving it into or near the Hero as part of the identity
- Using a **marquee/scroll animation** for the tech icons
- Grouping by category with subtle visual differentiation
- Or removing it entirely — the tech badges on project cards already communicate the stack

## 6. Projects need more visual hierarchy

All 4 project cards look identical. Consider:

- **Feature one project** larger (2-column span) if it's the best work
- Add **live preview screenshots** more prominently (images already exist)
- Include a short "what I learned" or impact metric
- The `IframePreview` component is only used inside experience MDX — consider using it for project demos too

## 7. Footer is minimal

The "Conectémonos" footer works but could be elevated:

- Add a **GitHub link** alongside LinkedIn
- Consider a brief **"Currently interested in..."** line to signal target roles
- The `Disponible para nuevas oportunidades` line could be more specific

## 8. SEO & Meta

In `Layout.astro`, the meta description is generic. Add:

- Open Graph tags (`og:title`, `og:description`, `og:image`) for link previews
- A proper meta description with name and specialty
- Structured data (JSON-LD) for the profile

## 9. Missing dark mode

A dark mode toggle (or respecting `prefers-color-scheme`) would show polish and attention to detail.

## 10. Typo in page title [DONE]

Line 13 of `index.astro`: `"Porfolio"` → should be `"Portafolio"` (or `"Portfolio"` for English).
