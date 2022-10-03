import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { rootStore } from './store'


createApp(App).use(rootStore).use(router).mount('#app')
