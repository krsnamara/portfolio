import { createRouter, createWebHistory } from 'vue-router'
import MainCard from '../views/MainCard.vue'
import PostProjects from '../views/PostProjects.vue'
import ProjectsCard from '../views/ProjectsCard.vue'
import ResumeCard from '../views/ResumeCard.vue'
import ContactCard from '../views/ContactCard.vue'

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
    path: '/contact',
    name: 'contact',
    component: ContactCard
  },
  {
    path: '/post',
    name: 'Post',
    component: PostProjects
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
