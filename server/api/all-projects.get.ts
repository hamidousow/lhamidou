import "dotenv/config"

export default defineEventHandler(async () => {

    //const localHost = "http://localhost:8888"
    const appHost = "https://lhamidou.netlify.app"

    const data = await $fetch(`${appHost}/.netlify/functions/all-projects`)

    return data
    
})
