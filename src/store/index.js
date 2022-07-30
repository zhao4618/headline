import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from '@/store/modules/catagtory'
import newlist from '@/store/modules/newlist'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        catagtory,
        newlist
    },
    getters: {
        //建立于子模块的快捷访问
        catagtory: state => state.catagtory.catagtory,
        currentCatagtory: state => state.catagtory.currentCatagtory
    }
})