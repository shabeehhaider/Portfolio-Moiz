<template>
  <article v-if="project" class="detail">
    <!-- Hero -->
    <header class="d-hero pad-x">
      <NuxtLink to="/work" class="back ts reveal">← All work</NuxtLink>

      <div class="d-top reveal delay-1">
        <span class="idx font-mono-ui">{{ project.index }}</span>
        <span class="cat ts">{{ project.category }} · {{ project.year }}</span>
      </div>

      <h1 class="d-title reveal delay-1">
        <template v-if="project.title">{{ project.title }} </template>
        <span v-if="project.titleItalic" class="it">{{ project.titleItalic }}</span>
      </h1>

      <p class="d-blurb reveal delay-2">{{ project.blurb }}</p>
    </header>

    <!-- Media -->
    <section class="d-media pad-x reveal delay-2">
      <button class="frame" :class="{ playable: !!project.videoEmbed }" @click="play">
        <video
          v-if="project.videoPreview"
          class="bg"
          autoplay muted loop playsinline preload="metadata"
          :poster="project.poster">
          <source :src="project.videoPreview" type="video/mp4">
        </video>
        <img v-else-if="project.poster" :src="project.poster" :alt="title" class="bg img">
        <div class="m-scrim" />
        <div v-if="project.videoEmbed" class="m-play"><span class="ring" /><span class="tri" /></div>
        <div class="m-meta ts">
          <span>{{ project.aspect }}</span><span>·</span><span>{{ project.runtime }}</span>
          <span v-if="project.videoEmbed">· Click to play</span>
        </div>
      </button>
    </section>

    <!-- Body -->
    <section class="d-body pad-x">
      <div class="d-desc reveal">
        <h2 class="ts head">The film</h2>
        <p v-for="(p, i) in project.description" :key="i">{{ p }}</p>

        <h2 class="ts head sc-head">Scene breakdown</h2>
        <ul class="scenes">
          <li v-for="(s, i) in project.scenes" :key="i" class="scene" :data-tone="s.tone || 'none'">
            <span class="s-dot" />
            <span class="s-label">{{ s.label }}</span>
            <span class="s-sub font-mono-ui">{{ s.sub }}</span>
          </li>
        </ul>
      </div>

      <aside class="d-side reveal delay-1">
        <div class="card">
          <h2 class="ts head">Credits</h2>
          <dl class="credits">
            <div v-for="c in project.credits" :key="c.role" class="credit">
              <dt class="ts">{{ c.role }}</dt>
              <dd>{{ c.name }}</dd>
            </div>
          </dl>
          <div class="specs">
            <div class="spec"><span class="ts">Runtime</span><span>{{ project.runtime }}</span></div>
            <div class="spec"><span class="ts">Aspect</span><span>{{ project.aspect }}</span></div>
            <div class="spec"><span class="ts">Year</span><span>{{ project.year }}</span></div>
            <div v-if="project.client" class="spec"><span class="ts">Client</span><span>{{ project.client }}</span></div>
          </div>
          <button v-if="project.videoEmbed" class="btn btn-primary full" @click="play"><span>Watch the film</span><span>→</span></button>
        </div>
      </aside>
    </section>

    <!-- Prev / Next -->
    <nav class="d-nav pad-x">
      <NuxtLink v-if="prev" :to="`/work/${prev.slug}`" class="nav-link prev">
        <span class="ts">← Previous</span>
        <span class="font-display nt">{{ prev.title }} <span class="it">{{ prev.titleItalic }}</span></span>
      </NuxtLink>
      <NuxtLink v-if="next" :to="`/work/${next.slug}`" class="nav-link next">
        <span class="ts">Next →</span>
        <span class="font-display nt">{{ next.title }} <span class="it">{{ next.titleItalic }}</span></span>
      </NuxtLink>
    </nav>

    <ContactBlock />

    <VideoModal
      v-model="modalOpen"
      :src="project.videoEmbed ?? ''"
      :title="title"
      :subtitle="`${project.category} · ${project.runtime}`" />
  </article>
</template>

<script setup lang="ts">
import { getProject, adjacentProjects } from '~/data/projects'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const project = computed(() => getProject(slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Film not found', fatal: true })
}

const { prev, next } = adjacentProjects(slug.value)
const title = computed(() => `${project.value?.title ?? ''} ${project.value?.titleItalic ?? ''}`.trim())

const modalOpen = ref(false)
function play() {
  if (project.value?.videoEmbed) modalOpen.value = true
}

useHead(() => ({
  title: `${title.value} · Moiz Zaidi`,
  meta: [{ name: 'description', content: project.value?.blurb ?? '' }]
}))
</script>

<style scoped>
.d-hero { padding-top: calc(var(--nav-h) + 70px); padding-bottom: 36px; display: flex; flex-direction: column; gap: 20px; }
.back { color: var(--bone-2); width: fit-content; transition: color .3s var(--ease); }
.back:hover { color: var(--amber); }
.d-top { display: flex; align-items: center; gap: 18px; }
.idx { font-size: 13px; color: var(--bone-3); padding: 4px 10px; border: 1px solid var(--line); border-radius: 6px; }
.cat { color: var(--bone-2); }
.d-title { font-family: var(--ff-display); font-weight: 400; font-size: clamp(48px, 9vw, 150px); line-height: .95; letter-spacing: -0.02em; }
.d-title .it { font-style: italic; color: var(--amber); }
.d-blurb { color: var(--bone-2); font-size: clamp(17px, 1.8vw, 22px); max-width: 56ch; line-height: 1.5; }

.d-media { margin: 16px 0 80px; }
.frame { position: relative; display: block; width: 100%; aspect-ratio: 21/9; overflow: hidden; border-radius: 6px; background: var(--ink-2); border: 1px solid var(--line); isolation: isolate; }
.frame.playable { cursor: pointer; }
@media (max-width: 700px) { .frame { aspect-ratio: 16/10; } }
.bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.bg.img { filter: brightness(.78); }
.m-scrim { position: absolute; inset: 0; background: radial-gradient(60% 60% at 50% 50%, transparent, rgba(0,0,0,.45)); }
.m-play { position: absolute; inset: 0; margin: auto; width: 88px; height: 88px; display: grid; place-items: center; }
.m-play .ring { position: absolute; inset: 0; border: 1px solid var(--bone); border-radius: 50%; opacity: .6; transition: background .4s var(--ease), border-color .4s var(--ease); }
.frame:hover .m-play .ring { background: var(--amber); border-color: var(--amber); }
.m-play .tri { position: relative; width: 0; height: 0; margin-left: 6px; border-left: 20px solid var(--bone); border-top: 12px solid transparent; border-bottom: 12px solid transparent; transition: border-left-color .4s var(--ease); }
.frame:hover .m-play .tri { border-left-color: var(--ink-0); }
.m-meta { position: absolute; left: 22px; bottom: 20px; display: flex; gap: 8px; color: var(--bone); text-shadow: 0 1px 4px rgba(0,0,0,.7); }

.d-body { display: grid; grid-template-columns: 1.5fr 0.9fr; gap: 56px; padding-bottom: 90px; }
@media (max-width: 900px) { .d-body { grid-template-columns: 1fr; gap: 40px; } }
.head { color: var(--bone-3); display: block; margin-bottom: 18px; }
.d-desc p { color: var(--bone-2); font-size: clamp(16px, 1.6vw, 19px); line-height: 1.7; margin-bottom: 18px; max-width: 60ch; }
.sc-head { margin-top: 44px; }
.scenes { display: flex; flex-direction: column; }
.scene { display: grid; grid-template-columns: 16px 1fr auto; align-items: center; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--line-2); }
.scene .s-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--bone-3); }
.scene[data-tone="amber"] .s-dot { background: var(--amber); }
.scene[data-tone="cool"] .s-dot { background: oklch(0.7 0.12 240); }
.scene[data-tone="red"] .s-dot { background: var(--red); }
.scene .s-label { color: var(--bone); font-size: 15px; }
.scene .s-sub { color: var(--bone-3); font-size: 12px; }

.d-side .card { background: var(--ink-2); border: 1px solid var(--line); border-radius: 6px; padding: 28px; position: sticky; top: calc(var(--nav-h) + 20px); }
.credits { display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; }
.credit { display: flex; justify-content: space-between; gap: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--line-2); }
.credit dt { color: var(--bone-3); }
.credit dd { color: var(--bone); text-align: right; }
.specs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
.spec { display: flex; flex-direction: column; gap: 4px; }
.spec span:last-child { color: var(--bone); font-family: var(--ff-display); font-size: 22px; }
.btn.full { width: 100%; justify-content: center; }

.d-nav { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding-bottom: 90px; }
@media (max-width: 600px) { .d-nav { grid-template-columns: 1fr; } }
.nav-link { display: flex; flex-direction: column; gap: 10px; padding: 28px; border: 1px solid var(--line); border-radius: 6px; transition: background .4s var(--ease), border-color .4s var(--ease); }
.nav-link:hover { background: var(--ink-2); border-color: var(--bone-3); }
.nav-link.next { align-items: flex-end; text-align: right; }
.nav-link .ts { color: var(--bone-3); }
.nav-link .nt { font-size: clamp(22px, 2.4vw, 34px); color: var(--bone); }
.nav-link .it { font-style: italic; color: var(--amber); }
</style>
