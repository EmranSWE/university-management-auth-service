import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/create-semesters', semesterRoutes);

export default router;
