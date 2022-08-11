import { HttpResponse } from "@azure-rest/core-client";
import { ErrorModelOutput, PetOutput, ToyListResultsOutput } from "./outputModels";

/** Ok */
export interface PetsDelete200Response extends HttpResponse {
    status: "200";
}

/** Error */
export interface PetsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface PetsRead200Response extends HttpResponse {
    status: "200";
    body: PetOutput;
}

/** Not modified */
export interface PetsRead304Response extends HttpResponse {
    status: "304";
    body: PetOutput;
}

/** Error */
export interface PetsReadDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface PetsCreate200Response extends HttpResponse {
    status: "200";
    body: PetOutput;
}

/** Error */
export interface PetsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorModelOutput;
}

/** The request has succeeded. */
export interface ListPetToysResponseList200Response extends HttpResponse {
    status: "200";
    body: ToyListResultsOutput;
}

/** Error */
export interface ListPetToysResponseListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorModelOutput;
}
