import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { semesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { departmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { facultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/semesters',
    route: semesterRoutes,
  },
  {
    path: '/faculty',
    route: facultyRoutes,
  },
  {
    path: '/department',
    route: departmentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
