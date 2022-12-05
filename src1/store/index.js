// import axios from 'axios'
import { createStore } from 'vuex'
import details from '../data.json'

export default createStore({
  state: {
    products: [],
    card: [],
    filproducts:[],
    qty:[]
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    },
    // getfilters(state, products){
    //   state.filproducts = products
    // }
  },
  actions:{
    getProductsAction({commit}){
      // axios('https://fakestoreapi.com/products').then(res => {
      //   commit('getProducts', res.data)
      // })
      commit('getProducts',details.products)
    
    },
    // getFilterAction({commit}){
    //   // axios('https://fakestoreapi.com/products').then(res => {
    //   //   commit('getProducts', res.data)
    //   // })
    //   commit('getfilters',details.products[0])
    
    // }
  },
  modules: {

  }
})
