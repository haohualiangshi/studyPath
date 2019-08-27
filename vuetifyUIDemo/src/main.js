import Vue from "vue";
import "../plugins/vuetify";
import Router from "vue-router";
import App from "./app";

import Demo1 from "./components/bgAndColorDemo";
import Layout from "./components/layout/layout";
import CardDemo from "./components/layout/CardDemo";

Vue.use(Router);
const routes = [
  { path: "/", redirect: { name: "layout" } },
  { path: "/layout", name: "layout", component: Layout,redirect:{name:"cardDemo"}, children: [
      {path:"/layout/cardDemo",name:"cardDemo",component:CardDemo}
  ] }
];
const router = new Router({
  routes
});
const app = new Vue({
  router, // (缩写) 相当于 routes: routes
  render: h => h(App)
}).$mount("#app");
