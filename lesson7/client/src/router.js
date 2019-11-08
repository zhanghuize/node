import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/index',
      name:'index',
      component:()=>import('./views/index.vue')
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('./views/home.vue')
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
