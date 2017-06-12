<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div @click="show='all'" class="btn-group" role="group">
          <button type="button" class="btn btn-default active">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div @click="show='favorite'" class="btn-group" role="group">
          <button type="button" class="btn btn-default">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a  v-for="item in list" @click="setActiveNote(item)" :class="{'active':item===activeNote}" class="list-group-item" href="#">
          <h4 class="list-group-item-heading">
            {{item.text}}
          </h4>
        </a>
        
      </div>
    </div>

  </div>
</template>

<script>
	export default {
        data(){
            return {
                show:'all'
            }
        },
        computed:{
            list(){
                if(this.show==='all'){
                    return this.$store.getters.notes;
                }
                if(this.show==='favorite'){
                    return this.$store.getters.notes.filter(note=>note.favorite);
                    
                }
            },
            activeNote(){
                return this.$store.getters.activeNote;
            }
        },
        methods:{
            setActiveNote(item){
                return this.$store.dispatch('setActiveNote',item)
            }
        }
    }
</script>
<style type="text/css">
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 137px);
  max-height: calc(100% - 137px);
  overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
</style>