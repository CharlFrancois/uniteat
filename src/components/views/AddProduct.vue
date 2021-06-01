<template>
  <div class="add-product">
    <Navbar />
    <div class="content">
      <span class="text-add-product" @click="testUser">Ajouter un produit</span>
      <div class="separator" />
      <form @submit.prevent="addOneProduct">
        <div class="product-content">
          <div class="product-information">
            <div class="first-group">
              <div class="group">
                <span class="text-input">Nom du produit :</span>
                <input
                  type="text"
                  class="name-input"
                  v-model="product.name"
                  required
                />
              </div>
              <div class="group">
                <span class="text-input">DLC</span>
                <input
                  type="date"
                  class="dlc-input"
                  v-model="product.dlc"
                  required
                />
              </div>
            </div>
            <div class="group">
              <span class="text-input">Lieu</span>
              <input
                type="text"
                class="data-input"
                v-model="product.place"
                required
              />
            </div>
            <div class="group">
              <span class="text-input">Description</span>
              <textarea
                class="description-input"
                maxlength="255"
                v-model="product.description"
              />
            </div>
          </div>
          <div class="product-image">
            <span class="img-text">Sélectionner une/des photos :</span>
            <div class="input-img" />
            <input type="file" accept="image/png, image/jpeg" id="image" />
          </div>
        </div>
        <div class="bottom">
          <input type="submit" class="button-submit" value="Se connecter" />
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../base/navbar";
import Footer from "../base/footer";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddProduct",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: {
        name: "",
        dlc: "",
        place: "",
        description: "",
        picture: "",
      },
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapActions(["addProduct", "getUser"]),
    testUser() {
      console.log(this.user);
    },
    addOneProduct() {
      let product = {
        username: this.user.username,
        email: this.user.email,
        name: this.product.name,
        dlc: this.product.dlc,
        place: this.product.place,
        description: this.product.description
      };
      this.addProduct(product).then((res) => {
        if (res.data.success) {
          this.$router.push("/product");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  .content {
    padding: 1rem 3rem;
    .text-add-product {
      color: #1d515e;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .separator {
      border-top: 0.2em solid black;
      border-radius: 57px;
      width: 10rem;
      margin: 1rem 0 1rem 0;
    }
    .product-content {
      display: flex;
      width: 100%;
      justify-content: space-around;
      .product-information {
        .first-group {
          display: flex;
        }
        .group {
          display: flex;
          flex-direction: column;
          margin-top: 1em;
          .text-input {
            font-weight: bold;
            font-size: 1em;
          }
          .name-input {
            width: 20em;
            height: 3em;
            border: 2px solid #aaaaaa;
            border-radius: 38px;
            opacity: 0.3;
            text-indent: 1.5em;
            outline: none;
            margin-right: 3rem;
          }
          .dlc-input {
            width: 12em;
            height: 3em;
            border: 2px solid #aaaaaa;
            border-radius: 38px;
            opacity: 0.3;
            text-indent: 1.5em;
            outline: none;
          }
          .description-input {
            width: 35em;
            height: 10em;
            border: 2px solid #aaaaaa;
            border-radius: 38px;
            opacity: 0.3;
            text-indent: 1.5em;
            outline: none;
            resize: none;
          }
          .data-input {
            width: 35em;
            height: 3em;
            border: 2px solid #aaaaaa;
            border-radius: 38px;
            opacity: 0.3;
            text-indent: 1.5em;
            outline: none;
          }
        }
      }
      .product-image {
        .input-img {
          background: #f1f1f1 0% 0% no-repeat padding-box;
          box-shadow: 3px 3px 10px #00000029;
          border-radius: 35px;
          height: 20rem;
          width: 20rem;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
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
    }
  }
}
</style>