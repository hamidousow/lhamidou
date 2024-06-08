import "dotenv/config"
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(`${process.env.SUPABASE_URL}`, `${process.env.SUPABASE_KEY}`)


export default defineEventHandler(async () => {

    const { data, error } = await supabase    
    .from('t_project')
    .select();

    if(error) {
        console.log(error);        
    }
        
    return data
    
})