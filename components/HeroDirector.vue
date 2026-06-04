<template>
  <section class="hero" id="top">
    <div class="hero-bg" aria-hidden="true" />
    <div class="hero-photo" aria-hidden="true" :style="{ backgroundImage: `url(${photo})` }" />
    <div class="hero-reel" aria-hidden="true" />
    <div class="hero-drift" aria-hidden="true"><div class="orb" /><div class="orb" /><div class="orb" /></div>

    <div class="hero-meta">
      <div class="col">
        <span>{{ profile.basedIn }}</span>
        <strong>{{ profile.rolesLong }}</strong>
      </div>
      <div class="col center">
        <span class="rec"><span class="dot" /> REC · ON THE FLOOR</span>
      </div>
      <div class="col end">
        <span>Reel · 2024 — 2026</span>
        <strong>{{ timecode }}</strong>
      </div>
    </div>

    <h1 class="hero-title">
      <span class="b1 reveal">{{ profile.heroLeadIn }}</span>
      <span class="b2 reveal delay-1">that move <span class="it">in&nbsp;frames.</span></span>
    </h1>

    <div class="hero-sub reveal delay-2">
      <p>
        I’m <span class="em">{{ profile.name }}</span> — a film &amp; commercial director in Karachi.
        A decade of cinematic stories for Hyundai, Toyota, Coca-Cola, Netflix, and the brands in between.
      </p>
      <div class="cta-row">
        <NuxtLink to="/work" class="btn btn-primary"><span>View the work</span><span>→</span></NuxtLink>
        <NuxtLink to="/contact" class="btn btn-ghost"><span>Start a project</span><span>→</span></NuxtLink>
      </div>
    </div>

    <div class="scroll-cue reveal delay-3" aria-hidden="true">
      <span class="line" />
      <span>Scroll · Selected Work</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
const { display: timecode } = useTimecode()
const photo = '/profile/hero.jpeg'
</script>

<style scoped>
.hero {
  position: relative; min-height: 100svh;
  padding: calc(var(--nav-h) + 60px) var(--pad-x) 56px;
  display: flex; flex-direction: column; justify-content: flex-end; gap: 30px;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(60% 50% at 18% 28%, rgba(217,142,75,.12), transparent 60%),
    radial-gradient(50% 60% at 88% 78%, rgba(60,80,120,.14), transparent 65%),
    linear-gradient(180deg, var(--ink-1) 0%, #060608 100%);
}
.hero-photo {
  position: absolute; inset: 0; z-index: 0;
  background-size: cover; background-position: center 20%;
  opacity: .22; mix-blend-mode: luminosity;
  mask-image: radial-gradient(120% 100% at 70% 30%, #000 10%, transparent 75%);
}
.hero-reel {
  position: absolute; inset: 0; z-index: 0; opacity: .5;
  background:
    repeating-linear-gradient(90deg, rgba(241,236,228,.02) 0 2px, transparent 2px 80px),
    repeating-linear-gradient(0deg, rgba(241,236,228,.015) 0 1px, transparent 1px 7px);
  mask-image: radial-gradient(120% 100% at 50% 50%, #000 30%, transparent 90%);
}
.hero-drift { position: absolute; inset: 0; z-index: 0; }
.orb {
  position: absolute; width: 540px; height: 540px; border-radius: 50%;
  filter: blur(80px); opacity: .32;
  background: radial-gradient(circle, rgba(217,142,75,.55), transparent 60%);
  animation: drift 22s var(--ease-slow) infinite alternate;
}
.orb:nth-child(2) { background: radial-gradient(circle, rgba(80,110,180,.5), transparent 60%); right: -160px; top: -120px; width: 620px; height: 620px; animation-duration: 30s; }
.orb:nth-child(3) { background: radial-gradient(circle, rgba(120,40,40,.45), transparent 60%); left: 30%; bottom: -200px; width: 480px; height: 480px; animation-duration: 26s; }
@keyframes drift { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(60px,-40px) scale(1.15); } }

.hero-meta {
  position: relative; z-index: 2; margin-top: auto;
  display: flex; justify-content: space-between; align-items: flex-end; gap: 24px;
  font-family: var(--ff-mono); font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: var(--bone-3);
}
.hero-meta .col { display: flex; flex-direction: column; gap: 6px; }
.hero-meta .col.center { align-items: center; }
.hero-meta .col.end { align-items: flex-end; text-align: right; }
.hero-meta .col strong { color: var(--bone); font-weight: 500; }
.hero-meta .rec { display: flex; align-items: center; gap: 8px; color: var(--bone-2); }
.hero-meta .rec .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--red); box-shadow: 0 0 10px var(--red); animation: pulse 1.6s var(--ease) infinite; }

.hero-title {
  position: relative; z-index: 2;
  font-family: var(--ff-display); font-weight: 400;
  font-size: clamp(52px, 11.5vw, 200px); line-height: .96; letter-spacing: -0.02em; color: var(--bone);
}
.hero-title .b1, .hero-title .b2 { display: block; }
.hero-title .b2 { padding-left: 10vw; }
.hero-title .it { font-style: italic; color: var(--amber); }
@media (max-width: 700px) { .hero-title .b2 { padding-left: 6vw; } }

.hero-sub {
  position: relative; z-index: 2;
  display: flex; justify-content: space-between; align-items: flex-end; gap: 30px;
  border-top: 1px solid var(--line); padding-top: 22px;
}
.hero-sub p { max-width: 46ch; color: var(--bone-2); font-size: 15px; line-height: 1.6; }
.hero-sub p .em { color: var(--bone); }
.cta-row { display: flex; gap: 12px; flex-shrink: 0; }

.scroll-cue {
  position: absolute; left: var(--pad-x); bottom: 24px; z-index: 2;
  display: flex; align-items: center; gap: 14px;
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--bone-3);
  opacity: .0; /* revealed via .in */
}
.scroll-cue.in { opacity: 1; }
.scroll-cue .line { width: 1px; height: 46px; background: linear-gradient(to bottom, var(--bone-3), transparent); position: relative; overflow: hidden; }
.scroll-cue .line::after { content: ""; position: absolute; left: 0; top: -100%; width: 1px; height: 50%; background: var(--amber); animation: scrollDot 2.6s var(--ease) infinite; }
@keyframes scrollDot { 0% { top: -50%; } 100% { top: 120%; } }

@media (max-width: 760px) {
  .hero-meta { flex-wrap: wrap; font-size: 10px; gap: 14px; }
  .hero-meta .col.center { display: none; }
  .hero-sub { flex-direction: column; align-items: flex-start; gap: 20px; }
  .hero-sub p { max-width: none; }
  .cta-row { width: 100%; }
  .cta-row .btn { flex: 1; justify-content: center; }
  .scroll-cue { display: none; }
}
</style>
