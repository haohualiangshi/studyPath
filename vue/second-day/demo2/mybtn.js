var my_btn = Vue.component('my-btn', {
    template: `<button @click="add">{{counter}}</button>`,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        add:function() {
            this.counter += 1;
            this.$emit("get-total");
        }
    }
})
