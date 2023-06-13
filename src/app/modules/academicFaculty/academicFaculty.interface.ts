import { Model } from 'mongoose';

type IAcademicFacultyTitles = string;
export type IAcademicFacultyFilters = {
  searchTerm: string;
};

export type IAcademicFaculty = {
  title: IAcademicFacultyTitles;
};
export const academicFacultyFilterableFields = ['searchTerm', 'title'];
export const academicFacultySearchableFields = ['title'];

export type AcademicFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>;
