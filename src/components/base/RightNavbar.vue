<template>
  <div class="right-navbar">
    <router-link class="chat" v-if="isLoggedIn" to="/chat">
      <img class="icon" src="../../assets/typing.png" />
    </router-link>
    <button class="user" @mouseenter="changeStateUserInfo">
      <img class="icon" src="../../assets/list.png" />
      <img class="icon-user" src="../../assets/user.png" />
    </button>
    <div
      class="user-information"
      v-if="showUserInformation"
      @mouseleave="changeStateUserInfo"
    >
      <div class="user-guest" v-if="!isLoggedIn">
        <router-link class="text-bold" to="/create-account"
          >Inscription</router-link
        >
        <router-link class="text" to="/login">Connexion</router-link>
      </div>
      <div class="user-logged" v-if="isLoggedIn">
        <router-link class="text-bold" to="/my-account">Mon compte</router-link>
        <router-link class="text" to="/my-products">Mes produits</router-link>
        <a class="text" @click.prevent="logoutUser">Déconnexion</a>
      </div>
      <div class="separator" />
      <router-link class="text-bold" to="/about"
        >A propos de Unit'Eat</router-link
      >
      <router-link class="text" to="/contact">Contact</router-link>
      <router-link class="text" to="/help">Aide</router-link>
    </div>
    <router-link class="login" v-if="!isLoggedIn" to="/login"
      >Connexion
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RightNavbar",
  data() {
    return {
      showUserInformation: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),

    changeStateUserInfo() {
      this.showUserInformation = !this.showUserInformation;
    },
    logoutUser() {
      this.$router.push("/");
      this.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
.right-navbar {
  display: flex;
  align-items: center;
  z-index: 1;
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
  .chat {
    margin-right: 1rem;
  }
  .user-information {
    background: #ffffff;
    padding: 1rem;
    box-shadow: 0px 4px 10px #00000029;
    border-radius: 31px;
    position: absolute;
    top: 3.8rem;
    right: 2rem;
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
  .login {
    background: #ffa62b;
    box-shadow: 0px 3px 6px #00000029;
    border: none;
    border-radius: 38px;
    padding: 0.5em 1rem;
    font-weight: bold;
    outline: none;
    color: #262533;
    margin-left: 1rem;
    text-decoration: none;
  }
}
</style>
