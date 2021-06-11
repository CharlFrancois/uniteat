<template>
  <div class="footer">
    <div class="top">
      <div class="social-media">
        <span class="title">Unit'Eat</span>
        <div class="icons">
          <img class="icon" src="../../assets/facebook.png" />
          <img class="icon" src="../../assets/instagram.png" />
          <img class="icon" src="../../assets/twitter.png" />
        </div>
      </div>
      <div class="informations">
        <div class="section">
          <span class="title">A propos de Unit'Eat</span>
          <router-link class="link" to="about">Unit’Eat c'est quoi ?</router-link>
          <router-link class="link" to="about">Pourquoi nous ?</router-link>
          <router-link class="link" to="about">Les fondateurs</router-link>
        </div>
        <div class="section">
          <span class="title">Plus d'informations</span>
          <a class="link" target="_blank" rel="noopener noreferrer" href="https://fne.asso.fr/dossiers/gaspillage-alimentaire-d%C3%A9finition-enjeux-et-chiffres">Le gaspillage alimentaire</a>
          <router-link class="link" to="contact">Contact</router-link>
          <!-- <router-link class="link" to="about">Exemple lien</router-link> -->
        </div>
      </div>
    </div>
    <div class="separator" />
    <div class="bottom">
      <div class="informations">
        <router-link class="link" to="about-page"
          >Conditions d'utilisation</router-link
        >
        <router-link class="link" to="about-page">Mentions légales</router-link>
        <router-link class="link" to="about-page"
          >Politique de confidentialité</router-link
        >
      </div>
      <span class="copyright">Unit'Eat 2021</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #262533;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat";
  color: white;
  justify-content: space-evenly;
  .top {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .social-media {
      .title {
        color: white;
        font-size: 2rem;
        font-weight: 700;
      }
      .icons {
        display: flex;
        justify-content: space-between;
        .icon {
          height: 2rem;
          filter: invert(100%);
        }
      }
    }
    .informations {
      display: flex;
      width: 35%;
      justify-content: space-around;
      .section {
        display: flex;
        flex-direction: column;
        .title {
          color: #ffa62b;
          font-size: 1rem;
          font-family: "Raleway";
          font-weight: 700;
          text-decoration: underline;
          margin-bottom: 1rem;
        }
        .link {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .separator {
    width: 90%;
    border-top: 0.2em solid black;
    border-top-color: white;
    border-radius: 10px;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .informations {
      display: flex;
      justify-content: space-around;
      place-self: center;
      width: 80%;
      margin-bottom: 1rem;
      .link {
        color: white;
        text-decoration: none;
      }
    }
    .copyright {
      align-self: center;
    }
  }
  @media only screen and (max-width: 600px) {
    .top {
      flex-direction: column;
      .social-media {
        align-self: center;
        margin-bottom: 1rem;
      }
      .informations {
        width: 100%;
      }
    }
    .bottom {
      .informations {
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 5rem;
      }
    }
  }
}
</style>