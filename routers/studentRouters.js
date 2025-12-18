
import express from 'express';
import { getStudentDetails,addStudents,updateStudents } from '../controllers/studentController.js';
const router = express.Router();

router.get('/get-student',getStudentDetails);
router.post('/add-student',addStudents);
router.put('/upd-student',updateStudents);

export default router;