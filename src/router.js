import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import AdminNavbar from "./layout/AdminNavbar.vue";

import Admin from "./views/Admin.vue";
import Home from "./views/pages/Home.vue";
import Profile from "./views/pages/Profile.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/",
      name: "admin",
      redirect: "/home",
      components: { default: Admin, header: AdminNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/profile",
          name: "profile",
          component: Profile
        }
      ]
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: "", footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    //redirect jika route tidak di temukan
    {
      path: "*",
      redirect: "/login"
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.getItem("user"))
    next({ name: "login" });
  else if (to.name === "login" && localStorage.getItem("user"))
    next({ name: "admin" });
  else next();
});

export default router;
