import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandlers from './app/middleware/globalErrorHandlers';
import routes from './app/routes';

//middleware
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Applications routes
app.use('/api/v1/', routes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//  throw new Error('testing')
// });

//global error handler
app.use(globalErrorHandlers);

export default app;
