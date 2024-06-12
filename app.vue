<script setup lang="ts">  

  const layout = "default";

</script>

<template>
  <div>
    <Nav />
    <div class="bg-body-tertiary body-content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style>
@use "~/assets/scss/main.scss";
  .body-content {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
