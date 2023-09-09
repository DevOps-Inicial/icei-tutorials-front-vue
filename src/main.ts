import { createApp } from 'vue'
import App from './App.vue'
// Importamos el componente de rutas creado
import router from './router/router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
