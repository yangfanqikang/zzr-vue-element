import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
