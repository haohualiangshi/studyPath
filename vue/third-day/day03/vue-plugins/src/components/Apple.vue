<template>
    <div>
        apple-{{id}}
        <router-view></router-view>
        <p>
            <router-link :to="{path:'/apple/red'}">red apple</router-link>
        </p>
        <button @click="gotobanana">跳转到banana</button>
    </div>
</template>
<script>
export default {
    methods: {
        data () {
            return {
                id:''
            }
        },
        gotobanana(){
            this.$router.push('/banana');
        }
    },
    created(){
        this.id = this.$route.query.id
        
    },
    mounted () {
        console.log(this.$route.query.id);
    }
}
</script>
<style>

</style>
