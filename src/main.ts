import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { rootStore } from './store'
import { i18n } from './plugins/vue-i18n-next-plugin'
import '@/assets/scss/flag-icons/index.scss' // <-- añadir esta línea

createApp(App).use(rootStore).use(router).use(i18n).mount('#app')
