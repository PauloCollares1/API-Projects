import mongoose from "mongoose";

// ---- Schema Settings ---- //
export const mongoose_schema_api = mongoose.Schema({
    db_title       :{type: String, minlength:1, maxlength:45, required:true},
    db_description :{type: String, minlength:1, maxlength:45, required:true},
    db_technology  :{type: String, minlength:1, maxlength:200, required:true},
    db_url         :{type: String, minlength:1, maxlength:200, required:true},
    createdAt      :{type: Date, default: Date.now}
})


// ---- Model + DB-name Settings ---- //
export const mongoose_model_api = mongoose.model('api_projetcs', mongoose_schema_api);
