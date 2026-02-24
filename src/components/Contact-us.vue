<template>
  <section class="contact-page">
    <!-- Hero banner -->
    <div class="contact-hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <span class="eyebrow">Contact</span>
        <h1>Let's Stay<br />Connected</h1>
      </div>
    </div>

    <!-- Main content -->
    <div class="contact-body">
      <div class="contact-info">
        <div class="info-block">
          <p class="section-label">About Collaboration</p>
          <p class="info-text">
            Feel free to reach out to explore opportunities for TV commercials, music videos,
            documentaries, TV projects, corporate commissions, or collaborative ventures.
          </p>
          <p class="info-text">
            Whether you have a clear project in mind or are looking to brainstorm ideas together,
            I'm here to listen and help bring your vision to life.
          </p>
        </div>

        <div class="details-block">
          <p class="section-label">Contact Details</p>
          <div class="detail-row">
            <span class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </span>
            <span>Moiz Zaidi</span>
          </div>
          <div class="detail-row">
            <span class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
              </svg>
            </span>
            <a href="https://www.moizzaidi.com" target="_self">moizzaidi.com</a>
          </div>
          <div class="detail-row">
            <span class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </span>
            <a href="tel:+923334454814">+92 333 445 4814</a>
          </div>
          <div class="detail-row">
            <span class="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </span>
            <a href="mailto:moix.xaidi@gmail.com">moix.xaidi@gmail.com</a>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="contact-form-wrap">
        <p class="section-label">Send a Message</p>
        <form @submit.prevent="submitForm" class="contact-form" novalidate>
          <div class="field-group">
            <div class="field">
              <label for="name">Name <span class="req">*</span></label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                @input="validateField('name')"
                :class="{ 'has-error': errors.name }"
                placeholder="Your full name"
              />
              <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
            </div>
            <div class="field">
              <label for="company">Company <span class="req">*</span></label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                @input="validateField('company')"
                :class="{ 'has-error': errors.company }"
                placeholder="Your company"
              />
              <span v-if="errors.company" class="error-msg">{{ errors.company }}</span>
            </div>
            <div class="field">
              <label for="email">Email <span class="req">*</span></label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                @input="validateField('email')"
                :class="{ 'has-error': errors.email }"
                placeholder="your@email.com"
              />
              <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
            </div>
            <div class="field">
              <label for="phone">Phone <span class="req">*</span></label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                @input="validateField('phone')"
                :class="{ 'has-error': errors.phone }"
                placeholder="+92 300 0000000"
              />
              <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
            </div>
            <div class="field field--full">
              <label for="subject">Subject <span class="req">*</span></label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                @input="validateField('subject')"
                :class="{ 'has-error': errors.subject }"
                placeholder="Project type or brief"
              />
              <span v-if="errors.subject" class="error-msg">{{ errors.subject }}</span>
            </div>
            <div class="field field--full">
              <label for="message">Message <span class="req">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                @input="validateField('message')"
                :class="{ 'has-error': errors.message }"
                rows="5"
                placeholder="Tell me about your project…"
              ></textarea>
              <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
            </div>
          </div>

          <div class="form-actions">
            <Transition name="fade">
              <span v-if="sent" class="success-msg">Message sent successfully!</span>
            </Transition>
            <button type="submit" :disabled="sending" class="submit-btn">
              <span v-if="!sending">Send Message</span>
              <span v-else class="btn-loader"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
const errors = ref({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
const sending = ref(false);
const sent = ref(false);

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.value.name = form.value.name.length >= 2 ? '' : 'Name must be at least 2 characters';
      break;
    case 'company':
      errors.value.company = form.value.company.length >= 2 ? '' : 'Company must be at least 2 characters';
      break;
    case 'email': {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.value.email = emailRegex.test(form.value.email) ? '' : 'Please enter a valid email address';
      break;
    }
    case 'phone': {
      const phoneRegex = /^\+?\d{10,15}$/;
      errors.value.phone = phoneRegex.test(form.value.phone) ? '' : 'Please enter a valid phone number';
      break;
    }
    case 'subject':
      errors.value.subject = form.value.subject ? '' : 'Subject is required';
      break;
    case 'message':
      errors.value.message = form.value.message ? '' : 'Message is required';
      break;
  }
};

const hasErrors = computed(() => Object.values(errors.value).some(e => e));

const submitForm = async () => {
  Object.keys(form.value).forEach(f => validateField(f));
  if (hasErrors.value) return;

  sending.value = true;
  try {
    const response = await emailjs.send(
      'service_xlxdk0s',
      'template_5v20b45',
      form.value,
      '2Fwx-Wg3KGL9pXE84'
    );
    if (response.status === 200) {
      form.value = { name: '', company: '', email: '', phone: '', subject: '', message: '' };
      sent.value = true;
      setTimeout(() => { sent.value = false; }, 4000);
    }
  } catch {
    // handle silently
  } finally {
    sending.value = false;
  }
};
</script>

<style lang="scss" scoped>
.contact-page {
  background: #080808;
  min-height: 100vh;
}

/* Hero */
.contact-hero {
  position: relative;
  height: 420px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 60px 80px;

  @media (max-width: 768px) {
    height: 320px;
    padding: 40px 28px;
  }
  @media (max-width: 480px) {
    height: 280px;
    padding: 32px 20px;
  }
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('../assets/bts-6.jpeg');
  background-size: cover;
  background-position: 50% 60%;
  transform: scale(1.04);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 8, 8, 0.95) 0%,
    rgba(8, 8, 8, 0.4) 60%,
    rgba(8, 8, 8, 0.2) 100%
  );
}

.hero-text {
  position: relative;
  z-index: 2;

  .eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent, #1ca973);
    margin-bottom: 12px;
  }

  h1 {
    font-size: clamp(36px, 6vw, 66px);
    font-weight: 800;
    color: #fff;
    letter-spacing: -1.5px;
    line-height: 1.05;
    margin: 0;
  }
}

/* Body */
.contact-body {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 80px 100px;

  @media (max-width: 1024px) {
    gap: 60px;
    padding: 60px 48px 80px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 50px 28px 80px;
  }
  @media (max-width: 480px) {
    padding: 40px 20px 60px;
  }
}

.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent, #1ca973);
  margin-bottom: 20px;
}

.info-block {
  margin-bottom: 48px;

  .info-text {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 300;
    line-height: 1.8;
    margin: 0 0 14px;

    &:last-child { margin-bottom: 0; }
  }
}

.details-block {
  .detail-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:last-child { border-bottom: none; }

    span.detail-icon {
      color: var(--accent, #1ca973);
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    span:not(.detail-icon), a {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.65);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover { color: var(--accent, #1ca973); }
  }
}

/* Form */
.contact-form-wrap {
  background: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 40px;

  @media (max-width: 480px) {
    padding: 28px 20px;
    border-radius: 14px;
  }
}

.field-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &--full {
    grid-column: span 2;

    @media (max-width: 640px) {
      grid-column: span 1;
    }
  }

  label {
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.5px;
  }

  .req {
    color: var(--accent, #1ca973);
  }

  input, textarea {
    background: #141414;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 12px 14px;
    width: 100%;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
    outline: none;
    resize: vertical;

    &::placeholder { color: rgba(255, 255, 255, 0.2); }

    &:focus {
      border-color: var(--accent, #1ca973);
      box-shadow: 0 0 0 3px rgba(28, 169, 115, 0.1);
    }

    &.has-error {
      border-color: rgba(255, 80, 80, 0.5);
      box-shadow: 0 0 0 3px rgba(255, 80, 80, 0.08);
    }
  }

  textarea { min-height: 120px; }
}

.error-msg {
  font-size: 11px;
  color: rgba(255, 100, 100, 0.9);
  margin-top: 2px;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 32px;
  background: var(--accent, #1ca973);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
  min-width: 150px;

  &:hover:not(:disabled) {
    background: #28e98c;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.btn-loader {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.success-msg {
  font-size: 13px;
  color: var(--accent, #1ca973);
  font-weight: 500;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
