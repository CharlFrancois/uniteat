<template>
  <div class="text-home">
    <div class="top">
      <img class="logo" src="../../assets/svg/icons-google.svg" />
      <right-navbar />
    </div>
    <div class="content">
      <div class="information">
        <span class="title">Bienvenue sur Unit'Eat</span>
        <span class="description"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          risus diam, faucibus et ante ullamcorper, convallis iaculis tellus.
          Donec ut vestibulum sapien, et pretium augue. Aenean sem leo, porta
          convallis lobortis non, ullamcorper ac lacus. Cras ac enim id ipsum
          aliquam placerat vel at ex.</span
        >
        <router-link class="show-more" to="/about">
          En savoir plus
        </router-link>
      </div>
      <img src="../../assets/svg/login_undraw.svg" class="home-svg" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RightNavbar from "../base/RightNavbar";
export default {
  components: { RightNavbar },
  name: "TextHome",
  data() {
    return {
      showUserInformation: false,
    };
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
.text-home {
  display: flex;
  flex-direction: column;
  background: transparent linear-gradient(135deg, #489fb5 0%, #82c0cc 100%) 0%
    0% no-repeat padding-box;
  height: 100vh;
  padding: 1rem;

  font-family: "MontSerrat";
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    display: flex;
    height: 100%;
    .information {
      display: flex;
      flex-direction: column;
      color: white;
      width: 50%;
      height: 100%;
      justify-content: center;
      place-content: space-evenly;
      .title {
        font-family: "Raleway";
        font-size: 3rem;
      }
      .show-more {
        background: #1d515e;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em 1rem;
        font-weight: bold;
        outline: none;
        color: white;
        text-decoration: none;
        align-self: center;
      }
    }
    .home-svg {
      height: 25rem;
      width: 50%;
      align-self: center;
    }
  }
}
</style>
