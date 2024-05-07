import { createRouter, createWebHistory } from 'vue-router'
import Vsita from '../vista.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Actividad1',
      name: 'Actividad1',
      component: () => import('../views/users/actividad1.vue')
    },
    {
      path: '/Actividad2',
      name: 'Actividad2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/users/actividad2.vue')
    }
  ]
})

export default router
