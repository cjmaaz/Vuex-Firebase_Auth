import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global styles
import './assets/main.css'

// Store
import store from './store';

createApp(App).use(router).use(store).mount('#app');