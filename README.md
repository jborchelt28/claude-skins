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

This repository is private. Installing works only for people who can read it on GitHub and whose machine already holds a git credential for github.com (an SSH key, or `gh auth login` then `gh auth setup-git`). The install never prompts for one.

## Files

- `hooks/register.tsx`: sets the theme at session start and draws the backdrop.
- `hooks/scene.ts`: the generated SVG rain scene.
- `hooks/make-colors.js`: builds the full palette from a few colors.
