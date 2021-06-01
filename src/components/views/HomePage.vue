<template>
  <div class="home-page">
    <text-home />
    <products-preview />
    <donation />
    <other-asso />
    <Footer />
  </div>
</template>

<script>
import Footer from "../base/Footer";
import Donation from "../home/Donation";
import OtherAsso from "../home/OtherAsso";
import ProductsPreview from "../home/ProductsPreview";
import TextHome from "../home/TextHome";
export default {
  name: "HomePage",
  components: { TextHome, Donation, OtherAsso, Footer, ProductsPreview },
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
}
</style>