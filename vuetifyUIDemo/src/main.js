import Vue from "vue";
import vuetify from "./plugins/vuetify_plugin";
import Router from "vue-router";
import App from "./app";
import routeModule from "./components/route";

Vue.use(Router);
const routes = [...routeModule];

const router = new Router({
  routes // (缩写) 相当于 routes: routes
});
const app = new Vue({
  router, 
  vuetify,
  render: h => h(App),
  
}).$mount("#app");
