<script lang="ts" setup>

    const props = defineProps(['project']);

</script>

<template>
    <span class="d-block">
            <NuxtLink class="card card-portfolio card-default card-image-md card-hover-zoom" 
                :to="{ name: 'projects-id',  params: { id: props.project.pro_id}}"
            >
                <span class="card-img rounded-0" data-cursor-style="cursor-circle" data-cursor-text="view">
                    <img src="~/assets/images/africarobase-img-1.jpg" alt="" data-aos="fade-up"
                        class="aos-init aos-animate">
                </span>
                <span class="card-body">
                    <span class="card-title h4">{{ props.project.pro_name }}</span>
                    <span class="card-category subtitle" v-for="category in props.project.pro_category">{{ category }}</span>
                </span>
            </NuxtLink>
    </span>
</template>



<style>
    .card.card-image-md img {
        height: 100%;
        left: 0;
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        transition: .9s;
    }
</style>