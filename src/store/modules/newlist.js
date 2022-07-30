import axios from 'axios'
export default {
    namespaced: true,
    state: {
        allDate: {}
    },
    mutations: {
        updateList(state, {
            currentCatagtory,
            list
        }) {
            state.allDate = {
                ...state.allDate,
                [currentCatagtory]: list
            }
        }

    },
    actions: {
        async getNewList(context, cateId) {
            const {
                data: {
                    data: {
                        results
                    }
                }
            } = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cateId}&timestamp=${Date.now()}`)
            context.commit('updateList', {
                currentCatagtory: cateId,
                list: results
            })
        }
    }
}