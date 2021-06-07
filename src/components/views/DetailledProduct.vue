<template>
  <div class="detailled-product">
    <div class="content" v-if="!confirmReservation">
      <div class="left">
        <img class="product-img" src="../../assets/empty_image.jpg" />
      </div>
      <div class="product-information">
        <span class="title"> {{ product.name }} </span>
        <div class="separator" />
        <span class="brand"> {{ product.brand }} </span>
        <span class="description"> {{ product.description }} </span>
        <div class="group">
          <span>DLC : </span>
          <span class="info"> {{ dateConvert(product.dlc) }} </span>
        </div>
        <div class="group">
          <span>Lieu : </span>
          <span class="info"> {{ product.place }} </span>
        </div>
        <div class="reserve">
          <button class="button-reserve" @click="bookProduct">
            <span>Réserver</span>
            <img class="shopping-cart" src="../../assets/shopping-cart.png" />
          </button>
          <span class="text-proposed-by">Ce produit est proposé par :</span>
          <UserCard :username="product.username" :place="product.place" />
        </div>
      </div>
    </div>
    <ConfirmedReservation :username="product.username" :place="product.place" v-else />
  </div>
</template>

<script>
import UserCard from "@/components/product/UserCard.vue";
import ConfirmedReservation from "@/components/views/ConfirmedReservation.vue";
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "DetailledProduct",
  components: { UserCard, ConfirmedReservation },
  data() {
    return {
      confirmReservation: false
    }
  },
  props: ["product"],
  methods: {
    ...mapActions(["updateProduct"]),

    bookProduct() {
      let product = {
        _id: this.product._id
      };
      this.updateProduct(product).then((res) => {
        if (res.data.success) {
          this.confirmReservation = true
        }
      });
      this.confirmReservation = true
    },
    dateConvert(date) {
      var date_new = new Date(date);
      return new Intl.DateTimeFormat("fr-FR").format(date_new);
    },
  },
  computed: {
    ...mapGetters(["products"])
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