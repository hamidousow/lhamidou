<script setup lang="ts">
  import '~/assets/stylesheets/styles.css'

  const route = useRoute()
</script>

<template>
  <div class="bg-body-tertiary body-content">  
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
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
        </div>
      </div>
    </nav>
    <main class="mt-auto">
      <NuxtPage/>
    </main>    
    <Footer />
  </div>
 
</template>

<style>
  .body-content {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
