import { mongoose_model_api } from '../database/schema.js';


export  const getApi = async(req, res) => {
    
    const showProjects = await mongoose_model_api.find({});
    console.log("----------------------------------");
    console.log("1 Request GET made at this API:" + Date());
    res.status(200).json(showProjects);
}