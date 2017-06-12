<template>
  <div id="note-editor">
    <textarea v-model="activeNote"  @input="editText" class="form-control"></textarea>
  </div>
</template>

<script>
    export default {
        computed:{
            activeNote(){
                return this.$store.getters.activeNote.text||''
            }
        },
        methods:{
            editText(e){
                this.$store.dispatch('editText',e.target.value);
            }
        }
    }
</script>
<style type="text/css">  
#note-editor {
  height: 100%;
  margin-left: 380px;
}

#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}
</style>