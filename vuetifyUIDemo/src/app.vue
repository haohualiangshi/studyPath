<template>
  <v-app>
    <v-system-bar app color="primary" class="text-center justify-center">
      <div class="text-center">v-system-bar</div>
    </v-system-bar>
    <v-app-bar dark app shrink-on-scroll>v-app-bar</v-app-bar>

    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      :mini-variant.sync="mini"
      app
      temporary
      permanent
      v-model="drawer"
      color="green"
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null,
      mini: true,
      drawer: null
    };
  }
};
</script>