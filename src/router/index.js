import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import MainLayout from "../layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: About,
        component: About,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
