import { createRouter, createWebHistory } from "vue-router";

import TheCreateNewsSection from "./../src/routes/TheCreateNewsSection.vue";
import TheNewsSection from "./../src/routes/TheNewsSection.vue";

const routes = [
  { path: "/", component: TheNewsSection },
  { path: "/create", component: TheCreateNewsSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
