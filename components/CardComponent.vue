<script lang="ts" setup>

    const props = defineProps(['project']);

</script>

<template>
    <span class="d-block">
            <NuxtLink 
                class="card card-portfolio card-default card-image-md card-hover-zoom" 
                :to="`/project/${props.project?.pro_id}`"
            >
                <span class="card-img rounded-0">
                    <img 
                        :src="props.project?.pro_cover" 
                        alt="" 
                        data-aos="fade-up"
                        class="aos-init aos-animate">
                </span>
                <span class="card-body">
                    <span class="card-title h4">{{ props.project?.pro_name }}</span>
                    <span  
                        v-for="category, index in props.project?.pro_category"
                        :key="index"
                        class="card-category subtitle"
                    >{{ category }}</span>
                </span>
            </NuxtLink>
    </span>
</template>

<style>
    .card {
        word-wrap: break-word;
        background-clip: initial;
        background-color: initial;
        border: 0 solid hsla(0, 0%, 5%, .125);
        border-radius: 0;
        display: flex;
        flex-direction: column;
        min-width: 0;
        position: relative;
    }
    .card-hover-zoom .card-img:focus img, .card-hover-zoom .card-img:hover img, .card-hover-zoom:focus img, .card-hover-zoom:hover img {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
    .card-title {
        text-transform: uppercase;
        font-weight: 500;
    }
    .card-img {
        overflow: hidden;
        display: block;
        position: relative;
    }
    .card-img::before {
        content: "";
        display: block;
        padding-top: 65%;
    }
    .card.card-image-md img {
        height: 100%;
        left: 0;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        transition: .9s;
    }
    .card-body {
        padding: 34px 0 0;
    }
    .card-title {
        display: block;
        position: relative;
    }
    .card-category {
        display: block;
        font-weight: 500;
        margin-bottom: 0;
        margin-top: 5px;
    }
</style>