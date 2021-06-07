<template>
  <div class="unavailable-popup">
    <div class="top">
      <span class="title">Fonctionnalité indisponible</span>
      <img src="../../assets/svg/cross.svg" @click="close" />
    </div>
    <span class="explication"
      >Désolé pour le moment cette fonctionnalité n'est pas disponible.</span
    >
  </div>
</template>

<script>
export default {
  name: "UnavailablePopup",
  methods: {
    close() {
      this.$emit('close')
    }
  },
};
</script>

<style lang="scss" scoped>
.unavailable-popup {
  height: 10rem;
  width: 18rem;
  box-shadow: 6px 6px 15px #00000029;
  border-radius: 57px;
  display: flex;
  flex-direction: column;
  place-content: space-evenly;
  background-color: white;
  .top {
    display: flex;
    place-content: space-evenly;
    .title {
      font-weight: 700;
    }
  }
  .explication {
    text-align: center;
  }
}
</style>