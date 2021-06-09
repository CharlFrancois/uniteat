<template>
  <div class="product-card" @click="onCardClick">
    <span class="title"> {{ title }} </span>
    <span class="brand"> {{ brand }} </span>
    <img src="../../assets/empty_image.jpg" class="img" v-if="!files.length" />
    <img :src="getImgUrl(files[0])" class="img" v-if="files.length" />
    <span class="place"> {{ place }} </span>
    <div class="dlc">
      <span class="dlc-text"> DLC : </span>
      <span class="dlc-date"> {{ dlc }} </span>
    </div>
    <span class="description"> {{ description }} </span>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["title", "brand", "place", "dlc", "description", "product", "files"],
  methods: {
    onCardClick() {
      this.$emit("clicked", this.product);
    },
    getImgUrl(img) {
      var images = require.context(
        "../../../backend/uploads/",
        false
      );
      return images("./" + img);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  box-shadow: 0px 2px 10px #00000029;
  border: 1px solid #ede7e3;
  border-radius: 40px;
  font-family: "MontSerrat";
  width: 12.5rem;
  height: 17.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
  .title {
    color: #ffa62b;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 1rem;
  }
  .brand {
    color: #aaaaaa;
    font-size: 0.8rem;
  }
  .img {
    width: 8rem;
    height: 8rem;
    border-radius: 33px;
    align-self: center;
    margin: 0.5rem 0;
  }
  .place {
    font-weight: 700;
    font-size: 0.8rem;
  }
  .dlc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 150px;
    .dlc-date {
      font-weight: 700;
      color: #47bb53;
    }
  }
  .description {
    color: #2f2e41;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 150px;
  }

  @media only screen and (max-width: 600px) {
    width: 10.5rem;
    height: 16.5rem;
    .description {
      display: none;
    }
  }
}
</style>