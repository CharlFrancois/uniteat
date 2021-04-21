import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/views/Login')
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: () => import('../components/views/CreateUser')
  },
  {
    path: '/create-asso',
    name: 'CreateAsso',
    component: () => import('../components/views/CreateAsso')
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('../components/views/AddProduct')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/views/EditUser')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router