import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/connexion/Login"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: () => import("@/views/connexion/CreateAccount"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/create-user",
    name: "CreateUser",
    component: () => import("@/views/connexion/CreateUser"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/create-asso",
    name: "CreateAsso",
    component: () => import("@/views/connexion/CreateAsso"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: () => import("@/views/connexion/Thanks"),
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: () => import("@/views/MyAccount"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Product"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: () => import("@/views/AddProduct"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/ContactForm"),
  },
  {
    path: "/password-forget",
    name: "PasswordForget",
    component: () => import("@/views/connexion/PasswordForget"),
    meta: {
      requiresGuest: true,
    },
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
