import TheCreateNewsSection from "@/routes/TheCreateNewsSection.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "News",
    component: () => import("./../routes/TheNewsSection.vue"),
  },
  {
    path: "/create",
    name: "Create news",
    component: TheCreateNewsSection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
