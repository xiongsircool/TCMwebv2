import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dialogue',
      name: 'dialogue',
      component: () => import('../views/Dialogue.vue')
    },
    {
      path: '/knowledge-graph',
      name: 'knowledge-graph',
      component: () => import('../views/KnowledgeGraph.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router