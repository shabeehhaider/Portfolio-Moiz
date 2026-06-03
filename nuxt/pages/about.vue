<template>
  <div>
    <!-- Intro -->
    <section class="about-hero pad-x">
      <div class="ah-grid">
        <div class="ah-copy">
          <div class="eyebrow reveal"><span class="bar" /> About · {{ profile.basedIn }}</div>
          <h1 class="ah-title reveal delay-1">
            <span>I make films that</span>
            <span class="it">stay with you.</span>
          </h1>
          <p class="ah-lead reveal delay-2">{{ profile.introShort }}</p>
        </div>
        <figure class="ah-portrait reveal delay-1">
          <img src="/profile/profile.jpeg" alt="Moiz Zaidi" loading="lazy">
          <figcaption>
            <span class="font-display nm">{{ profile.name }}</span>
            <span class="ts rl">{{ profile.roles }}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Bio -->
    <section class="section section-tight bio pad-x">
      <div class="bio-grid">
        <span class="ts side">01 — Story</span>
        <div class="bio-copy">
          <p v-for="(p, i) in profile.bio" :key="i" class="reveal" :class="`delay-${i}`">{{ p }}</p>
        </div>
      </div>
    </section>

    <StatRow class="pad-x about-stats" />

    <!-- Specialisms -->
    <section class="section pad-x">
      <SectionHead num="02" eyebrow="Known for" title="The kind of work" italic="I love." />
      <ul class="specs">
        <li v-for="(s, i) in profile.specialisms" :key="s" class="spec reveal" :class="`delay-${i % 4}`">
          <span class="n font-mono-ui">0{{ i + 1 }}</span>{{ s }}
        </li>
      </ul>
    </section>

    <!-- Craft -->
    <section class="section section-tight pad-x">
      <SectionHead num="03" eyebrow="How I work" title="From treatment" italic="to final cut." />
      <CraftList class="craft after-head" />
    </section>

    <!-- BTS -->
    <section class="section section-tight">
      <div class="pad-x"><SectionHead num="04" eyebrow="On the floor" title="Behind" italic="the frame." /></div>
      <BTSStrip class="bts after-head" :images="btsImages" :speed="40" />
    </section>

    <!-- Clients -->
    <section class="section section-tight pad-x">
      <SectionHead num="05" eyebrow="In good company" title="Brands & artists I’ve" italic="shot for." />
      <BrandMarquee class="brands after-head" :speed="55" />
    </section>

    <ContactBlock />
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
import { btsImages } from '~/data/bts'

useHead({
  title: 'About · Moiz Zaidi — Film & Commercial Director',
  meta: [{ name: 'description', content: profile.introShort }]
})
</script>

<style scoped>
.about-hero { padding-top: calc(var(--nav-h) + 80px); }
.ah-grid { display: grid; grid-template-columns: 1.4fr 0.8fr; gap: 56px; align-items: end; }
@media (max-width: 900px) { .ah-grid { grid-template-columns: 1fr; gap: 36px; } }
.ah-copy { display: flex; flex-direction: column; gap: 26px; }
.ah-title { font-family: var(--ff-display); font-weight: 400; font-size: clamp(48px, 8.5vw, 132px); line-height: .95; letter-spacing: -0.02em; }
.ah-title span { display: block; }
.ah-title .it { font-style: italic; color: var(--amber); }
.ah-lead { font-size: clamp(17px, 1.8vw, 22px); color: var(--bone-2); line-height: 1.55; max-width: 50ch; }
.ah-portrait { position: relative; aspect-ratio: 4/5; overflow: hidden; border-radius: 4px; background: var(--ink-2); }
.ah-portrait img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(.15) contrast(1.05); }
.ah-portrait figcaption { position: absolute; left: 18px; bottom: 18px; display: flex; flex-direction: column; gap: 4px; text-shadow: 0 1px 5px rgba(0,0,0,.8); }
.ah-portrait .nm { font-size: 26px; color: var(--bone); }
.ah-portrait .rl { color: var(--bone-2); }

.bio-grid { display: grid; grid-template-columns: 160px 1fr; gap: 40px; }
@media (max-width: 760px) { .bio-grid { grid-template-columns: 1fr; gap: 16px; } }
.side { color: var(--bone-3); padding-top: 10px; }
.bio-copy { max-width: 64ch; display: flex; flex-direction: column; gap: 24px; }
.bio-copy p { font-size: clamp(18px, 2vw, 26px); line-height: 1.5; color: var(--bone); font-family: var(--ff-display); }
.bio-copy p:not(:first-child) { color: var(--bone-2); font-family: var(--ff-sans); font-size: clamp(15px, 1.5vw, 18px); line-height: 1.7; }

.about-stats { padding-top: 0; }

/* space between a SectionHead and the block that follows it */
.after-head { margin-top: clamp(40px, 5vw, 64px); }

.specs { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 48px; border-top: 1px solid var(--line); }
@media (max-width: 700px) { .specs { grid-template-columns: 1fr; } }
.spec {
  display: flex; align-items: baseline; gap: 16px; padding: 28px 4px;
  border-bottom: 1px solid var(--line); font-family: var(--ff-display); font-size: clamp(22px, 2.4vw, 34px); color: var(--bone);
}
.spec .n { font-family: var(--ff-mono); font-size: 12px; color: var(--amber); }
</style>
