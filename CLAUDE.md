# shameer.sn: personal website

Personal website of Shameer SN, Senior Technology Architect, Kerala, India.
It shows his services, case studies, experience and skills, and has a contact form.
It is a static site, built with Astro and deployed on Netlify from this repo.
This is a fresh build. Do not reuse the old site's code or template ("Meridian"); remove it in the rebuild branch.

## Source of truth

- `design-handoff/design/reference-html/` has the approved pages as plain HTML.
  Match their layout, spacing, colours and copy.
  Pages: index, services, work (list), three case studies (work-*.html), about.
  Every page uses the same header and footer as index.html.
- `design-handoff/design/screenshots/` shows how each page must look:
  desktop at 1440 px wide for every page, and Home on a phone at 390 px wide.
- `design-handoff/brand/BRAND.md` and `brand/tokens.json` are the brand rules.
- `design-handoff/design/source-dc/` is the original design-tool format. Use it only if something is unclear.

## Stack

- Astro (latest stable), static output (`output: 'static'`), built to `dist/`.
- Plain CSS with CSS variables from the brand tokens. No Tailwind, no UI library.
- Fonts self-hosted with `@fontsource/schibsted-grotesk` (400, 500, 600, 700) and `@fontsource/jetbrains-mono` (500).
- JavaScript only where needed: the interactive system diagram, the phone menu, and fade-in on scroll.
  Use small vanilla `<script>` blocks in Astro components. No React.
- `@astrojs/sitemap` for the sitemap.
- Hosting: Netlify. Use `design-handoff/netlify.toml` as the repo's `netlify.toml` (build `npm run build`, publish `dist`, Node 22).
- Contact form: Netlify Forms (`data-netlify="true"`, `name="contact"`, honeypot field). No backend code.

## Structure

```
src/
  layouts/Base.astro        <html>, <head> (SEO, OG, fonts), Header, Footer
  components/               Header, Footer, Button, ServiceCard, CaseCard,
                            Timeline, SkillRows, SystemDiagram, Steps, CTA
  content/work/*.md         one Markdown file per case study:
                            aws-healthcare-platform, platform-modernisation, notification-system
  pages/index.astro
  pages/services.astro
  pages/work/index.astro    list of case studies (layout from work.html)
  pages/work/[slug].astro   one case study page (layout from work-*.html)
  pages/about.astro         about + contact form
  pages/404.astro
  styles/tokens.css         CSS variables from brand/tokens.json
  styles/global.css
public/
  logos, favicon, photo, og-image.png, robots.txt
```

## Rules for content (important)

- Use the copy from the reference HTML word for word. Do not rewrite it, do not "improve" it, do not add marketing lines.
- Never invent numbers, clients, quotes, reviews or results.
- No company or client names anywhere. No prices. No testimonials.
- Short, plain sentences. If new text is truly needed (alt text, meta descriptions), write it in the same plain voice and list it in the PR description for Shameer to approve.

## Rules for design

- Only use colours, fonts, spacing and radius from `tokens.css`. No new colours.
- Lines, not shadows. No gradients, no glassmorphism, no emoji.
- Container 1200 px max, 24 px side padding, 96 px between sections (64 px on phones).
- Buttons and cards: 8 px radius. Tags: 4 px. Pill only for badges.

## Interaction and motion

- System diagram on Home: 7 buttons (Apps, Edge, Services, Data, Events, AI, Operations).
  Clicking one gives that layer's boxes a laterite stroke (#A8421D, width 3) and changes the caption.
  The texts are in a comment at the top of `reference-html/index.html`. Default: AI.
  Buttons use `aria-pressed`. Must work with the keyboard.
- Hero text fades up once on load. Cards lift 3 px on hover.
- The laterite line from Services to the AI layer flows 5 times, then stops.
- Sections fade in once on scroll (IntersectionObserver).
- Only animate `transform` and `opacity`, under 600 ms.
- Turn all motion off under `prefers-reduced-motion: reduce`.
- No page loaders, custom cursors, parallax, 3D or scroll-jacking.

## Quality bar (definition of done)

- Every page matches its screenshot at 1440 px, and works at 390 px (menu collapses, grids stack).
- Full text is visible with JavaScript turned off.
- Lighthouse on mobile: 90+ for Performance, Accessibility, Best Practices and SEO.
- Colour contrast 4.5:1 for text. Every input has a label. Visible focus rings.
- Unique `<title>` and meta description per page. Open Graph image. `sitemap.xml`, `robots.txt`.
- JSON-LD `Person` on Home: name, job title "Senior Technology Architect", url, sameAs (LinkedIn, GitHub, Upwork), and the AWS Certified AI Practitioner credential.
- `npm run build` passes with no warnings.

## Workflow

- Work on a feature branch. Open a pull request. Never push straight to `main`.
- Netlify builds a deploy preview for each pull request. Share that link in the PR.
- Do not change Netlify settings beyond `netlify.toml`, and explain any change in the PR.
- After each page, take a Playwright screenshot at 1440 and 390 px and compare it with the reference screenshot.
- Ask before adding any new dependency that is not listed above.
