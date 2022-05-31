import axios from "axios";

export const getEmployeeData = (url: string) => {
  return axios.get(url);
};
