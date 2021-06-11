<template>
  <div class="create-asso">
    <div class="content">
      <router-link to="/create-account">
        <img class="back-arrow" src="../../assets/left-arrow.png" />
      </router-link>
      <div class="info">
        <span class="text-create">Créer un compte</span>
        <form class="form" @submit.prevent="registerAccountAsso">
          <div class="input-group">
            <div class="group">
              <span class="text-input">Nom de l'association</span>
              <input
                type="text"
                name="to_name"
                class="data-input"
                v-model="asso.name"
                placeholder="Les Restaurants du Coeur"
                required
              />
            </div>
            <div class="group">
              <span class="text-input">Adresse mail</span>
              <input
                type="email"
                name="user_email"
                class="data-input"
                v-model="asso.email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div class="group">
              <span class="text-input">N° RNA</span>
              <input
                type="text"
                class="data-input"
                v-model="asso.rna"
                placeholder="N° d'identification à 9 chiffres"
                required
              />
            </div>
            <div class="group">
              <span class="text-input">Mot de passe</span>
              <input
                type="password"
                class="data-input"
                v-model="asso.password"
                placeholder="Créer un mot de passe"
                required
              />
            </div>
            <div class="group">
              <span class="text-input">Adresse</span>
              <input
                type="text"
                class="data-input"
                v-model="asso.place"
                placeholder="Choisir une localisation"
                required
              />
            </div>
            <div class="group">
              <span class="text-input">Confirmer le mot de passe</span>
              <input
                type="password"
                class="data-input"
                id="id"
                v-model="asso.confirm_password"
                placeholder="Confirmer votre mot de passe"
                required
              />
            </div>
          </div>
          <input type="submit" class="button-submit" value="Créer mon compte" />
        </form>
        <span class="already-registred">Vous avez déjà un compte ?</span>
        <router-link class="button-login" to="/login">Se connecter</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import emailjs from "emailjs-com";

export default {
  name: "CreateAsso",
  data() {
    return {
      asso: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        rna: "",
        place: "",
      },
    };
  },
  methods: {
    ...mapActions(["registerAsso", "loginAccountAsso"]),
    registerAccountAsso(e) {
      let asso = {
        name: this.asso.name,
        email: this.asso.email,
        rna: this.asso.rna,
        place: this.asso.place,
        password: this.asso.password,
        confirm_password: this.asso.confirm_password,
      };
      this.registerAsso(asso).then((res) => {
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

          let assoLogin = {
            email: this.asso.email,
            password: this.asso.password,
          };

          this.loginAccountAsso(assoLogin).then((res) => {
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
.create-asso {
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
      z-index: 1;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      .text-create {
        font-family: "Raleway";
        font-size: 2rem;
        font-weight: bold;
      }
      .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        .input-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1em;
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

      .button-login {
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
      }
      .already-registred {
        margin: 1em 0;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      width: 80%;
      height: 85%;
      overflow-y: scroll;
      .info {
        justify-content: flex-start;
        .text-create {
          font-size: 1.5rem;
        }
        .form {
          .input-group {
            display: flex;
            .group {
              .data-input {
                width: 17rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>