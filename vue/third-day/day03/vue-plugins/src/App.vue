<template>
  <div id="app">
    <h1>育知同创欢迎你！</h1>
        <transition name="slide">
          <router-view></router-view>
        </transition>
        <router-link :to="{path:'/swiper'}">swiper</router-link>
    <router-link :to="{path:'/http'}">http request</router-link>
    <router-link :to="{path:'/apple'}">apple</router-link>
    <router-link :to="{path:'/banana'}">banana</router-link>
    <router-link :to="{path:'/'}">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
