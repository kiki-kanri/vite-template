// Load css and scss
import '@/style.css'

// Import app
import { createApp } from 'vue'
import App from '@/App.vue'

// Router and store
import router from '@/router'
import store from '@/store'

// Create app

const app = createApp(App);

app.use(router).use(store);

// Mount app
app.mount('#app');
