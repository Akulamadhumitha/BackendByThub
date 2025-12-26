import student from '../models/studentModels.js'

const totalData = [{
    "name":"madhu"
}];
const getStudentDetails = async(req,res) => {
    
    // res.send(totalData);
    try{
            // const mydata = await student.find();
            // const mydata = await student.findOne();
            const mydata = await student.findById({_id: "694e1ab62be601f164cb7c9f"})
            console.log(mydata);
            res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }
};

const addStudents = async(req,res) => {
    try{
    const data = req.body;
    console.log(data);
    const addedData = await student.insertMany(data);
    console.log(addedData);
    totalData.push(data);
    res.status(201).json("data added");
    // res.status(201).json("data added");
    }
    catch(error){
      res.status(500).json({error : error.message});
    }
};
const updateStudents = (req,res) => {
    totalData.map((ele) => {
         if(ele.name === "madhu"){
            ele.name = "madhumitha";
         }
    });
    // console.log(totalData);
    res.status(204).json("Data updated succesfully");
};
const getStudentsById = async(req,res) => {
    try{
      const id = req.params.userid;
      const data = await student.findById({_id:id});
      res.status(201).json(data);
    }
      catch(error){
        res.status(500).json({error:error.message});
      }
};
export {getStudentDetails,addStudents,updateStudents,getStudentsById};