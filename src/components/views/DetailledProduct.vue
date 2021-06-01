<template>
  <div class="detailled-product">
    <navbar />
    <div class="content" v-if="!confirmReservation">
      <div class="left">
        <img class="product-img" src="../../assets/empty_image.jpg" />
      </div>
      <div class="product-information">
        <span class="title"> {{ title }} </span>
        <div class="separator" />
        <span class="brand"> {{ brand }} </span>
        <span class="description"> {{ description }} </span>
        <div class="group">
          <span>DLC : </span>
          <span class="info"> {{ dlc }} </span>
        </div>
        <div class="group">
          <span>Lieu : </span>
          <span class="info"> {{ place }} </span>
        </div>
        <div class="reserve">
          <button class="button-reserve" @click="bookProduct">
            <span>Réserver</span>
            <img class="shopping-cart" src="../../assets/shopping-cart.png" />
          </button>
          <span class="text-proposed-by">Ce produit est proposé par :</span>
          <UserCard />
        </div>
      </div>
    </div>
    <ConfirmedReservation v-else/>
    <Footer />
  </div>
</template>

<script>
import navbar from "../base/Navbar";
import Footer from "../base/Footer";
import UserCard from "@/components/product/UserCard.vue";
import ConfirmedReservation from "@/components/views/ConfirmedReservation.vue";

export default {
  name: "DetailledProduct",
  components: { navbar, UserCard, ConfirmedReservation, Footer },
  data() {
    return {
      title: "Jus d'orange",
      brand: "Innocent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      dlc: "28/06/2021",
      place: "Lille",
      confirmReservation: false
    };
  },
  methods: {
      bookProduct() {
         this.confirmReservation = true 
      }
  },
};
</script>

<style lang="scss" scoped>
.detailled-product {
  font-family: "Montserrat";
  .content {
    display: flex;
    padding: 1rem;
    .left {
      width: 50%;
      display: flex;
      justify-content: center;
      .product-img {
        border-radius: 57px;
        height: 70%;
      }
    }
    .product-information {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-bottom: 2rem;
      .title {
        font-family: "Raleway";
        color: #1d515e;
        font-size: 2.5rem;
        font-weight: bold;
      }
      .separator {
        border-top: 0.2em solid black;
        border-radius: 57px;
        width: 10rem;
        margin: 1rem 0 1rem 0;
      }
      .description {
        width: 60%;
        margin: 1rem 0 1rem 0;
      }
      .group {
        display: flex;
        .info {
          font-weight: bold;
        }
      }
      .reserve {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        .text-proposed-by {
          margin: 1rem 0 1rem 0;
        }
        .button-reserve {
          margin-top: 1em;
          background: #ffa62b;
          box-shadow: 0px 3px 6px #00000029;
          border: none;
          border-radius: 38px;
          padding: 0.5em;
          width: 10em;
          font-weight: bold;
          outline: none;
          justify-content: center;
          display: flex;
          align-items: center;
          .shopping-cart {
            margin-left: 0.3rem;
            height: 1rem;
          }
        }
      }
    }
  }
}
</style>