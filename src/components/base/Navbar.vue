<template>
  <div class="navbar">
    <router-link to="/">
      <img class="logo" src="../../assets/logo.png" />
    </router-link>
    <div class="product" v-if="isLoggedIn">
      <button class="all-product" @click="$router.go('/product')">
        <span>Tous les produits</span>
        <img class="search-icon" src="../../assets/search.png" />
      </button>
      <button class="add-product" @click="$router.go('/add-product')">
        <img src="../../assets/plus.png" />
      </button>
    </div>
    <right-navbar class="right" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RightNavbar from "./RightNavbar.vue";
export default {
  name: "Navbar",
  data() {
    return {
      showUserInformation: false,
    };
  },
  components: {
    RightNavbar,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    changeStateUserInfo() {
      this.showUserInformation = !this.showUserInformation;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 4rem;
  box-shadow: 0px 3px 6px #00000029;
  justify-content: center;
    display: flex;
  .logo {
    height: 2rem;
    position: absolute;
    left: 1%;
    top: 25%;
  }
  .product {
    display: flex;
    .all-product {
      background: #1d515e;
      box-shadow: 0px 3px 6px #00000029;
      border: none;
      border-radius: 38px;
      padding: 0.5em;
      font-weight: bold;
      outline: none;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      .search-icon {
        filter: invert(100%);
        margin: 0 0.5rem;
        height: 1.2rem;
      }
    }
    .add-product {
      background: #ffa62b;
      box-shadow: 0px 3px 6px #00000029;
      border: none;
      border-radius: 38px;
      padding: 0.5em;
      font-weight: bold;
      outline: none;
      color: white;
      margin-left: 1rem;
    }
  }
  .right-navbar {
    position: absolute;
    right: 0;
  }

  @media only screen and (max-width: 600px) {
    .product {
      .all-product {
        display: none;
      }
      .add-product {
        margin-left: 0;
      }
    }
  }
}
</style>
