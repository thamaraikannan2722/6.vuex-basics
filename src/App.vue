<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "../src/components/ProductListOne";
import ProductListTwo from "../src/components/ProductListTwo";

export default {
  //name: "App",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
  },
  data() {
    return {
      // products: [
      //   { id: 1, name: "Banana Skin", price: 20 },
      //   { id: 2, name: "Shiny Star", price: 40 },
      //   { id: 3, name: "Green Shells", price: 60 },
      //   { id: 4, name: "Red Shells", price: 80 },
      // ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
