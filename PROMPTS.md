# Prompts for Claude Code, in order

Run these one at a time in Claude Code, inside your website repo.
Review the result and merge or fix before you go to the next one.
For steps 1 and 2, press Shift+Tab to switch to plan mode first, so Claude plans before it writes code.

---

## 1. Understand the repo (plan mode, no code)

```
Read CLAUDE.md and everything in design-handoff/. Look at all screenshots.
Then inspect this repo: what the old site is built with, any netlify.toml,
and any other CI config.
Tell me:
1. How the site is built and deployed on Netlify today.
2. Which old files you will remove (we are starting fresh, no Meridian template).
3. Your step-by-step plan for the rebuild.
Do not write any code yet.
```

## 2. Set up the project

```
Create a branch feature/redesign.
Set up Astro as described in CLAUDE.md: static output, self-hosted fonts,
src/styles/tokens.css generated from design-handoff/brand/tokens.json, global.css,
the Base layout, Header and Footer (copy from reference-html/index.html).
Copy logos and the photo into public/. Make a favicon from brand/logos/sn-mark.svg.
Remove the old site files. Copy design-handoff/netlify.toml to the repo root.
Run npm run build and show me that it passes.
```

## 3. Build the Home page

```
Build src/pages/index.astro to match design-handoff/design/reference-html/index.html
and screenshots/index-desktop.png. Use components from CLAUDE.md.
Keep the copy word for word. Build the SystemDiagram as its own component,
interactive as described in CLAUDE.md.
Then take Playwright screenshots at 1440 and 390 px and compare with the references.
List any differences and fix them.
```

## 4. Build the other pages

```
Build services.astro and about.astro (with the contact form).
Put the three case studies in src/content/work/ as Markdown:
aws-healthcare-platform.md, platform-modernisation.md, notification-system.md,
using the copy from reference-html/work-*.html. Render them with work/[slug].astro.
Each case study has its own diagram: make each one a small Astro component.
Build work/index.astro from reference-html/work.html.
Link the Home page cards to each case study.
Compare each page with its screenshot at 1440 and 390 px and fix differences.
```

## 5. Phone layout and motion

```
Check every page at 390 px against screenshots/index-phone.png:
add a phone menu (button with aria-expanded), stack all grids, 64 px section spacing.
Then add the motion from CLAUDE.md, with prefers-reduced-motion support.
Show me screenshots at 390 px.
```

## 6. Contact form

```
Make the contact form on about.astro work with Netlify Forms:
form name="contact", data-netlify="true", a hidden form-name field,
and a honeypot field (netlify-honeypot="bot-field").
After sending, show a plain thank-you page at /thanks.
Tell me what I need to switch on in the Netlify dashboard
(form notifications to my email).
```

## 7. SEO and sharing

```
Add per-page titles and meta descriptions (list new text in the PR for my approval),
Open Graph and Twitter tags with public/og-image.png (1200x630, make it from
design-handoff/assets/linkedin-banner-shameer-sn.png), sitemap, robots.txt,
JSON-LD Person on Home as in CLAUDE.md, and a 404 page in the same style.
```

## 8. Check quality

```
Run Lighthouse (mobile) on every page and an accessibility check with axe.
Fix everything below the quality bar in CLAUDE.md. Test with JavaScript turned off.
Show me the final scores.
```

## 9. Ship

```
Write a clear PR description: what changed, screenshots, scores, the CI change,
and any new text that needs my approval. Open the pull request.
```

Netlify builds a deploy preview for the pull request. Check it on your phone and laptop.
After you merge, Netlify deploys `main` to shameer.sn.
