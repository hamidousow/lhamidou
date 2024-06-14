<script setup lang="ts">  

  const layout = "default";

</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout> 
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
