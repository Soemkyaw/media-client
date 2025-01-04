import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import PostDetail from '@/views/PostDetail.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/posts/detail',
    name: 'detail',
    component: PostDetail
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
