import type { Context, Handler } from "@netlify/functions";

const handler:  Handler = async () => {

    const id = 1
    
    const {data, error} = await supabaseClient    
        .from('t_project')
        .select('pro_name, pro_description, pro_client, pro_category, pro_images')
        .eq('pro_id', id)
        .single()

    if(error) {
        console.log(error);   
        return  {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };   
    } 

    if(data != null) {
        data.pro_images = getMultiplesImagesUrl(data.pro_images)
        return {
            statusCode: 200,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }      
    
    return {
        statusCode: 200,
        body: JSON.stringify({ data })
    }

}

export { handler }