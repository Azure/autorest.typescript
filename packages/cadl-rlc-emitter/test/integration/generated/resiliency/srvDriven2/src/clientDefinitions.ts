import {
  ServiceDriven2HeadNoParamsParameters,
  ServiceDriven2GetRequiredParameters,
  ServiceDriven2PutRequiredOptionalParameters,
  ServiceDriven2DeleteParametersParameters,
  ServiceDriven2PostParametersParameters,
  ServiceDriven2GetOptionalParameters,
  ServiceDriven2GetNewOperationParameters,
} from "./parameters";
import {
  ServiceDriven2HeadNoParams200Response,
  ServiceDriven2GetRequired200Response,
  ServiceDriven2PutRequiredOptional200Response,
  ServiceDriven2DeleteParameters204Response,
  ServiceDriven2PostParameters200Response,
  ServiceDriven2GetOptional200Response,
  ServiceDriven2GetNewOperation200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface HeadNoParams {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
  head(
    options?: ServiceDriven2HeadNoParamsParameters
  ): StreamableMethod<ServiceDriven2HeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  get(
    options?: ServiceDriven2GetRequiredParameters
  ): StreamableMethod<ServiceDriven2GetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  put(
    options?: ServiceDriven2PutRequiredOptionalParameters
  ): StreamableMethod<ServiceDriven2PutRequiredOptional200Response>;
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  delete(
    options?: ServiceDriven2DeleteParametersParameters
  ): StreamableMethod<ServiceDriven2DeleteParameters204Response>;
}

export interface PostParameters {
  /** POST a JSON or a JPEG */
  post(
    options: ServiceDriven2PostParametersParameters
  ): StreamableMethod<ServiceDriven2PostParameters200Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(
    options?: ServiceDriven2GetOptionalParameters
  ): StreamableMethod<ServiceDriven2GetOptional200Response>;
}

export interface GetNewOperation {
  /**
   * I'm a new operation.
   *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  get(
    options?: ServiceDriven2GetNewOperationParameters
  ): StreamableMethod<ServiceDriven2GetNewOperation200Response>;
}

export interface Routes {
  /** Resource for '/serviceDriven2/serviceDriven/parameters' has methods for the following verbs: head, get, put, delete */
  (path: "/serviceDriven2/serviceDriven/parameters"): HeadNoParams;
  /** Resource for '/serviceDriven2/serviceDriven/parameters/\{contentTypePath\}' has methods for the following verbs: post */
  (
    path: "/serviceDriven2/serviceDriven/parameters/{contentTypePath}",
    contentTypePath: "json" | "jpeg"
  ): PostParameters;
  /** Resource for '/serviceDriven2/serviceDriven/moreParameters' has methods for the following verbs: get */
  (path: "/serviceDriven2/serviceDriven/moreParameters"): GetOptional;
  /** Resource for '/serviceDriven2/serviceDriven/newPath' has methods for the following verbs: get */
  (path: "/serviceDriven2/serviceDriven/newPath"): GetNewOperation;
}

export type ResiliencyServiceDriven2Client = Client & {
  path: Routes;
};
