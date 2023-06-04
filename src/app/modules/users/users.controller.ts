import { Request, Response } from 'express-serve-static-core'
import userService from './users.service'
import { NextFunction } from 'express'
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      status: 'success',
      message: 'Successfully created a user',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  createUser,
}
