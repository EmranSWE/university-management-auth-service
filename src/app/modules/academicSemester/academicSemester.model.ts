// import { Schema, model } from 'mongoose';
// import {
//   IAcademicSemester,
//   AcademicSemesterModel,
// } from './academicSemester.interface';
// import {
//   AcademicSemesterCodes,
//   AcademicSemesterMonth,
//   academicSemesterTitles,
// } from './academicSemester.constant';
// import ApiError from '../../../errors/ApiErrors';
// import status from 'http-status';

// const academicSemesterSchema = new Schema<IAcademicSemester>(
//   {
//     title: {
//       type: String,
//       required: true,
//       enum: academicSemesterTitles,
//     },
//     year: {
//       type: String,
//       required: true,
//     },
//     code: {
//       type: String,
//       required: true,
//       enum: AcademicSemesterCodes,
//     },
//     startMonth: {
//       type: String,
//       required: true,
//       enum: AcademicSemesterMonth,
//     },
//     endMonth: {
//       type: String,
//       required: true,
//       enum: AcademicSemesterMonth,
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );

// academicSemesterSchema.pre('save', async function (next) {
//   const isExists = await AcademicSemester.findOne({
//     title: this.title,
//     year: this.year,
//   });
//   if (isExists) {
//     throw new ApiError(status.CONFLICT, 'Academic semester is already exists!');
//   }
//   next();
// });

// export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
//   'academicSemester',
//   academicSemesterSchema
// );
import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';

import { IAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonth,
  academicSemesterTitles,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiErrors';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterMonth,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester is already exist !'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema
);
