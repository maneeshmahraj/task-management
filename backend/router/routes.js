const express=require("express");

const router=express.Router();

const userController=require("../controllers/userController")

router.post("/insert",userController.insertData);
router.get("/display",userController.displayData)
router.post("/add",userController.addMore)
router.get("/totalrecord",userController.totalRecord)
module.exports=router