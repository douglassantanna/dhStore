export interface ViewClient {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  email: string;
  telephoneNumber: TelephoneNumber[];
  address: Address;
}
export interface UpdateClient {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  email: string;
  telephoneNumber: TelephoneNumber[];
  address: Address;
}
export interface NewClient {
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  email: string;
  telephoneNumber: TelephoneNumber[];
  address: Address;
}

export interface TelephoneNumber {
  phoneNumber: number;
}
export interface Address{
  street: string;
  number: number;
  district: string;
  postalCode: string;
  city: string;
  state: string;
  complement: string;
}
