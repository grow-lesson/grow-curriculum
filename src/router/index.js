import { createRouter, createWebHistory } from "vue-router";
import axios from 'axios';

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../components/WelcomePage.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../components/SignUpPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/LoginPage.vue"),
  },
  {
    path: "/introduce",
    name: "Introduce",
    meta: { requiresAuth: true }, // このルートには認証が必要
    component: () => import("../components/about/Introduce.vue"),
  },
  {
    path: "/environment",
    name: "Environment",
    meta: { requiresAuth: true }, 
    component: () => import("../components/init/Environment.vue"),
  },
  {
    path: "/procedure",
    name: "Procedure",
    meta: { requiresAuth: true }, 
    component: () => import("../components/init/Procedure.vue"),
  },
  {
    path: "/menu",
    name: "MenuPage",
    meta: { requiresAuth: true }, 
    component: () => import("../components/MenuPage.vue"),
  },
  {
    path: "/course-menu",
    name: "CourseMenu",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/CourseMenu.vue"),
  },
  {
    path: "/html-lesson-menu",
    name: "HtmlMenuPage",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-1/HtmlMenuPage.vue"),
  },
  {
    path: "/html-lesson-1",
    name: "HtmlPage1",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-1/HtmlPage1.vue"),
  },
  {
    path: "/html-lesson-2",
    name: "HtmlPage2",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-1/HtmlPage2.vue"),
  },
  {
    path: "/html-lesson-3",
    name: "HtmlPage3",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-1/HtmlPage3.vue"),
  },
  {
    path: "/commandline-lesson-menu",
    name: "CommandLineMenuPage",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-2/CommandLineMenuPage.vue"),
  },
  {
    path: "/commandline-lesson-1",
    name: "CommandLinePage1",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-2/CommandLinePage1.vue"),
  },
  {
    path: "/Git-lesson-menu",
    name: "GitMenuPage",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-3/GitMenuPage.vue"),
  },
  {
    path: "/Git-lesson-1",
    name: "GitPage1",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-3/GitPage1.vue"),
  },
  {
    path: "/Git-lesson-2",
    name: "GitPage2",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-3/GitPage2.vue"),
  },
  {
    path: "/Git-lesson-3",
    name: "GitPage3",
    meta: { requiresAuth: true }, 
    component: () => import("../components/course/course-3/GitPage3.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    meta: { requiresAuth: true }, 
    component: () => import("../components/user/MyPage.vue"),
  },
  {
    path: "/edit",
    name: "EditPage",
    meta: { requiresAuth: true }, 
    component: () => import("../components/user/EditPage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { requiresAuth: true }, 
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

// ナビゲーションガード
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) { // ルートが認証を必要とする場合
    try {
      const response = await axios.get('/api/users/show');
      const user = response.data;
      if (!user) {
        next({ name: "Login" });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      next({ name: "Login" }); // エラーの場合もログインページにリダイレクト
    }
  } else {
    next(); // 認証が不要な場合はそのまま遷移
  }
});

export default router;