# Aesthetic Statement — 8-Bit

**Aesthetic:** [8-Bit](https://aesthetics.fandom.com/wiki/8-Bit) — the visual
language of NES-era games and early home computers: hard pixels, tiny palettes,
bitmap type, CRT glow.

## How the CSS expresses it

The restyled page is `index.html`. Both themes read from one set of CSS custom
properties in `styles.css`, so "arcade mode" is a single token swap on
`html[data-theme="8bit"]`:

- **Limited palette**, like real console hardware: night-sky navy (`#10142c`),
  CRT white, coin gold, plus three HUD colors (cyan, magenta, 1-up green).
- **Bitmap type**: Press Start 2P for headings and controls, VT323 for body
  text — scaled up to 1.375rem so it stays legible.
- **Pixels have no curves**: `--radius` drops to 0, borders go chunky, and
  shadows become hard 6px offsets instead of soft blurs. Images render with
  `image-rendering: pixelated`.
- **CRT texture**: a faint fixed scanline overlay (`repeating-linear-gradient`,
  pointer-events none), plus a blinking block cursor after the h1 and a
  "LEVEL SELECT" HUD eyebrow over the projects grid — both added with CSS
  `content: "…" / ""` so screen readers skip the decoration.
- Nav links get a magenta `▶` selector arrow on hover/focus, like a game menu;
  the slot is reserved so nothing shifts.

## The JavaScript enhancement

`theme.js` powers an **"Insert coin — 8-bit mode"** button in the header. It
toggles `data-theme` on the root element via the DOM, updates the button's
label and `aria-pressed`, and remembers the choice in `localStorage` so arcade
mode survives reloads. It uses `addEventListener` only — no inline handlers.
The button ships with the `hidden` attribute and is revealed by the script, so
without JavaScript the page simply shows its default style with no dead
control, and every piece of content remains fully usable.

## One usability choice

Restraint on the CRT effects. Scanlines are capped at low opacity so text
contrast never drops below readable, the blink and hover-nudge animations stop
under `prefers-reduced-motion` (the cursor stays visible, just static), and
keyboard focus gets a thick coin-gold outline in arcade mode so it's *more*
visible than the default, not less. The page stays one readable column at
375px with no horizontal scrolling.

## McLuhan: the medium is the message

McLuhan's point is that the channel reshapes the content it carries. This page
makes that literal: the HTML — the "content" — is byte-for-byte identical in
both themes, yet pressing one button changes what the site *says about me*.
In the default theme I read as a tidy, employable CS student; insert a coin
and the same facts read as an invitation to play — projects become levels,
"open to internships" becomes a power-up. The medium (typeface, palette,
scanlines) carries a message the words never state: that I grew up on games,
that I think building software should be fun, and that I control this platform
down to the pixel. No Instagram profile would let me do that — which is
McLuhan's "new scale introduced into our affairs" in miniature: owning the
medium means owning the message.
