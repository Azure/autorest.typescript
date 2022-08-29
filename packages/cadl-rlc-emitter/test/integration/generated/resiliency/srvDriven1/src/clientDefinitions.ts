import {
  ServiceDriven1HeadNoParamsParameters,
  ServiceDriven1GetRequiredParameters,
  ServiceDriven1PutRequiredOptionalParameters,
  ServiceDriven1PostParametersParameters,
  ServiceDriven1GetOptionalParameters,
} from "./parameters";
import {
  ServiceDriven1HeadNoParams200Response,
  ServiceDriven1GetRequired200Response,
  ServiceDriven1PutRequiredOptional200Response,
  ServiceDriven1PostParameters200Response,
  ServiceDriven1GetOptional200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface HeadNoParams {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
  head(
    options?: ServiceDriven1HeadNoParamsParameters
  ): StreamableMethod<ServiceDriven1HeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  get(
    options: ServiceDriven1GetRequiredParameters
  ): StreamableMethod<ServiceDriven1GetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  put(
    options: ServiceDriven1PutRequiredOptionalParameters
  ): StreamableMethod<ServiceDriven1PutRequiredOptional200Response>;
}

export interface PostParameters {
  /** POST a JSON */
  post(
    options?: ServiceDriven1PostParametersParameters
  ): StreamableMethod<ServiceDriven1PostParameters200Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(
    options?: ServiceDriven1GetOptionalParameters
  ): StreamableMethod<ServiceDriven1GetOptional200Response>;
}

export interface Routes {
  /** Resource for '/serviceDriven1/parameters' has methods for the following verbs: head, get, put */
  (path: "/serviceDriven1/parameters"): HeadNoParams;
  /** Resource for '/serviceDriven1/parameters/\{contentTypePath\}' has methods for the following verbs: post */
  (
    path: "/serviceDriven1/parameters/{contentTypePath}",
    contentTypePath: "json"
  ): PostParameters;
  /** Resource for '/serviceDriven1/moreParameters' has methods for the following verbs: get */
  (path: "/serviceDriven1/moreParameters"): GetOptional;
}

export type ResiliencyServiceDriven1Client = Client & {
  path: Routes;
};
