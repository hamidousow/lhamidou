export const useProjectStore = defineStore('project', () => {

    const allProjects = ref()

    const hasNextProject = ref(false);

    async function getAllProjects() {
        const { data } = await useFetch(`/api/all-projects`);

        if(data != null && data != undefined) {
            allProjects.value = data.value
        }
        
    }

    function getNextProject() {  
        console.log("all projects ",allProjects);
        
    }

    return { allProjects, hasNextProject, getNextProject, getAllProjects }
    
})