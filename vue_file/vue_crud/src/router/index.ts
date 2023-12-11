import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Student from '../views/students/View.vue'
import Create from '../views/students/Create.vue'
import Edit from '../views/students/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/StudentView',
      name: 'Student',
      component: Student
    },
    {
      path: '/student/create',
      name: 'Create',
      component: Create
    }
    ,
    {
      path: '/students/:id/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})

export default router

