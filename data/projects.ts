export type ProjectCategory = 'Film' | 'Commercial' | 'Music Video' | 'Brand Film' | 'Documentary' | 'Netflix'
export type TileSize = 'std' | 'wide' | 'tall'

export interface Credit { role: string; name: string }

export interface Project {
  slug: string
  index: string
  title: string
  titleItalic?: string
  category: ProjectCategory
  year: number
  client?: string
  director?: string
  runtime: string
  aspect: string
  size: TileSize
  poster: string          // image path
  videoPreview?: string   // mp4 hover preview (optional)
  videoEmbed?: string     // vimeo/youtube embed URL for the modal
  featured?: boolean
  blurb: string
  description: string[]
  credits: Credit[]
  scenes: Array<{ label: string; sub: string; tone?: 'amber' | 'cool' | 'red' }>
}

// 8 featured films (the hero set) — each with a hover preview + embed.
// Plus a curated tail of real Moiz Zaidi work for the detail pages & archive.
export const projects: Project[] = [
  {
    slug: 'easypaisa',
    index: '01',
    title: 'Easy',
    titleItalic: 'Paisa',
    category: 'Commercial',
    year: 2024,
    client: 'EasyPaisa',
    runtime: '01:30',
    aspect: '16:9',
    size: 'wide',
    featured: true,
    poster: '/work/jab-sab-kuch-easy-paisa-se-hojaye-toh-karo-kuchbhi.jpeg',
    videoPreview: '/videos/EasyPaisa.mp4',
    videoEmbed: 'https://player.vimeo.com/video/954954489?autoplay=1',
    blurb: 'Making everyday money effortless — for everyone.',
    description: [
      'A full-funnel campaign for Pakistan’s largest mobile money platform — anchored by a single hero film and seven serialised cuts.',
      'Shot across three cities in eight days with a mixed cast of non-actors and faces from the EasyPaisa community.'
    ],
    credits: [
      { role: 'Client', name: 'EasyPaisa' },
      { role: 'Director', name: 'Moiz Zaidi' },
      { role: 'Format', name: 'TVC + 7-part series' }
    ],
    scenes: [
      { label: 'OPEN · Bazaar', sub: '00:00 — 00:14', tone: 'amber' },
      { label: 'Transfer · Phone CU', sub: '00:32 — 00:48' },
      { label: 'Family · End frame', sub: '01:16 — 01:30', tone: 'amber' }
    ]
  },
  {
    slug: 'netflix-greatest-rivalry',
    index: '02',
    title: 'The Greatest',
    titleItalic: 'Rivalry',
    category: 'Netflix',
    year: 2024,
    client: 'Netflix',
    runtime: '03:48',
    aspect: '2.39:1',
    size: 'std',
    featured: true,
    poster: '/work/netflix.jpeg',
    videoPreview: '/videos/netflix.mp4',
    videoEmbed: 'https://player.vimeo.com/video/954994541?autoplay=1',
    blurb: 'The first Netflix Original shot in Pakistan.',
    description: [
      'A landmark project — the first Netflix Original produced on Pakistani soil. I led the local production and worked with the Netflix global team on the cinematic launch piece.',
      'Anamorphic, fully scripted, with an in-camera title sequence.'
    ],
    credits: [
      { role: 'Platform', name: 'Netflix' },
      { role: 'Director', name: 'Moiz Zaidi' },
      { role: 'Format', name: 'Anamorphic launch film' }
    ],
    scenes: [
      { label: 'OPEN · Stadium', sub: '00:00 — 00:18', tone: 'cool' },
      { label: 'CU · The handshake', sub: '01:42 — 01:58' },
      { label: 'OUT · Title card', sub: '03:30 — 03:48', tone: 'red' }
    ]
  },
  {
    slug: 'mobily',
    index: '03',
    title: '',
    titleItalic: 'Mobily',
    category: 'Commercial',
    year: 2024,
    client: 'Mobily',
    runtime: '01:00',
    aspect: '16:9',
    size: 'std',
    featured: true,
    poster: '/work/mobily-sequence-1.png',
    videoPreview: '/videos/mobilysequence.mp4',
    videoEmbed: 'https://www.youtube.com/embed/cGYQimv2NUI?autoplay=1',
    blurb: 'Connecting people to unforgettable moments.',
    description: [
      'A four-part sequence film shot for Mobily across Riyadh and Jeddah. Each chapter handed off to the next with a single unbroken cut.',
      'Featured on Saudi national TV and across MENA digital.'
    ],
    credits: [
      { role: 'Client', name: 'Mobily' },
      { role: 'Region', name: 'KSA / MENA' },
      { role: 'Director', name: 'Moiz Zaidi' }
    ],
    scenes: [
      { label: 'Ch. I · Rooftop', sub: '00:00 — 00:14', tone: 'amber' },
      { label: 'Ch. II · Drive', sub: '00:24 — 00:38', tone: 'cool' },
      { label: 'Ch. IV · Family', sub: '00:48 — 01:00' }
    ]
  },
  {
    slug: 'peugeot',
    index: '04',
    title: '',
    titleItalic: 'Peugeot',
    category: 'Commercial',
    year: 2024,
    client: 'Peugeot',
    runtime: '01:00',
    aspect: '2.39:1',
    size: 'tall',
    featured: true,
    poster: '/work/peugeot.jpeg',
    videoPreview: '/videos/peugeot.mp4',
    videoEmbed: 'https://player.vimeo.com/video/954995426?autoplay=1',
    blurb: 'Where modern elegance meets performance.',
    description: [
      'Hero launch film for Peugeot’s flagship sedan. Shot single-camera Alexa Mini, anamorphic.',
      'Boarded as a one-shot dream — eventually cut to ten beats for the broadcast spot.'
    ],
    credits: [
      { role: 'Client', name: 'Peugeot' },
      { role: 'Director', name: 'Moiz Zaidi' }
    ],
    scenes: [
      { label: 'OPEN · Garage', sub: '00:00 — 00:08', tone: 'cool' },
      { label: 'Reveal · Headlights', sub: '00:24 — 00:32', tone: 'amber' },
      { label: 'Drive · Coastal', sub: '00:42 — 00:52' }
    ]
  },
  {
    slug: 'kia-picanto',
    index: '05',
    title: 'Kia',
    titleItalic: 'Picanto',
    category: 'Commercial',
    year: 2023,
    client: 'Kia',
    runtime: '00:45',
    aspect: '16:9',
    size: 'tall',
    featured: true,
    poster: '/work/KIA PICANTO 2023.jpeg',
    videoPreview: '/videos/kia-picanto.mp4',
    videoEmbed: 'https://player.vimeo.com/video/954996067?autoplay=1',
    blurb: 'The compact, stylish city companion.',
    description: [
      'Bright, kinetic, and built for vertical-first social. Shot fully on stage with practical car-mounted rigs.',
      'Released across PK, KSA and SEA markets.'
    ],
    credits: [
      { role: 'Client', name: 'Kia' },
      { role: 'Director', name: 'Moiz Zaidi' }
    ],
    scenes: [
      { label: 'OPEN · Yellow gel', sub: '00:00 — 00:06', tone: 'amber' },
      { label: 'Stunt · Wheels', sub: '00:18 — 00:24' },
      { label: 'OUT · Driver smile', sub: '00:38 — 00:45', tone: 'amber' }
    ]
  },
  {
    slug: 'panther-tyres',
    index: '06',
    title: 'Panther',
    titleItalic: 'King',
    category: 'Commercial',
    year: 2023,
    client: 'Panther Tyres',
    runtime: '01:30',
    aspect: '2.39:1',
    size: 'wide',
    featured: true,
    poster: '/work/panther-tyres-king56.jpeg',
    videoPreview: '/videos/panther-tyre-king.mp4',
    videoEmbed: 'https://player.vimeo.com/video/952827765?autoplay=1',
    blurb: 'Grip the road with unmatched quality.',
    description: [
      'A heavyweight automotive spot — six hero shots, all in-camera, no CG smoke.',
      'Shot at Multan motor speedway over two pre-dawn days.'
    ],
    credits: [
      { role: 'Client', name: 'Panther Tyres' },
      { role: 'Director', name: 'Moiz Zaidi' }
    ],
    scenes: [
      { label: 'Burnout · Wide', sub: '00:00 — 00:12', tone: 'red' },
      { label: 'CU · Tread', sub: '00:32 — 00:40', tone: 'amber' },
      { label: 'Hero · Sunrise', sub: '01:14 — 01:30', tone: 'amber' }
    ]
  },
  {
    slug: 'mcdonalds-yeh-such-hai',
    index: '07',
    title: "McDonald's —",
    titleItalic: 'Yeh Such Hai',
    category: 'Commercial',
    year: 2023,
    client: "McDonald's",
    runtime: '01:00',
    aspect: '16:9',
    size: 'std',
    featured: true,
    poster: '/work/mcdonalds-yeh-such-hai.jpeg',
    videoPreview: '/videos/mcDonald.mp4',
    videoEmbed: 'https://player.vimeo.com/video/952827227?autoplay=1',
    blurb: 'Three families. Three orders. One table.',
    description: [
      'A warm, character-led spot built around a single table and three very different families.',
      'Cut for TV (60s + 30s) and a vertical-native social campaign.'
    ],
    credits: [
      { role: 'Client', name: "McDonald's Pakistan" },
      { role: 'Director', name: 'Moiz Zaidi' }
    ],
    scenes: [
      { label: 'Family · Order', sub: '00:00 — 00:12' },
      { label: 'CU · The bite', sub: '00:24 — 00:32', tone: 'amber' },
      { label: 'OUT · Table', sub: '00:48 — 01:00', tone: 'amber' }
    ]
  },
  {
    slug: 'teefa-in-trouble',
    index: '08',
    title: 'Teefa in',
    titleItalic: 'Trouble',
    category: 'Film',
    year: 2019,
    director: 'Ahsan Rahim',
    runtime: '02:30',
    aspect: '2.39:1',
    size: 'std',
    featured: true,
    poster: '/work/teefa-in-trouble-trailer.jpeg',
    videoPreview: '/videos/Teefa in Trouble - Teaser.mp4',
    videoEmbed: 'https://player.vimeo.com/video/952829678?autoplay=1',
    blurb: 'A feature teaser, cut to run before every screening.',
    description: [
      'Feature film directed by Ahsan Rahim, starring Ali Zafar and Maya Ali.',
      'I cut the teaser — a 2:30 cinematic that ran in front of every screening in Pakistan.'
    ],
    credits: [
      { role: 'Feature', name: 'Teefa in Trouble' },
      { role: 'Feature Dir.', name: 'Ahsan Rahim' },
      { role: 'Teaser', name: 'Moiz Zaidi' }
    ],
    scenes: [
      { label: 'OPEN · Lahore', sub: '00:00 — 00:14', tone: 'amber' },
      { label: 'Chase · Rooftop', sub: '01:02 — 01:18' },
      { label: 'OUT · Title card', sub: '02:18 — 02:30', tone: 'red' }
    ]
  },

  // ── curated archive (detail pages, not in the hero set) ──
  {
    slug: 'coca-cola-hum-aik-hain',
    index: '09', title: 'Coca-Cola —', titleItalic: 'Hum Aik Hain',
    category: 'Commercial', year: 2022, client: 'Coca-Cola',
    runtime: '01:00', aspect: '16:9', size: 'std',
    poster: '/work/coca-cola-hum-aik-hain.jpeg',
    blurb: 'A unity film for Pakistan’s independence day.',
    description: ['A national-day anthem cut from over forty hours of footage across six provinces.'],
    credits: [{ role: 'Client', name: 'Coca-Cola' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Anthem · Wide', sub: '00:00 — 00:18', tone: 'red' }]
  },
  {
    slug: 'cadbury-dairy-milk',
    index: '10', title: 'Cadbury', titleItalic: 'Dairy Milk',
    category: 'Commercial', year: 2022, client: 'Cadbury',
    runtime: '00:45', aspect: '16:9', size: 'std',
    poster: '/work/cadbury-dairy-milk.jpeg',
    blurb: 'A small kindness, well shot.',
    description: ['A 45s in-store moment between two strangers.'],
    credits: [{ role: 'Client', name: 'Cadbury' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Counter · CU', sub: '00:12 — 00:22' }]
  },
  {
    slug: 'sprite-wooo-sahhh',
    index: '11', title: 'Sprite —', titleItalic: 'Wooo Sahhh',
    category: 'Commercial', year: 2023, client: 'Sprite',
    runtime: '00:30', aspect: '16:9', size: 'std',
    poster: '/work/sprite-wooo-sahhh.jpeg',
    blurb: 'A three-spot summer campaign.',
    description: ['Hyper-saturated, deliberately loud. Built for TikTok and built for TV.'],
    credits: [{ role: 'Client', name: 'Sprite' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Bottle · CU', sub: '00:08 — 00:14', tone: 'cool' }]
  },
  {
    slug: 'hyundai-customer-experience',
    index: '12', title: 'Hyundai —', titleItalic: 'Customer Stories',
    category: 'Brand Film', year: 2023, client: 'Hyundai',
    runtime: '02:30', aspect: '16:9', size: 'tall',
    poster: '/work/customer-experience-at-hyundai.jpeg',
    blurb: 'A documentary series with real owners.',
    description: ['Six episodes. Real Hyundai owners. No script — just the questions.'],
    credits: [{ role: 'Client', name: 'Hyundai' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Doc · Garage', sub: '00:18 — 00:42' }]
  },
  {
    slug: 'toyota-corolla',
    index: '13', title: 'Toyota', titleItalic: 'Corolla',
    category: 'Commercial', year: 2022, client: 'Toyota',
    runtime: '00:45', aspect: '2.39:1', size: 'wide',
    poster: '/work/toyota-corolla.jpeg',
    blurb: 'The everyday hero, made cinematic.',
    description: ['A drive-day spot built around a single hero shot — Karachi to Hub in 90 seconds of film time.'],
    credits: [{ role: 'Client', name: 'Toyota' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Drive · Wide', sub: '00:12 — 00:32', tone: 'cool' }]
  },
  {
    slug: 'kashmir-oil-heritage',
    index: '14', title: 'Kashmir Oil —', titleItalic: 'Heritage',
    category: 'Brand Film', year: 2023, client: 'Kashmir Oil',
    runtime: '02:00', aspect: '16:9', size: 'std',
    poster: '/work/kashmir-oil-heritage.jpeg',
    blurb: 'A family business, three generations on.',
    description: ['Filmed in Lahore and Sialkot. Treated as a documentary; structured as a brand film.'],
    credits: [{ role: 'Client', name: 'Kashmir Oil' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Hands · CU', sub: '00:42 — 01:04', tone: 'amber' }]
  },
  {
    slug: 'shehzad-roy-balochistan',
    index: '15', title: 'Shehzad Roy —', titleItalic: 'Balochistan',
    category: 'Music Video', year: 2023, client: 'Shehzad Roy',
    runtime: '04:20', aspect: '16:9', size: 'std',
    poster: '/work/shehzad-roy-song-balochistan-tadpolefilms.jpeg',
    blurb: 'A music video shot across Quetta and Gwadar.',
    description: ['Co-produced with Tadpole Films. Sixteen days on the road; one song.'],
    credits: [{ role: 'Artist', name: 'Shehzad Roy' }, { role: 'Co-prod.', name: 'Tadpole Films' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Quetta · Dawn', sub: '00:48 — 01:14', tone: 'amber' }]
  },
  {
    slug: 'lifebuoy-neem-haldi',
    index: '16', title: 'Lifebuoy —', titleItalic: 'Neem aur Haldi',
    category: 'Commercial', year: 2022, client: 'Unilever',
    runtime: '00:45', aspect: '16:9', size: 'std',
    poster: '/work/lifebuoy-neem-aur-haldi.jpeg',
    blurb: 'A modern take on an old-world recipe.',
    description: ['One day, two locations, three vignettes.'],
    credits: [{ role: 'Client', name: 'Unilever · Lifebuoy' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Kitchen · CU', sub: '00:08 — 00:20', tone: 'amber' }]
  },
  {
    slug: 'national-foods-ketchup',
    index: '17', title: 'National Foods —', titleItalic: 'Ketchup',
    category: 'Commercial', year: 2023, client: 'National Foods',
    runtime: '00:30', aspect: '16:9', size: 'std',
    poster: '/work/national-foods-ketchup.jpeg',
    blurb: 'A kitchen-table portrait.',
    description: ['A simple film with a single setup — and three of the best children I’ve ever cast.'],
    credits: [{ role: 'Client', name: 'National Foods' }, { role: 'Director', name: 'Moiz Zaidi' }],
    scenes: [{ label: 'Table · Wide', sub: '00:06 — 00:18', tone: 'red' }]
  }
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProject(slug: string) {
  return projects.find(p => p.slug === slug)
}

export function adjacentProjects(slug: string) {
  const i = projects.findIndex(p => p.slug === slug)
  if (i === -1) return { prev: undefined, next: undefined }
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length]
  }
}
