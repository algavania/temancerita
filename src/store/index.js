import Vue from 'vue'
import Vuex from 'vuex'
import userStatus from './modules/userStatus'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        userStatus
    }
})