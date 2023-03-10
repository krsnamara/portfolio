import { createRouter, createWebHistory } from 'vue-router'
import MainCard from '../views/MainCard.vue'
import PostProjects from '../views/PostProjects.vue'
import ProjectsCard from '../views/ProjectsCard.vue'
import ResumeCard from '../views/ResumeCard.vue'
import ServicesCard from '../views/ServicesCard'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainCard
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsCard
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeCard
  },
  {
    path: '/blog',
    name: 'blog',
    component: ServicesCard
  },
  {
    path: '/post',
    name: 'Post',
    component: PostProjects
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior ( to, from, savedPosition) {
    return savedPosition || {top:0}
    // return {top:null, left: null, behavior: null}
  }
})

export default router
