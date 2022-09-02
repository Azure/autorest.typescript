import { RequestParameters } from "@azure-rest/core-client";
import { Input } from "./models";

export type DevDrivenGetModelParameters = RequestParameters;

export interface DevDrivenPostModelBodyParam {
  /** Please put {'hello': 'world!'} */
  body: Input;
}

export type DevDrivenPostModelParameters = DevDrivenPostModelBodyParam &
  RequestParameters;

export interface DevDrivenGetPagesQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DevDrivenGetPagesQueryParam {
  queryParameters: DevDrivenGetPagesQueryParamProperties;
}

export type DevDrivenGetPagesParameters = DevDrivenGetPagesQueryParam &
  RequestParameters;
export type DevDrivenLroParameters = RequestParameters;
