import { RequestParameters } from "@azure-rest/core-client";
import { Dog, Cat } from "./models";

export type MultiInterfaceClientGetDogsParameters = RequestParameters;

export interface MultiInterfaceClientSetDogsBodyParam {
  body: Dog;
}

export type MultiInterfaceClientSetDogsParameters =
  MultiInterfaceClientSetDogsBodyParam & RequestParameters;
export type MultiInterfaceClientGetCatsParameters = RequestParameters;

export interface MultiInterfaceClientSetCatsBodyParam {
  body: Cat;
}

export type MultiInterfaceClientSetCatsParameters =
  MultiInterfaceClientSetCatsBodyParam & RequestParameters;
