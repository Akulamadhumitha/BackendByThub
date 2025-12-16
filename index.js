import express from 'express';
import studentRoute from './routers/studentRouters.js';
const app = express();

//middleware
app.use(express.json());
app.use(studentRoute);

//responce from backend to the frontend
app.get('/get-user',(req,res)=>{
    res.send("api success");
})
//sending data from frontend to backend
app.post('/add-user',(req,res)=>{
   let data = req.body;
   console.log(data);
   //data sent from the frontend to the database
   res.send("data sent to the database successfully");
})
//server start
app.listen(7000,()=>{
   console.log("server running at the port 7000");
})
