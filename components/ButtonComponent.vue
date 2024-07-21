<template>
    
    <NuxtLink class="background-green-flash btn rounded mt-30 mb-30" :to="props.to"> 
        <slot></slot>
    </NuxtLink>
   
</template>

<script lang="ts" setup>
    const props = defineProps(['to'])

</script>

<style scoped>

    .btn:hover {
        background-color: var(--clr-green);
    }



</style>