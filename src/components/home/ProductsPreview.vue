<template>
  <div class="products-preview">
    <span class="title">Les produits disponibles en ce moment</span>
    <div class="products">
      <product-card />
      <product-card />
      <product-card />
      <product-card />
    </div>
    <router-link class="show-products" to="/product"
      >Découvrir les produits
    </router-link>
  </div>
</template>

<script>
import ProductCard from "../base/ProductCard.vue";
export default {
  name: "ProductsPreview",
  components: { ProductCard },
};
</script>

<style lang="scss" scoped>
.products-preview {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .title {
    font-family: "Raleway";
    color: #1d515e;
    font-size: 1.5rem;
  }
  .products {
    display: flex;
    width: 60%;
    justify-content: space-evenly;
  }
  .show-products {
    background: #1d515e;
    box-shadow: 0px 3px 6px #00000029;
    border: none;
    border-radius: 38px;
    padding: 0.5em 1rem;
    font-weight: bold;
    outline: none;
    color: white;
    margin-left: 1rem;
    text-decoration: none;
    width: 13rem;
    text-align: center;
  }
}
</style>