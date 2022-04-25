import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import MpesaPage from '../views/MpesaPage.vue'
import BankStatementsPage from '../views/BankStatementsPage.vue'
import InventoryPage from '../views/InventoryPage.vue'
import UploadPage from '../views/UploadPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/bankstatements',
    name: 'bankstatements',
    component: BankStatementsPage
  },
  {
    path: '/mpesa',
    name: 'mpesa',
    component: MpesaPage
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: InventoryPage
  },
  {
    path: '/upload',
    name: 'UploadPage',
    component: UploadPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
