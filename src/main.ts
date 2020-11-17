import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { MdField, MdButton, MdContent, MdList, MdApp, MdToolbar, MdDrawer, MdIcon, MdCard, MdAvatar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdApp)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdToolbar)
Vue.use(MdDrawer)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdAvatar)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
