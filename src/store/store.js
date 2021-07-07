import Vue from 'vue'
import Vuex, { createStore } from 'vuex'

/* Vue.use(Vuex) */

export const store = createStore({
    state(){
        return {
            count: 0
        }
    }
})

/* export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
        res(state) {
            if(state.count > 0)
            state.count--
        }
    }
})

store.commit('add')
store.commit('res') */