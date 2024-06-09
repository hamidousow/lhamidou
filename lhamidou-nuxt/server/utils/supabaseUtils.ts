import { createClient } from "@supabase/supabase-js";

//todo: singleton, return a unique instance of supabaseclient
export const supabaseClient = createClient(`${process.env.SUPABASE_URL}`, `${process.env.SUPABASE_KEY}`);

export const getMultiplesImagesUrl = (imagesNamesArray: string[]) => {
    const imagesArray: string[] = [];

    try {
        imagesNamesArray.forEach((imgName: string) => {            
            imagesArray.push(getImageUrl('lhamidou_projects_images', imgName))
        })
    } catch(error) {
        console.log("une erreur est survenue : ", error);
    }  

    return imagesArray;
} 

export const getImageUrl = (bucket: string, assetName: string) => {
    const { data } = supabaseClient.storage.from(bucket).getPublicUrl(assetName)
    return data.publicUrl;
}