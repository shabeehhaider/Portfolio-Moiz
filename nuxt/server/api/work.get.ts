/**
 * Cached Vimeo proxy.
 *
 * - Server-only — the access token never reaches the browser.
 * - Cached in memory for 1 hour (varies by `?refresh=1` for manual bust).
 * - Returns a lean payload: only the fields the grid actually renders.
 * - Up to 100 videos per call (Vimeo's max per_page). For Moiz's ~80-video archive
 *   that means a single round-trip covers everything; the client paginates locally.
 */

export interface WorkItem {
  id: string
  title: string
  description: string
  thumbnail: string
  thumbnailSmall: string
  embedUrl: string
  tags: string[]
  duration: number          // seconds
  category: WorkCategory
  createdAt: string
}

export type WorkCategory = 'All' | 'Commercial' | 'Film' | 'Music Video' | 'Brand Film' | 'Documentary' | 'Other'

interface VimeoResponse {
  total: number
  page: number
  per_page: number
  data: VimeoVideo[]
}

interface VimeoVideo {
  uri: string
  name: string
  description: string | null
  duration: number
  created_time: string
  pictures: { sizes: Array<{ link: string; width: number; height: number }> }
  embed: { html: string }
  tags: Array<{ name: string; tag: string }>
}

const CATEGORY_KEYWORDS: Record<Exclude<WorkCategory, 'All' | 'Other'>, string[]> = {
  'Commercial':  ['commercial', 'tvc', 'ad', 'ads', 'advert', 'spot'],
  'Film':        ['film', 'short film', 'feature', 'cinema', 'teaser'],
  'Music Video': ['music video', 'music', 'mv', 'song'],
  'Brand Film':  ['brand film', 'brand', 'corporate', 'documentary brand'],
  'Documentary': ['documentary', 'doc', 'docu']
}

function inferCategory(tags: string[], description: string): WorkCategory {
  const haystack = (tags.join(' ') + ' ' + description).toLowerCase()
  for (const [cat, kws] of Object.entries(CATEGORY_KEYWORDS)) {
    if (kws.some(kw => haystack.includes(kw))) return cat as WorkCategory
  }
  return 'Other'
}

function pickThumbnail(pictures: VimeoVideo['pictures'], minWidth: number): string {
  if (!pictures?.sizes?.length) return ''
  const sized = [...pictures.sizes].sort((a, b) => a.width - b.width)
  const match = sized.find(s => s.width >= minWidth)
  return (match || sized[sized.length - 1]).link
}

function extractEmbedSrc(embed: VimeoVideo['embed'], id: string): string {
  // fall back to the canonical player URL if the embed html doesn't parse
  const src = embed?.html?.match(/src="([^"]+)"/)?.[1]
  return src || `https://player.vimeo.com/video/${id}`
}

export default defineCachedEventHandler(async (event): Promise<{ items: WorkItem[]; total: number; fetchedAt: string }> => {
  const config = useRuntimeConfig(event)
  if (!config.vimeoToken) {
    throw createError({ statusCode: 500, statusMessage: 'VIMEO token not configured' })
  }

  try {
    const res = await $fetch<VimeoResponse>('https://api.vimeo.com/me/videos', {
      headers: { Authorization: `Bearer ${config.vimeoToken}` },
      query: {
        page: 1,
        per_page: 100,
        fields: 'uri,name,description,duration,created_time,pictures,embed,tags',
        sort: 'date',
        direction: 'desc'
      }
    })

    const items: WorkItem[] = res.data.map(v => {
      const id = v.uri.split('/').pop()!
      const tags = (v.tags || []).map(t => t.name)
      return {
        id,
        title: v.name,
        description: v.description || '',
        thumbnail: pickThumbnail(v.pictures, 960),
        thumbnailSmall: pickThumbnail(v.pictures, 480),
        embedUrl: extractEmbedSrc(v.embed, id),
        tags,
        duration: v.duration,
        category: inferCategory(tags, v.description || ''),
        createdAt: v.created_time
      }
    })

    return { items, total: res.total, fetchedAt: new Date().toISOString() }
  } catch (err: any) {
    console.error('[work.get] Vimeo fetch failed:', err?.message)
    // graceful degradation — let the client render its skeleton + show empty state
    return { items: [], total: 0, fetchedAt: new Date().toISOString() }
  }
}, {
  maxAge: 60 * 60,                       // 1 hour
  swr: true,                              // serve stale while revalidating
  base: 'cache',
  // bust the cache when ?refresh=1 is passed
  getKey: (event) => getQuery(event).refresh ? `work-${Date.now()}` : 'work-v1'
})
