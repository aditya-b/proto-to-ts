/* eslint-disable */

export const protobufPackage = "tutorial";

export interface Person {
  name?: string | undefined;
  phones: PersonPhoneNumber[];
}

export enum PersonPhoneType {
  MOBILE = "MOBILE",
  HOME = "HOME",
  WORK = "WORK",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export interface PersonPhoneNumber {
  phoneNumber?: string | undefined;
  phoneType?: PersonPhoneType | undefined;
}

export interface AddressBook {
  people: Person[];
}
