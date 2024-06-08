<script lang="ts" setup>
import Card from './Card.vue';
import { useProjectsStore } from '~/stores/projectStore';

    const projectsStore =  useProjectsStore();
    const projects = computed(() => projectsStore.projects)
    const loading = computed(() => projectsStore.loading)

    onMounted(() => {
        projectsStore.getAllProjects()
    })
</script>

<template>
    <span v-if="loading">...Loading projects</span>
    <div class="container d-flex pb-160">
        <div class="branding col-12 isotope-item col-md-6 pt-100 px-0" v-for="project in projects">
            <Card v-bind:project="project" :key="project.pro_id"/>
        </div>
    </div>
</template>


<style>

    .pb-160 {
        padding-bottom: 160px;
    }

</style>