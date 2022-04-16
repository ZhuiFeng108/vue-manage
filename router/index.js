import Vue from "vue"
import VueRouter from 'vue-router'
// import VueHome from '../views/VueHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user'),
      },
    ]
  },
  // {
  //   path: '/user',  
  //   name: 'VueUser',
  //   component: () => import('../views/VueUser.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router