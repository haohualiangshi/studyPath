<template>
  <div id="app">
   
    {{totalPrice}}
      <apple></apple>
      <banana></banana>
  </div>
</template>

<script>
import Apple from './components/Apple'
import Banana from './components/Banana'
export default {
  name: 'app',
  components: {
    Apple,
    Banana
  },
  computed:{
     totalPrice(){
       return this.$store.getters.getTotal
     }
  }
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
</style>
