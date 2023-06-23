import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandlers from './app/middleware/globalErrorHandlers';
import routes from './app/routes';
import httpStatus from 'http-status';
// import { generateFacultyId, generateStudentId } from './app/modules/users/user.utils';

//middleware
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Applications routes
app.use('/api/v1/', routes);

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
  next();
});

//global error handler
app.use(globalErrorHandlers);
export default app;
