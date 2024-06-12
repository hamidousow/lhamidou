import "dotenv/config"
import { supabaseClient, getMultiplesImagesUrl } from "../utils/supabaseUtils"


export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    
    const {data, error} = await supabaseClient    
        .from('t_project')
        .select('pro_name, pro_description, pro_client, pro_category, pro_images')
        .eq('pro_id', query.id)
        .single()

    if(error) {
        console.log(error);   
        return     
    } 

    if(data != null) {
        data.pro_images = getMultiplesImagesUrl(data.pro_images)
    }      
    
    return data
})
