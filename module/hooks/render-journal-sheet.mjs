export default function (application, html, data) {
  const root = html instanceof HTMLElement ? html : html[0]
  if (!root) return
  if ((application.document.getFlag('brp', 'css-adventure-entry') ?? false)) {
    if (!root.classList.contains('css-adventure-entry')) {
      root.classList.add('css-adventure-entry')
    }
    if ((application.document.getFlag('brp', 'fixed-adventure-heading') ?? false) && !root.classList.contains('fixed-adventure-heading')) {
      root.classList.add('fixed-adventure-heading')
      const subheading = data.pages?.[0]?.flags?.brp?.['fixed-adventure-subheading'] ?? ''
    }
  }
}
