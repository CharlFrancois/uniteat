<template>
  <div class="contact">
      <navbar />
      <div class="content">
          <span class="title">Contact</span>
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
.contact {
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