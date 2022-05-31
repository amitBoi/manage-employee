import { IEmployee } from "./type";

export class Employee implements IEmployee {
  employeeName: string;
  employeeDoB: Date;
  employeeDesignation: string;
  employeeCity: string;

  constructor(
    employeeName: string,
    employeeDoB: string,
    employeeDesignation: string,
    employeeCity: string
  ) {
    this.employeeName = employeeName;
    this.employeeDoB = new Date(employeeDoB);
    this.employeeDesignation = employeeDesignation;
    this.employeeCity = employeeCity;
  }
}
