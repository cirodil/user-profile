import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import User from "../views/User.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/user",
    name: "user",
    component: User,
    beforeEnter: ((to, from, next) => {
      if (store.state.isLoggedIn) {
        return next();
      }
      return next({ name: 'login' })
    }),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
