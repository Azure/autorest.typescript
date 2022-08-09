import { RequestParameters } from "@azure-rest/core-client";
import { Widget } from "./models";

export type WidgetServiceListParameters = RequestParameters;
export type WidgetServiceReadParameters = RequestParameters;

export interface WidgetServiceCreateBodyParam {
    body: Widget;
}

export type WidgetServiceCreateParameters = WidgetServiceCreateBodyParam & RequestParameters;
export type WidgetServiceCustomGetParameters = RequestParameters;
