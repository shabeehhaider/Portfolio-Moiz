import type { WorkItem, WorkCategory } from '~/server/api/work.get'
export type { WorkItem, WorkCategory }

/**
 * Single source of truth for the /work archive.
 *
 * - Fetches once via useAsyncData (SSR + dedupe).
 * - Server route caches at the Nitro layer; this composable caches per-route on the client.
 * - Filters by category, supports progressive reveal via `visibleCount`.
 * - Use `loadMore()` to add `step` more cards to the visible window.
 */
export function useWork(opts: { initialVisible?: number; step?: number } = {}) {
  const config = useRuntimeConfig()
  const initialVisible = opts.initialVisible ?? config.public.workPageSize ?? 12
  const step = opts.step ?? initialVisible

  const { data, pending, error, refresh } = useAsyncData('work-archive', () =>
    $fetch<{ items: WorkItem[]; total: number; fetchedAt: string }>('/api/work')
  , {
    // keep the SSR payload reactive on the client without refetching
    server: true,
    lazy: false,
    default: () => ({ items: [] as WorkItem[], total: 0, fetchedAt: '' })
  })

  const activeCategory = ref<WorkCategory>('All')
  const visibleCount = ref(initialVisible)

  const allItems = computed<WorkItem[]>(() => data.value?.items ?? [])

  const categories = computed<WorkCategory[]>(() => {
    const set = new Set<WorkCategory>(['All'])
    for (const item of allItems.value) set.add(item.category)
    // stable order: All first, then the canonical order
    const order: WorkCategory[] = ['All', 'Commercial', 'Film', 'Music Video', 'Brand Film', 'Documentary', 'Other']
    return order.filter(c => set.has(c))
  })

  const filtered = computed<WorkItem[]>(() =>
    activeCategory.value === 'All'
      ? allItems.value
      : allItems.value.filter(i => i.category === activeCategory.value)
  )

  // Reset window on filter change
  watch(activeCategory, () => { visibleCount.value = initialVisible })

  const visible = computed<WorkItem[]>(() => filtered.value.slice(0, visibleCount.value))
  const hasMore = computed(() => visibleCount.value < filtered.value.length)

  function loadMore() {
    if (!hasMore.value) return
    visibleCount.value = Math.min(visibleCount.value + step, filtered.value.length)
  }

  function setCategory(c: WorkCategory) {
    activeCategory.value = c
  }

  return {
    pending,
    error,
    refresh,
    categories,
    activeCategory,
    setCategory,
    allItems,
    filtered,
    visible,
    visibleCount,
    hasMore,
    loadMore,
    total: computed(() => data.value?.total ?? 0)
  }
}
