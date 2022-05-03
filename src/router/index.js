import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoresView from '../views/StoresView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store/:id',
    name: 'StoresView',
    component: StoresView
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
