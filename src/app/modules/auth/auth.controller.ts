import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import config from '../../../config';
import { AuthService } from './auth.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);
  // const { refreshToken, ...others } = result;
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', cookieOptions);

  if (('refreshToken', result.refreshToken, cookieOptions))
    delete result.refreshToken;
  sendResponse(res, {
    statusCode: httpStatus.Ok,
    success: true,
    message: 'User loggin successfully',
    data: others,
  });
});
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  // const { ...loginData } = req.body;
  const result = await AuthService.refreshToken(refreshTokenData);

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', cookieOptions);

  if (('refreshToken', result.refreshToken, cookieOptions))
    delete result.refreshToken;
  sendResponse(res, {
    statusCode: httpStatus.Ok,
    success: true,
    message: 'User loggin successfully',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
};

//login --> default password --> change password --> needPasswordChange --> true | false --> true
