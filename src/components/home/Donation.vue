<template>
  <div class="donation">
    <div class="image">
      <img
        src="../../assets/undraw/undraw_powerful.png"
        class="superhero-svg"
      />
    </div>
    <div class="information">
      <span class="title">Nous avons besoin de vous</span>
      <span class="description"
        >C'est grâce à vous et à votre engagement que Unit'Eat peut continuer
        d'exister. Vous faites vivre la plateforme et c'est grâces à vos dons
        que vous permettez de limiter le gaspillage alimentaire. Soyez nos héros
        !</span
      >
      <button class="donation-button" @click="showUnavailablePopup = !showUnavailablePopup">
        Faire un don
      </button>
    </div>
    <div v-if="showUnavailablePopup" class="unavailable-backdrop">
      <unavailable-popup
        class="unavailable-popup"
        @close="showUnavailablePopup = !showUnavailablePopup"
      />
    </div>
  </div>
</template>

<script>
import UnavailablePopup from "../base/UnavailablePopup.vue";

export default {
  name: "Donation",
  components: { UnavailablePopup },
  data() {
    return {
      showUnavailablePopup: false
    };
  },
};
</script>

<style lang="scss" scoped>
.donation {
  height: 100vh;
  display: flex;
  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    .superhero-svg {
      height: 25rem;
      align-self: center;
    }
  }
  .information {
    display: flex;
    flex-direction: column;
    color: #2f2e41;
    width: 40%;
    height: 75%;
    justify-content: center;
    place-content: space-evenly;
    align-self: center;
    .title {
      font-family: "Raleway";
      font-size: 2rem;
      color: #1d515e;
    }
    .donation-button {
      background: #ffa62b;
      box-shadow: 0px 3px 6px #00000029;
      border: none;
      border-radius: 38px;
      padding: 0.5em 1rem;
      font-weight: bold;
      outline: none;
      color: #262533;
      text-decoration: none;
      align-self: center;
    }
  }
  .unavailable-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>