import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index.vue"),
    children: [],
    meta: {
      middleware: "auth",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = to.query.token; // Or you can retrieve token from localStorage/sessionStorage
  if (to.meta.middleware === "auth" && !token) {
    // If user is not authenticated and trying to access an auth-protected route
    next({ name: "login" });
  } else if (to.name === "login" && token) {
    // If user is authenticated and tries to access the login page, redirect to home
    next({ name: "home" });
  } else {
    // Proceed to the intended route
    next();
  }
});

export default router;
