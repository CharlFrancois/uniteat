<template>
  <div class="create-user">
    <div class="content">
      <router-link to="/create-account">
        <img class="back-arrow" src="../../assets/left-arrow.png" />
      </router-link>
      <div class="left">
        <span class="text-create">Créer un compte</span>
        <form @submit.prevent="registerUser">
          <div class="group">
            <span class="text-input">Nom d'utilisateur</span>
            <input
              type="text"
              name="to_name"
              class="data-input"
              v-model="user.username"
              placeholder="John"
            />
          </div>
          <div class="group">
            <span class="text-input">Adresse mail</span>
            <input
              type="email"
              name="user_email"
              class="data-input"
              v-model="user.email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div class="group">
            <span class="text-input">Mot de passe</span>
            <input
              type="password"
              class="data-input"
              v-model="user.password"
              placeholder="Créer un mot de passe"
            />
          </div>
          <div class="group">
            <span class="text-input">Confirmer le mot de passe</span>
            <input
              type="password"
              class="data-input"
              v-model="user.confirm_password"
              placeholder="Confirmer votre mot de passe"
            />
          </div>
          <input type="submit" class="button-submit" value="Créer mon compte" />
        </form>
      </div>
      <div class="separator" />
      <div class="right">
        <span class="text-login">Se connecter</span>
        <div class="group-connect-button">
          <button class="connect-button">
            <img class="icon" src="../../assets/svg/icons-google.svg" />
            <span class="button-text">Continuer avec Google</span>
          </button>
          <button class="connect-button">
            <img class="icon" src="../../assets/svg/icons-facebook.svg" />
            <span class="button-text">Continuer avec Facebook</span>
          </button>
        </div>
        <form class="form">
          <input
            type="text"
            class="data-input"
            id="id"
            placeholder="Identifiant ou adresse mail"
            required
          />
          <input
            type="password"
            class="data-input"
            id="id"
            placeholder="Mot de passe"
            required
          />
          <span class="forget-password">Mot de passe oublié ?</span>
        </form>
        <input type="submit" class="button-submit" value="Se connecter" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import emailjs from "emailjs-com";

export default {
  name: "CreateUser",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    ...mapActions(["registerUserParticular", "loginAccountUser"]),
    registerUser(e) {
      let user = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        confirm_password: this.user.confirm_password,
      };
      this.registerUserParticular(user).then((res) => {
        if (res.data.success) {
          emailjs
            .sendForm(
              "service_aof6qdf",
              "template_rm3a9k3",
              e.target,
              "user_jon2DZLjLfJA7p7GqifZi"
            )
            .then(
              (result) => {
                console.log("SUCCESS!", result.status, result.text);
              },
              (error) => {
                console.log("FAILED...", error);
              }
            );
          let userLogin = {
            email: this.user.email,
            password: this.user.password,
          };
          this.loginAccountUser(userLogin).then((res) => {
            if (res.data.success) {
              this.$router.push("thanks");
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.create-user {
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
    padding: 2em;
    .back-arrow {
      position: absolute;
      height: 2em;
    }
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text-create {
        font-family: "Raleway";
        font-size: 2rem;
        font-weight: bold;
      }
      .group {
        display: flex;
        flex-direction: column;
        margin-top: 1em;
        .text-input {
          font-weight: bold;
          font-size: 1em;
        }
        .data-input {
          width: 25em;
          height: 3em;
          border: 2px solid #aaaaaa;
          border-radius: 38px;
          text-indent: 1.5em;
          outline: none;
        }
      }
      .button-submit {
        margin-top: 1em;
        background: #ffa62b;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em;
        width: 13em;
        font-weight: bold;
        outline: none;
      }
    }
    .separator {
      border-right: 0.2em solid black;
      border-radius: 57px;
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .text-login {
        font-family: "Raleway";
        font-size: 2rem;
        font-weight: bold;
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
        margin-top: 4em;
        .data-input {
          width: 25em;
          height: 3em;
          border: 2px solid #aaaaaa;
          border-radius: 38px;
          // opacity: 0.3;
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
        margin-top: 1em;
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
      overflow: hidden;
      .left {
        height: 20%;
        width: 100%;
        border-radius: 57px 57px 0px 0px;
        .text-create {
          font-size: 1.5rem;
        }
        .group {
          .data-input {
            width: 17em;
          }
        }
      }

      .right,
      .separator {
        display: none;
      }
    }
  }
}
</style>