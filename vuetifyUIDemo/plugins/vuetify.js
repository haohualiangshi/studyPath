// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import  'vuetify/src/stylus/app';


Vue.use(Vuetify,{
    iconfont: "mdi",
})

