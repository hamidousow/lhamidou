<script lang="ts" setup>

    const projects = ref()
    const loading = ref(false)

    onMounted(async () => {
        try {            
            const data = await $fetch(`http://localhost:8888/.netlify/functions/all-projects`);
            projects.value =  data as object[]
        } catch(error) {
            console.log(error);            
        }
    })

</script>

<template>   
    <div>
        <Hero />
        <GridCards :projects="projects" :is-loading="loading"/>
    </div> 
    
</template>

<style>

</style>