import { HttpResponse } from "@azure-rest/core-client";
import { ErrorOutput, PetOutput, ResponsePageOutput } from "./outputModels";

/** Ok */
export interface PetsDelete200Response extends HttpResponse {
    status: "200";
}

/** Error */
export interface PetsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
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
    body: ErrorOutput;
}

/** The request has succeeded. */
export interface PetsCreate200Response extends HttpResponse {
    status: "200";
    body: PetOutput;
}

/** Error */
export interface PetsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** The request has succeeded. */
export interface ListPetToysResponseList200Response extends HttpResponse {
    status: "200";
    body: ResponsePageOutput;
}

/** Error */
export interface ListPetToysResponseListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}
