const mongoose=require("mongoose");

const projectSchema=new mongoose.Schema({
    projectname:String,
    work:Number,
    empId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"employee"
    }

})
module.exports=mongoose.model("project",projectSchema);