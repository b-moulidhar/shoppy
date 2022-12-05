// import axios from 'axios'
import { createStore } from 'vuex'
import details from '../data.json'

export default createStore({
  state: {
    products: [],
    card: [],
    filproducts:[],
    qty:[],
    temp:[]
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    },
    getTemp(state, products){
      state.temp = products
    }
  },
  actions:{
    getProductsAction({commit}){
      commit('getProducts',details.products)
    },
    getTempAction({commit}){
      commit('getTemp',details.products)
    }
  },
})
