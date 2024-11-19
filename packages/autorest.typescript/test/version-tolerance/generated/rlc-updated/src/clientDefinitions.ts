// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ParamsHeadNoParamsParameters,
  ParamsGetRequiredParameters,
  ParamsPutRequiredOptionalParameters,
  ParamsPostParametersParameters,
  ParamsDeleteParametersParameters,
  ParamsGetOptionalParameters,
  ParamsGetNewOperationParameters,
} from "./parameters";
import {
  ParamsHeadNoParams200Response,
  ParamsGetRequired200Response,
  ParamsPutRequiredOptional200Response,
  ParamsPostParameters200Response,
  ParamsDeleteParameters204Response,
  ParamsGetOptional200Response,
  ParamsGetNewOperation200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Params operations */
export interface ParamsOperations {
  /** Head request, no params. Initially has no query parameters. After evolution, a new optional query parameter is added */
  headNoParams(
    options?: ParamsHeadNoParamsParameters,
  ): StreamableMethod<ParamsHeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  getRequired(
    options: ParamsGetRequiredParameters,
  ): StreamableMethod<ParamsGetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  putRequiredOptional(
    options: ParamsPutRequiredOptionalParameters,
  ): StreamableMethod<ParamsPutRequiredOptional200Response>;
  /** POST a JSON or a JPEG */
  postParameters(
    options: ParamsPostParametersParameters,
  ): StreamableMethod<ParamsPostParameters200Response>;
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  deleteParameters(
    options?: ParamsDeleteParametersParameters,
  ): StreamableMethod<ParamsDeleteParameters204Response>;
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  getOptional(
    options?: ParamsGetOptionalParameters,
  ): StreamableMethod<ParamsGetOptional200Response>;
  /**
   * I'm a new operation.
   *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  getNewOperation(
    options?: ParamsGetNewOperationParameters,
  ): StreamableMethod<ParamsGetNewOperation200Response>;
}

export interface HeadNoParams {
  /** Head request, no params. Initially has no query parameters. After evolution, a new optional query parameter is added */
  head(
    options?: ParamsHeadNoParamsParameters,
  ): StreamableMethod<ParamsHeadNoParams200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially only has one required Query Parameter. After evolution, a new optional query parameter is added
   */
  get(
    options: ParamsGetRequiredParameters,
  ): StreamableMethod<ParamsGetRequired200Response>;
  /** Initially has one required query parameter and one optional query parameter.  After evolution, a new optional query parameter is added */
  put(
    options: ParamsPutRequiredOptionalParameters,
  ): StreamableMethod<ParamsPutRequiredOptional200Response>;
  /** POST a JSON or a JPEG */
  post(
    options: ParamsPostParametersParameters,
  ): StreamableMethod<ParamsPostParameters200Response>;
  /**
   * Delete something.
   *  Initially the path exists but there is no delete method. After evolution this is a new method in a known path
   */
  delete(
    options?: ParamsDeleteParametersParameters,
  ): StreamableMethod<ParamsDeleteParameters204Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(
    options?: ParamsGetOptionalParameters,
  ): StreamableMethod<ParamsGetOptional200Response>;
}

export interface GetNewOperation {
  /**
   * I'm a new operation.
   *  Initiallty neither path or method exist for this operation. After evolution, this is a new method in a new path
   */
  get(
    options?: ParamsGetNewOperationParameters,
  ): StreamableMethod<ParamsGetNewOperation200Response>;
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
