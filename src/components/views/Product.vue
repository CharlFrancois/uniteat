<template>
  <div class="product">
    <navbar />
    <div class="content">
      <div class="search-bar" v-if="!showDetails">
        <input
          type="search"
          v-model="searchValue"
          class="search-input"
          placeholder="Saisis ta recherche"
          maxlength="55"
        />
      </div>
      <div class="all-products">
        <div class="product" v-for="product in products" :key="product._id">
          <product-card
            @clicked="openDetails"
            v-if="!showDetails"
            :product="product"
            :title="product.name"
            :brand="product.brand"
            :description="product.description"
            :place="product.place"
            :dlc="dateConvert(product.dlc)"
          />
        </div>
      </div>
      <detailled-product
        v-if="showDetails"
        :product="productDetails"
        class="detailled-product"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../base/Footer.vue";
import Navbar from "../base/Navbar";
import ProductCard from "../base/ProductCard.vue";
import DetailledProduct from "./DetailledProduct.vue";

export default {
  name: "Product",
  components: { Navbar, ProductCard, DetailledProduct, Footer },
  data() {
    return {
      showDetails: false,
      productDetails: {},
      searchValue: "",
      resultProducts: [],
    };
  },
  created() {
    this.getProduct();
  },
  computed: {
    ...mapGetters(["products"]),
    productsToShow() {
      let result = []
        this.products.forEach(product => {
          if (this.searchValue === "" && !product.booked) return result = this.products;
          return product.name.slice(0, 3) === this.searchValue
            ? result.push(product)
            : [];
        });
      return result
    },
  },
  methods: {
    ...mapActions(["getProduct"]),
    dateConvert(date) {
      var date_new = new Date(date);
      return new Intl.DateTimeFormat("fr-FR").format(date_new);
    },
    openDetails(value) {
      this.productDetails = value;
      console.log(this.productDetails);
      this.showDetails = true;
      console.log(this.showDetails);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  .content {
    min-height: 100vh;
    padding: 1rem 0;
    .search-bar {
      display: flex;
      place-content: center;
      margin-bottom: 1rem;
      .search-input {
        height: 3rem;
        width: 40%;
        background-image: url(../../assets/search.png);
        background-position: right;
        background-repeat: no-repeat;
        background-size: 1.5rem;
        background-position-x: 97%;
        outline: none;
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid #ede7e3;
        border-radius: 38px;
        padding: 1rem;
        color: var(--color-blue-dark);
        &::-webkit-search-cancel-button {
          display: none;
        }
      }
    }
    .search-input:focus {
      border-color: var(--color-blue-dark);
      .information {
        display: none;
      }
    }
    .all-products {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      row-gap: 1rem;
      justify-items: center;
    }
    .detailled-product {
      width: 100%;
      height: 100%;
    }
  }
}
</style>