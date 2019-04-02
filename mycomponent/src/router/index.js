import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/page/login/register'
import Login from '@/page/login/Login'
import Vi from '@/page/VisionStandard'
import Index from '@/page/home/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vi',
      name: 'Vi',
      component: Vi
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
