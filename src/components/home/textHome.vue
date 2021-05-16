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
    <div class="button float-center">
      <router-link
        type="button"
        class="btn rounded-pill text-light btn-lg"
        to="/"
        style="background-color: #1d515e"
        ><b>En savoir plus</b></router-link
      >
    </div>
    <div class="mouse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="white"
        class="bi bi-mouse"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"
        />
      </svg>
      <div class="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          class="bi bi-chevron-compact-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
          />
        </svg>
      </div>
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
  margin-left: 15%;
  margin-top: -5%;
  margin-bottom: 20%;
  font-family: Montserrat;
}
.mouse {
  margin-left: 50%;
}
</style>