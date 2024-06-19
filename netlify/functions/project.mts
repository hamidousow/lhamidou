import type { Handler, HandlerEvent,  } from "@netlify/functions";
import { supabaseClient, getMultiplesImagesUrl } from "../../utils/supabaseUtils";

const handler: Handler = async (event: HandlerEvent) => {
        
        const id = event.queryStringParameters?.id 


        if(id == undefined) {
            return({
                statusCode: 500,
                body: JSON.stringify({ error: 'No ID parameter' })
            }); 
        }
        
        //todo: use netlify blobs 
        const {data, error} = await supabaseClient    
        .from('t_project')
        .select('pro_name, pro_description, pro_client, pro_category, pro_images')
        .eq('pro_id', id)
        .single()

        if(error) {
            console.log("error");   
            return ({
                statusCode: 500,
                body: JSON.stringify({ error: 'Internal Server Error' })
            });  
        }   
        
        if(data != null) {
            data.pro_images = getMultiplesImagesUrl(data.pro_images)
            return ({
                statusCode: 200,
                body: JSON.stringify({ project: data})
            });
        } else {
            console.log("project not find.")
            return ({
                statusCode: 500,
                body: JSON.stringify({ error: 'Internal Server Error' })
            }); 
        }
};

export { handler };