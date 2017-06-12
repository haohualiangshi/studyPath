<template>
    <div>http request

        <ul>
            <li v-for="item in list">
                {{item.name}}
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[]
        }
    },
    mounted(){
       
        this.$http.get("http://127.0.0.1:8081/db")
            .then((ret)=>{
                console.log(ret.data.posts);
                //this.list = ret.data.data;
            })
    }
}
</script>
<style>

</style>
