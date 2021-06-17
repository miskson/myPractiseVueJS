import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        currencies: {
            UAH: {
                toUah: 1,
                toUsd: 27.46,
                toEur: 34,
                toEth: 71518.75,
                toBtc: 1072776.08,
                reserve: 30000
            },
        },
    },

    getters: {
        getCurrencies: state=> {
            return state.currencies;
        }
    }

})
