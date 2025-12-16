
import express from 'express';
import { getStudentDetails,addStudents } from '../controllers/studentController.js';
const router = express.Router();

router.get('/get-student',getStudentDetails);
router.post('/add-student',addStudents);

export default router;