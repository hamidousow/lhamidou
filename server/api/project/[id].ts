import "dotenv/config"
import { getMultiplesImagesUrl, supabaseClient } from "~/utils/supabaseUtils"

export default defineEventHandler( async (event) => {

    const id = getRouterParam(event, 'id')
    let project = {}

    //todo: gerer le return
    if(id == undefined) {
        return project
    }
    
    //todo: use netlify blobs 
    const {data, error} = await supabaseClient    
    .from('t_project')
    .select('pro_name, pro_description, pro_client, pro_category, pro_images')
    .eq('pro_id', id)
    .single()

    if(error) {
        console.log("error");  
        //todo: gerer le return 
        return  
    }   
    
    if(data != null) {
        data.pro_images = getMultiplesImagesUrl(data.pro_images)
        project = data
        return project
    } else {
        console.log("project not find.")
        //todo: gerer le return
        return
    }
})

