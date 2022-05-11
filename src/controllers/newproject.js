import { mongoose_model_api } from '../database/schema.js';



export function addNewProject(req, res){

    const title = req.body.title;
    const description = req.body.description;
    const technology = req.body.technology;
    const url = req.body.url;

    console.log(title, description, technology, url)
    saveAtMongodb(title,description,technology,url)
    res.sendStatus(200)
}


async function saveAtMongodb(title, description, technology, url){

    const newProject =  await new mongoose_model_api({
        db_title: title,
        db_description: description,
        db_technology: technology,
        db_url: url
    })
    await newProject.save();
    console.log("----------------------------------");
    console.log("New project created: "+ title);
}