import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export type ParamsHeadNoParamsParameters = RequestParameters;

export interface ParamsGetRequiredQueryParamProperties {
  parameter: string;
}

export interface ParamsGetRequiredQueryParam {
  queryParameters: ParamsGetRequiredQueryParamProperties;
}

export type ParamsGetRequiredParameters = ParamsGetRequiredQueryParam &
  RequestParameters;

export interface ParamsPutRequiredOptionalQueryParamProperties {
  requiredParam: string;
  optionalParam?: string;
}

export interface ParamsPutRequiredOptionalQueryParam {
  queryParameters: ParamsPutRequiredOptionalQueryParamProperties;
}

export type ParamsPutRequiredOptionalParameters =
  ParamsPutRequiredOptionalQueryParam & RequestParameters;

export interface ParamsPostParametersBodyParam {
  body: PostInput;
}

export type ParamsPostParametersParameters = ParamsPostParametersBodyParam &
  RequestParameters;

export interface ParamsGetOptionalQueryParamProperties {
  optionalParam?: string;
}

export interface ParamsGetOptionalQueryParam {
  queryParameters?: ParamsGetOptionalQueryParamProperties;
}

export type ParamsGetOptionalParameters = ParamsGetOptionalQueryParam &
  RequestParameters;
