
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Login from '@/components/Login'
import dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
   
  ]
})

