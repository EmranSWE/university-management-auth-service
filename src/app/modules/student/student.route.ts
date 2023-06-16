import express from 'express';
import { studentController } from './student.controller';
import { StudentValidation } from './student.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  studentController.updateStudent
);
router.get('/:id', studentController.getSingleStudent);
router.get('/', studentController.getAllStudents);
router.delete('/:id', studentController.deleteStudent);

export const StudentRoutes = router;
