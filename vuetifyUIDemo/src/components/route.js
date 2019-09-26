const routes = [
  {
    path: "/",
    name: "/",
    redirect: to => ({
      ...to,
      name: "app"
    }),
    component:()=>import("./layout.vue"),
    children: [
      {
        path: "app",
        name: "app",
        component: () => import("./integral.vue")
      }
    ]
  }
];
export default routes;
