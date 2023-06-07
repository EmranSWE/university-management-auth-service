import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonth,
  academicSemesterTitles,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiErrors';
import status from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: Number,
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
  }
);

//Before designing model
academicSemesterSchema.pre('save', async function (next) {
  const isExists = await academicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExists) {
    throw new ApiError(status.CONFLICT, 'Academic Semester is already exists!');
  }
  next();
});

export const academicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'academicSemester',
  academicSemesterSchema
);

// Handling Same Year and same semester issue

// Data -> check -? Same year && same semester

// 2025 Autumn
// 2025 Autumn -X

//Same Year && Same Semester  -> Duplicate Entry
