<template>
  <div>
    <!-- Router view -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    this.getProduct();
  },
  methods: {
    ...mapActions(["getProduct"]),
  },
}
</script>