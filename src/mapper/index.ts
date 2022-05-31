import { getConfig } from "../config";
import { IEmployee } from "../models/type";
import { getEmployeeData } from "../service/employee-data";
import { getEmployeeMapping } from "../utill/mapper";

export const getEmployeeMappedData = (orgName: string) => {
  const config = getConfig(orgName);

  if (!config) return;

  return getEmployeeData(config.employee.url).then((response) => {
    const employees: IEmployee[] = getEmployeeMapping(
      response.data,
      config.employee.mapping
    );

    return employees;
  });
};
