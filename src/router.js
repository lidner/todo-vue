import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/Login.vue'
import Logout from './components/auth/Logout.vue'
import Register from './components/auth/Register.vue'
import About from './components/marketing/About.vue'
import LandingPage from './components/marketing/LandingPage.vue'
import App from './App'
import TestTodosVariable from './components/marketing/TestTodosVariable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/todo',
      name: 'todo',
      component: App,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/todos/:id',
      name: 'todos',
      component: TestTodosVariable
    }
  ]
})
