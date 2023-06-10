import config from '../../../config/index';
import ApiError from '../../../errors/ApiErrors';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

//Always All business logic We must write in service pages
const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto generated incremental id
  const id = await generateUserId();
  user.id = id;

  //Default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
