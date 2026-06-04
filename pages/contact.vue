<template>
  <div>
    <section class="c-hero pad-x">
      <div class="eyebrow reveal"><span class="bar" /> Contact</div>
      <h1 class="c-title reveal delay-1">
        <span>Let’s talk</span>
        <span class="it">about your film.</span>
      </h1>
      <p class="c-sub reveal delay-2">{{ profile.contactPitch[0] }}</p>
    </section>

    <section class="c-body pad-x">
      <div class="c-form reveal">
        <ContactForm />
      </div>

      <aside class="c-info reveal delay-1">
        <div class="block">
          <span class="ts head">Direct</span>
          <a :href="profile.emailHref" class="line big">{{ profile.email }}</a>
          <a :href="profile.phoneHref" class="line">{{ profile.phone }}</a>
          <a :href="profile.whatsappHref" target="_blank" rel="noopener" class="line">WhatsApp →</a>
        </div>

        <div class="block">
          <span class="ts head">Studio</span>
          <span class="line muted" v-for="l in profile.address" :key="l">{{ l }}</span>
        </div>

        <div class="block">
          <span class="ts head">Elsewhere</span>
          <div class="socials">
            <a v-for="s in profile.socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" class="soc">{{ s.label }}</a>
          </div>
        </div>

        <div class="block availability">
          <span class="dot" />
          <span>{{ profile.contactPitch[1] }}</span>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  title: 'Contact · Moiz Zaidi',
  meta: [{ name: 'description', content: 'Get in touch with director Moiz Zaidi for commercials, brand films, music videos and feature work.' }]
})
</script>

<style scoped>
.c-hero { padding-top: calc(var(--nav-h) + 80px); display: flex; flex-direction: column; gap: 22px; max-width: 1000px; }
.c-title { font-family: var(--ff-display); font-weight: 400; font-size: clamp(48px, 8.5vw, 132px); line-height: .95; letter-spacing: -0.02em; }
.c-title span { display: block; }
.c-title .it { font-style: italic; color: var(--amber); }
.c-sub { color: var(--bone-2); font-size: clamp(16px, 1.6vw, 20px); line-height: 1.6; max-width: 56ch; }

.c-body { display: grid; grid-template-columns: 1.4fr 0.8fr; gap: 64px; padding-top: 64px; padding-bottom: 120px; }
@media (max-width: 900px) { .c-body { grid-template-columns: 1fr; gap: 48px; } }

.c-info { display: flex; flex-direction: column; gap: 36px; }
.block { display: flex; flex-direction: column; gap: 10px; }
.head { color: var(--bone-3); }
.line { color: var(--bone-2); font-size: 15px; transition: color .3s var(--ease); width: fit-content; }
.line:hover { color: var(--bone); }
.line.big { font-family: var(--ff-display); font-size: clamp(22px, 2.4vw, 30px); color: var(--bone); }
.line.big:hover { color: var(--amber); }
.line.muted { color: var(--bone-3); cursor: default; }
.socials { display: flex; flex-wrap: wrap; gap: 10px; }
.soc { font-family: var(--ff-mono); font-size: 11px; letter-spacing: .08em; color: var(--bone-2); border: 1px solid var(--line); padding: 8px 14px; border-radius: 999px; transition: all .3s var(--ease); }
.soc:hover { border-color: var(--amber); color: var(--bone); }
.availability { flex-direction: row; align-items: flex-start; gap: 12px; color: var(--bone-2); font-size: 14px; line-height: 1.55; padding: 18px; border: 1px solid var(--line); border-radius: 6px; background: var(--ink-2); }
.availability .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--amber); box-shadow: 0 0 10px var(--amber); margin-top: 5px; flex-shrink: 0; animation: pulse 2s var(--ease) infinite; }
</style>
