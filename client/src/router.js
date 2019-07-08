import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/landing.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {path: "*", redirect: "/"},
   {path: '/', component: Landing},
   {path: '/login', component: Login},
   {path: '/register', component: Register}

  ]
})
