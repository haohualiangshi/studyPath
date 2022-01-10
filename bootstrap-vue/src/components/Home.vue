<!--
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 15:41:25
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 19:19:09
-->
<template>
  <div>
    <h1>Home</h1>
    <ol class="list-wrap">
      <li
        v-for="(item, index) in navList"
        :key="'nav-' + index"
        @click="to(item.path)"
      >
        {{ item.name }}
      </li>
    </ol>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "b-alert",
          path: "/home/b-alert",
        },
      ],
    };
  },
  methods: {
    to(path) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push(path);
    },
  },
};
</script>
