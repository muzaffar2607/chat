import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/index.vue"),
    },
    // {
    //   path: "/",
    //   name: "user-body",
    //   component: () => import("@/views/index.vue"),
    //   children: [
    //     {
    //       path: ":/chat",
    //       name: "user-chat",
    //       component: () => import("@/views/user/chat.vue"),
    //     },
    //   ],
    // },
  ],
});

export default router;
