import { IScheduling } from "./IScheduling";

export interface IEmployee {
  name: string | undefined;
  scheduling?: IScheduling[];
}