/**
 * Moiz Zaidi — director identity & contact.
 * First-person voice. Content sourced from moizzaidi.com and the existing build.
 */
export const profile = {
  name: 'Moiz Zaidi',
  roles: 'Film & Commercial Director',
  rolesLong: 'Director · Producer · Storyteller',
  cityLine: 'Karachi · MENA · Dubai',
  basedIn: 'Karachi, Pakistan',
  yearsExperience: '10+',
  projectsCount: '120+',
  brandsCount: '40+',
  countriesCount: '6',

  tagline: 'Stories that move in frames.',

  // First-person hero line (split for the display setting)
  heroLeadIn: "I direct film & commercials",
  heroEmphasis: 'that move in frames.',

  introShort:
    'I’m a film and commercial director with a decade behind the camera — turning briefs into images that linger.',

  // Long bio, first person — rewritten from the studio "we" framing.
  bio: [
    'I’m Moiz Zaidi — a filmmaker and commercial director with over a decade behind the camera, and a master’s in filmmaking from Punjab University, Lahore. I’m happiest on a floor full of people, chasing the one frame the whole day was built around.',
    'I’ve been lucky to direct for some of the biggest names in the business — Hyundai, Toyota, Peugeot, Kia, MG, Suzuki, Coca-Cola, Unilever, Procter & Gamble — and I shot the first Netflix Original made in Pakistan. Each brief gets its own grammar; nothing comes off a template.',
    'I work across borders and formats — TVCs, brand films, music videos, documentaries — and I bring a calm, prepared set wherever the job takes me. The goal never changes: tell the truth of the story, and make it beautiful.'
  ],

  // For the about page — what I'm known for
  specialisms: [
    'Automotive & brand films',
    'Long-form narrative & teasers',
    'Cross-border productions (PK · KSA · UAE)',
    'Music videos & documentary'
  ],

  contactPitch: [
    'Got a brief, a script, or just the spark of an idea? I direct TV commercials, music videos, documentaries, brand films and feature work — and I’m always up for a conversation.',
    'Tell me what you’re trying to say. I’ll tell you how I’d shoot it.'
  ],

  email: 'moix.xaidi@gmail.com',
  emailHref: 'mailto:moix.xaidi@gmail.com',
  phone: '+92 333 445 4814',
  phoneHref: 'tel:+923334454814',
  whatsappHref: 'https://wa.me/923334454814',
  website: 'moizzaidi.com',
  address: ['84-C Khayaban e jami Phase 2 Ext-DHA  Karachi', 'Phase V Ext, DHA', 'Karachi 75500, PK'],

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/moiz.zaidi', icon: 'instagram' },
    { label: 'Vimeo', href: 'https://vimeo.com/user98514964', icon: 'vimeo' },
    { label: 'YouTube', href: 'https://www.youtube.com/@moizzaidi7068', icon: 'youtube' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/moiz-zaidi-6ba888237/', icon: 'linkedin' },
    { label: 'Threads', href: 'https://www.threads.net/@moiz.zaidi', icon: 'threads' }
  ]
}

export type SocialIcon = (typeof profile.socials)[number]['icon']
