import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/Home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addproduct",
    name: "AddProduct",
    component: () => import("../components/AddProduct/AddProduct.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
