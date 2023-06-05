export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: {
    path: string;
    message: string;
  }[];
};
