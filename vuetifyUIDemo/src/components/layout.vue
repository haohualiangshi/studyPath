<template>
  <v-app>
      <router-link :to="{name:'app'}">页面整体布局</router-link>
      <v-content >
          <div style="height:10000px"></div>
          <v-container>
              <v-row>
                  <v-col>
                      <div class="botton" id="bottom">
                          底部
                      </div>
                  </v-col>
              </v-row>
          </v-container>
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>