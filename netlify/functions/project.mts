import type { HandlerEvent } from "@netlify/functions";
import { supabaseClient, getMultiplesImagesUrl } from "../../utils/supabaseUtils";

export default async (event: HandlerEvent) => {

    try {
        console.log("Event object:", JSON.stringify(event, null, 2));
        const id = 1
        
        //todo: use netlify blobs 
        const {data, error} = await supabaseClient    
        .from('t_project')
        .select('pro_name, pro_description, pro_client, pro_category, pro_images')
        .eq('pro_id', id)
        .single()

        if(error) {
            console.log("error");   
            return new Response(
                JSON.stringify({ error: 'Internal Server Error' }), {
                status: 500
            });  
        }   
        
        if(data != null) {
            data.pro_images = getMultiplesImagesUrl(data.pro_images)
            return new Response(JSON.stringify(data));
        } else {
            console.log("project not find.")
            return new Response(JSON.stringify(data), {
                status: 401
            });
        }

    } catch (error) {
        console.log(error);
        
    }
}