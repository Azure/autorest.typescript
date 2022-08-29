import { RequestParameters } from "@azure-rest/core-client";
import { PostInput } from "./models";

export type ServiceDriven1HeadNoParamsParameters = RequestParameters;

export interface ServiceDriven1GetRequiredQueryParamProperties {
  parameter: string;
}

export interface ServiceDriven1GetRequiredQueryParam {
  queryParameters: ServiceDriven1GetRequiredQueryParamProperties;
}

export type ServiceDriven1GetRequiredParameters =
  ServiceDriven1GetRequiredQueryParam & RequestParameters;

export interface ServiceDriven1PutRequiredOptionalQueryParamProperties {
  requiredParam: string;
  optionalParam?: string;
}

export interface ServiceDriven1PutRequiredOptionalQueryParam {
  queryParameters: ServiceDriven1PutRequiredOptionalQueryParamProperties;
}

export type ServiceDriven1PutRequiredOptionalParameters =
  ServiceDriven1PutRequiredOptionalQueryParam & RequestParameters;

export interface ServiceDriven1PostParametersBodyParam {
  body: PostInput;
}

export type ServiceDriven1PostParametersParameters =
  ServiceDriven1PostParametersBodyParam & RequestParameters;

export interface ServiceDriven1GetOptionalQueryParamProperties {
  optionalParam?: string;
}

export interface ServiceDriven1GetOptionalQueryParam {
  queryParameters?: ServiceDriven1GetOptionalQueryParamProperties;
}

export type ServiceDriven1GetOptionalParameters =
  ServiceDriven1GetOptionalQueryParam & RequestParameters;
