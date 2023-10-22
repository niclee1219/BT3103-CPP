import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Profile from "../views/Profile.vue";
import OnlyProfit from "../views/OnlyProfit.vue";
import OnlyProfit2 from "../views/OnlyProfit2.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login, 
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/profit",
    name: "profit",
    component: OnlyProfit,
  },
  {
    path: "/profit2",
    name: "profit2",
    component: OnlyProfit2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
