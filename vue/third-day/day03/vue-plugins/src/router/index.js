import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Http from '@/components/Http'
import Apple from '@/components/Apple'
import RedApple from '@/components/RedApple'
import Banana from '@/components/Banana'
import Swiper from '@/components/Swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/http',
      name: 'Http',
      component: Http
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path:'/apple',
      name:'Apple',
      component:Apple,
      children:[
        {
          path:'red',
          component:RedApple
        }
      ]
    },
    {
      path:'/banana',
      name:'Banana',
      component:Banana
    },
    {
      path:'/banana',
      redirect:'/apple'
    }
  ]
})
