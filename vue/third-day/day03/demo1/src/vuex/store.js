import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    totalPrice:0
}

const mutations = {
    INCREMENT(state,price){
        state.totalPrice+=price;
    },
    DECREMENT(state,price){
        state.totalPrice-=price;
    }
}

const actions = {
    increment({commit},price){
        commit('INCREMENT',price);
    },
    decrement({commit},price){
        commit('DECREMENT',price);
    }
}

const getters = {
    getTotal(){
        return state.totalPrice;
    }
}

let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;
