<template>
  <section class="contact">
    <div class="contact-cover">
      <div class="cover-img"></div>
      <div class="contact-text">
        <h1>Let's Stay Connected</h1>
        <p>
          Feel free to reach out to explore opportunities for TV commercials, music videos, documentaries, TV projects, corporate commissions, or collaborative ventures. Whether you have a clear project in mind or are looking to brainstorm ideas together, I’m here to listen and help bring your vision to life.
        </p>
        <p>
          No matter the scale or scope of your project, I’m dedicated to delivering exceptional results and exceeding your expectations. Get in touch today to start a conversation about how we can work together to create something extraordinary.
        </p>
      </div>
      <div class="contact-details">
        <h1>Contact Details</h1>
        <p>Moiz Zaidi</p>
        <a href="https://www.moizzaidi.com" target="_self">
          moizzaidi.com
        </a>
        <p>+92333-4454814</p>
      </div>
      <div class="contact-form">
        <h1>Leave Me a Message</h1>
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Name*</label>
            <input type="text" id="name" v-model="form.name" @input="validateField('name')" required>
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
          </div>
          <div>
            <label for="company">Company*</label>
            <input type="text" id="company" v-model="form.company" @input="validateField('company')" required>
            <span v-if="errors.company" class="error">{{ errors.company }}</span>
          </div>
          <div>
            <label for="email">Email*</label>
            <input type="email" id="email" v-model="form.email" @input="validateField('email')" required>
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </div>
          <div>
            <label for="phone">Phone*</label>
            <input type="tel" id="phone" v-model="form.phone" @input="validateField('phone')" required>
            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
          </div>
          <div>
            <label for="subject">Subject*</label>
            <input type="text" id="subject" v-model="form.subject" @input="validateField('subject')" required>
            <span v-if="errors.subject" class="error">{{ errors.subject }}</span>
          </div>
          <div class="message">
            <label for="message">Message*</label>
            <textarea id="message" v-model="form.message" @input="validateField('message')" rows="4" required></textarea>
            <span v-if="errors.message" class="error">{{ errors.message }}</span>
          </div>
          <div>
            <button type="submit" :disabled="hasErrors">Send</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref , computed } from 'vue';
import emailjs from 'emailjs-com';

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const errors = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.value.name = form.value.name.length >= 2 ? '' : 'Name must be at least 2 characters long';
      break;
    case 'company':
      errors.value.company = form.value.company.length >= 2 ? '' : 'Company must be at least 2 characters long';
      break;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.value.email = emailRegex.test(form.value.email) ? '' : 'Please enter a valid email address';
      break;
    case 'phone':
      const phoneRegex = /^\+?\d{10,15}$/;
      errors.value.phone = phoneRegex.test(form.value.phone) ? '' : 'Please enter a valid phone number';
      break;
    case 'subject':
      errors.value.subject = form.value.subject ? '' : 'Subject is required';
      break;
    case 'message':
      errors.value.message = form.value.message  ? '' : 'Message is required';
      break;
    default:
      break;
  }
};

const hasErrors = computed(() => {
  return Object.values(errors.value).some(error => error);
});

const submitForm = async () => {
  for (const field in form.value) {
    validateField(field);
  }

  if (!hasErrors.value) {
    try {
      const serviceID = 'service_xlxdk0s'; 
      const templateID = 'template_5v20b45'; 
      const userID = '2Fwx-Wg3KGL9pXE84'; 

      const response = await emailjs.send(serviceID, templateID, form.value, userID);
      if (response.status === 200) {
        console.log('Message sent successfully!');
        form.value = { name: '', company: '', email: '', phone: '', subject: '', message: '' };
      } else {
        console.log('Failed to send message.');
      }
    } catch (error) {
      console.log('An error occurred while sending the message.');
    }
  }
};
</script>

<style scoped>
.contact-cover {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cover-img {
  width: 100%;
  height: 450px;
  background-image: url('../assets/bts-6.jpeg');
  background-size: cover;
  background-position: 50% 70%;
}

.contact-text, .contact-details, .contact-form {
  max-width: 70%;
  width: 100%;
  padding: 20px;
  color: #fefefe;
  text-align: left;
}

.contact-text h1, .contact-details h1, .contact-form h1 {
  font-size: 24px;
  text-transform: capitalize;
}

.contact-details a, .contact-form label, .contact-form input, .contact-form textarea, .contact-form button {
  margin-bottom: 15px;
}

.contact-details p{
  margin-bottom: 0px;
}

.contact-form {
  border: 1px solid #00ff43;
  border-radius: 20px;
  margin: 70px 0;
}

.contact-form form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-form div {
  width: 48%;
}

.contact-form div.message {
  width: 100%;
}

.contact-form input{
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form textarea{
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
}

.contact-form button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.contact-form button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
