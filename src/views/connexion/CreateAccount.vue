<template>
  <div class="create-account">
    <div class="content">
      <div class="left">
        <span class="text-uniteat">Unit'Eat</span>
        <img src="../../assets/svg/create_undraw.svg" class="create-svg" />
      </div>
      <div class="right">
        <span class="text-create">Créer un compte</span>
        <span class="text-you-are">Vous êtes...</span>
        <div class="group-create-button">
          <router-link class="button-register" to="/create-user"
            >Un particulier</router-link
          >
          <router-link class="button-register" to="/create-asso"
            >Une association</router-link
          >
        </div>
        <span class="already-register">Vous avez déjà un compte ?</span>
        <router-link class="button-login" to="/login">Se connecter</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
};
</script>

<style lang="scss" scoped>
.create-account {
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
      background-image: url("../../assets/svg/Inscription.svg");
      background-size: cover;
      width: 40%;
      height: 100%;
      border-radius: 57px 0px 0px 57px;
      display: flex;
      flex-direction: column;
      align-items: center;
      place-content: space-between;
      .text-uniteat {
        margin-top: 30%;
        font-family: "Raleway";
        color: #ffffff;
        font-size: 4rem;
        font-weight: bold;
      }
      .create-svg {
        width: 75%;
      }
    }
    .right {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .text-create {
        font-family: "Raleway";
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 1em;
      }
      .group-create-button {
        display: flex;
        place-content: space-between;
        width: 25em;
        .button-register {
          margin-top: 1em;
          background: #ffa62b;
          box-shadow: 0px 3px 6px #00000029;
          border: none;
          border-radius: 38px;
          padding: 0.5em;
          width: 10em;
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
          outline: none;
          text-align: center;
        }
      }

      .already-register {
        margin-top: 7em;
      }

      .button-login {
        background: #2f2e41;
        color: #ffffff;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em;
        width: 10em;
        font-weight: bold;
        outline: none;
        text-decoration: none;
        text-align: center;
        margin-top: 0.5em;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      width: 80%;
      height: 85%;
      flex-direction: column;
      overflow: hidden;
      .left {
        height: 20%;
        width: 100%;
        border-radius: 57px 57px 0px 0px;
        .text-uniteat {
          margin-top: 10% !important;
        }
        .create-svg {
          display: none;
        }
      }
      .right {
        width: 100%;
        .text-create {
          font-size: 2rem;
        }
        .group-create-button {
          flex-direction: column;
          align-items: center;
          .connect-button {
            width: 15rem;
            margin-top: 0.5rem;
          }
        }
        .form {
          .data-input {
            width: 15em;
          }
        }
      }
    }
  }
}
</style>