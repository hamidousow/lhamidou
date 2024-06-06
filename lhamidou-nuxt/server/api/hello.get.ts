import "dotenv/config"
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://rixvljmmardnbdlbrflp.supabase.co', `${process.env.API_KEY}`)


export default defineEventHandler(async () => {

    const { data, error } = await supabase    
    .from('t_project')
    .select()

    if(error) {
        console.log(error);        
    }
    
    console.log(data);
        
    return data
    
})