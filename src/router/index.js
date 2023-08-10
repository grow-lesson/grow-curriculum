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
    path: "/introduce",
    name: "Introduce",
    component: () => import("../components/about/Introduce.vue"),
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
    path: "/menu",
    name: "MenuPage",
    component: () => import("../components/MenuPage.vue"),
  },
  {
    path: "/course-menu",
    name: "CourseMenu",
    component: () => import("../components/course/CourseMenu.vue"),
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
    name: "CommandLinePage1",
    component: () => import("../components/course/course-2/CommandLinePage1.vue"),
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
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("../components/user/MyPage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/others/Contact.vue"),
  },
  {
    path: "/underConstruction",
    name: "UnderConstruction",
    component: () => import("../components/UnderConstruction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/grow-curriculum/"),
  routes,
});

export default router;
