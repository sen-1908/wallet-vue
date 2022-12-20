import { createRouter, createWebHashHistory } from 'vue-router'
import indexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: indexView
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostView.vue')
  },
  {
    path: '/show/:id',
    name: 'show',
    props: true,
    component: () => import('../views/ShowView.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/EditView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
