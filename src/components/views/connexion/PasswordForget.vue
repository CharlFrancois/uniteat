<template>
  <div class="password-forget">
    <Navbar />
    <div class="content">
      <span class="title">Changer votre mot de passe</span>
      <div class="separator" />
      <div class="group">
        <span class="text-input">Votre mail :</span>
        <input
          type="email"
          v-model="email"
          class="data-input"
          placeholder="Votre mail"
        />
      </div>
      <div class="group">
        <span class="text-input">Nouveau mot de passe :</span>
        <input
          type="password"
          v-model="newPassword"
          class="data-input"
          placeholder="Nouveau mot de passe"
        />
      </div>
      <div class="group">
        <span class="text-input">Confirmation du nouveau mot de passe :</span>
        <input
          type="password"
          v-model="newPasswordConfirm"
          class="data-input"
          placeholder="Nouveau mot de passe"
        />
      </div>
      <button class="send-button" @click="editUserAccountPassword">
        Modifier
      </button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../base/Navbar.vue";
import Footer from "../../base/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: { Navbar, Footer },
  name: "MyAccount",
  data() {
    return {
      email: "",
      newPassword: "",
      newPasswordConfirm: "",
    };
  },
  methods: {
    ...mapActions(["forgetPassword"]),
    editUserAccountPassword() {
      let user = {
        email: this.email,
        newPassword: this.newPassword,
        newPasswordConfirm: this.newPasswordConfirm,
      };
      this.forgetPassword(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.password-forget {
  .content {
    padding: 1rem 3rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .title {
      color: #1d515e;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .separator {
      border-top: 0.2em solid black;
      border-radius: 57px;
      width: 10rem;
      margin: 0.5rem 0 1rem 0;
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
    .send-button {
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
      margin-top: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      padding: 1rem;
      .group {
        .data-input {
          width: 20em;
        }
      }
    }
  }
}
</style>