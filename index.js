import express from 'express';
import studentRoute from './routers/studentRouters.js';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://akulamadhumitha11_db_user:1811mg@cluster0.prv7aag.mongodb.net/").then(()=>console.log("database connected")).catch((error)=>console.log(error));

//middleware
app.use(express.json());
app.use(cors());
app.use(studentRoute);


//server start
app.listen(7000,()=>{
   console.log("server running at the port 7000");
})
