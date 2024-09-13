import { createRouter, createWebHistory } from "vue-router";
import api from '@/axios';
import store from '@/store'; // Vuexストアのインポート

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
    path: "/howto",
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
    path: "/photoshop-lesson-menu",
    name: "PhotoshopMenuPage",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-7/PhotoshopMenuPage.vue"),
  },
  {
    path: "/photoshop-lesson-1",
    name: "PhotoshopPage1",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-7/PhotoshopPage1.vue"),
  },
  {
    path: "/photoshop-lesson-2",
    name: "PhotoshopPage2",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-7/PhotoshopPage2.vue"),
  },
  {
    path: "/photoshop-lesson-3",
    name: "PhotoshopPage3",
    meta: { requiresAuth: true },
    component: () => import("../components/course/course-7/PhotoshopPage3.vue"),
  },
  {
    path: "/mypage",
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
  history: createWebHistory("/grow-curriculum/"),
  routes,
});

// クッキーを読み取る関数
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

// ナビゲーションガード
router.beforeEach(async (to, from, next) => {
  // テスト用
  if(process.env.NODE_ENV === "development"){
    if (to.meta.requiresAuth) {
      const response = await api.get('/auth/validate_token');
      if (response.status === 200) {
        // Vuexのミューテーションを呼び出してユーザー情報をストアに保存
        store.commit('setUser', response.data.data);
        if(!store.state.user.loginData){
          next({ name: "Login" });
          return; // テスト用の処理を終了
        }
        next();
        return; // テスト用の処理を終了
      } else {
        next({ name: "Login" });
        return; // テスト用の処理を終了
      }
    }
  }
  // 実際のAPI呼び出し
  if (to.meta.requiresAuth) {
    // 認証が必要な場合の処理
    try {
      const accessToken = getCookie('access-token');
      const client = getCookie('client');
      const uid = decodeURIComponent(getCookie('uid')); // UIDをデコード

      if (accessToken && client && uid) {
        const response = await api.get('/auth/validate_token', {
          headers: {
            'access-token': accessToken,
            'client': client,
            'uid': uid
          },
          withCredentials: true // クレデンシャル情報を含める設定
        });

        if (response.status === 200) {
          // Vuexのミューテーションを呼び出してユーザー情報をストアに保存
          store.commit('setUser', response.data.data);
          if(!store.state.user.loginData){
            next({ name: "Login" });
          }
          next();
        } else {
          next({ name: "Login" });
        }
      } else {
        next({ name: "Login" });
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
