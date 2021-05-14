<template>
  <div>
    <h1 class="text-light"><b>Bienvenue sur Unit'Eat</b></h1>
    <div class="row">
      <b
        ><p class="text-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p></b
      >
      <img src="@/assets/Shopping_phone.svg" alt="phone" />
    </div>
    <div class="button float-center" >
      <router-link
        type="button"
        class="btn rounded-pill text-light btn-lg"
        to="/"
        style="background-color: #1d515e"
        ><b>En savoir plus</b></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "textHome",
};
</script>

<style>
div {
  background-color: #489fb5;
}
div h1 {
  margin-left: 5.5rem;
  padding-top: 5%;
  padding-bottom: 5%;
  font-family: Raleway;
  font-size: 3rem;
}
p {
  width: 40%;
  margin-left: 5%;
  margin-top: 3%;
  font-family: Montserrat;
  font-size: 1.2rem;
}
img {
  margin-left: 65%;
  width: 30%;
  height: 30%;
  margin-top: -20%;
}
.button {
    margin-left : 15%;
    margin-top: -5%;
    margin-bottom: 20%;
    font-family: Montserrat;
}
</style>