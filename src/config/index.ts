import { INFY, OPTYM, TCS } from "../constants";
import { IConfig } from "../models/type";
import { infyConfig } from "./infy/config";
import { tcsConfig } from "./tcs/config";
import { optymConfig } from "./optym/config";

//configure when new organisation added
export const getConfig = (orgName: string): IConfig | null => {
  switch (orgName) {
    case TCS.key:
      return tcsConfig;
    case INFY.key:
      return infyConfig;
    case OPTYM.key:
      return optymConfig;
    default:
      return null;
  }
};
