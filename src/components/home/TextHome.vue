<template>
  <div class="text-home">
    <div class="top">
      <img class="logo" src="../../assets/Logo_V1_White.png" />
      <right-navbar />
    </div>
    <div class="content">
      <div class="information">
        <span class="title">Bienvenue sur Unit'Eat</span>
        <span class="description"
          >Unit’Eat c’est un projet d’étude imaginé par les 5 étudiants de
            MyDigitalSchool Lille, pour la réalisation du MyDigitalProject. Le
            site permet de mettre en relation les associations avec les
            particuliers, afin qu’il propose simplement des produits
            alimentaires, qu’ils auraient en trop chez eux, et qui pourrait
            intéresser une association.</span
        >
        <router-link class="show-more" to="/about">
          En savoir plus
        </router-link>
      </div>
      <div class="image">
        <img src="../../assets/undraw/undraw_online.png" class="home-svg" />
      </div>
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
    .logo {
      height: 4rem;
    }
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
    .image {
      width: 50%;
      display: flex;
      justify-content: center;
      .home-svg {
        height: 25rem;
        align-self: center;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      .information {
        width: 100%;
      }
      .image {
        display: none;
      }
    }
  }
}
</style>
