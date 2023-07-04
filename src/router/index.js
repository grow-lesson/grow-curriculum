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
    path: "/environment",
    name: "Environment",
    component: () => import("../components/init/Environment.vue"),
  },
  {
    path: "/procedure",
    name: "Procedure",
    component: () => import("../components/init/Procedure.vue"),
  },
  {
    path: "/users",
    name: "UserList",
    component: () => import("../components/users/UserList.vue"),
  },
  {
    path: "/menu",
    name: "MenuPage",
    component: () => import("../components/MenuPage.vue"),
  },
  {
    path: "/html-lesson-menu",
    name: "HtmlMenuPage",
    component: () => import("../components/course/course-1/HtmlMenuPage.vue"),
  },
  {
    path: "/html-lesson-1",
    name: "HtmlPage1",
    component: () => import("../components/course/course-1/HtmlPage1.vue"),
  },
  {
    path: "/html-lesson-2",
    name: "HtmlPage2",
    component: () => import("../components/course/course-1/HtmlPage2.vue"),
  },
  {
    path: "/html-lesson-3",
    name: "HtmlPage3",
    component: () => import("../components/course/course-1/HtmlPage3.vue"),
  },
  {
    path: "/commandline-lesson-menu",
    name: "CommandLineMenuPage",
    component: () => import("../components/course/course-2/CommandLineMenuPage.vue"),
  },
  {
    path: "/commandline-lesson-1",
    name: "CommadLinePage1",
    component: () => import("../components/course/course-2/CommadLinePage1.vue"),
  },
  {
    path: "/Git-lesson-menu",
    name: "GitMenuPage",
    component: () => import("../components/course/course-3/GitMenuPage.vue"),
  },
  {
    path: "/Git-lesson-1",
    name: "GitPage1",
    component: () => import("../components/course/course-3/GitPage1.vue"),
  },
  {
    path: "/Git-lesson-2",
    name: "GitPage2",
    component: () => import("../components/course/course-3/GitPage2.vue"),
  },
  {
    path: "/Git-lesson-3",
    name: "GitPage3",
    component: () => import("../components/course/course-3/GitPage3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/grow-curriculum/"),
  routes,
});

export default router;
