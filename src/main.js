import { createApp } from 'vue'
import App from './App.vue'

import Toaster from '@meforma/vue-toaster';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faXmark, faCheck)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(Toaster)
    .mount('#app')
