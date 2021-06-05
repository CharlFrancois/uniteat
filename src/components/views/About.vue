<template>
  <div class="about">
      <navbar />
      <div class="content">
          <span class="title">Apprenez en plus sur Unit'Eat</span>
      </div>
      <Footer />
  </div>
</template>

<script>
import Footer from '../base/Footer.vue'
import Navbar from '../base/Navbar.vue'
export default {
  components: { Navbar, Footer },

}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;
    .content {
        display: flex;  
        justify-content: center;
        min-height: 100vh;
        .title {
            font-size: 2rem;
            font-weight: 700;
        }
    }
}
</style>