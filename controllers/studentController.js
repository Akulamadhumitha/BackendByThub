
const totalData = [{
    "name":"madhu"
}];
const getStudentDetails = (req,res) => {
    // const mydata = {name:"technical hub",trainer:"1234"};//db
    res.send(totalData);
    // res.status(200).json(totalData);
};

const addStudents = (req,res) => {
    const data = req.body;
    console.log(data);
    totalData.push(data);
    // res.status(201).json("data added");
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
export {getStudentDetails,addStudents,updateStudents};