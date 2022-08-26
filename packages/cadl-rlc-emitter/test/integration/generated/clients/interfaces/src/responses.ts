import { HttpResponse } from "@azure-rest/core-client";
import { DogOutput, ErrorResponseOutput, CatOutput } from "./outputModels";

/** The request has succeeded. */
export interface MultiInterfaceClientGetDogs200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

export interface MultiInterfaceClientGetDogsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface MultiInterfaceClientSetDogs200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

export interface MultiInterfaceClientSetDogsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface MultiInterfaceClientGetCats200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}

export interface MultiInterfaceClientGetCatsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface MultiInterfaceClientSetCats200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}

export interface MultiInterfaceClientSetCatsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
