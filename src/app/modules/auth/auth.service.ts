// import { jwtHelpers } from './../../../helpers/jwt.helpers';
// import httpStatus from 'http-status';
// import { Secret } from 'jsonwebtoken';
// import config from '../../../config';

// import {
//   ILoginUser,
//   ILoginUserResponse,
//   IRefreshTokenResponse,
// } from './auth.interface';
// import ApiError from '../../../errors/ApiErrors';
// import { User } from '../users/user.model';

// const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
//   // const { id, password } = payload;
//   // creating instance of User
//   // const user = new User();
//   //  // access to our instance methods
//   //   const isUserExist = await user.isUserExist(id);

//   const accessToken = jwtHelpers.createToken(
//     { userId, role },
//     config.jwt.secret as Secret,
//     config.jwt.expires_in as string
//   );

//   const refreshToken = jwtHelpers.createToken(
//     { userId, role },
//     config.jwt.refresh_secret as Secret,
//     config.jwt.refresh_expires_in as string
//   );

//   return {
//     accessToken,
//     refreshToken,
//     needsPasswordChange,
//   };
// };

// const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
//   //verify token
//   // invalid token - synchronous
//   let verifiedToken = null;
//   try {
//     verifiedToken = jwtHelpers.verifyToken(
//       token,
//       config.jwt.refresh_secret as Secret
//     );
//   } catch (err) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
//   }

//   const { userId } = verifiedToken;

//   const isUserExist = await User.isUserExist(userId);
//   if (!isUserExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
//   }
//   //generate new token

//   const newAccessToken = jwtHelpers.createToken(
//     {
//       id: isUserExist.id,
//       role: isUserExist.role,
//     },
//     config.jwt.secret as Secret,
//     config.jwt.expires_in as string
//   );

//   return {
//     accessToken: newAccessToken,
//   };
// };

// export const AuthService = {
//   loginUser,
//   refreshToken,
// };
