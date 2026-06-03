/**
 * Adds `.in` to any element with class `.reveal` once it crosses the viewport.
 *
 * Why a MutationObserver and not just `onMounted` + route watch?
 *   The layout mounts once, so `onMounted` only scans the first page's DOM.
 *   Watching the route fires *before* `<NuxtPage>` swaps content in (especially
 *   with mode: 'out-in' transitions), so a route-watch scan finds nothing.
 *   A MutationObserver fires *when* the new elements are actually inserted —
 *   timing-independent, no route hooks needed.
 */
let io: IntersectionObserver | null = null
let mo: MutationObserver | null = null
let started = false

function ensureIO() {
  if (typeof window === 'undefined') return null
  if (io) return io
  io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        io!.unobserve(entry.target)
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
  return io
}

function observeNode(node: Element) {
  const o = ensureIO()
  if (!o) return
  if (node.classList?.contains('reveal') && !node.classList.contains('in')) {
    o.observe(node)
  }
  // also pick up descendants — covers components whose root isn't `.reveal`
  node.querySelectorAll?.<HTMLElement>('.reveal:not(.in)').forEach((el) => o.observe(el))
}

function start() {
  if (typeof window === 'undefined' || started) return
  started = true

  // initial sweep
  observeNode(document.body)

  // future inserts (route changes, v-if, async chunks, modals, etc.)
  mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node instanceof Element) observeNode(node)
      })
    }
  })
  mo.observe(document.body, { childList: true, subtree: true })
}

export function useReveal() {
  onMounted(start)
}
