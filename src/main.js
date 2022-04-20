import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueFeatherIcon from 'vue-feather-icon'

createApp(App).use(store).use(router).use(VueFeatherIcon).mount('#app')
