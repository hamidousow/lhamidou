import "dotenv/config"

export default defineEventHandler( async (event) => {

    //const localHost = "http://localhost:8888"
    const appHost = "https://lhamidou.netlify.app"

    const id = getRouterParam(event, 'id')

    const res = await $fetch(`${appHost}/.netlify/functions/project`, { query: { id: id }})   
    
    return res.project
})

