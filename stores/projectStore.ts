import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {

    //ref()s become state properties
    const project = ref()
    const projects = ref<any[]>([])
    const loading = ref(false);

    //computed()s become getters


    //actions
   async function getAllProjects() {
        loading.value = true;
        try {            
            const data = await $fetch('http://localhost:8888/.netlify/functions/all-projects');
            projects.value =  data as any[]
        } catch(error) {
            console.log(error);            
        } finally {
            loading.value = false;
        }    
    }

    return { projects, project, loading, getAllProjects }
})