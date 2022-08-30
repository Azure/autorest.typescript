import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export interface ParamsHeadNoParamsQueryParamProperties {
  newParameter?: string;
}

export interface ParamsHeadNoParamsQueryParam {
  queryParameters?: ParamsHeadNoParamsQueryParamProperties;
}

export type ParamsHeadNoParamsParameters = ParamsHeadNoParamsQueryParam &
  RequestParameters;

export interface ParamsGetRequiredQueryParamProperties {
  parameter: string;
  newParameter?: string;
}

export interface ParamsGetRequiredQueryParam {
  queryParameters: ParamsGetRequiredQueryParamProperties;
}

export type ParamsGetRequiredParameters = ParamsGetRequiredQueryParam &
  RequestParameters;

export interface ParamsPutRequiredOptionalQueryParamProperties {
  requiredParam: string;
  optionalParam?: string;
  newParameter?: string;
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
export type ParamsDeleteParametersParameters = RequestParameters;

export interface ParamsGetOptionalQueryParamProperties {
  optionalParam?: string;
  newParameter?: string;
}

export interface ParamsGetOptionalQueryParam {
  queryParameters?: ParamsGetOptionalQueryParamProperties;
}

export type ParamsGetOptionalParameters = ParamsGetOptionalQueryParam &
  RequestParameters;
export type ParamsGetNewOperationParameters = RequestParameters;
