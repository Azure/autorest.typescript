import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export interface ServiceDriven2HeadNoParamsQueryParamProperties {
  newParameter?: string;
}

export interface ServiceDriven2HeadNoParamsQueryParam {
  queryParameters?: ServiceDriven2HeadNoParamsQueryParamProperties;
}

export type ServiceDriven2HeadNoParamsParameters =
  ServiceDriven2HeadNoParamsQueryParam & RequestParameters;

export interface ServiceDriven2GetRequiredQueryParamProperties {
  parameter: string;
  newParameter?: string;
}

export interface ServiceDriven2GetRequiredQueryParam {
  queryParameters: ServiceDriven2GetRequiredQueryParamProperties;
}

export type ServiceDriven2GetRequiredParameters =
  ServiceDriven2GetRequiredQueryParam & RequestParameters;

export interface ServiceDriven2PutRequiredOptionalQueryParamProperties {
  requiredParam: string;
  optionalParam?: string;
  newParameter?: string;
}

export interface ServiceDriven2PutRequiredOptionalQueryParam {
  queryParameters: ServiceDriven2PutRequiredOptionalQueryParamProperties;
}

export type ServiceDriven2PutRequiredOptionalParameters =
  ServiceDriven2PutRequiredOptionalQueryParam & RequestParameters;

export interface ServiceDriven2PostParametersBodyParam {
  body: PostInput;
}

export type ServiceDriven2PostParametersParameters =
  ServiceDriven2PostParametersBodyParam & RequestParameters;
export type ServiceDriven2DeleteParametersParameters = RequestParameters;

export interface ServiceDriven2GetOptionalQueryParamProperties {
  optionalParam?: string;
  newParameter?: string;
}

export interface ServiceDriven2GetOptionalQueryParam {
  queryParameters?: ServiceDriven2GetOptionalQueryParamProperties;
}

export type ServiceDriven2GetOptionalParameters =
  ServiceDriven2GetOptionalQueryParam & RequestParameters;
export type ServiceDriven2GetNewOperationParameters = RequestParameters;
