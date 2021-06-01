<template>
  <div class="product-card">
    <span class="title"> {{ product.title }} </span>
    <img src="../../assets/empty_image.jpg" class="img" />
    <span class="place"> {{ product.place }} </span>
    <span class="description"> {{ product.description }} </span>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      product: {
        title: "Jus d'orange",
        place: "Lille",
        description: "Nunc blandit ipsum sit amit totor phareta varius.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  font-family: "MontSerrat";
  width: 10rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  .title {
      color: #2F2E41;
      font-family: "Raleway";
      font-weight: 400;
      font-size: 1.5rem;
  }
  .img {
      width: 8rem;
      border-radius: 33px;
      align-self: center;
  }
  .place {
      color: #FFA62B;
  }
  .description {
      color: #2F2E41;
  }
}
</style>