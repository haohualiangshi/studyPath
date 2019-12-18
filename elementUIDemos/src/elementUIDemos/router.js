// elementUi demo 路由
const elementUiDemos = require("./elementLayout.vue");
const elementDemo1 = require("./demo.vue");
const elementDemo2 = require("./elementContainerDemo.vue");
const elementDemo3 = require("./elementButtonDemo.vue");
const elementDemo4 = require("./elementLinkDemo.vue");
const elementDemo5 = require("./elementRadioDemoo.vue");
const elementDemo6 = require("./elementCheckboxDemo.vue");
// const mockJsDemo = require("./mockJs.vue")
const route = [{
    path: "/elementDemo",
    redirect: to => ({
        ...to,
        name: "elementDemo1"
    }),
    components: elementUiDemos,
    children: [{
        path: "demo1",
        components: elementDemo1,
        name: "elementDemo1"
    },
    {
        path: "demo2",
        components: elementDemo2,
        name: "elementDemo2"
    },
    {
        path: "demo3",
        components: elementDemo3,
        name: "elementDemo3"
    },
    {
        path: "demo4",
        components: elementDemo4,
        name: "elementDemo4"
    },
    {
        path: "demo5",
        components: elementDemo5,
        name: "elementDemo5"
    },
    {
        path: "demo6",
        components: elementDemo6,
        name: "elementDemo6"
    },
    {
        path: "demo7",
        component: () =>
            import("./elementTableDemo.vue"),
        name: "elementDemo7"
    },
    {
        path: "demo8",
        component: () =>
            import("./elementTreeDemo.vue"),
        name: "elementDemo8"
    },
    {
        path: "mock",
        component: () =>
            import("./mockJs.vue"),
        name: "mockJs"
    }
    ]
}];
module.exports = route;