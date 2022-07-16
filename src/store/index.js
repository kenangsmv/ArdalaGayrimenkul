import Vue from "vue"
import Vuex from "vuex"
import { createApp } from "vue";
import App from "../App.vue";


const app = createApp(App);
app.use(Vuex);


const state = {
    user: " kenan",
    username: " kenangmsv"
};
const getters = {
    welcomeMessage(state){
     return `${state.user} ${state.username}`
    }
};
const mutations = {
    setAdv(state, name){
        state.user = name
    }
};
const actions = {
    updateAdvPage({commit}, name){
     commit('setAdv', name)
    }
};

const store = new Vuex.Store({
   state,
   getters,
   mutations,
   actions

});

export default store;