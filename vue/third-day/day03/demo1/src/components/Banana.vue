<template>
    <div>
        {{msg}},price:{{price}}
        <button @click="addOne">addOne</button>
        <button @click="minusOne">minusOne</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg:'i am banana',
            price:3
        }
    },
    methods:{
        addOne(){
            this.$store.dispatch('increment',this.price)
        },
        minusOne(){
            this.$store.dispatch('decrement',this.price)
        }
    }

}
</script>
