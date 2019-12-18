const vueRoutes = [
  { path: "/", redirect: { name: "vueDemo1" } },
  {
    path: "/vueDemos", name: "vueDemos", component: () => import("./demo1/demo1.vue"), redirect: to => ({
      ...to,
      name
    })
  }
];
