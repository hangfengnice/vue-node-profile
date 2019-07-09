import Vue from 'vue'
import Router from 'vue-router'
import Landing from './components/landing.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Dashboard from './components/dashboard.vue'
import CreateProfile from './components/createProfile.vue'
import EditProfile from './components/common/editProfile.vue'
import AddExperience from './components/addExperience.vue'
import AddEducation from './components/addEducation.vue'



Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {path: "*", redirect: "/"},
   {path: '/', component: Landing},
   {path: '/login', component: Login},
   {path: '/register', component: Register},
   {path: '/dashboard', component: Dashboard},
   {path: '/createprofile', component: CreateProfile},
   {path: '/edit-profile', component: EditProfile},
   {path: '/add-experience', component: AddExperience},
   {path: '/add-education', component: AddEducation},





  ]
})

router.beforeEach((to, from, next) => {
  // 获取token
  const isLogin = localStorage.jwtToken ? true : false
  if(to.path == '/login' || to.path == '/register') next()
  else{
     isLogin ? next() : next('/login')
  }
})

export default router
