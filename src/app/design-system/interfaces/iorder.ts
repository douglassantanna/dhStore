import { Status } from "../enums/status.enum";

export interface ViewOrder {
  id: number;
  client: string;
  price: number;
  status: Status[];
}
