import "dotenv/config"
import { getImageUrl, supabaseClient } from "~/utils/supabaseUtils";

export default defineEventHandler(async () => {

    const projects: object[] = [];

    const { data, error } = await supabaseClient
        .from('t_project')
        .select('pro_id, pro_name, pro_category, pro_cover');

    if (error) {
        console.log(error);
        return projects
    }

    if (data != null) {
        data.forEach(element => {
            element.pro_cover = getImageUrl("lhamidou_projects_images", element.pro_cover);
            projects.push(element);
        });
    }     

    return projects    
    
})
