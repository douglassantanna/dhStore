import { KindUser } from "../enums/KindUser.enum";
import { NewTelephoneNumber, ViewTelephoneNumber } from "./itelephoneNumber";

export interface ViewUser {
  id: number;
  name: string;
  email: string;
  active: boolean;
  kindUser: KindUser;
  telephoneNumber: ViewTelephoneNumber[];
}

export interface NewUser {
  name: string;
  email: string;
  active: boolean;
  kindUser: KindUser;
  telephoneNumber: NewTelephoneNumber[];
}

export interface UpdateUser {
  id: number;
  name: string;
  email: string;
  active: boolean;
  kindUser: KindUser;
  telephoneNumber: ViewTelephoneNumber[];
}
