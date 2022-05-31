import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { format } from "date-fns";
import { useEffect, useReducer } from 'react';
import './App.css';
import { INFY, OPTYM, TCS } from "./constants";
import { getEmployeeMappedData } from './mapper';
import { IAction, IEmployee, IOrg } from './models/type';


const ORG_DATA: IOrg[] = [OPTYM, TCS, INFY,];


const columnDefs = [
  { field: 'employeeName', filter: true, headerName: 'Name', width: 150 },
  {
    field: 'employeeDoB', filter: true, headerName: 'Date of Birth', width: 160,
    valueFormatter: (val: any) => format(val.value, 'dd MMM, yyyy')
  },
  { field: 'employeeDesignation', filter: true, headerName: 'Designation' },
  { field: 'employeeCity', filter: true, headerName: 'City' }
];

const defaultColDef = { sortable: true, width: 130 };

interface IAppState {
  employeeData: IEmployee[],
  organisation: string
}

const initialState: IAppState = { employeeData: [], organisation: '' };

const reducer = (state = initialState, { type, payload }: IAction,): IAppState => {
  switch (type) {
    case 'setEmployeeData':
      return {
        ...state,
        employeeData: payload as IEmployee[],
      };

    case 'setOrganisation':
      return {
        ...state,
        organisation: payload as string,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  const { employeeData, organisation } = state;

  const setState = (type: string, payload: any) => dispatch({ type, payload });

  useEffect(() => {
    getEmployeeMappedData(organisation)?.then(response => response && setState('setEmployeeData', response));
  }, [organisation]);

  const handleChangeOrganization = (e: any) => {
    const newOrg = e.target.value;

    if (!newOrg) setState('setEmployeeData', []);

    setState('setOrganisation', newOrg);
  }

  return (
    <div className="App">
      <select style={{ padding: 7, margin: 15, borderRadius: 4 }} onChange={handleChangeOrganization}>
        <option value="">Select Organisation</option>
        {ORG_DATA.map(item => <option key={item.key} value={item.key}>{item.value}</option>)}
      </select>
      {employeeData && employeeData.length > 0 &&
        (<div className="ag-theme-alpine" style={{ height: 200, width: 572, margin: 'auto' }}>
          <AgGridReact
            rowData={employeeData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>)}
    </div >
  );
}

export default App;
