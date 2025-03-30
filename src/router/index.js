import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import StatisticView from "../views/StatisticView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/statistic",
    name: "statistic",
    component: StatisticView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
