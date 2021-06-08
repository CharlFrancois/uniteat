<template>
  <div class="products-preview">
    <span class="title">Les produits disponibles en ce moment</span>
    <div class="products">
      <div
        class="product"
        v-for="product in displayProducts"
        :key="product._id"
      >
        <product-card
          :product="product"
          :title="product.name"
          :brand="product.brand"
          :description="product.description"
          :place="product.place"
          :dlc="dateConvert(product.dlc)"
        />
      </div>
    </div>
    <router-link class="show-products" to="/product"
      >Découvrir les produits
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "../base/ProductCard.vue";

export default {
  name: "ProductsPreview",
  components: { ProductCard },
  computed: {
    ...mapGetters(["products"]),

    displayProducts() {
      const filteredProducts = Array.from(this.products)
        .filter((product) => {
          var datum = Date.parse(product.dlc);
          if (!product.booked && datum > Date.now()) {
            return product;
          }
        })
        .slice(0, 4);
      return filteredProducts;
    },
  },
  methods: {
    dateConvert(date) {
      var date_new = new Date(date);
      return new Intl.DateTimeFormat("fr-FR").format(date_new);
    },
  },
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
  @media only screen and (max-width: 600px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
}
</style>