import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ArticleView from "@/views/ArticleView.vue";
import NavbarView from "@/views/NavbarView.vue";
import PersonalLoansView from "@/views/PersonalLoansView.vue";

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/article-page',
      name: 'article',
      component: ArticleView,
    },
    {
      path: '/personal-loans',
      name: 'personal-loans',
      component: PersonalLoansView,
    },
    {
      path: '/navbar-page',
      name: 'navbar',
      component: NavbarView,
    },
  ]
})

export default router
