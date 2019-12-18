<template>
  <div>
    <h3>MockJs</h3>
    <h4>Random生成数据方法</h4>
    <h5>boolean(min,max,current)返回一个随机的Boolean值</h5>
    <p>Random.boolean(1,5,true)的结果是{{ productBool }}</p>
    <h5>Random.natural(min,max)返回一个自然数</h5>
    <p>{{ productNatural }}</p>
    <p>
      {{ productInteger }}
    </p>
  </div>
</template>

<script>
import { mock, Random } from "mockjs";
export default {
  data: () => {
    return {};
  },
  computed: {
    productBool: function() {
      //
      return Random.boolean(1, 5, true);
    },
    productNatural: function() {
      return Random.natural(0, 9);
    },
    productInteger:function(){
      return Random.integer(-100,4)
    }
  }
};
</script>

<style>
</style>