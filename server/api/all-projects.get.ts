import "dotenv/config"
import { ref } from "vue"

export default defineEventHandler(async () => {

    const localHost = "http://localhost:8888"
    const appHost = "https://lhamidou.netlify.app"

    const data = await $fetch(`${localHost}/.netlify/functions/all-projects`)

    return data
    
})
