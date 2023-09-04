import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/bomberos',
      name: 'bomberos',
      component: () => import('../views/Bomberos/Bomberos.vue')
    }
  ]
})

export default router
