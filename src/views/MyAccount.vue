<template>
  <div class="my-account">
    <Navbar />
    <div class="content">
      <span class="main-title">Votre compte {{ user.username }}</span>
      <span class="information"
        >Cette fonctionnalité n'est pas disponible pour les associations</span
      >
      <div class="separator" />
      <div class="edit-content">
        <div class="email">
          <span class="title">Changer votre email</span>
          <div class="separator" />
          <div class="group">
            <span class="text-input">Ancien mail :</span>
            <span>{{ user.email }}</span>
          </div>
          <div class="group">
            <span class="text-input">Nouveau mail :</span>
            <input
              type="email"
              v-model="newEmail"
              class="data-input"
              placeholder="johndoe@example.com"
            />
          </div>
          <button class="send-button" @click="editUserAccountEmail">
            Modifier
          </button>
        </div>
        <div class="password">
          <span class="title">Changer votre mot de passe</span>
          <div class="separator" />
          <div class="group">
            <span class="text-input">Ancien mot de passe :</span>
            <input
              type="password"
              v-model="oldPassword"
              class="data-input"
              placeholder="Ancien mot de passe"
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
            <span class="text-input"
              >Confirmation du nouveau mot de passe :</span
            >
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
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/base/Navbar.vue";
import Footer from "@/components/base/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Navbar, Footer },
  name: "MyAccount",
  data() {
    return {
      newEmail: "",
      oldPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    };
  },
  created() {
    this.getUser();
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getUser", "editUserEmail", "editUserPassword"]),
    editUserAccountEmail() {
      let user = {
        _id: this.user._id,
        newEmail: this.newEmail,
      };
      this.editUserEmail(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    },
    editUserAccountPassword() {
      let user = {
        email: this.user.email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        newPasswordConfirm: this.newPasswordConfirm,
      };
      this.editUserPassword(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.my-account {
  .content {
    padding: 1rem 3rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .main-title {
      color: #1d515e;
      font-size: 2rem;
      font-weight: 500;
    }
    .title {
      color: #1d515e;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .information {
      opacity: 0.7;
      font-size: 0.8rem;
    }
    .separator {
      border-top: 0.2em solid black;
      border-radius: 57px;
      width: 10rem;
      margin: 0.5rem 0 1rem 0;
    }
    .edit-content {
      display: flex;
      .email,
      .password {
        width: 50%;
      }
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
      .edit-content {
        flex-direction: column;
        .email, .password {
            width: 100%;
        }
        .password {
            margin-top: 1rem;
        }
        .group {
          .data-input {
            width: 20em;
          }
        }
      }
    }
  }
}
</style>