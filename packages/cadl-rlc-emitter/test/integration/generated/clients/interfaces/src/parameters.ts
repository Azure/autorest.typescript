import { RequestParameters } from "@azure-rest/core-client";
import { Dog, Cat } from "./models";

export type DogsGetDogsParameters = RequestParameters;

export interface DogsSetDogsBodyParam {
  /** Simple model. */
  body: Dog;
}

export type DogsSetDogsParameters = DogsSetDogsBodyParam & RequestParameters;
export type CatsGetCatsParameters = RequestParameters;

export interface CatsSetCatsBodyParam {
  /** Simple model. */
  body: Cat;
}

export type CatsSetCatsParameters = CatsSetCatsBodyParam & RequestParameters;
