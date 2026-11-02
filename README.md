# shameer.sn design handoff

Everything Claude Code needs to build the new website.

## How to use

1. Unzip this folder into the root of your website repo as `design-handoff/`.
2. Move `CLAUDE.md` to the repo root (if the repo already has one, merge the two).
3. Commit both on a new branch.
4. Open Claude Code in the repo and run the prompts in `PROMPTS.md`, one by one.

## What is inside

| Folder | What it is |
| --- | --- |
| `design/reference-html/` | The approved pages as plain HTML: index, services, work (list), three case studies (`work-*.html`), about. Open them in a browser. `_phone-home-reference.html` shows the phone layout of Home. |
| `design/screenshots/` | Full-page screenshots: desktop (1440 px) for each page, and Home on a phone (390 px). |
| `netlify.toml` | Netlify build settings. Copy it to the repo root (prompt 2). |
| `design/source-dc/` | The original design files from the design canvas. Reference only. |
| `brand/BRAND.md` | Brand rules: voice, colours, type, layout, logo use. |
| `brand/tokens.json` | Design tokens: colours (light and dark), type scale, spacing, radius. |
| `brand/logos/` | The S-route mark: `sn-mark.svg` (for light backgrounds) and `sn-mark-light.svg` (for dark). |
| `assets/` | Your profile photo and the LinkedIn banner (use it for the Open Graph image). |
| `CLAUDE.md` | Instructions Claude Code reads every session: stack, rules, quality bar. |
| `PROMPTS.md` | The build, step by step. |

## Before you start, fill in

- Upwork profile link (footer and About page).
- Check the two new case studies (platform modernisation, notification system). They are written from your resume; correct anything that is not exactly right.
- The "Now" list on the About page (or ask Claude Code to remove it).
