import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {

    const project = ref()
    const projects = ref<any[]>([])
    const loading = ref(false);


   async function getAllProjects() {
        loading.value = true;
        
        try {            
            const data = await $fetch(`http://lhamidou.netlify.app/.netlify/functions/all-projects`);
            projects.value =  data as any[]
        } catch(error) {
            console.log(error);            
        } finally {
            loading.value = false;
        }    
    }

    return { projects, project, loading, getAllProjects }
})