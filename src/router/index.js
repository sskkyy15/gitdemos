import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'

// vue插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '',
      component: Home
    },
    {
      path: '/login',
      name: '',
      component: Login
    }
  ]
})
