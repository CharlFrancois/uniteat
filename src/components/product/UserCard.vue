<template>
  <div class="user-card">
    <div class="left">
      <img src="../../assets/user_empty.png" class="profil-picture" />
    </div>
    <div class="right">
      <span class="user">{{ username }}</span>
      <span class="city">{{ place }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ['username', 'place']
};
</script>

<style lang="scss" scoped>
.user-card {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MontSerrat";
  width: 15rem;
  height: 6rem;
  .left {
    background-image: url("../../assets/svg/Profil.svg");
    background-size: cover;
    width: 50%;
    height: 100%;
    border-radius: 30px 0px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .profil-picture {
      height: 80%;
      border-radius: 50%;
    }
  }
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    .user {
      color: #ffa62b;
      font-size: 1.2rem;
    }
  }
}
</style>