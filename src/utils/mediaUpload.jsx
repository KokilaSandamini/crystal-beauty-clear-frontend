import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
        "https://qthxzayyvaytbhdbbwqh.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aHh6YXl5dmF5dGJoZGJid3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzE0NDQsImV4cCI6MjA2NDk0NzQ0NH0.dRwyxlreqzrPZZ_4RtLwmHOuP1fEVAvSzWwOKEPFsf4"
);

export function mediaUpload(file){
    const promise = new Promise(
        (resolve,reject)=>{
            if(file == null){
                reject("No file selected")
            }
            const timeStamp = new Date().getTime()
            const newFileName = timeStamp+file.name

            supabase.storage.from("images").upload(newFileName, file, {
                cacheControl: "3600",
                upsert: false,
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                    reject("File upload failed")
                }
            )
        }
    )

    return promise
}