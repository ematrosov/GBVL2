import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
    },
    mutations: {
        setData(state, payload) {
            state.data = {
                ...payload.newData, ...payload.newData
            };
            state.itemsOnPage.push(...Object.keys(payload.newData));
        }
    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsOnPage
            return keys.reduce((res, cur) => res + state.data[cur].price, 0);
        },
    },
    actions: {
        requesData({ commit }, page) {
            fetch(`/itemslist/${page}`, {
                method: 'GET',
            })
                .then(res => {
                    return res.json();
                })
            then(res => {
                commit('setData', { newData: res });
            })
        },
        addItem({ }, data) {
            fetch('/itemslist', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Contebt-TYPE': 'application/json'
                }
            })
            then(res => {
                return res.json();
            })
                .then(res => {
                    console.log(res)
                })
        }
    },
});

