import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';
import { academicSemesterFilterableFields } from './academicSemester.interface';

const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;

    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully',
      meta: '',
      data: result,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableFields);
    console.log(filters);

    const paginationOptions = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllSemesters(
      paginationOptions,
      filters
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved successfully',
      meta: result.meta,
      data: result,
    });
    next();
  }
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved successfully',
      data: result,
    });
    next();
  }
);

const updateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await AcademicSemesterService.updateSemester(id, updateData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester updated successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
};
