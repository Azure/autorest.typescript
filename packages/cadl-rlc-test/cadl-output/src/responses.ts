import { HttpResponse } from "@azure-rest/core-client";
import { ErrorOutput, WidgetOutput } from "./outputModels";

/** Ok */
export interface WidgetServiceList200Response extends HttpResponse {
    status: "200";
}

export interface WidgetServiceListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** Ok */
export interface WidgetServiceRead200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceReadDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** Ok */
export interface WidgetServiceCreate200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** Ok */
export interface WidgetServiceCustomGet200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceCustomGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}
