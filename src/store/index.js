import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { id: 1, name: "Banana Skin", price: 20 },
      { id: 2, name: "Shiny Star", price: 40 },
      { id: 3, name: "Green Shells", price: 60 },
      { id: 4, name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      setTimeout(function() {
        state.products.forEach((product) => {
          product.price -= payload;
        });
      }, 3000);
    },
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  },
  modules: {},
});
