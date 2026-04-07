export default function (application, html, data) {
  const doc = application.document ?? application.object
  if ((doc?.parent?.getFlag('brp', 'css-adventure-entry') ?? false)) {
    const root = html instanceof HTMLElement ? html : html[0]
    if (!root) return
    if (!root.classList.contains('css-adventure-entry')) {
      root.classList.add('css-adventure-entry')
      root.querySelectorAll('section.tmi-toggleable p.toggle').forEach(toggle => {
        toggle.addEventListener('click', (event) => {
          const el = event.currentTarget
          const section = el.closest('section.tmi-toggleable')?.querySelector('div.toggle')
          if (!section) return
          if (section.style.display !== 'none') {
            el.textContent = 'Reveal'
            section.style.display = 'none'
          } else {
            el.textContent = 'Hide'
            section.style.display = ''
          }
        })
      })
    }
  }
}
