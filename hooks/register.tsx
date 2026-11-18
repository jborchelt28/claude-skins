import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// Green phosphor on near-black. Dark mode only.
const { theme, problems } = makeColors({
  label: 'Digital Rain',
  only: 'dark',
  roles: {
    accent: '#2ee66b', // phosphor green
    danger: '#ff4d4d', // alarm red
    success: '#a3e635', // lime
    warning: '#e0b23a', // amber
    pro: '#38c9d6', // cyan
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#020604',
        'surface-1': '#06100a',
        'surface-2': '#09150d',
        'surface-3': '#0c1a10',
        'text-primary': '#c8f7d4',
        'text-secondary': '#8fdca3',
        'text-muted': '#62b479',
      },
    },
  },
})

// The Backdrop hook knows its own scene by this name alone. It doesn't read
// `e.props.plugin`: an installed copy can report another id, and then nothing drew.
const SCENE_NAME = 'digital-rain'

const LOOK: ThemeSetArgs = {
  colors: theme,
  // The desktop app veils the chat column with this glass, so a heavy veil hides the rain.
  backdrop: { scene: SCENE_NAME, glass: { blur: 4, tint: '#020a05', opacity: 0.5 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    if (e.props.scene !== SCENE_NAME) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Columns of green glyphs slowly falling on a black screen" isInteractive />
  })
}
