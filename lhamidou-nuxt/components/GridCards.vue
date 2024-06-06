<script lang="ts" setup>
import Card from './Card.vue';


const { data } = await useFetch('/api/hello')


</script>

<template>
    <div class="container pb-160">
        <div data-filters="branding" class="branding col-12 isotope-item col-md-6 pt-100 px-0" v-for="project in data">
            <Card v-bind:project="project" :key="project.pro_id"/>
        </div>
    </div>
</template>


<style>

    .pb-160 {
        padding-bottom: 160px;
    }

</style>