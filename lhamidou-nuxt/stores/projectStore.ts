import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {

    state: () => ({
        projects: <any[]>[]
    }),

    getters: {
        async getAllProjects(state) { 
            try{
                const res = await $fetch('/api/all-projects')
                return state.projects.push(res)
            } 
            catch(error) {
                console.log(error);
            }
        }
    }


    //ref()s become state properties
    /*const project = ref(null)
    const projects = ref<any[]>([])*/

    //computed()s become getters


    //actions
   /* async function getAllProjects() {
        try {
            const data = await $fetch('/api/all-projects');
            projects.value.push(data);            
        } catch(error) {
            console.log(error);            
        }        
    }*/

    


    //return { projects, project, getAllProjects }
})