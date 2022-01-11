/*
 * @Descripttion: 路由配置
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 15:21:23
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 20:36:36
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import("../layout/layout.vue"),
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('../components/Home.vue'),
                children: [
                    {
                        name: 'b-alert',
                        path: '/home/b-alert',
                        component: () => import("../components/BAlert.vue")
                    },
                    {
                        name: 'b-aspect',
                        path: '/home/b-aspect',
                        component: () => import("../components/Aspect.vue")
                    },

                ]
            }
        ]
    },
    { path: '/*', redirect: '/404', component: () => import("../components/404.vue") }
]
const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
const router = createRouter();
export default router;