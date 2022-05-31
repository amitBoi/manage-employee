import { Employee } from "../models/Employee";
import { IEmployeeMap, IEmployee } from "../models/type";

export const getEmployeeMapping = (
  data: any,
  mapping: IEmployeeMap
): IEmployee[] => {
  const employees: IEmployee[] = data.map((item: any) => {
    const employee = new Employee(
      item[mapping.employeeName],
      item[mapping.employeeDoB],
      item[mapping.employeeDesignation],
      item[mapping.employeeCity]
    );

    return employee;
  });

  return employees;
};
