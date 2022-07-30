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
            } = await axios.get(`http://localhost/v1_0/user/channels_id=${cateId}id&timestamp=${Date.now()}&with_top=1`)
            context.commit('updateList', {
                currentCatagtory: cateId,
                list: results
            })
        }
    }
}