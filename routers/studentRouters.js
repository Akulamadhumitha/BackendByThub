
import express from 'express';
import { getStudentDetails,addStudents,updateStudents,getStudentsById} from '../controllers/studentController.js';
const router = express.Router();

router.get('/get-student',getStudentDetails);
router.post('/add-student',addStudents);
router.put('/upd-student',updateStudents);
router.get('/get-student-byid/:userid',getStudentsById);

export default router;