<script lang="ts" setup>
import { useProjectStore } from '~/stores/projectStore';


    const $route = useRoute()
    const id = $route.params.id
    const project = ref()
    const store = useProjectStore()

   const displayCustom = ref(false);
    const activeIndex = ref(0);

    const { data } = await useFetch(`/api/project/${id}`)

    project.value = data.value

    store.getNextProject()
    

    const imageClick = (index: number) => {
        activeIndex.value = index;
        displayCustom.value = true;
    };

</script>

<template>
    <div>
        <div class="container mt-100">
            <div class="mt-10 container">
                <div class="pt-100 mt-n30 pb-70 mb-n10">
                    <div class="gh-1 row">
                        <div class="d-none d-xl-block col-1"></div>
                        <div class="col-12 me-lg-auto me-xl-0 col-lg-5 col-xl-4">
                            <h1 class="project-title mb-60 mb-lg-0 pb-8 pb-lg-0">{{  project?.pro_name }}</h1>
                        </div>
                        <div class="d-none d-xl-block col-lg-2"></div>
                        <div class="col-12 col-xl ms-xl-n30 col-lg-6">
                            <p class="lead mb-0">{{  project?.pro_description }}</p>
                            <hr>
                            <div class="gh-3 gv-1 d-flex flex-column">
                                <div class="col-12 col-lg-auto col-sm-6">
                                    <ul class="list-group-gap borderless ps-0">
                                        <!-- <li class="list-group-item">
                                            <span class="fw-medium me-8">Date:</span> June 10, 2020
                                        </li> -->
                                        <li class="list-group-item  mb-2">
                                            <span class="fw-medium me-8">Client: </span> 
                                            {{  project?.pro_client }}
                                        </li> 
                                        <li class="list-group-item  mb-2">
                                            <span class="fw-medium me-8">Category : </span> 
                                            <span v-for="category, index in project?.pro_category" :key="index" class="category me-1">{{  category + ' ' }}</span>
                                        </li> 
                                        <template v-if="project?.pro_link">
                                            <li class="list-group-item  mb-2">
                                                <span class="fw-medium me-8">Voir le projet en ligne : </span> 
                                                <a :href="project.pro_link" target="_blank" class="me-1">{{  project.pro_link }}</a>
                                            </li>
                                        </template>                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-xl-block col-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <Galleria 
                v-model:activeIndex="activeIndex" 
                v-model:visible="displayCustom" 
                :value="project?.pro_images"  
                :numVisible="7" 
                containerStyle="max-width: 100%" 
                :circular="true" 
                :fullScreen="true" 
                :showItemNavigators="true" 
                :showThumbnails="false"
            >
                <template #item="slotProps">
                    <img :src="project?.pro_images[activeIndex]" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </template>
            </Galleria>
            <div class="row ps-2 pe-2">
                <div v-for="image, index in project?.pro_images" :key="index"
                    class="gallery-item gallery-item-md col-md-6 px-0">
                    <img 
                        :src="image" 
                        alt="image name"
                        @click="imageClick(index)"
                    >
                </div>
            </div>
        </div>
        <div class="pt-160 pb-130 shape-parent overflow-hidden">
            <div class="container">
                <hr class="mt-0 mb-100 pb-7">
                <!-- <div
                    class="gv-1 align-items-center justify-content-center justify-content-md-between text-center text-md-start row">
                    <div class="me-md-auto col-md-10 col-lg-9">
                        <div class="interactive-links">
                            <img class="interactive-links-image" src="" width="230" alt="">
                            <NuxtLink class="nav-link display-4" href="/">
                                <u>Next project</u>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-auto col">
                        <a class="btn btn-clean me-xl-100" href="/themebau/react/portfolio-single-style-2">
                            <svg
                                class="icon-arrow icon-arrow-right" width="69" height="30" viewBox="0 0 69 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M54 2L67 15L54 28" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path d="M17 15L67 15" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style>


    .project-title {
        text-transform: uppercase;
    }

    .gallery-item {
        height: 500px;
    }

    .gallery-item img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .category {
        padding: 3px 7px;
        color: var(--clr-black);
        border: 1px solid var(--clr-black);
        background-color: transparent;
        text-align: center;
        border-radius: 3px;
    }

    @media screen and (max-width:765px) {

        .gallery-item, .gallery-item:first-child  {
            height: 220px;
        }
    }



</style>