import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);
  sendResponse(res, {
    statusCode: httpStatus.Ok,
    success: true,
    message: 'User loggin successfully',
    data: result,
  });
});

export const AuthController = {
  loginUser,
};

//login --> default password --> change password --> needPasswordChange --> true | false --> true
