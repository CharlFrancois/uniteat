<template>
  <div class="create-asso">
    <div class="content">
      <router-link to="/create-account">
        <img class="back-arrow" src="../../../assets/left-arrow.png" />
      </router-link>
      <div class="info">
        <span class="text-create">Créer un compte</span>
        <div class="form">
          <div class="group">
            <span class="text-input">Nom de l'association</span>
            <input
              type="text"
              class="data-input"
              id="id"
              placeholder="Les Restaurants du Coeur"
              required
            />
          </div>
          <div class="group">
            <span class="text-input">Adresse mail</span>
            <input
              type="email"
              class="data-input"
              id="id"
              placeholder="example@example.com"
              required
            />
          </div>
          <div class="group">
            <span class="text-input">N° RNA</span>
            <input
              type="text"
              class="data-input"
              id="id"
              placeholder="N° d'identification à 9 chiffres"
              required
            />
          </div>
          <div class="group">
            <span class="text-input">Mot de passe</span>
            <input
              type="password"
              class="data-input"
              id="id"
              placeholder="Créer un mot de passe"
              required
            />
          </div>
          <div class="group">
            <span class="text-input">Adresse</span>
            <input
              type="text"
              class="data-input"
              id="id"
              placeholder="Choisir une localisation"
              required
            />
          </div>
          <div class="group">
            <span class="text-input">Confirmer le mot de passe</span>
            <input
              type="text"
              class="data-input"
              id="id"
              placeholder="Confirmer votre mot de passe"
              required
            />
          </div>
        </div>
        <router-link to="/thanks">
          <input type="submit" class="button-submit" value="Créer mon compte" />
        </router-link>
        <span class="already-registred">Vous avez déjà un compte ?</span>
        <router-link class="button-login" to="/login">Se connecter</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAsso",
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
            opacity: 0.3;
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
}
</style>