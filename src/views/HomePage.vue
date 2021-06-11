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
import Footer from "@/components/base/Footer";
import Donation from "@/components/home/Donation";
import OtherAsso from "@/components/home/OtherAsso";
import ProductsPreview from "@/components/home/ProductsPreview";
import TextHome from "@/components/home/TextHome";
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