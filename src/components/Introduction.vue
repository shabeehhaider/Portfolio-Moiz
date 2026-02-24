<template>
  <section class="intro" ref="sectionRef">
    <div class="intro-inner">
      <div class="intro-label" :class="{ 'is-visible': isVisible }">
        <span class="eyebrow">About</span>
        <span class="divider-h"></span>
      </div>
      <h2 class="intro-heading" :class="{ 'is-visible': isVisible, 'd2': true }">
        The Art of<br /><span class="muted-text">Cinematic Storytelling</span>
      </h2>
      <div class="intro-body">
        <p :class="{ 'is-visible': isVisible, 'd3': true }">
          With a decade of experience in filmmaking and commercial directing, I bring a wealth of expertise in creating captivating narratives. Holding a master's degree in filmmaking from Punjab University, Lahore, my journey is driven by passion and dedication.
        </p>
        <p :class="{ 'is-visible': isVisible, 'd4': true }">
          I specialize in the automobile industry, having directed and conceptualized campaigns for brands like <strong>Hyundai, Toyota, Peugeot, Kia, MG,</strong> and <strong>Suzuki.</strong> Beyond this, I have collaborated with industry giants such as <strong>Coca-Cola, Unilever,</strong> and <strong>Procter &amp; Gamble,</strong> weaving stories that reflect the human experience.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<style lang="scss" scoped>
.intro {
  background: #080808;
  padding: 100px 80px;
  border-top: 1px solid rgba(255,255,255,0.05);

  @media (max-width: 1024px) { padding: 80px 48px; }
  @media (max-width: 768px)  { padding: 60px 28px; }
  @media (max-width: 480px)  { padding: 50px 20px; }
}

.intro-inner {
  max-width: 880px;
  margin: 0 auto;
}

/* ─ Label row ─────────────────────────────────────────────── */
.intro-label {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.65s ease, transform 0.65s ease;

  &.is-visible { opacity: 1; transform: translateY(0); }
}

.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #1ca973;
  white-space: nowrap;
}

.divider-h {
  flex: 1;
  height: 1px;
  background: rgba(255,255,255,0.07);
}

/* ─ Heading ───────────────────────────────────────────────── */
.intro-heading {
  font-size: clamp(34px, 5vw, 58px);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin: 0 0 44px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;

  &.is-visible { opacity: 1; transform: translateY(0); }
}

.muted-text {
  color: rgba(255,255,255,0.22);
}

/* ─ Body ──────────────────────────────────────────────────── */
.intro-body {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

p {
  font-size: 16px;
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  line-height: 1.9;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;

  &.d4 { transition-delay: 0.32s; }
  &.is-visible { opacity: 1; transform: translateY(0); }

  strong {
    color: rgba(255,255,255,0.8);
    font-weight: 500;
  }

  @media (max-width: 768px) { font-size: 15px; }
  @media (max-width: 480px) { font-size: 14px; }
}
</style>
