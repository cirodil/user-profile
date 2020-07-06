import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import store from '../store'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && store.state.loggedUserEmail === null ) next({name: 'Login'})
  else next();
});
export default router
