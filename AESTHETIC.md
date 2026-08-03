# Aesthetic Statement — 8-Bit

**Aesthetic:** [8-Bit](https://aesthetics.fandom.com/wiki/8-Bit) — the look and
feel of NES-era games and early home computers: hard-edged pixels and tiny color
palettes

## How the CSS expresses it

I restyled `index.html`, and both themes pull from the same set of CSS custom
properties in `styles.css` — so flipping into "arcade mode" is really just one
token swap on `html[data-theme="8bit"]`. That's separation of concerns doing
its job: the HTML never changes, only the presentation layer does.

- **Limited palette** — like real console hardware, I'm not working with a
  huge range of colors. Night-sky navy (`#10142c`), CRT white, coin gold, and
  three HUD accents (cyan, magenta, 1-up green).
- **Bitmap type** — Press Start 2P for headings and controls, VT323 for body
  text, bumped up to 1.375rem so it's still actually readable at that size.
- **No curves allowed** — `--radius` drops to 0, borders get chunky, and
  shadows switch from soft blurs to hard 6px offsets. Images get
  `image-rendering: pixelated` so they don't get smoothed into mush.
- **CRT texture** — a faint fixed scanline overlay (`repeating-linear-gradient`,
  `pointer-events: none`), a blinking block cursor after the h1, and a
  "LEVEL SELECT" HUD eyebrow over the projects grid. All of that's added with
  CSS `content: "…" / ""` on purpose, so screen readers skip right past it —
  it's decoration, not content, so it shouldn't pretend otherwise.
- Nav links get a magenta ▶ selector arrow on hover/focus, like a game menu
  cursor. The space for it is reserved ahead of time so nothing shifts when
  it shows up.

## The JavaScript enhancement

`theme.js` runs an "Insert coin — 8-bit mode" button in the header. It toggles
`data-theme` on the root element, updates the button's label and
`aria-pressed`, and stores the choice in `localStorage` so arcade mode
survives a reload. `addEventListener` only — no inline handlers, so JS stays
out of the markup.

This is progressive enhancement, not a dependency. The button ships with the
`hidden` attribute and only gets revealed once the script actually runs, so
without JS there's no dead button sitting around doing nothing — the page
just renders in its default style and every bit of content is still fully
usable. Nobody's stuck because a script didn't load.

## One usability choice

I pulled back on the CRT effects on purpose. Scanlines stay at low opacity so
contrast never dips below readable, and the blink/hover-nudge animations turn
off under `prefers-reduced-motion` (the cursor just stays put instead of
blinking). That's basically the "you're not the user" mantra in practice — I
don't know what environment someone's actually viewing this in, so I don't
get to assume everyone wants the full flashing-arcade treatment. The user's
in charge of their own client, and my job is to respect whatever settings
they've already got dialed in, not override them. Keyboard focus also gets a
thick coin-gold outline in arcade mode, so it's _more_ visible than default,
not less. The page also stays one readable column at 375px with no
horizontal scroll — no reason to make things harder on a client I don't
control in the first place.

## McLuhan: the medium is the message

McLuhan's point is that the channel reshapes the content it carries, not just
how that content looks. This page tries to make that literal: the HTML — the
actual "content" — is byte-for-byte identical in both themes. Press one
button and the same facts read completely differently. In the default theme
I come across as a tidy, employable CS student. Insert a coin, and now
projects are "levels" and "open to internships" reads like a power-up.

None of the words change — just the medium delivering them — and that shift
in read is the message McLuhan's talking about. A static résumé or an
Instagram bio can't do this; they're locked into one presentation. Because I
own this platform down to the CSS custom property, I get to decide what the
same information says about me, twice, without lying either time.
