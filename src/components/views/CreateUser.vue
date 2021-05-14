<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Création d'un compte</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nom</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            class="form-control"
            v-model="user.password"
            required
          />
        </div>

        <div class="form-group">
          <label>Confirmation de mot de passe</label>
          <input
            type="password"
            class="form-control"
            v-model="user.confirmPassword"
            required
          />
        </div>

        <button @click="addUser">
            Test
        </button>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Création</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import bcrypt from "bcryptjs";

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-user";

      axios
        .post(apiURL, this.user)
        .then(() => {
          this.$router.push("/edit");
          //   this.user = {
          //     name: "",
          //     email: "",
          //     password: "",
          //     confirmPassword: "",
          //   };
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addUser() {
      console.log(this.encryptPassword(this.password));
    },
    encryptPassword(password) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    },
  },
};
</script>