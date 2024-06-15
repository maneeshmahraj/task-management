
const mongoose=require("mongoose");

const empShema=new mongoose.Schema({
    empname:String,
    project:[
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:"project"
    }
]
});
module.exports=mongoose.model("employee",empShema);