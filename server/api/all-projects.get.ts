import "dotenv/config"

export default defineEventHandler(async () => {

    const localHost = "http://localhost:8888"
    const appHost = "https://lhamidou.netlify.app"

    const response = await fetch(`${localHost}/.netlify/functions/all-projects`);
    
    console.log(response);       
    return response;
    
})
