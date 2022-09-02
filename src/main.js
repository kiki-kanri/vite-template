// load Css and scss
import '@/style.css'

// Create app
import { createApp } from 'vue'
import App from '@/App.vue'
const app = createApp(App);

// Router and store
import router from '@/router'
import store from '@/store'

app.use(router).use(store);

// Mount app
app.mount('#app');
