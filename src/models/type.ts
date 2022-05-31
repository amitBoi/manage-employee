export interface IEmployee {
  employeeName: string;
  employeeDoB: Date;
  employeeDesignation: string;
  employeeCity: string;
}

export interface IEmployeeMap {
  employeeName: string;
  employeeDoB: string;
  employeeDesignation: string;
  employeeCity: string;
}

export interface IOrg {
  key: string;
  value: string;
}

export interface IConfig {
  employee: {
    url: string;
    mapping: IEmployeeMap;
  };
}

export interface IAction {
  type: string;
  payload: any;
}
