
<script lang="ts" setup>

  const projects = ref()

  const { data } = await useFetch(`/api/all-projects`)    
  projects.value = toRaw(data.value)

</script>

<template>
  <div class="content pt-160 ">
    <div class="container page-description d-flex flex-column">
      <h1 class="title climate-crisis-regular-font"> mes réalisations </h1>
      <p class="description">

        Découvrez quelques-unes de mes réalisations les plus récentes en matière de design de logos et de création de sites internet. Chaque projet est le fruit d'une collaboration étroite avec mes clients pour répondre précisément à leurs besoins et aspirations.
      </p>
    </div>
    
    <GridCards :projects="projects"/>
  </div>
</template>

<style>

.content {
  width: 100%;
}

.title {
  font-size: 21px;
  text-transform: uppercase;
}

.description {
  max-width: 700px;
}




</style>