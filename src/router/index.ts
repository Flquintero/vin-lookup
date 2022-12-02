import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/vin-lookup",
    },
    {
      path: "/vin-lookup",
      name: "vin-lookup",
      component: () => import("@/views/vin-lookup/VinLookupIndex.vue"),
    },
  ],
});

export default router;
