import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
        AddN(state, step) {
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subN(state, step) {
            state.count -= step
        }
    },
    actions: {
        // 在actions中必须通过 context.commit() 触发某个 mutations 修改state中的数据
        addAsync(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000);
        },
        addAsyncN(context, step) {
            setTimeout(() => {
                context.commit('AddN', step)
            }, 2000);
        },
        subAsync(context) {
            setTimeout(() => {
                context.commit('sub')
            }, 1000);
        },
        subAsyncN(context, step) {
            setTimeout(() => {
                context.commit('subN', step)
            }, 2000);
        }
    },
    getters: {
        showNums(state) {
            return '当前最新的数量是:' + state.count + ''
        }
    },
    modules: {}
})