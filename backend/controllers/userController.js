
const empModel=require("../models/empModel");
const projectModel=require("../models/projectModel")


const insertData=async(req,res)=>{
   try {
          const {empname,project,work}=req.body;

     let emp=await empModel.create({
        empname:empname
     })
     let pro=await projectModel.create({
          projectname:project,
          work:work,
          empId:emp._id
     })
     await empModel.findByIdAndUpdate(emp._id,{$push:{project:pro._id}});
     res.json("Data has Inserted in mongoDb");
   } catch (error) {
    console.error("error",error)
   }
}
const displayData=async(req,res)=>{
    try {
          const mydata=await projectModel.find().populate("empId");
          res.json(mydata);
    } catch (error) {
    console.error("error",error)
        
    }
}
const addMore=async(req,res)=>{
    try {
        const {id,project,work}=req.body;
        const pro=await projectModel.create({
            projectname:project,
            work:work,
            empId:id
        })
        await empModel.findByIdAndUpdate(id,{$push:{project:pro._id}})
        res.send("data insert !!");
    } catch (error) {
    console.error("error",error)
        
    }
}
const totalRecord=async(req,res)=>{
    try {
        const mydata=await empModel.find().populate("project");
         res.json(mydata);
    } catch (error) {
    console.error("error",error)
        
    }
}
module.exports={
    insertData,
    displayData,
    addMore,
    totalRecord
}