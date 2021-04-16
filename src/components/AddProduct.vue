<template>
  <div class="add-product">
    <div class="header">
      <span class="title">Ajouter un produit</span>
      <span class="description"
        >Vous pouvez ici ajouter un produit pour en faire bénéficier une
        association qui pourra le distribuer à des personnes dans le
        besoin</span
      >
    </div>
    <form>
      <div class="content">
        <div class="left">
          <div class="picture">
            <label>Photo</label>
            <input type="file" class="form-control-file" />
          </div>
        </div>
        <div class="right">
          <div class="name">
            <label>Nom</label>
            <input
              type="text"
              class="form-control"
              v-model="product.name"
              required
            />
          </div>
          <div class="category">
            <label>Catégorie</label>
            <input
              type="text"
              class="form-control"
              v-model="product.category"
              required
            />
          </div>
          <div class="dlc">
            <label>Date limite de consommation</label>
            <input
              type="date"
              class="form-control"
              v-model="product.dlc"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-danger btn-block">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        picture: "",
        category: "",
        dlc: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.add-product {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .content {
    display: flex;
    align-items: center;
    place-content: center;
    .left {
      width: 30%;
      .picture {
        display: flex;
        flex-direction: column;
        .form-control-file {
          width: 70%;
        }
      }
    }
  }
}
</style>