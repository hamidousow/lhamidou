<script lang="ts" setup>
import Card from './Card.vue';

 const props = defineProps(['projects', 'isLoading'])

</script>

<template>
    <div class="container pb-160">
        <div class="d-block" v-if="props.isLoading">...Loading projects</div>
        <div class="cards d-flex flex-column flex-md-row">
            <div class="branding col-12 isotope-item col-md-6 pt-100 px-0" v-for="project in props.projects">
                <Card v-bind:project="project" :key="project?.pro_id"/>
            </div>
        </div>
    </div>
</template>


<style>

    .pb-160 {
        padding-bottom: 160px;
    }

</style>