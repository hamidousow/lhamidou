import "dotenv/config"

export default defineEventHandler(async () => {

    const response = await fetch('http://localhost:8888/.netlify/functions/all-projects');
    
    console.log(response);       
    return response;
    
})
