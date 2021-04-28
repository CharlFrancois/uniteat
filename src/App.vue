<template>
  <div>
    <!-- Nav bar -->
    <Navbar />
    <!-- TextHome -->
    
    <!--Footer-->
    <Footer />
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from './components/base/navbar'
import Footer from './components/base/footer'
export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

