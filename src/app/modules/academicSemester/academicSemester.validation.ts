import { z } from 'zod';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonth,
  academicSemesterTitles,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]),
  }),
  startMonth: z.enum([...AcademicSemesterMonth] as [string, ...string[]], {
    required_error: 'Start month is needed',
  }),
  endMonth: z.enum([...AcademicSemesterMonth] as [string, ...string[]], {
    required_error: 'End month is needed',
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
