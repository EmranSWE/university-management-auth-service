import { ZodError } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const err: IGenericErrorMessage[] = error.errors.map(err => {
    return {
      path: err?.path[err.path.length - 1].toString(),
      message: err?.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: err,
  };
};

export default handleZodError;
