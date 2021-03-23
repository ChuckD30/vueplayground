import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "event-detail",
    props: true,
    component: () => import("../views/EventDetail.vue")
  },
  {
    path: "/event/create",
    name: "event-create",
    component: () => import("../views/EventCreate.vue")
  }
];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router;
