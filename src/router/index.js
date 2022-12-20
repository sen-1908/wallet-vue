import { createRouter, createWebHashHistory } from 'vue-router'
import indexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: indexView
  },
  {
    path: '/edit',
    name: 'edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
