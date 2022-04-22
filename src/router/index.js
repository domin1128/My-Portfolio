import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "MyPortfolio",
    meta: {
      title: "My Portfolio",
    },
    component: () => import("../views/MyPortfolio.vue"),
  },
  

];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});



export default router;
