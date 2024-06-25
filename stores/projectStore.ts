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
        const tabProject = allProjects.value
        if(tabProject !=null && tabProject.length > 0) {
            for(let i = 0; i < tabProject.length; i++ ) {
                tabProject[i+1] ? tabProject[i].setHasNext(true) : tabProject[i].setHasNext(false);
                console.log(tabProject[i].getHasNext());
            }            
        }
    }

    return { allProjects, hasNextProject, getNextProject, getAllProjects }
    
})