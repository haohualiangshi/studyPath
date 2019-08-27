<template>
  <div>
      <h3>card Demo</h3>
      <h4>demo1</h4>
      <v-card max-width="344" class="mx-auto" dark>
          <v-card-title class="text-align-center">title</v-card-title>
          <v-card-text>content</v-card-text>
          <v-card-actions>
              <v-btn> Click</v-btn>
          </v-card-actions>
      </v-card>

    <v-row justify="space-around">
        <v-switch v-model="flat" label="Flat"></v-switch>
        <v-switch v-model="outlined" label="Outlined"></v-switch>
        <v-switch v-model="raised" label="Raised"></v-switch>
        <v-switch v-model="loading" label="Loading"></v-switch>
        <v-switch v-model="media" label="with media"></v-switch>
        
    </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            flat:false,
            media:true,
            loading:false,
            actions:true,
            outlined:false,
            elevation:undefined,
            raised:false,
            width:344,
            height:undefined
        }
    }
}
</script>

<style scoped>
    .v-input__slider{
        width:100%;
    }
</style>