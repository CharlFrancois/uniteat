<template>
  <div class="about">
    <Navbar />
    <div class="content">
      <span class="main-title">Apprenez en plus sur Unit'Eat</span>
      <div class="section">
        <div class="left">
          <span class="title">Unit'Eat c'est quoi ?</span>
          <span class="text"
            >Unit’Eat c’est un projet d’étude imaginé par les 5 étudiants de
            MyDigitalSchool Lille, pour la réalisation du MyDigitalProject. Le
            site permet de mettre en relation les associations avec les
            particuliers, afin qu’il propose simplement des produits
            alimentaires, qu’ils auraient en trop chez eux, et qui pourrait
            intéresser une association.
          </span>
        </div>
        <div class="right">
          <img class="undraw" src="../../assets/undraw/undraw_gift.svg" />
        </div>
      </div>
      <div class="section">
        <div class="right">
          <img class="undraw" src="../../assets/undraw/undraw_development.svg" />
        </div>
        <div class="left">
          <span class="title">Pourquoi nous ?</span>
          <span class="text"
            >Unit’Eat est très pratique pour les associations, comme pour les
            particuliers, il permet de laisser le choix à l’utilisateur d'où il
            veut donner son produit.
          </span>
        </div>
      </div>
      <div class="section">
        <div class="left">
          <span class="title">Les fondateurs</span>
          <span class="text"
            >Le groupe est composé de 3 WebMarketing et 2 Développeur :
          </span>
          <ul>
            <li>Maureen Choron (WebMarketing)</li>
            <li>Olivia Bouligny (WebMarketing)</li>
            <li>Eva Chochoi (Développeur)</li>
            <li>Thomas Coutey (UX/UI)</li>
            <li>Charles François (Développeur)</li>
          </ul>
        </div>
        <div class="right">
          <img class="undraw" src="../../assets/undraw/undraw_team.svg" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../base/Footer.vue";
import Navbar from "../base/Navbar.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style lang="scss" scoped>
.about {
  .content {
    padding: 1rem 3rem;
    min-height: 100vh;
    .main-title {
      color: #1d515e;
      font-size: 2rem;
      font-weight: 700;
      text-decoration: underline;
    }
    .section {
      display: flex;
      justify-content: space-around;
      margin-bottom: 3rem;
      .title {
        color: #1d515e;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .left {
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: center;
      }
      .right {
        align-self: center;
        .undraw {
          height: 20rem;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      .section {
        .left {
          width: 100%;
        }
      }
      .undraw {
        display: none;
      }
    }
  }
}
</style>