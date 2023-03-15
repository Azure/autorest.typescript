// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HeadNoParamsParameters,
  GetRequiredParameters,
  PutRequiredOptionalParameters,
  DeleteParametersParameters,
  PostParametersParameters,
  GetOptionalParameters,
  GetNewOperationParameters,
} from "./parameters";
import {
  HeadNoParams200Response,
  GetRequired200Response,
  PutRequiredOptional200Response,
  DeleteParameters204Response,
  PostParameters200Response,
  GetOptional200Response,
  GetNewOperation200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface HeadNoParams {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
  head(
    options?: HeadNoParamsParameters
  ): StreamableMethod<HeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  get(options: GetRequiredParameters): StreamableMethod<GetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  put(
    options: PutRequiredOptionalParameters
  ): StreamableMethod<PutRequiredOptional200Response>;
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  delete(
    options?: DeleteParametersParameters
  ): StreamableMethod<DeleteParameters204Response>;
}

export interface PostParameters {
  /** POST a JSON or a JPEG */
  post(
    options: PostParametersParameters
  ): StreamableMethod<PostParameters200Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(
    options?: GetOptionalParameters
  ): StreamableMethod<GetOptional200Response>;
}

export interface GetNewOperation {
  /**
   * I'm a new operation.
   *  Initially neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  get(
    options?: GetNewOperationParameters
  ): StreamableMethod<GetNewOperation200Response>;
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
