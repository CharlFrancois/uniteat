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
    component: () => import('../components/views/connexion/Login')
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component: () => import('../components/views/connexion/CreateAccount')
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: () => import('../components/views/connexion/CreateUser')
  },
  {
    path: '/create-asso',
    name: 'CreateAsso',
    component: () => import('../components/views/connexion/CreateAsso')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: () => import('../components/views/connexion/Thanks')
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('../components/views/AddProduct')
  },
  {
    path: '/detailled-product',
    name: 'DetailledProduct',
    component: () => import('../components/views/DetailledProduct')
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