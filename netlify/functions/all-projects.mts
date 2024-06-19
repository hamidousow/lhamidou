import type { Handler } from "@netlify/functions";
import { supabaseClient, getImageUrl } from "../../utils/supabaseUtils";

const handler: Handler = async() => {
    const projects: object[] = [];

    const { data, error } = await supabaseClient
        .from('t_project')
        .select('pro_id, pro_name, pro_category, pro_cover');

    if (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }

    if (data != null) {
        data.forEach(element => {
            element.pro_cover = getImageUrl("lhamidou_projects_images", element.pro_cover);
            projects.push(element);
        });
    }    

    return {
        statusCode: 200,
        body: JSON.stringify(projects)
    }
}

export { handler }