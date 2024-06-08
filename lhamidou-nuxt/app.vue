<script setup lang="ts">
  import { createClient } from '@supabase/supabase-js';
import '~/assets/stylesheets/styles.css';

  const layout = "default";

</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
 
</template>

<style>
  .body-content {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
