import { HttpResponse } from "@azure-rest/core-client";
import { ErrorOutput, WidgetOutput } from "./outputModels";

/** Ok */
export interface WidgetServiceList200Response extends HttpResponse {
    status: "200";
}

export interface WidgetServiceListdefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** Ok */
export interface WidgetServiceRead200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceReaddefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** Ok */
export interface WidgetServiceCreate200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceCreatedefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}

/** Ok */
export interface WidgetServiceCustomGet200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export interface WidgetServiceCustomGetdefaultResponse extends HttpResponse {
    status: string;
    body: ErrorOutput;
}
