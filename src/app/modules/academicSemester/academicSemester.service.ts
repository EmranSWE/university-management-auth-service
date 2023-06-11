import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  //Summer
  //   if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  //   }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
