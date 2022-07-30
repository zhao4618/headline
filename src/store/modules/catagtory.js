import axios from 'axios'
export default {
    namespaced: true,
    state: {
        catagtory: [], //存放分类数组
        currentCatagtory: '' //高亮激活分类

    },
    mutations: {
        updateCatagtory(state, payload) {
            state.catagtory = payload //载荷更新数组
        },
        updateCurrentCatagtory(state, payload) {
            state.currentCatagtory = payload //载荷更新激活分类
        }
    },
    actions: {
        //异步请求数据
        async getCatagtory(context) {
            const {
                data: {
                    data: {
                        channels
                    }
                }
            } = await axios.get('http://toutiao.itheima.net/v1_0/channels')
                //context相当于$store.state调用提交覆盖数据
            context.commit('updateCatagtory', channels)
            context.commit("updateCurrentCatagtory", channels[0].id)
        }
    }
}