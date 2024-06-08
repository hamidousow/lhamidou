import "dotenv/config"
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(`${process.env.SUPABASE_URL}`, `${process.env.SUPABASE_KEY}`)


export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    
    const {data, error} = await supabase    
        .from('t_project')
        .select('pro_name, pro_description, pro_client, pro_category, pro_images')
        .eq('pro_id', query.id)
        .single()

    if(data != null) {
        data.pro_images = getMultiplesImagesUrl(data.pro_images)
        console.log("images : ", data.pro_images);
    }    

    if(error) {
        console.log(error);   
        return     
    }   
    
    return data
})

function getMultiplesImagesUrl(imagesNamesArray: string[]) {
    const imagesArray: string[] = [];
    let imageUrl!: string 

    try {
        imagesNamesArray.forEach((imgName: string) => {
            imageUrl = getImageUrl('lhamidou_projects_images', imgName)
            imagesArray.push(imageUrl)
        })
    } catch(error) {
        console.log("une erreur est survenue : ", error);
    }  

    return imagesArray;
}

function getImageUrl(bucket: string, assetName: string) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(assetName)
    return data.publicUrl;
}