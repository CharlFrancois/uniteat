<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Création d'un compte</h3>
<<<<<<< HEAD
      <form @submit.prevent="handleSubmitForm" id="form" novalidate>
=======
      <form @submit.prevent="handleSubmitForm">
>>>>>>> :construction: create user
        <div class="form-group">
          <label>Nom</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>
        <div class="invalid-feedback">Veuillez entrer un nom</div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>
        <div class="invalid-feedback">Veuillez entrer un prénom</div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            class="form-control"
            v-model="user.password"
            id="mdp"
            required
          />
        </div>
        <div class="invalid-feedback">Veuillez entrer un mot de passe</div>

        <div class="form-group">
          <label>Confirmation de mot de passe</label>
          <input
            type="password"
            class="form-control"
            v-model="user.confirmPassword"
            required
          />
        </div>
        <div class="invalid-feedback">Veuillez confirmer le mot de passe</div>

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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
          this.user = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }(function () {
            var str = document.getElementById("mdp").value;
            var msg;
            if (
              str.match(/[0-9]/g) &&
              str.match(/[A-Z]/g) &&
              str.match(/[a-z]/g) &&
              str.match(/[^a-zA-Z\d]/g) &&
              str.length >= 10
            ) {
              msg = "<p style='color:green'>Mot de passe fort.</p>";
            } else {
              msg = "<p style='color:red'>Mot de passe faible.</p>";
            }
            document.getElementById("msg").innerHTML = msg;
          });
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
  }
}
</script>