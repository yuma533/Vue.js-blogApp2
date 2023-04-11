import { createRouter, createWebHistory } from 'vue-router'
import ViewAllArchives from '../views/ViewAllArchives.vue'
import Post from '../views/Post.vue'

const routes = [
  {
    path: '/',
    name: 'ViewAllArchives',
    component: ViewAllArchives
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
