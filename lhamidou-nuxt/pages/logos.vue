<script lang="ts" setup>

    const { data } = await useFetch('/api/hello')

</script>

<template>
    <div class="container mt-100">
        <div> {{ data }}</div>
    </div>
</template>

<style>

</style>