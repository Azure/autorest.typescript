import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export interface ParamsHeadNoParamsQueryParamProperties {
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsHeadNoParamsQueryParam {
  queryParameters?: ParamsHeadNoParamsQueryParamProperties;
}

export type ParamsHeadNoParamsParameters = ParamsHeadNoParamsQueryParam &
  RequestParameters;

export interface ParamsGetRequiredQueryParamProperties {
  /** I am a required parameter */
  parameter: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsGetRequiredQueryParam {
  queryParameters: ParamsGetRequiredQueryParamProperties;
}

export type ParamsGetRequiredParameters = ParamsGetRequiredQueryParam &
  RequestParameters;

export interface ParamsPutRequiredOptionalQueryParamProperties {
  /** I am a required parameter */
  requiredParam: string;
  /** I am an optional parameter */
  optionalParam?: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsPutRequiredOptionalQueryParam {
  queryParameters: ParamsPutRequiredOptionalQueryParamProperties;
}

export type ParamsPutRequiredOptionalParameters =
  ParamsPutRequiredOptionalQueryParam & RequestParameters;

export interface ParamsPostParametersBodyParam {
  /** I am a body parameter. My only valid JSON entry is { url: "http://example.org/myimage.jpeg" } */
  body: PostInput;
}

export type ParamsPostParametersParameters = ParamsPostParametersBodyParam &
  RequestParameters;
export type ParamsDeleteParametersParameters = RequestParameters;

export interface ParamsGetOptionalQueryParamProperties {
  /** I am an optional parameter */
  optionalParam?: string;
  /** I'm a new input optional parameter */
  new_parameter?: string;
}

export interface ParamsGetOptionalQueryParam {
  queryParameters?: ParamsGetOptionalQueryParamProperties;
}

export type ParamsGetOptionalParameters = ParamsGetOptionalQueryParam &
  RequestParameters;
export type ParamsGetNewOperationParameters = RequestParameters;
