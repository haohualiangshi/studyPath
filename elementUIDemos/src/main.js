import Vue from "vue";
import Router from "vue-router";
import App from "./app";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.use(Router);
const meta = {
  needAuth: false
};

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const vueDemos = require("./vueDemos/layer.vue");
const vueDemo1 = require("./vueDemos/demo1/demo1.vue");
const vueDemo2 = require("./vueDemos/demo1/demo2.vue");
const vueRouterDemos = require("./vueRouterDemos/demo1/Foo.vue");
const elementUiDemos = require("./elementUIDemos/elementLayout.vue");
const elementDemo1 = require("./elementUIDemos/demo.vue");
const elementDemo2 = require("./elementUIDemos/elementContainerDemo.vue");
const elementDemo3 = require("./elementUIDemos/elementButtonDemo.vue");
const elementDemo4 = require("./elementUIDemos/elementLinkDemo.vue");
const elementDemo5 = require("./elementUIDemos/elementRadioDemoo.vue");
const elementDemo6 = require("./elementUIDemos/elementCheckboxDemo.vue");

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: "/", redirect: { name: "vueDemo1" } },
  {
    path: "/vueDemos",
    name: "vuedemos",
    redirect: to => ({
      ...to,
      name: "vueDemo1"
    }),
    components: vueDemos,
    children: [
      { path: "/vueDemos/demo1", components: vueDemo1, name: "vueDemo1" },
      { path: "/vueDemos/demo2", components: vueDemo2, name: "vueDemo2" }
    ]
  },
  { path: "/vueRouterDemos", components: vueRouterDemos },
  {
    path: "/elementUIDemos",
    redirect: to => ({
      ...to,
      name: "elementDemo1"
    }),
    components: elementUiDemos,
    children: [
      {
        path: "/elementUIDemos/demo1",
        components: elementDemo1,
        name: "elementDemo1"
      },
      {
        path: "/elementUIDemos/demo2",
        components: elementDemo2,
        name: "elementDemo2"
      },
      {
        path: "/elementUIDemos/demo3",
        components: elementDemo3,
        name: "elementDemo3"
      },
      {
        path: "/elementUIDemos/demo4",
        components: elementDemo4,
        name: "elementDemo4"
      },
      {
        path: "/elementUIDemos/demo5",
        components: elementDemo5,
        name: "elementDemo5"
      },
      {
        path:"/elementUIDemos/demo6",
        components:elementDemo6,
        name:"elementDemo6"
      }
    ]
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router, // (缩写) 相当于 routes: routes
  render: h => h(App)
}).$mount("#app");
