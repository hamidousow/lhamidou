<script lang="ts" setup>

    const props = defineProps(['projects', 'isLoading'])

</script>

<template>
    <div class="container pb-160">
        <div 
            v-if="props.isLoading" 
            class="d-block" >...Loading projects</div>
        <div class="cards d-flex flex-column flex-md-row flex-wrap">
            <div 
                v-for="project in props.projects"
                :key="project?.pro_id"
                class="branding col-12 isotope-item col-md-6 pt-100 px-0" >
                <CardComponent
                    :key="project?.pro_id"
                    :project="project" 
                />
            </div>
        </div>
    </div>
</template>