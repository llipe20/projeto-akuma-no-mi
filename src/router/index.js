import { createRouter, createWebHistory } from 'vue-router'
import FavoRite from '../views/FavoRite.vue'
import HomeView from '../views/HomeView.vue'
import TrendIng from '../views/TrendIng.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoRite
  },
  {
    path: '/trending',
    name: 'trending',
    component: TrendIng
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
