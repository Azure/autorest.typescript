import { RequestParameters } from "@azure-rest/core-client";
import { Input } from "./models";

export type DevDrivenGetModelParameters = RequestParameters;

export interface DevDrivenPostModelBodyParam {
  body: Input;
}

export type DevDrivenPostModelParameters = DevDrivenPostModelBodyParam &
  RequestParameters;

export interface DevDrivenGetPagesQueryParamProperties {
  apiVersion: string;
}

export interface DevDrivenGetPagesQueryParam {
  queryParameters: DevDrivenGetPagesQueryParamProperties;
}

export type DevDrivenGetPagesParameters = DevDrivenGetPagesQueryParam &
  RequestParameters;
export type DevDrivenLroParameters = RequestParameters;
