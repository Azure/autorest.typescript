import { HttpResponse } from "@azure-rest/core-client";
import {
  ErrorModelOutput,
  PetListResultsOutput,
  PetOutput,
  Output,
  ToyListResultsOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface PetsDelete200Response extends HttpResponse {
  status: "200";
}

export interface PetsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface PetsList200Response extends HttpResponse {
  status: "200";
  body: PetListResultsOutput;
}

export interface PetsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface PetsRead200Response extends HttpResponse {
  status: "200";
  body: PetOutput;
}

/** The client has made a conditional request and the resource has not been modified. */
export interface PetsRead304Response extends HttpResponse {
  status: "304";
  body: Output;
}

export interface PetsReadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface PetsCreate200Response extends HttpResponse {
  status: "200";
  body: PetOutput;
}

export interface PetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface ListPetToysResponseList200Response extends HttpResponse {
  status: "200";
  body: ToyListResultsOutput;
}

export interface ListPetToysResponseListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorModelOutput;
}
