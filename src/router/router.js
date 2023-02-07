import { createWebHistory, createRouter } from "vue-router";
import Home from "../MainPage.vue";
import Cat from "../Ndv_cat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/cat",
    name: "Cat",
    component: Cat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;