import { Schema, model } from 'mongoose';

import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface';
type academicFacultySchema = {
  title: string;
};

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicFaculty = model<
  academicFacultySchema,
  AcademicFacultyModel
>('academicFacultySchema', academicFacultySchema);
