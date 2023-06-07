import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../components/WelcomePage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/LoginPage.vue"),
  },
  {
    path: "/menu",
    name: "MenuPage",
    component: () => import("../components/MenuPage.vue"),
    // meta: { requiresAuth: true }, // ログインが必要なページ
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
