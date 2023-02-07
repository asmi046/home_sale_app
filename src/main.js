import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import mycss from './assets/style.css'

createApp(App).use(mycss).use(router).use(store).mount('#app')
