import { HttpResponse } from "@azure-rest/core-client";
import { ErrorOutput, WidgetOutput } from "./outputModels";

/** Ok */
export interface WidgetServiceList200Response extends HttpResponse {
    status: "200";
    body: any;
}

export interface WidgetServiceListDefaultResponse extends HttpResponse {
export interface PetsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}

/** The request has succeeded. */
export interface WidgetServiceRead200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceReadDefaultResponse extends HttpResponse {
export interface PetsRead304Response extends HttpResponse {
    status: "304";
    body: PetOutput;
}

/** Error */
export interface PetsReadDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}

/** The request has succeeded. */
export interface WidgetServiceCreate200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceCreateDefaultResponse extends HttpResponse {
export interface PetsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}

/** The request has succeeded. */
export interface WidgetServiceCustomGet200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceCustomGetDefaultResponse extends HttpResponse {
export interface ListPetToysResponseListDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}
