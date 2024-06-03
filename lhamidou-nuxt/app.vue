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
  <div>
  
    <nav>
      <NuxtLink to="/"  class="navbar-brand">l'Hamidou.</NuxtLink>
      <ul class="justify-content-center isotope-options mb-60 pb-30">
        <li class="nav-item">
          <NuxtLink to="/logos"  class="nav-link aos-init aos-animate nav-link-name">logos</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/"  class="nav-link aos-init aos-animate nav-link-name">flyers</NuxtLink>
        </li>
      </ul>
      <div class="container justify-content-between">            
            <div class="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> 
    </nav>
  
    <NuxtPage/>

  </div>
 
</template>
