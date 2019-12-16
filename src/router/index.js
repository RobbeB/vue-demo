import Vue from "vue";
import VueRouter from "vue-router";
import Movies from "../views/Movies.vue";
import Login from "../views/Login.vue";
import jwtService from "../services/jwt.service";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Movies
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !jwtService.getToken()) {
    next({ name: "login" });
  } else next();
});

export default router;
