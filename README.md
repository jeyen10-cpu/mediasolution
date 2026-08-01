# Beli Holiday — Media Partnership Proposal

A landing page presenting Beli Holiday's media partnership offering, including an example creative placement showcase for Alpine Trails Holidays.

## Files

- `index.html` — the page markup
- `styles.css` — all styling
- `script.js` — scroll-reveal animations and animated counters
- `logo.png` — the Beli Holiday logo, used in the header
- `README.md` — this file

The homepage banner image, the feed image, and the Stories/Reels video are embedded directly inside `index.html` as base64 data (no separate files needed for those).

**Keep all five files together in the same folder** — `index.html` references `styles.css`, `script.js`, and `logo.png` by relative path, so they need to sit alongside it (not in subfolders) for the page to render correctly.

## How to publish this with GitHub Pages

1. Create a new repository on GitHub (public repos get free Pages hosting; private repos need GitHub Pro/Team/Enterprise for Pages).
2. Upload `index.html`, `styles.css`, `script.js`, and `logo.png` to the root of the repository (drag-and-drop on the GitHub web UI works fine, or via `git add / commit / push`).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose your default branch (e.g. `main`) and folder `/ (root)`, then **Save**.
6. GitHub will build the site and give you a URL, typically:
   `https://<your-username>.github.io/<repository-name>/`
   It can take a minute or two for the first deploy to go live.

## Notes

- If you ever want to swap out the banner, feed image, or Stories/Reels video with new creative, the cleanest approach is to re-generate `index.html` rather than hand-edit the base64 strings inside it.
- To replace the logo, just overwrite `logo.png` with a new file of the same name.
