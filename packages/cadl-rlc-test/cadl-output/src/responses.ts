import { HttpResponse } from "@azure-rest/core-client";

/** Ok */
export interface List200Response extends HttpResponse {
    status: "200";
    body: any;
}

export interface ListDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}

/** Ok */
export interface Read200Response extends HttpResponse {
    status: "200";
    body: any;
}

export interface ReadDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}

/** Ok */
export interface Create200Response extends HttpResponse {
    status: "200";
    body: any;
}

export interface CreateDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}

/** Ok */
export interface CustomGet200Response extends HttpResponse {
    status: "200";
    body: any;
}

export interface CustomGetDefaultResponse extends HttpResponse {
    status: string;
    body: any;
}
