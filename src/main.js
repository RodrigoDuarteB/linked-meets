import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// font awesome icons
library.add(fas, fab,
    far)

//app
const app = createApp(App)

app.component('Fa', FontAwesomeIcon)

app.use(router)

app.mount('#app')
