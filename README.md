### `Run the repository`

npm install

&

npm start


### To set it up another Client

Follow below steps:

1. navigate to src/config folder

2. add a folder <org-name> (eg. optym)
  
3. add a file callled 'mapping.ts' with code like below, which will be responsible for mapping api cols to ui-model
    ```TypeScript
      export const mapping: IEmployeeMap = {
        employeeName: "optymEmployeeName",
        employeeDoB: "optymEmployeeDoB",
        employeeDesignation: "optymEmployeeDesignation",
        employeeCity: "optymEmployeeCity",
      };
    ```
4. add another file called 'config.ts' with below code.
    ```TypeScript
      export const optymConfig = {
        employee: {
          url: "/optym/data.json",
          mapping: mapping,
        },
      };
    ```
5. also need to add a key-value pair with organisation name in 'src/constants/index.ts'
    ```TypeScript
      export const OPTYM: IOrg = { key: "optym", value: "Optym" };
    ```
  
You are good to go now.
