import { expect, test } from 'claude-code/testing'

// The app may name the plugin in any of these ways. The rain must draw for each.
const OWNERS = ['digital-rain', 'digital-rain@claude-skins', 'claude-skins/digital-rain', 'cc-plugin-digital-rain']

for (const surface of ['desktop', 'mobile'] as const) {
  for (const plugin of OWNERS) {
    test(`rain draws on ${surface} when the backdrop's plugin is "${plugin}"`, async $ => {
      const ui = await $.ui.mount({
        plugin: 'digital-rain',
        surface,
        component: 'Backdrop',
        props: { scene: 'digital-rain', plugin, glass: { blur: 4, tint: '#020a05', opacity: 0.5 } },
      })

      expect(await ui.find({ type: 'Svg' })).toBeDefined()
      await ui.unmount()
    })
  }
}

test("another plugin's scene is left alone", async $ => {
  const ui = await $.ui.mount({
    plugin: 'digital-rain',
    surface: 'desktop',
    component: 'Backdrop',
    props: { scene: 'lagoon', plugin: 'tide', glass: false },
  })

  expect(await ui.find({ type: 'Svg' })).toBeUndefined()
  await ui.unmount()
})
