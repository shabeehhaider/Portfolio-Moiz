import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import VueSplide from '@splidejs/vue-splide';
import { Quasar, QIcon } from 'quasar'; // Import QIcon directly if needed

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
  components: {
    QIcon // Register QIcon here
  }
});

app.use(VueSplide);
app.use(router);
app.mount('#app');
