import { RequestParameters } from "@azure-rest/core-client";
import { Widget } from "./models";

export type ListParameters = RequestParameters;
export type ReadParameters = RequestParameters;

export interface CreateBodyParam {
    body: Widget;
}

export type CreateParameters = CreateBodyParam & RequestParameters;
export type CustomGetParameters = RequestParameters;
