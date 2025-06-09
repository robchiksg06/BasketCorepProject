import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.common['Accept'] = 'application/json'

const app = createApp(App)
app.use(router) // <- pieslēdz router
app.mount('#app')
