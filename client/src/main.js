import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueSweetAlert)
  .mount('#app')
