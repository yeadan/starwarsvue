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
    //lazy load
    component: () => import("../components/BasicComponent.vue"),
    //Dependiendo del titulo creara un componente u otro a partir del Basic
    props: { titulo: "People" }
  },
  {
    path: '/api/planets',
    name: 'Planets',
    component: () => import("../components/BasicComponent.vue"),
    props: { titulo: "Planets" }
  },
  {
    path: '/api/starships',
    name: 'Starships',
    component: () => import("../components/BasicComponent.vue"),
    props: { titulo: "Starships" }
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
