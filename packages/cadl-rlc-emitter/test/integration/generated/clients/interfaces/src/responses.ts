import { HttpResponse } from "@azure-rest/core-client";
import { DogOutput, ErrorResponseOutput, CatOutput } from "./outputModels";

/** The request has succeeded. */
export interface DogsGetDogs200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

export interface DogsGetDogsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DogsSetDogs200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

export interface DogsSetDogsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CatsGetCats200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}

export interface CatsGetCatsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CatsSetCats200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}

export interface CatsSetCatsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
