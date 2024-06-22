<template>
    <span>
        <NuxtLink data-aos="fade-up" class="btn btn-dark btn-with-ball" :to="props.to"> 
            <slot></slot>
        </NuxtLink>
    </span>
</template>

<script lang="ts" setup>
    const props = defineProps(['to'])

</script>

<style>

</style>