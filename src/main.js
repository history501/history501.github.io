import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import ProjectDescription from './components/ProjectDescription.vue'
import ProjectMap from './components/ProjectMap.vue'
import ProjectVideo from './components/ProjectVideo.vue'
import PhotoModal from './components/PhotoModal.vue'
Vue.component('app-project-description', ProjectDescription)
Vue.component('app-project-map', ProjectMap)
Vue.component('app-project-video', ProjectVideo)
Vue.component('app-photo-modal', PhotoModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
