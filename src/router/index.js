import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../components/views/HomePage")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/views/connexion/Login"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: () => import("../components/views/connexion/CreateAccount"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/create-user",
    name: "CreateUser",
    component: () => import("../components/views/connexion/CreateUser"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/create-asso",
    name: "CreateAsso",
    component: () => import("../components/views/connexion/CreateAsso"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: () => import("../components/views/connexion/Thanks"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../components/views/Product"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: () => import("../components/views/AddProduct"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/detailled-product",
    name: "DetailledProduct",
    component: () => import("../components/views/DetailledProduct"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/views/About"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/views/ContactForm"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if(store.getters.isLoggedIn) {
      next('/product')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
