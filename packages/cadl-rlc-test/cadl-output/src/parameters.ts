import { RequestParameters } from "@azure-rest/core-client";
import { Pet } from "./models";

export type PetsDeleteParameters = RequestParameters;
export type PetsReadParameters = RequestParameters;

export interface PetsCreateBodyParam {
  body: Pet;
}

export type PetsCreateParameters = PetsCreateBodyParam & RequestParameters;

export interface ListPetToysResponseListQueryParamProperties {
  nameFilter: string;
}

export interface ListPetToysResponseListQueryParam {
  queryParameters: ListPetToysResponseListQueryParamProperties;
}

export type ListPetToysResponseListParameters =
  ListPetToysResponseListQueryParam & RequestParameters;
