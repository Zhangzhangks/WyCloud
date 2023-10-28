import { createApp } from 'vue'

import App from './App.vue'
import './style.css'
import router from './router/router';
import pinia from './Store/index';
const app = createApp(App);
app.use(pinia)
app.use(router)
app.mount('#app');
