import { RequestParameters } from "@azure-rest/core-client";
import { Dog, Cat } from "./models";

export type DogsGetDogsParameters = RequestParameters;

export interface DogsSetDogsBodyParam {
  body: Dog;
}

export type DogsSetDogsParameters = DogsSetDogsBodyParam & RequestParameters;
export type CatsGetCatsParameters = RequestParameters;

export interface CatsSetCatsBodyParam {
  body: Cat;
}

export type CatsSetCatsParameters = CatsSetCatsBodyParam & RequestParameters;
