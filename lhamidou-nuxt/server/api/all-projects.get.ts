import "dotenv/config"
import { createClient } from '@supabase/supabase-js';
import { getImageUrl, supabaseClient } from "../utils/supabaseUtils";

// Create a single supabase client for interacting with your database
// const supabase = createClient(`${process.env.SUPABASE_URL}`, `${process.env.SUPABASE_KEY}`)


export default defineEventHandler(async () => {

    let projects: {}[] | null = []

    const { data, error } = await supabaseClient    
    .from('t_project')
    .select('pro_id, pro_name, pro_category, pro_cover')

    if(error) {
        console.log(error);
        return     
    }

    if(data != null) {
        data.forEach(element => {
            element.pro_cover = getImageUrl("lhamidou_projects_images", element.pro_cover)
            projects.push(element)
        });        
    }  
        
    return projects;
    
})
