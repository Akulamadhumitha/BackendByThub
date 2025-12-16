
const getStudentDetails = (req,res) => {
    const mydata = {name:"technical hub",trainer:"1234"};//db
    res.send(mydata);
};
const addStudents = (req,res) => {
    const data = req.body;
    console.log(data);
    res.send("data added");
};
export {getStudentDetails,addStudents};