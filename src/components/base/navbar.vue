<template>
  <div class="navbar">
    <router-link to="/">
      <img class="logo" src="../../assets/svg/icons-google.svg" />
    </router-link>
    <div class="product">
      <router-link class="all-product" to="/product">
        <span>Tous les produits</span>
        <img class="search-icon" src="../../assets/search.png" />
      </router-link>
      <router-link class="add-product" to="/add-product">
        <img src="../../assets/plus.png" />
      </router-link>
    </div>
    <right-navbar />
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
  .profile {
    display: flex;
    .chat,
    .user {
      background: #2f2e41;
      box-shadow: 0px 3px 6px #00000029;
      border: none;
      border-radius: 38px;
      padding: 0.5em;
      font-weight: bold;
      outline: none;
      color: white;
      display: flex;
      align-items: center;
      .icon {
        filter: invert(100%);
        height: 24px;
        &-user {
          filter: invert(100%);
          height: 24px;
          margin-left: 0.5rem;
        }
      }
    }
    .user {
      margin-left: 1rem;
    }
    .user-information {
      background: #ffffff;
      padding: 1rem;
      box-shadow: 0px 4px 10px #00000029;
      border-radius: 31px;
      position: absolute;
      top: 3rem;
      right: 0;
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      height: 10rem;
      justify-content: space-between;
      .user-guest,
      .user-logged {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
      }

      .text {
        color: #2f2e41;
        text-decoration: none;
        &-bold {
          color: #2f2e41;
          text-decoration: none;
          font-weight: 700;
        }
      }
      .separator {
        border-top: 0.1em solid black;
        border-radius: 10px;
      }
    }
  }
}
</style>