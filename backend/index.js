let express=require("express");
let app=express();
let mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
require('dotenv').config();
const userRouter=require("./router/routes")
mongoose.connect(process.env.DATABASE_URL);
const port=process.env.PORT||8080;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use("/user",userRouter);
app.listen(port,()=>{
    console.log("server is runnig 8000!!")
});