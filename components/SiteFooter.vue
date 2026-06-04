<template>
  <footer class="footer">
    <div class="rule" />

    <div class="footer-grid pad-x">
      <div class="col lead">
        <div class="eyebrow"><span class="bar" /> Let’s make something</div>
        <NuxtLink to="/contact" class="big font-display">
          Start a <span class="it">project</span> →
        </NuxtLink>
        <a :href="profile.emailHref" class="email">{{ profile.email }}</a>
      </div>

      <div class="col">
        <span class="ts head">Menu</span>
        <NuxtLink to="/work" class="fl">Work</NuxtLink>
        <NuxtLink to="/about" class="fl">About</NuxtLink>
        <NuxtLink to="/contact" class="fl">Contact</NuxtLink>
      </div>

      <div class="col">
        <span class="ts head">Elsewhere</span>
        <a
          v-for="s in profile.socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener"
          class="fl social">
          <img :src="iconPath(s.icon)" :alt="s.label" class="ico" loading="lazy">
          {{ s.label }}
        </a>
      </div>

      <div class="col">
        <span class="ts head">Studio</span>
        <span class="fl muted-line" v-for="line in profile.address" :key="line">{{ line }}</span>
        <a :href="profile.phoneHref" class="fl">{{ profile.phone }}</a>
      </div>
    </div>

    <div class="footer-base pad-x">
      <span class="ts">© {{ year }} {{ profile.name }} · {{ profile.roles }}</span>
      <span class="ts">Made in Karachi · {{ profile.cityLine }}</span>
      <NuxtLink to="/" class="ts top">↑ Top</NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile, type SocialIcon } from '~/data/profile'

const year = 2026

const iconMap: Record<string, string> = {
  instagram: '/socials/instagram.svg',
  linkedin: '/socials/linkedin.svg',
  threads: '/socials/threads.svg',
  facebook: '/socials/facebook.svg',
  vimeo: '/profile/vimeo.svg',
  youtube: '/profile/youtube.svg',
  whatsapp: '/profile/whatsapp-icon.svg'
}
function iconPath(icon: SocialIcon) {
  return iconMap[icon] ?? '/socials/instagram.svg'
}
</script>

<style scoped>
.footer { background: var(--ink-0); padding-bottom: 28px; }
.rule { height: 1px; background: var(--line); }

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 0.7fr 0.9fr 0.9fr;
  gap: 40px;
  padding-top: 80px; padding-bottom: 64px;
}
@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px 24px; }
  .col.lead { grid-column: 1 / -1; }
}
@media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr; } }

.col { display: flex; flex-direction: column; gap: 14px; }
.col.lead { gap: 22px; }

.big {
  font-size: clamp(40px, 7vw, 92px); line-height: .98;
  letter-spacing: -0.02em; color: var(--bone);
  transition: color .4s var(--ease);
}
.big:hover { color: var(--amber); }
.email {
  font-family: var(--ff-mono); font-size: 13px; letter-spacing: .04em;
  color: var(--bone-2); border-bottom: 1px solid var(--line); padding-bottom: 4px; width: fit-content;
  transition: color .3s var(--ease), border-color .3s var(--ease);
}
.email:hover { color: var(--amber); border-color: var(--amber); }

.head { color: var(--bone-3); margin-bottom: 4px; }
.fl { color: var(--bone-2); font-size: 14px; transition: color .3s var(--ease); width: fit-content; }
.fl:hover { color: var(--bone); }
.muted-line { color: var(--bone-3); cursor: default; }
.social { display: inline-flex; align-items: center; gap: 10px; }
.ico { width: 15px; height: 15px; opacity: .7; filter: brightness(0) invert(1); transition: opacity .3s var(--ease); }
.social:hover .ico { opacity: 1; }

.footer-base {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding-top: 26px; border-top: 1px solid var(--line-2); flex-wrap: wrap;
}
.top { color: var(--bone-2); }
.top:hover { color: var(--amber); }
</style>
