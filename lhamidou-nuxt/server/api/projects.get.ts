import "dotenv/config"
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://rixvljmmardnbdlbrflp.supabase.co', `${process.env.API_KEY}`)


export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    
    const {data, error} = await supabase    
        .from('t_project')
        .select('pro_name, pro_description, pro_client, pro_category, pro_images')
        .eq('pro_id', query.id)
        .single()

    if(error) {
        console.log(error);        
    }   
    console.log(data?.pro_client)
    return data
})