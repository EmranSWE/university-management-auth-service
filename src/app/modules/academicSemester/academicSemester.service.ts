import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  console.log(payload);
  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
