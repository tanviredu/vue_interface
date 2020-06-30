import Vue from 'vue'
import App from './App.vue'

// everythnig you import here will be globally availabe


Vue.config.productionTip = false

import "bootstrap"// this will import the js version


import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {library} from "@fortawesome/fontawesome-svg-core"

// this icon will be imported as a separate component
// you need to call  it just like a called a component
import { faPlus,faMinus,faTrash,faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus,faMinus,faTrash,faCheck);



new Vue({
  render: h => h(App),
}).$mount('#app')
