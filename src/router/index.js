import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import StoresView from '../views/StoresView.vue'
import ProductView from '../views/ProductView.vue'
import TopView from '../views/TopView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store/:id',
    name: 'StoreView',
    component: StoreView
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/top',
    name: 'TopView',
    component: TopView
  },
  {
    path: '/stores',
    name: 'StoresView',
    component: StoresView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
