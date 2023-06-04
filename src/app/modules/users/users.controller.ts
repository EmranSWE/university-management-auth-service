import { Request, Response } from 'express-serve-static-core'
import userService from './users.service'
const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      status: 'success',
      message: 'Successfully created a user',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to create a user',
    })
  }
}

export default {
  createUser,
}
