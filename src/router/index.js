import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import MyAbout from '../views/about.vue';
import MyWork from '../views/myWork.vue';
import MyContact from '../views/contactUs.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-work',
    name: 'MyWork',
    component: MyWork
  },
  {
    path: '/about',
    name: 'About',
    component: MyAbout
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: MyContact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
