<template>
  <div class="other-asso">
    <div class="content">
      <div class="information">
        <span class="title">Ils nous font confiance !</span>
        <span class="description"
          >Il serait long et fastidieux de présenter la liste exhaustive de nos
          clients. Mais voici quelques exemples de collaborations qui illustrent
          une partie de notre savoir-faire.</span
        >
        <router-link class="our-engagement" to="/about">
          Notre engagement
        </router-link>
      </div>
      <div class="image">
        <img src="../../assets/undraw/undraw_mobile.png" class="reunion-svg" />
      </div>
    </div>
    <div class="all-assos">
      <div class="asso">
        <img src="../../assets/restos_du_coeur.png" class="img-asso" />
      </div>
      <div class="asso">
        <img src="../../assets/restos_du_coeur.png" class="img-asso" />
      </div>
      <div class="asso">
        <img src="../../assets/restos_du_coeur.png" class="img-asso" />
      </div>
      <div class="asso">
        <img src="../../assets/restos_du_coeur.png" class="img-asso" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherAsso",
};
</script>

<style lang="scss" scoped>
.other-asso {
  display: flex;
  background: #ede7e3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  .content {
    height: 100vh;
    display: flex;
    .image {
      width: 50%;
      display: flex;
      justify-content: center;
      .reunion-svg {
        height: 25rem;
        align-self: center;
      }
    }
    .information {
      display: flex;
      flex-direction: column;
      color: #2f2e41;
      width: 50%;
      height: 75%;
      justify-content: center;
      place-content: space-evenly;
      align-self: center;
      .title {
        font-family: "Raleway";
        font-size: 2rem;
        color: #1d515e;
      }
      .our-engagement {
        background: #1d515e;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em 1rem;
        font-weight: bold;
        outline: none;
        color: white;
        text-decoration: none;
        align-self: center;
      }
    }
  }
  .all-assos {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 5rem;
    .asso {
      height: 9rem;
      width: 9rem;
      border-radius: 50%;
      background: white;
      box-shadow: 0px 3px 6px #00000029;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .img-asso {
        height: 7rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      .information {
        width: 100%;
      }
      .image {
        display: none;
      }
    }
    .all-assos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1em;
      justify-items: center;
    }
  }
}
</style>
