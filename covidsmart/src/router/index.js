import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/SignIn'
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
      path: '/',
      name: 'login',
      component: login
    },

    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
   
  ]
})
