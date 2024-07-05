<script lang="ts" setup>

    const loading = ref(false)
    const projects = ref()

    const { data } = await useFetch(`/api/all-projects`)    
    projects.value = toRaw(data.value)
    
</script>

<template>   
    <div>
        <HeroComponent/>
        <ServicesComponent/>
        <GridCards :projects="projects" :is-loading="loading"/>
    </div> 
    
</template>
