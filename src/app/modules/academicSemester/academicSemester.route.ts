import { AcademicSemesterValidation } from './academicSemester.validation';
import express from 'express';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-academicSemester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
);

export const AcademicSemesterRoutes = router;
