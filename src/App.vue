<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Bitacora Bomberos San Francisco</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active">Home</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"></a>
          </li>

          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Movimientos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><RouterLink to="/bomberos" class="dropdown-item">Bomberos</RouterLink></li>
              <li><a class="dropdown-item" href="/Unidades">Unidades</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/novedades">Novedades</a></li>
              <li><a class="dropdown-item" href="/novedadePersonal">Novedades Personal</a></li>
              <li><a class="dropdown-item" href="/movimientos">Movimienos Unidades</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/acercaDe">Acerca de..</a></li>
              <li><a class="dropdown-item" href="/logOut">LogOut</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/login">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>





  <div>
    <RouterView></RouterView>
  </div></template>

<style scoped></style>
