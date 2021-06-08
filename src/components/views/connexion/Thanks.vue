<template>
  <div class="thanks">
    <div class="content">
      <div class="left">
        <span class="text-welcome">Bienvenue !</span>
        <img
          src="../../../assets/svg/confirmation_undraw.svg"
          class="thanks-svg"
        />
      </div>
      <div class="right">
        <span class="thanks-title">Merci d'avoir rejoint Unit'Eat</span>
        <span class="mail-send-text"
          >Un mail de confirmation vous a été envoyé à votre adresse mail</span
        >
        <span class="mail">{{ user.email || asso.email }}</span>
        <span class="confirmation-link-text"
          >Merci de cliquer sur le lien de confirmation afin de la valider et
          vous connecter.</span
        >
        <router-link class="button-home" to="/"
          >Retourner à l'accueil</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Thanks",
  computed: {
    ...mapGetters(["user", "asso"]),
  },
  methods: {
    
    ...mapActions(["getUser", "getAsso"]),
  },
  created() {
    this.getUser();
    this.getAsso();
  },
};
</script>

<style lang="scss" scoped>
.thanks {
  background: transparent linear-gradient(119deg, #9796f0 0%, #82c0cc 100%) 0%
    0% no-repeat padding-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MontSerrat";
  .content {
    width: 70%;
    height: 80%;
    background-color: #ffffff;
    border-radius: 57px;
    display: flex;
    .left {
      background-image: url("../../../assets/svg/Confirmation.svg");
      background-size: cover;
      width: 40%;
      height: 100%;
      border-radius: 57px 0px 0px 57px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-welcome {
        margin-top: 30%;
        font-family: "Raleway";
        color: #ffffff;
        font-size: 4rem;
        font-weight: bold;
      }
      .thanks-svg {
        width: 75%;
        margin-top: 27%;
      }
    }
    .right {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .thanks-title {
        font-weight: bold;
        font-size: 2em;
        margin-top: 1em;
      }
      .mail-send-text {
        font-size: 0.8em;
        margin-top: 2em;
      }
      .mail {
        color: #ffa62b;
        font-size: 2em;
        margin-top: 1em;
      }
      .confirmation-link-text {
        font-size: 0.8em;
        margin-top: 1em;
      }
      .button-home {
        background: #2f2e41;
        color: #ffffff;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em;
        width: 13em;
        font-weight: bold;
        outline: none;
        text-decoration: none;
        text-align: center;
        font-size: 0.8em;
        margin-top: 1em;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      width: 80%;
      height: 85%;
      flex-direction: column;
      .left {
        height: 20%;
        width: 100%;
        border-radius: 57px 57px 0px 0px;
        .text-welcome {
          margin-top: 10% !important;
          font-size: 3rem;
        }
        .thanks-svg {
          display: none;
        }
      }
      .right {
        width: 100%;
        text-align: center;
        .mail {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>