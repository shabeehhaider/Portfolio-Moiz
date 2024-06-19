<template>
  <div class="social-links">
    <div>
      <a target="_blank" href="mailto:moix.xaidi@gmail.com">
        <q-icon name="mail" />
      </a>
    </div>
    <div>
      <a target="_blank" href="#">
        <img src="../assets/socials/twitter.png" width="28px" height="28px" />
      </a>
    </div>
    <div>
      <a target="_blank" href="#">
        <img src="../assets/socials/threads.svg" width="28px" height="28px" />
      </a>
    </div>
    <div>
      <a target="_blank" href="#">
        <img src="../assets/socials/facebook.svg" width="28px" height="28px" />
      </a>
    </div>
    <div>
      <a href="https://www.youtube.com/@moizzaidi7068" target="_blank">
        <img src="../assets/youtube.svg" width="28px" height="28px" />
      </a>
    </div>
    <div>
      <a href="https://vimeo.com/user98514964" target="_blank">
        <img src="../assets/vimeo.svg" width="28px" height="28px" style="filter: invert(1);" />
      </a>
    </div>
    <div>
      <a href="https://wa.me/923334454814" target="_blank">
        <img src="../assets/whatsapp-icon.svg" width="28px" height="28px" />
      </a>
    </div>
    <div>
      <a href="#" target="_blank">
        <img src="../assets/socials/linkedin.svg" width="28px" height="28px" />
      </a>
    </div>
    <div>
      <a href="#" target="_blank">
        <img src="../assets/socials/instagram.svg" width="28px" height="28px" />
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.social-links {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-top: 1px solid #ffffff;
  flex-wrap: wrap; /* Allow items to wrap */
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

  }

  img{
    width: 28px;
    height: 28px;
    color: #ffffff;
  }

  i{
    font-size: 28px;
    color: #ffffff;
  }
}

@media (max-width: 768px) {
  .social-links {
    padding: 30px; /* Adjust padding for smaller screens */
    gap: 15px; /* Adjust gap for smaller screens */
    
    img, i {
      width: 24px; /* Adjust icon size for smaller screens */
      height: 24px;
    }
  }
}

@media (max-width: 480px) {
  .social-links {
    padding: 20px; /* Adjust padding for smaller screens */
    gap: 10px; /* Adjust gap for smaller screens */
    
    img, i {
      width: 20px; /* Adjust icon size for smaller screens */
      height: 20px;
    }
  }
}
</style>
