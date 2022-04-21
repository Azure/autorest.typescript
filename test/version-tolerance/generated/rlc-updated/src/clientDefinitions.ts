// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HeadNoParamsParameters,
  GetRequiredParameters,
  PutRequiredOptionalParameters,
  PostParametersParameters,
  DeleteParametersParameters,
  GetOptionalParameters,
  GetNewOperationParameters
} from "./parameters";
import {
  HeadNoParams200Response,
  GetRequired200Response,
  PutRequiredOptional200Response,
  PostParameters200Response,
  DeleteParameters204Response,
  GetOptional200Response,
  GetNewOperation200Response
} from "./responses";
import { Client } from "@azure-rest/core-client";

/** Contains operations for Params operations */
export interface ParamsOperations {
  /** Head request, no params. Initially has no query parameters. After evolution, a new optional query parameter is added */
  headNoParams(
    options?: HeadNoParamsParameters
  ): Promise<HeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  getRequired(options: GetRequiredParameters): Promise<GetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  putRequiredOptional(
    options: PutRequiredOptionalParameters
  ): Promise<PutRequiredOptional200Response>;
  /** POST a JSON or a JPEG */
  postParameters(
    options: PostParametersParameters
  ): Promise<PostParameters200Response>;
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  deleteParameters(
    options?: DeleteParametersParameters
  ): Promise<DeleteParameters204Response>;
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  getOptional(options?: GetOptionalParameters): Promise<GetOptional200Response>;
  /**
   * I'm a new operation.
   *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  getNewOperation(
    options?: GetNewOperationParameters
  ): Promise<GetNewOperation200Response>;
}

export interface HeadNoParams {
  /** Head request, no params. Initially has no query parameters. After evolution, a new optional query parameter is added */
  head(options?: HeadNoParamsParameters): Promise<HeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  get(options: GetRequiredParameters): Promise<GetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  put(
    options: PutRequiredOptionalParameters
  ): Promise<PutRequiredOptional200Response>;
  /** POST a JSON or a JPEG */
  post(options: PostParametersParameters): Promise<PostParameters200Response>;
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  delete(
    options?: DeleteParametersParameters
  ): Promise<DeleteParameters204Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(options?: GetOptionalParameters): Promise<GetOptional200Response>;
}

export interface GetNewOperation {
  /**
   * I'm a new operation.
   *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  get(options?: GetNewOperationParameters): Promise<GetNewOperation200Response>;
}

export interface Routes {
  /** Resource for '/serviceDriven/parameters' has methods for the following verbs: head, get, put, post, delete */
  (path: "/serviceDriven/parameters"): HeadNoParams;
  /** Resource for '/serviceDriven/moreParameters' has methods for the following verbs: get */
  (path: "/serviceDriven/moreParameters"): GetOptional;
  /** Resource for '/serviceDriven/newPath' has methods for the following verbs: get */
  (path: "/serviceDriven/newPath"): GetNewOperation;
}

export type DPGClient = Client & {
  path: Routes;
  params: ParamsOperations;
};
