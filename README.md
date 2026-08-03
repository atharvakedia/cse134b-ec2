# EC2 — Aesthetic Extra Credit (8-Bit)

Personal portfolio (from HW2) with **`index.html` restyled for the
[8-Bit aesthetic](https://aesthetics.fandom.com/wiki/8-Bit)**, on top of a
clean default theme. See `AESTHETIC.md` for the full statement.

## What changed vs. the base site

| File | Change |
|---|---|
| `index.html` | The one polished page: theme-toggle button in the header, dead `<button>`s replaced with real links (Projects, Résumé), inline `<style>` moved into the stylesheet, fonts preloaded, placeholder analytics tag removed. |
| `styles.css` | Full rewrite: a token-based design system (CSS custom properties) with a default theme on `:root` and the 8-bit theme on `html[data-theme="8bit"]`. |
| `theme.js` | New. The JS enhancement: "Insert coin" toggle, `localStorage` persistence, progressive enhancement (button is `hidden` until JS reveals it). |
| `AESTHETIC.md` | New. Required aesthetic statement. |

All other pages are carried over unchanged; they share the new default
stylesheet but only `index.html` has arcade mode.

## Try it

Open `index.html` (or serve the folder: `python3 -m http.server`) and press
**"Insert coin — 8-bit mode"** in the header. The choice persists across
reloads. Fonts (Press Start 2P, VT323) load from Google Fonts, so the 8-bit
type needs a network connection; the fallback stack is monospace.

## Before submitting

- Deploy (new repo + Netlify/GitHub Pages), then run the live URL through
  https://validator.w3.org/.
- The bio/projects/links are still HW2's placeholder content — swap in real
  info if you want this to double as your actual portfolio.
