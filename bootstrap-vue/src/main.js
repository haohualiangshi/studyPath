import '@babel/polyfill'
import 'mutationobserver-shim'
/*
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 10:57:27
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 18:00:28
 */
import Vue from 'vue'
// import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router';
import "./scss/index.scss";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const vm=new Vue({
 router,
 render: h => h(App)
}).$mount('#app')
console.log(vm.$router)