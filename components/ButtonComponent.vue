<template>
    <span>
        <NuxtLink data-aos="fade-up" class="btn btn-dark btn-with-ball mt-30 mb-30" :to="props.to"> 
            <slot></slot>
        </NuxtLink>
    </span>
</template>

<script lang="ts" setup>
    const props = defineProps(['to'])

</script>

<style>

</style>