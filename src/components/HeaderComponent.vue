<template>
  <header class="min-vh-100 position-relative">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light px-4">
      <div class="container-fluid px-0">
        <router-link class="navbar-brand me-5 fw-bold" to="#">
          Studio Rufus
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-uppercase ms-auto">
            <li class="nav-item px-0 px-lg-4">
              <router-link class="nav-link fw-bold" aria-current="page" to="#">story</router-link>
            </li>
            <li class="nav-item px-0 px-lg-4">
              <router-link class="nav-link fw-bold" to="#">about</router-link>
            </li>
            <li class="nav-item px-0 px-lg-4">
              <router-link class="nav-link fw-bold" to="#">contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper text-center">
            <div class="position-absolute top-50 start-50 translate-middle">
              <h1 class="text-navbar px-5 fw-bolder">Are you serious?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
}
</script>

