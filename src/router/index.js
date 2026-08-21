import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Object from '../views/Object.vue'
import Object93 from '../views/Object93.vue'
import L93 from '../views/L93.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/l93/p:id',
    name: 'L93Object',
    component: Object93
  },
  {
    path: '/l93',
    name: 'L93',
    component: L93
  },
  {
    path: '/p:id',
    name: 'Object',
    component: Object
  },
  {
    path: '*', 
    redirect: '/'
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
