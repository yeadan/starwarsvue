import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api/people',
    name: 'People',
    // lazy-load
    component: () => import('../components/People.vue')
  },
  {
    path: '/api/planets',
    name: 'Planets',
    // lazy-load
    component: () => import('../components/Planets.vue')
  },
  {
    path: '/api/starships',
    name: 'Starships',
    // lazy-load
    component: () => import('../components/Starships.vue')
  },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
