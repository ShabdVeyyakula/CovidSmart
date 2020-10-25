
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Dashboard from '@/components/Dashboard'
import Maps from '@/components/Maps'
import Logs from '@/components/Logs'

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
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
   
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },

    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    },
  ]
})

