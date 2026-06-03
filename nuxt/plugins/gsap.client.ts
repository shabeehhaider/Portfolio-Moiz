import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  return {
    provide: { gsap, ScrollTrigger }
  }
})
