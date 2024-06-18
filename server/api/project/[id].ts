import "dotenv/config"

export default defineEventHandler( async (event) => {

    const id = getRouterParam(event, 'id')

    const data = await fetch(`http://localhost:8888/.netlify/functions/project/${id}`).then((r ) => r.json())
    
    return data
})

