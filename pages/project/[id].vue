<script lang="ts" setup>

    const $route = useRoute()
    const id = $route.params.id

    
    const displayCustom = ref(false);
    const activeIndex = ref(0);

    const imageClick = (index: any) => {
        activeIndex.value = index;
        displayCustom.value = true;
    };

    const project = ref({
        pro_name: '',
        pro_description: '',
        pro_category: [],
        pro_client: '',
        pro_images: []                                                  
    })

    onMounted(async () => {
        try {
            project.value = await $fetch(`/api/project/${id}`)
            
        } catch (error) {
            console.log(error);
            
        }
        
        console.log(project.value);
        
    })

</script>

<template>
    <div>
        <div class="container mt-100">
            <div class="mt-10 container">
                <div class="pt-100 mt-n30 pb-130 mb-n10">
                    <div class="gh-1 row">
                        <div class="d-none d-xl-block col-1"></div>
                        <div data-aos="fade-up" class="col-12 me-lg-auto me-xl-0 col-lg-5 col-xl-4 aos-init aos-animate">
                            <h1 class="mb-100 mb-lg-0 pb-8 pb-lg-0">{{  project?.pro_name }}</h1>
                        </div>
                        <div class="d-none d-xl-block col-lg-2"></div>
                        <div data-aos="fade-up" class="col-12 col-xl ms-xl-n30 col-lg-6 aos-init aos-animate">
                            <p class="lead mb-0">{{  project?.pro_description }}</p>
                            <hr>
                            <div class="gh-3 gv-1 row">
                                <div class="col-12 col-lg-auto col-sm-6">
                                    <ul class="list-group list-group-gap borderless">
                                        <li class="list-group-item">
                                            <span class="fw-medium me-8">Date:</span> June 10, 2020
                                        </li>
                                        <li class="list-group-item">
                                            <span class="fw-medium me-8">Category:</span> 
                                            <span v-for="category in project?.pro_category">{{  category }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 col-lg-auto col-sm-6">
                                    <ul class="list-group list-group-gap borderless">
                                        <li class="list-group-item"><span class="fw-medium me-8">Client:</span> {{  project?.pro_client }}
                                        </li>
                                        <li class="list-group-item"><span class="fw-medium">Share:</span>
                                            <ul class="nav nav-gap-sm align-items-center d-inline-flex ms-4">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="//facebook.com/runwebrun"><svg width="6"
                                                            height="15" viewBox="0 0 10 22" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.17421 3.65234H9.99996V0.154687C9.68557 0.107422 8.60224 0 7.34088 0C4.70831 0 2.90529 1.82188 2.90529 5.16914V8.25H0V12.1602H2.90529V22H6.46588V12.1602H9.25375L9.69693 8.25H6.46588V5.55586C6.46588 4.42578 6.7424 3.65234 8.17421 3.65234Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="//twitter.com/runwebrun">
                                                        <svg width="15" height="15" viewBox="0 0 25 21" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="//instagram.com/runwebrun">
                                                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.84375 0C2.90469 0 0 1.91862 0 5.02377C0 6.99849 1.13437 8.12049 1.82187 8.12049C2.10547 8.12049 2.26875 7.34631 2.26875 7.12752C2.26875 6.86665 1.58984 6.31126 1.58984 5.22573C1.58984 2.9705 3.34297 1.37165 5.61172 1.37165C7.5625 1.37165 9.00625 2.45718 9.00625 4.45154C9.00625 5.941 8.39609 8.73479 6.41953 8.73479C5.70625 8.73479 5.09609 8.22989 5.09609 7.5062C5.09609 6.4459 5.85234 5.41927 5.85234 4.32532C5.85234 2.46841 3.1625 2.80501 3.1625 5.04901C3.1625 5.52025 3.22266 6.04198 3.4375 6.47115C3.04219 8.13732 2.23438 10.6198 2.23438 12.3364C2.23438 12.8666 2.31172 13.3883 2.36328 13.9184C2.46068 14.025 2.41198 14.0138 2.56094 13.9605C4.00469 12.0251 3.95313 11.6464 4.60625 9.11346C4.95859 9.76983 5.86953 10.1233 6.59141 10.1233C9.63359 10.1233 11 7.22008 11 4.60301C11 1.81764 8.54219 0 5.84375 0Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-xl-block col-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
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
            <div v-if="project?.pro_images" class="row">
                <div
                    class="gallery-item gallery-item-md aos-init col-md-12 px-0" 
                    data-fancybox="gallery-1" 
                    data-aos="fade">
                    <img 
                        :src="project?.pro_images[0]" 
                        alt="image name"
                        @click="imageClick(0)"
                    >
                </div>
                <template v-if="project?.pro_images.length > 1">
                    <div
                        class="gallery-item gallery-item-md aos-init col-md-5 px-0" 
                        data-fancybox="gallery-1" 
                        data-aos="fade">
                        <img 
                            :src="project?.pro_images[1]" 
                            alt="image name"
                            @click="imageClick(1)"
                        >
                    </div> 
                    <div
                        class="gallery-item gallery-item-md aos-init col-md-7 px-0" 
                        data-fancybox="gallery-1" 
                        data-aos="fade">
                        <img 
                            :src="project?.pro_images[2]" 
                            alt="image name"
                            @click="imageClick(2)"
                        >
                    </div> 
                </template>
            </div>
        </div>
        <div class="pt-160 pb-130 shape-parent overflow-hidden">
            <div class="container">
                <hr class="mt-0 mb-100 pb-7">
                <div
                    class="gv-1 align-items-center justify-content-center justify-content-md-between text-center text-md-start row">
                    <div class="me-md-auto col-md-10 col-lg-9">
                        <div class="interactive-links">
                            <img class="interactive-links-image" src="" width="230" alt="">
                            <a class="nav-link display-4" href="/themebau/react/portfolio-single-style-2">
                                <u>Next project</u>
                            </a>
                        </div>
                    </div>
                    <div class="col-auto col">
                        <a class="btn btn-clean me-xl-100" href="/themebau/react/portfolio-single-style-2"><svg
                                class="icon-arrow icon-arrow-right" width="69" height="30" viewBox="0 0 69 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M54 2L67 15L54 28" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M17 15L67 15" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

    .gallery-item:first-child {
        height: 700px;
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



</style>