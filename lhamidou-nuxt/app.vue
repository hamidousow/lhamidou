<script setup lang="ts">
  import '~/assets/stylesheets/styles.css'

  const nav = [
    { label: 'Home', to: '/' },
    { label: 'Forbidden', to: '/forbidden' },
    { label: 'Redirect', to: '/redirect' },
  ]

  

  const route = useRoute()
</script>

<template>
  <div class="bg-body-tertiary">  
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/logos">Logos</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/flyers">Flyers</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
            </li>
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  
    <NuxtPage/>

  </div>
 
</template>
