import Vue from "vue";
import VueRouter from "vue-router";
import UserProfile from '@/components/UserProfile'
import User from '@/components/User'
// import Home from "../views/Home.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    props: true
  },
  
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    props: true
  }
  
  // {
  //   path: "/about",
  //   name: "About",
   
  //   component: () =>
  //     import( "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
