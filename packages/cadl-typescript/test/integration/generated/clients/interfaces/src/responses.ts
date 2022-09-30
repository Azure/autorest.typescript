import { HttpResponse } from "@azure-rest/core-client";
import { DogOutput, CatOutput } from "./outputModels";

/** The request has succeeded. */
export interface DogsGetDogs200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

/** The request has succeeded. */
export interface DogsSetDogs200Response extends HttpResponse {
  status: "200";
  body: DogOutput;
}

/** The request has succeeded. */
export interface CatsGetCats200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}

/** The request has succeeded. */
export interface CatsSetCats200Response extends HttpResponse {
  status: "200";
  body: CatOutput;
}
