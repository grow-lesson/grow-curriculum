import { createRouter, createWebHistory } from "vue-router";
import api from '@/axios';
import store from '@/store'; // Vuexストアのインポート
import { CapacitorCookies } from '@capacitor/core';
import { isCapacitor } from '@/utils'; // utils.jsからisCapacitor関数をインポート


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
    path: "/setup",
    name: "Setup",
    meta: { requiresAuth: true },
    component: () => import("../components/init/SetUp.vue"),
  },
  {
    path: "/how-to",
    name: "HowTo",
    meta: { requiresAuth: true },
    component: () => import("../components/init/HowTo.vue"),
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
    path: "/html-lesson-4",
    name: "HtmlPage4",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-1/HtmlPage4.vue"),
  },
  {
    path: "/html-lesson-5",
    name: "HtmlPage5",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-1/HtmlPage5.vue"),
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
    path: "/git-lesson-menu",
    name: "GitMenuPage",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-3/GitMenuPage.vue"),
  },
  {
    path: "/git-lesson-1",
    name: "GitPage1",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-3/GitPage1.vue"),
  },
  {
    path: "/git-lesson-2",
    name: "GitPage2",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-3/GitPage2.vue"),
  },
  {
    path: "/git-lesson-3",
    name: "GitPage3",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-3/GitPage3.vue"),
  },
  {
    path: "/javascript-lesson-menu",
    name: "JavascriptMenuPage",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptMenuPage.vue"),
  },
  {
    path: "/javascript-lesson-1",
    name: "JavascriptPage1",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage1.vue"),
  },
  {
    path: "/javascript-lesson-2",
    name: "JavascriptPage2",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage2.vue"),
  },
  {
    path: "/javascript-lesson-3",
    name: "JavascriptPage3",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage3.vue"),
  },
  {
    path: "/javascript-lesson-4",
    name: "JavascriptPage4",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage4.vue"),
  },
  {
    path: "/javascript-lesson-5",
    name: "JavascriptPage5",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage5.vue"),
  },
  {
    path: "/javascript-lesson-6",
    name: "JavascriptPage6",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage6.vue"),
  },
  {
    path: "/javascript-lesson-7",
    name: "JavascriptPage7",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-4/JavascriptPage7.vue"),
  },
  {
    path: "/jquery-lesson-menu",
    name: "JqueryMenuPage",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryMenuPage.vue"),
  },
  {
    path: "/jquery-lesson-1",
    name: "JqueryPage1",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage1.vue"),
  },
  {
    path: "/jquery-lesson-2",
    name: "JqueryPage2",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage2.vue"),
  },
  {
    path: "/jquery-lesson-3",
    name: "JqueryPage3",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage3.vue"),
  },
  {
    path: "/jquery-lesson-4",
    name: "JqueryPage4",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage4.vue"),
  },
  {
    path: "/jquery-lesson-5",
    name: "JqueryPage5",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage5.vue"),
  },
  {
    path: "/jquery-lesson-6",
    name: "JqueryPage6",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage6.vue"),
  },
  {
    path: "/jquery-lesson-7",
    name: "JqueryPage7",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage7.vue"),
  },
  {
    path: "/jquery-lesson-8",
    name: "JqueryPage8",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage8.vue"),
  },
  {
    path: "/jquery-lesson-9",
    name: "JqueryPage9",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage9.vue"),
  },
  {
    path: "/jquery-lesson-10",
    name: "JqueryPage10",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-5/JqueryPage10.vue"),
  },
  {
    path: "/my-page",
    name: "MyPage",
    meta: { requiresAuth: true },
    component: () => import("../components/user/MyPage.vue"),
  },
  {
    path: "/progress",
    name: "Progress",
    meta: { requiresAuth: true },
    component: () => import("../components/user/Progress.vue"),
  },
  {
    path: "/reservation",
    name: "ReservationCalendar",
    meta: { requiresAuth: true },
    component: () => import("../components/user/ReservationCalendar.vue"),
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
  // {
  //   path: "/chat",
  //   name: "ChatBot",
  //   meta: { requiresAuth: true },
  //   component: () => import("../components/others/ChatBot.vue"),
  // },
  {
    path: "/underConstruction",
    name: "UnderConstruction",
    component: () => import("../components/UnderConstruction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

// クッキーを読み取る関数
const getCookie = async (name) => {
  if (isCapacitor()) {
    const cookies = await CapacitorCookies.getCookies({
      url: 'https://grow-curriculum-backend-f10ce9239245.herokuapp.com',
    });
    return cookies[name];
  } else {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }
};





// ナビゲーションガード
router.beforeEach(async (to, from, next) => {
  if (process.env.NODE_ENV === "development") {
    if (to.meta.requiresAuth) {
      const response = await api.get('/auth/validate_token');
      if (response.status === 200) {
        store.commit('setUser', response.data.data);
        if (!store.state.user.loginData) {
          next({ name: "Login" });
          return;
        }
        next();
        return;
      } else {
        next({ name: "Login" });
        return;
      }
    }
    next();
    return;
  }

  if (to.meta.requiresAuth) {
    try {
      const accessToken = await getCookie('access-token');
      const client = await getCookie('client');
      const uid = await getCookie('uid');
      if (accessToken && client && uid) {
        const response = await api.get('/auth/validate_token', {
          headers: {
            'access-token': accessToken,
            'client': client,
            'uid': uid
          },
          withCredentials: true
        });
        if (response.status === 200) {
          store.commit('setUser', response.data.data);
          if (!store.state.user.loginData) {
            next({ name: "Login" });
            return;
          }
          next();
          return;
        } else {
          next({ name: "Login" });
          return;
        }
      } else {
        next({ name: "Login" });
        return;
      }
    } catch (error) {
      console.error(error);
      next({ name: "Login" });
      return;
    }
  }
  next();
});

export default router;