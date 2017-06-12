<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="togglefavorite" class="glyphicon glyphicon-star"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
    export default{
        methods:{
            addNote(){
                this.$store.dispatch('addNote');
            },
            togglefavorite(){
                this.$store.dispatch('toggleFavorite')
            },
            deleteNote(){
                this.$store.dispatch('deleteNote')
            }
        }
    }
</script>
<style type="text/css">
	
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}
</style>