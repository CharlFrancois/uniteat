<template>
  <div>
    <!-- Nav bar -->
    <HomePage />
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HomePage from './components/home/homePage'

export default {
  name: 'App',
  components:{
    HomePage
  }
}
</script>

