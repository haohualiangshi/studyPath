/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 10:57:27
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 15:46:39
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const vm=new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
console.log(vm)