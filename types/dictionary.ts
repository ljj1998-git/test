import { IResponse } from "./common";

export interface DictionaryList extends IResponse {
  id: string;
  name: string;
  description?: string;
  status: number;
  key: string;
  value: string;
}
