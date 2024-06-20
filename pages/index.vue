<script lang="ts" setup>

    const projects = ref()
    const loading = ref(false)

    onMounted(async () => {
        try {            
            const data = await $fetch(`/api/all-projects`);
            projects.value = data
            console.log(projects.value);
            
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