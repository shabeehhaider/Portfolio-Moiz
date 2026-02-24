<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="../assets/logorm.png" alt="Moiz Zaidi" class="footer-logo" />
          <p class="footer-tagline">Director · Producer · Creative</p>
        </div>
        <nav class="footer-nav">
          <a href="/">Home</a>
          <a href="/my-work">My Work</a>
          <a href="/about">About</a>
          <a href="/contact-us">Contact</a>
        </nav>
        <div class="footer-contact">
          <a href="mailto:moix.xaidi@gmail.com" class="contact-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            moix.xaidi@gmail.com
          </a>
          <a href="tel:+923334454814" class="contact-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +92 333 445 4814
          </a>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="footer-copy">&copy; {{ new Date().getFullYear() }} Moiz Zaidi. All rights reserved.</p>
        <div class="social-row">
          <a target="_blank" href="mailto:moix.xaidi@gmail.com" title="Email" class="social-btn">
            <q-icon name="mail" />
          </a>
          <a target="_blank" href="https://x.com/MoizMoix" title="X / Twitter" class="social-btn">
            <img src="../assets/socials/twitter.png" width="16" height="16" alt="Twitter" />
          </a>
          <a target="_blank" href="https://www.threads.net/@moiz.zaidi" title="Threads" class="social-btn">
            <img src="../assets/socials/threads.svg" width="16" height="16" alt="Threads" />
          </a>
          <a href="https://www.youtube.com/@moizzaidi7068" target="_blank" title="YouTube" class="social-btn">
            <img src="../assets/youtube.svg" width="16" height="16" alt="YouTube" />
          </a>
          <a href="https://vimeo.com/user98514964" target="_blank" title="Vimeo" class="social-btn">
            <img src="../assets/vimeo.svg" width="16" height="16" style="filter: invert(1);" alt="Vimeo" />
          </a>
          <a href="https://wa.me/923334454814" target="_blank" title="WhatsApp" class="social-btn">
            <img src="../assets/whatsapp-icon.svg" width="16" height="16" alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/moiz-zaidi-6ba888237/" target="_blank" title="LinkedIn" class="social-btn">
            <img src="../assets/socials/linkedin.svg" width="16" height="16" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/moiz.zaidi" target="_blank" title="Instagram" class="social-btn">
            <img src="../assets/socials/instagram.svg" width="16" height="16" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
.site-footer {
  background: #080808;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 60px 0 0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 28px;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  gap: 40px;
  padding-bottom: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

.footer-brand {
  .footer-logo {
    height: 64px;
    width: auto;
    object-fit: contain;
    margin-bottom: 12px;
    display: block;
  }

  .footer-tagline {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 1px;
    margin: 0;
  }
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px 20px;
  }

  a {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.45);
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.25s ease;

    &:hover { color: #fff; }
  }
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.contact-line {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color 0.25s ease;

  &:hover { color: var(--accent, #1ca973); }
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

.footer-copy {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.22);
  margin: 0;
}

.social-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.social-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;

  i { font-size: 20px; }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  &:hover {
    background: #1ca973;
    border-color: #1ca973;
    color: #fff;
    transform: translateY(-2px);
  }
}
</style>
