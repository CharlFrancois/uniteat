<template>
  <div class="login">
    <div class="content">
      <div class="left">
        <span class="text-uniteat">Unit'Eat</span>
        <img src="../../../assets/svg/login_undraw.svg" class="login-svg" />
      </div>
      <div class="right">
        <span class="text-login">Connectez-vous</span>
        <div class="group-connect-button">
          <button class="connect-button">
            <img class="icon" src="../../../assets/svg/icons-google.svg" />
            <span class="button-text">Continuer avec Google</span>
          </button>
          <button class="connect-button">
            <img class="icon" src="../../../assets/svg/icons-facebook.svg" />
            <span class="button-text">Continuer avec Facebook</span>
          </button>
        </div>
        <form class="form" @submit.prevent="loginUser">
          <input
            id="email"
            type="text"
            class="data-input"
            v-model="email"
            placeholder="Adresse mail"
            required
          />
          <input
            id="password"
            type="password"
            class="data-input"
            v-model="password"
            placeholder="Mot de passe"
            required
          />
          <span class="forget-password">Mot de passe oublié ?</span>
          <input type="submit" class="button-submit" value="Se connecter" />
        </form>
        <span class="not-registred">Pas encore inscrit ?</span>
        <router-link class="button-register" to="/create-account"
          >Créer un compte</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginAccountUser", "loginAccountAsso"]),
    loginUser() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.loginAccountUser(user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/home");
          }
        })
        .catch(() => {
          this.loginAccountAsso(user)
            .then((res) => {
              if (res.data.success) {
                this.$router.push("/home");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
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
      background-image: url("../../../assets/svg/Connexion.svg");
      background-size: cover;
      width: 40%;
      height: 100%;
      border-radius: 57px 0px 0px 57px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-uniteat {
        margin-top: 30%;
        font-family: "Raleway";
        color: #ffffff;
        font-size: 4rem;
        font-weight: bold;
      }
      .login-svg {
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

      .text-login {
        font-family: "Raleway";
        font-size: 3rem;
        font-weight: 500;
      }
      .group-connect-button {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        height: 5em;
        place-content: space-between;
        .connect-button {
          width: 20em;
          box-shadow: 0px 3px 6px #00000029;
          border-radius: 38px;
          background: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          outline: none;

          .icon {
            height: 2rem;
            margin: 0 1em 0 1em;
          }
          .button-text {
            font-weight: 400;
          }
        }
      }
      .form {
        display: flex;
        flex-direction: column;
        .data-input {
          width: 25em;
          height: 3em;
          border: 2px solid #aaaaaa;
          border-radius: 38px;
          opacity: 0.3;
          text-indent: 1.5em;
          margin-top: 1em;
          outline: none;
        }
      }

      .forget-password {
        color: #ffa62b;
        font-weight: 400;
        font-size: 0.8em;
        margin-left: 1em;
      }

      .button-submit {
        margin-top: 1em;
        background: #ffa62b;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em;
        width: 10em;
        font-weight: bold;
        outline: none;
      }

      .button-register {
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
      }
      .not-registred {
        margin: 1em 0;
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
        .text-uniteat {
          margin-top: 10% !important;
        }
        .login-svg {
          display: none;
        }
      }
      .right {
        width: 100%;
        .text-login {
          font-size: 2rem;
        }
        .group-connect-button {
          height: auto;
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