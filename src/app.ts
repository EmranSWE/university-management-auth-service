import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandlers from './app/middleware/globalErrorHandlers';
import { UserRoutes } from './app/modules/users/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';

//middleware
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Applications routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // throw new Error('New Error')
  next();
});

//global error handler
app.use(globalErrorHandlers);

export default app;
