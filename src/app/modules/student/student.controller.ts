import { NextFunction, Request, Response } from 'express';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';
import { studentFilterableFields } from './student.constant';
import { StudentService } from './student.service';

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, studentFilterableFields);
    console.log(filters);

    const paginationOptions = pick(req.query, paginationFields);
    const result = await StudentService.getAllStudents(
      paginationOptions,
      filters
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
    next();
  }
);

const getSingleStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await StudentService.getSingleStudent(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
    next();
  }
);

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await StudentService.updateStudent(id, updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentService.deleteStudent(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
