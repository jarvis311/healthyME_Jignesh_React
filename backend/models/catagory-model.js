const mongoose = require("mongoose")


const CatagorySchema = new mongoose.Schema({
    
        CatagoryName:{
            type:String,
            
        },
        role: {
                type:mongoose.Schema.Types.ObjectId,
                ref:"role"
        }
})


const CatagoryModel = mongoose.model("catagory",CatagorySchema)
module.exports = CatagoryModel 