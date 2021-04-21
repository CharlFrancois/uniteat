<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Connexion</h3>
      <p class="text-center">Connectez vous :</p>
      <form>
        <div class="form-group">
          <label>Nom</label>
          <input type="text" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input type="password" class="form-control" required />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Création</button>
        </div>
      </form>
      <h3 class="text-center">Pas encore inscrit ?</h3>
      <p class="text-center">Vous êtes...</p>
      <div class="d-flex justify-content-center">
        <router-link class="nav-link pr-3" to="/create-user" >Un particulier</router-link>
        <router-link class="nav-link pr-3" to="/create-asso" >Une association</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>