<template>
  <section class="what-i-do" ref="sectionRef">
    <div class="section-top reveal" :class="{ visible: isVisible }">
      <span class="eyebrow">Expertise</span>
      <h2>My Specializations</h2>
    </div>

    <div class="cards-grid">
      <div
        v-for="(item, i) in specializations"
        :key="i"
        class="spec-card reveal"
        :class="{ visible: isVisible, [`reveal-delay-${i + 1}`]: true }"
      >
        <div class="card-icon">
          <span v-html="item.icon"></span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>

      <router-link to="/contact-us" class="cta-card reveal" :class="{ visible: isVisible, 'reveal-delay-4': true }">
        <div class="cta-inner">
          <span class="cta-label">Ready to collaborate?</span>
          <span class="cta-heading">Let's Create<br />Together</span>
          <span class="cta-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sectionRef = ref(null);
const isVisible = ref(false);

const specializations = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
    title: 'Direction',
    body: 'With over a decade directing commercials, short films, and feature films, I bring meticulous attention to detail and a collaborative approach — guiding actors and crew to bring the overarching vision to life with precision.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>`,
    title: 'Production',
    body: 'From pre-production planning to final wrap, I orchestrate all elements seamlessly — managing budgets, timelines, and resources with an extensive network of industry professionals to ensure exceptional quality.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    title: 'Creative',
    body: 'Creativity is at the heart of everything I do. I generate innovative concepts, craft engaging scripts, and design striking visuals — staying ahead of trends to ensure my work remains fresh, impactful, and true to the brand.',
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<style lang="scss" scoped>
.what-i-do {
  background: #080808;
  padding: 100px 80px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 1024px) {
    padding: 80px 48px;
  }
  @media (max-width: 768px) {
    padding: 60px 28px;
  }
  @media (max-width: 480px) {
    padding: 50px 20px;
  }
}

.section-top {
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent, #1ca973);
  margin-bottom: 14px;
}

h2 {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.8px;
  margin: 0;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 240px;
  gap: 20px;
  align-items: stretch;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

.spec-card {
  background: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:hover {
    border-color: rgba(28, 169, 115, 0.2);
    background: #111;

    .card-icon { border-color: rgba(28, 169, 115, 0.3); }
  }

  @media (max-width: 768px) {
    padding: 28px 24px;
  }
}

.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent, #1ca973);
  transition: border-color 0.3s ease;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75;
  margin: 0;
}

.cta-card {
  background: linear-gradient(135deg, rgba(28, 169, 115, 0.12) 0%, rgba(28, 169, 115, 0.03) 100%);
  border: 1px solid rgba(28, 169, 115, 0.2);
  border-radius: 16px;
  padding: 36px 32px;
  text-decoration: none;
  display: flex;
  align-items: center;
  min-width: 220px;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(28, 169, 115, 0.22) 0%, rgba(28, 169, 115, 0.08) 100%);
    border-color: rgba(28, 169, 115, 0.4);

    .cta-arrow {
      transform: translate(4px, -4px);
    }
  }

  @media (max-width: 1200px) {
    min-width: unset;
    grid-column: span 2;
  }
  @media (max-width: 640px) {
    grid-column: span 1;
  }
}

.cta-inner {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.cta-label {
  font-size: 11px;
  font-weight: 500;
  color: rgba(28, 169, 115, 0.7);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.cta-heading {
  font-size: 26px;
  font-weight: 700;
  color: var(--accent, #1ca973);
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.cta-arrow {
  display: inline-flex;
  align-items: center;
  color: var(--accent, #1ca973);
  margin-top: 8px;
  transition: transform 0.3s ease;
}
</style>
