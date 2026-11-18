# Digital Rain

A dark-only skin for the Claude desktop and mobile apps: green phosphor text on near-black, with slow columns of falling green glyphs drawn behind the conversation. Panels are frosted and tinted dark so text stays readable over the rain.

- Draws in the Claude desktop and mobile apps only. Terminals and editors show no theme.
- Forces dark mode while installed.
- With reduced motion on, the desktop app shows the rain still.
- Mobile may draw the rain still.

## Install

At the prompt of a terminal session:

```
/plugin install digital-rain --marketplace jborchelt28/claude-skins
```

Answer `y` to add the marketplace, then pick a scope (user scope is listed first; press Enter).

From a shell:

```bash
claude plugin install digital-rain --marketplace jborchelt28/claude-skins
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `jborchelt28/claude-skins`, then Add plugin.

This repository is public, so anyone can install the skin. No GitHub account or sign-in is needed.

## Files

- `hooks/register.tsx`: sets the theme at session start and draws the backdrop.
- `hooks/scene.ts`: the generated SVG rain scene.
- `hooks/make-colors.js`: builds the full palette from a few colors.
- `hooks/backdrop.test.tsx`: checks the rain draws on desktop and mobile. Run `claude plugin test .`
