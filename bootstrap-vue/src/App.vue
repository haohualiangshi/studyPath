<!--
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 10:57:27
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 11:49:21
-->
<template>
  <div id="app">
      <b-img alt="Vue logo" src="./assets/logo.png"></b-img>
      
       <!-- <b-img alt="Vue logo" src="./assets/logo.png"></b-img> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
