import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Login from "./views/Login.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Admin from './views/Admin.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/relevant',
      component: Home,
      redirect: '/home/total',
    },
    {
      path: '/home/:path',
      name: 'home',
      component: Home
    },
    {
      path: '/comments/:id',
      name: 'comments',
      component: () => import('views/PostComments.vue')
    },
    {
      path: '/post',
      component: () => import('views/CreatePost.vue')
    },
    {
      path: '/userprofile',
      component: () => import('views/UserProfile.vue')
    },
    {
      path: '/admin',
      component: () => import('views/Admin.vue')
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

