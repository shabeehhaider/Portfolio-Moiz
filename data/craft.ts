export interface Craft {
  index: string
  title: string
  summary: string
  detail: string
  deliverables: string[]
}

// "What I do" — first-person, three core practices.
export const craft: Craft[] = [
  {
    index: '01',
    title: 'Direction',
    summary:
      'A decade directing commercials, brand films and feature work — meticulous on detail, calm on the floor.',
    detail:
      'I guide actors and crew to bring the overarching vision to life with precision, and I keep the room steady while doing it. Every script gets its own visual grammar.',
    deliverables: ['Treatment & boards', 'Casting & blocking', 'On-floor direction', 'Edit supervision']
  },
  {
    index: '02',
    title: 'Production',
    summary:
      'From pre-production planning to final wrap, I orchestrate the moving parts — budgets, timelines, crew.',
    detail:
      'I work with an extensive network of professionals — DPs, gaffers, art teams, talent agencies and post houses across Karachi, Lahore, Dubai and Riyadh — to deliver on brief and on time.',
    deliverables: ['Line production & scheduling', 'Crew & gear booking', 'Locations & permits', 'Post through delivery']
  },
  {
    index: '03',
    title: 'Creative',
    summary:
      'Concept, story and the look of the thing — translating a brief into images that actually move people.',
    detail:
      'I love the part where a brand objective becomes a story. I develop the idea, the references and the visual language, then carry it all the way through to the final cut.',
    deliverables: ['Concept & scripting', 'Visual references & look', 'Storyboards', 'Colour & sound direction']
  }
]
