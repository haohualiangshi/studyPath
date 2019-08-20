<template>
  <div>
    <h3>单元素组件过度</h3>
    <div id="demo1">
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">control display or not</p>
      </transition>
    </div>
    <h3>css过渡</h3>
    <div id="demo2">
      <button @click="demo2Show=!demo2Show">toggle render</button>
      <transition name="slide-fade">
        <p v-if="demo2Show">hello</p>
      </transition>
    </div>
    <h3>css过渡</h3>
    <div id="demo3">
      <button @click="demo3Show= !demo3Show">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="demo3Show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      demo2Show: true,
      demo3Show: true
    };
  }
};
</script>

<style lang="scss">
#demo1 {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}

#demo2 {
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}

#demo3 {
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>