<template>
  <section class="contact section" id="contact" data-screen="Contact">
    <div class="glow" aria-hidden="true" />
    <div class="inner">
      <div class="eyebrow reveal"><span class="bar" /> Get in touch</div>

      <h2 class="big reveal delay-1">
        <span>Let’s make</span>
        <span>something <span class="it">worth&nbsp;watching.</span></span>
      </h2>

      <p class="pitch reveal delay-2">{{ profile.contactPitch[0] }}</p>

      <div class="actions reveal delay-3">
        <a :href="profile.emailHref" class="btn btn-primary"><span>{{ profile.email }}</span><span>→</span></a>
        <NuxtLink to="/contact" class="btn btn-ghost"><span>Project enquiry</span><span>→</span></NuxtLink>
      </div>

      <div class="lines reveal delay-3">
        <a :href="profile.phoneHref" class="ln"><span class="k ts">Call</span> {{ profile.phone }}</a>
        <a :href="profile.whatsappHref" target="_blank" rel="noopener" class="ln"><span class="k ts">WhatsApp</span> Message me</a>
        <span class="ln"><span class="k ts">Based in</span> {{ profile.basedIn }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<style scoped>
.contact { position: relative; overflow: hidden; text-align: center; }
.glow {
  position: absolute; inset: 0; z-index: 0;
  background: radial-gradient(50% 60% at 50% 10%, rgba(217,142,75,.12), transparent 60%);
}
.inner { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 26px; }
.eyebrow { justify-content: center; }
.big {
  font-family: var(--ff-display); font-weight: 400;
  font-size: clamp(40px, 7vw, 104px); line-height: .98; letter-spacing: -0.02em; color: var(--bone);
}
.big span { display: block; }
.big .it { font-style: italic; color: var(--amber); }
.pitch { max-width: 56ch; color: var(--bone-2); font-size: clamp(15px, 1.5vw, 18px); line-height: 1.6; }
.actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.lines { display: flex; gap: 14px 36px; flex-wrap: wrap; justify-content: center; margin-top: 14px; }
.ln { display: inline-flex; align-items: baseline; gap: 10px; color: var(--bone-2); font-size: 14px; transition: color .3s var(--ease); }
.ln:hover { color: var(--bone); }
.ln .k { color: var(--bone-3); }
@media (max-width: 560px) { .actions { width: 100%; } .actions .btn { flex: 1; justify-content: center; } }
</style>
