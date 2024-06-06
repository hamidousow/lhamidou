<script lang="ts" setup>

const { data } = await useFetch('/api/hello')


</script>

<template>
    <div class="container pb-160">
        <div data-filters="branding" class="branding col-12 isotope-item col-md-6 pt-100 px-0" v-for="project in data">
            <span class="d-block">
                <a class="card card-portfolio card-default card-image-md card-hover-zoom"
                    href="/themebau/react/portfolio-single-style-1">
                    <span class="card-img rounded-0" data-cursor-style="cursor-circle" data-cursor-text="view">
                        <img src="~/assets/images/africarobase-img-1.jpg" alt="" data-aos="fade-up"
                            class="aos-init aos-animate">
                    </span>
                    <span class="card-body">
                        <span class="card-title h4">{{ project.pro_name }}</span>
                        <span class="card-category subtitle" v-for="category in project.pro_category">{{ category }}</span>
                    </span>
                </a>
            </span>
        </div>
    </div>
</template>


<style>

    .pb-160 {
        padding-bottom: 160px;
    }

</style>