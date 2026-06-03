<template>
  <div>
    <HeroDirector />

    <Marquee :items="marqueeItems" :speed="34" />

    <!-- ───────── Featured work ───────── -->
    <section class="section" id="work">
      <SectionHead
        num="01"
        eyebrow="Selected Work · 2019 — 2026"
        title="Frames I’m"
        italic="proud of."
        sub="Eight featured films — the EasyPaisa anthem, the first Netflix Original shot in Pakistan, Mobily across MENA and more. Hover any tile to preview the cut." />

      <div class="work-grid">
        <WorkTile v-for="p in featuredProjects" :key="p.slug" :project="p" />
      </div>

      <div class="archive-cta reveal">
        <NuxtLink to="/work" class="btn btn-ghost">
          <span>The full archive · live from Vimeo</span><span>→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- ───────── About teaser + stats ───────── -->
    <section class="section section-tight" id="about-teaser">
      <div class="about-teaser">
        <div class="about-copy">
          <div class="eyebrow reveal"><span class="bar" /> The director</div>
          <p class="lead reveal delay-1">
            {{ profile.bio[0] }}
          </p>
          <NuxtLink to="/about" class="btn btn-subtle reveal delay-2"><span>More about me</span><span>→</span></NuxtLink>
        </div>
        <figure class="about-portrait reveal delay-1">
          <img src="/profile/moiz.jpeg" alt="Moiz Zaidi on set" loading="lazy">
          <figcaption class="ts">{{ profile.name }} · {{ profile.basedIn }}</figcaption>
        </figure>
      </div>

      <StatRow class="stat-row" />
    </section>

    <!-- ───────── Showreel ───────── -->
    <section class="section section-tight" id="reel">
      <SectionHead num="02" eyebrow="Reel · 2024 — 2026" title="Two minutes." italic="All of it." />
      <ReelFrame class="after-head" />
    </section>

    <!-- ───────── Clients ───────── -->
    <section class="section section-tight" id="clients">
      <SectionHead num="03" eyebrow="In good company" title="Brands & artists I’ve" italic="shot for." />
      <BrandMarquee class="brands after-head" :speed="55" />
    </section>

    <!-- ───────── BTS ───────── -->
    <section class="section section-tight" id="bts">
      <SectionHead num="04" eyebrow="On the floor" title="Behind" italic="the frame." />
      <BTSStrip class="bts after-head" :images="btsImages.slice(0, 16)" />
    </section>

    <ContactBlock />
  </div>
</template>

<script setup lang="ts">
import { featuredProjects } from '~/data/projects'
import { marqueeTerms } from '~/data/clients'
import { btsImages } from '~/data/bts'
import { profile } from '~/data/profile'

const marqueeItems = [...marqueeTerms] as string[]

useHead({ title: 'Moiz Zaidi — Film & Commercial Director' })
</script>

<style scoped>
.work-grid {
  display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px;
  margin-top: 56px;
}
.archive-cta { display: flex; justify-content: center; margin-top: 56px; }

/* breathing room between a SectionHead and the media block that follows it */
.after-head { margin-top: clamp(40px, 5vw, 64px); }

.about-teaser {
  display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 48px; align-items: center;
  margin-bottom: 64px;
}
.about-copy { display: flex; flex-direction: column; gap: 26px; align-items: flex-start; }
.about-copy .lead { font-family: var(--ff-display); font-size: clamp(24px, 2.8vw, 40px); line-height: 1.25; color: var(--bone); max-width: 22ch; }
.about-portrait { position: relative; aspect-ratio: 4/5; overflow: hidden; border-radius: 4px; background: var(--ink-2); }
.about-portrait img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(.2) contrast(1.05); }
.about-portrait figcaption { position: absolute; left: 16px; bottom: 16px; color: var(--bone); text-shadow: 0 1px 4px rgba(0,0,0,.7); }

@media (max-width: 860px) {
  .about-teaser { grid-template-columns: 1fr; gap: 32px; }
  .about-portrait { max-width: 360px; }
}
</style>
