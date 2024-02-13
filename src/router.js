import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./pages/HomePage");
const ApartmentPage = () => import("./pages/ApartmentPage.vue");
const LoginPage = () => import("./pages/Login.Page.vue");
const RegistrationPage = () => import("./pages/RegistrationPage.vue");
const NotFoundPage = () => import("./pages/NotFoundPage.vue");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    name: "notfoundpage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = store.getters["auth/isLoggedIn"];

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isLoggedIn) {
//       next({ name: "login-page" });
//     }
//   }

//   if (to.matched.some((record) => record.meta.hideForAuth)) {
//     if (isLoggedIn) {
//       next({ name: "homepage" });
//     }
//   }

//   next();
// });

export default router;
