import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const Homepage = () => import("./pages/Homepage");

const routes = [
  {
    path: "/",
    component: Homepage,
    name: "homepage",
  },
];

// Створіть екземпляр маршрутизатора
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Створіть додаток і зареєструйте маршрутизатор
createApp(App).use(router).mount("#app");
