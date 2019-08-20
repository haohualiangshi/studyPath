<template>
  <div>
    <h3>声明式渲染</h3>

    <div id="message">{{message}}</div>
    <div id="title" :title="loadTime">mouse enter and over display time </div>
    <h3>条件与循环</h3>
    <div id="app-3">
        <p v-if="seen">v-if的值为true显示</p>
    </div>
    <div id="app-4">
        <ol>
            <li v-for="item in todos" :key="item.text">
                {{item.text}}
            </li>
        </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      loadTime: "page load at " + new Date().toTimeString(),
      seen:"true",
      todos:[
          {text:'study js'},
          {text:'study vue'},
          {text:'写ge牛项目'}
      ]
    };
  }
};
</script>

<style>
</style>
