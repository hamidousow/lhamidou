<script lang="ts" setup>
import type { RefSymbol } from '@vue/reactivity';
import Card from './Card.vue';
import { useProjectsStore } from '~/stores/projectStore';
// import { storeRefs } from 'pinia';

    const data = await $fetch('/api/all-projects');
    const projectsStore =  useProjectsStore();
    const res = storeToRefs(projectsStore);

    onMounted(() => {
        projectsStore.getAllProjects
        console.log(res.projects.value);
        
    })
</script>

<template>
    <div class="container pb-160">
        <div class="branding col-12 isotope-item col-md-6 pt-100 px-0" v-for="project in data">
            <Card v-bind:project="project" :key="project.pro_id"/>
        </div>
    </div>
</template>


<style>

    .pb-160 {
        padding-bottom: 160px;
    }

</style>