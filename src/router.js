import Vue from 'vue'
import Router from 'vue-router'
import Customers from './components/Customers.vue'
import About from './components/About.vue'
import Add from './components/Add.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',component:Customers},
    {path:'/about',component:About},
    {path:'/add',component:Add},
    {path:'/customer/:id',component:CustomerDetails},
    {path:'/edit/:id',component:Edit}



  ]
})
