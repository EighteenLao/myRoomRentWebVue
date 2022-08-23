import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import AppHome from '../components/AppHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome
  },
  {
    path: '/AppHome',
    name: 'AppHome',
    component: () => import( '../components/AppHome.vue')
  },
  {
    path: '/AppHomePage',
    name: 'AppHomePage',
    component: () => import( '../components/AppHomePage.vue')
  },
  {
    path: '/AppRoomImg',
    name: 'AppRoomImg',
    component: () => import( '../components/AppRoomImg.vue')
  },
  {
    path: '/AppContact',
    name: 'AppContact',
    component: () => import( '../components/AppContact.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
