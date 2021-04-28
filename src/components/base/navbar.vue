<template>
  <nav
    class="navbar navbar-dark bg-white justify-content-between flex-nowrap flex-row"
  >
    <div class="container">
      <a href="home.vue" class="navbar-brand float-left text-primary">UNITEAT</a>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control"
              type="search"
              placeholder="Chercher un produit"
              aria-label="Search"/>
            <button class="btn btn-outline-success bg-primary text-white" type="submit">
              Chercher
            </button>
          </form>
        </div>
      </nav>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link type="button" class="btn btn-primary" to="/"
            >Connexion</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

