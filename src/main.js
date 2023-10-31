import { createApp } from 'vue'

import App from './App.vue'
import './style.css'
import router from './router/router';
import pinia from './Store/index'; 
import Vue3Marquee from 'vue3-marquee'
const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(Vue3Marquee)
app.mount('#app');
