<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Création d'un compte associatif</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Nom de l'association</label>
                    <input type="text" class="form-control" v-model="asso.name" required>
                </div>

                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" class="form-control" v-model="asso.email" required>
                </div>

                <div class="form-group">
                    <label>Numéra RNA</label>
                    <input type="text" class="form-control" v-model="asso.rna" required>
                </div>

                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="password" class="form-control" v-model="asso.password" required>
                </div>

                <div class="form-group">
                    <label>Confirmation de mot de passe</label>
                    <input type="password" class="form-control" v-model="asso.confirmPassword" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Création</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data() {
            return {
                asso: {
                   name: '',
                   email: '',
                   rna: '',
                   password: '',
                   confirmPassword: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                 let apiURL = 'http://localhost:4000/api/create-asso';
                
                axios.post(apiURL, this.asso).then(() => {
                  this.$router.push('/edit')
                  this.asso = {
                    name: '',
                    email: '',
                    rna: '',
                    password: '',
                    confirmPassword: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
             }
        }
    }
</script>