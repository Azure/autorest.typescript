// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ParamsHeadNoParamsParameters,
  ParamsGetRequiredParameters,
  ParamsPutRequiredOptionalParameters,
  ParamsPostParametersParameters,
  ParamsGetOptionalParameters,
} from "./parameters.js";
import type {
  ParamsHeadNoParams200Response,
  ParamsGetRequired200Response,
  ParamsPutRequiredOptional200Response,
  ParamsPostParameters200Response,
  ParamsGetOptional200Response,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Params operations */
export interface ParamsOperations {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
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
  /** POST a JSON */
  postParameters(
    options: ParamsPostParametersParameters,
  ): StreamableMethod<ParamsPostParameters200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  getOptional(
    options?: ParamsGetOptionalParameters,
  ): StreamableMethod<ParamsGetOptional200Response>;
}

export interface HeadNoParams {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
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
  /** POST a JSON */
  post(
    options: ParamsPostParametersParameters,
  ): StreamableMethod<ParamsPostParameters200Response>;
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

export interface Routes {
  /** Resource for '/serviceDriven/parameters' has methods for the following verbs: head, get, put, post */
  (path: "/serviceDriven/parameters"): HeadNoParams;
  /** Resource for '/serviceDriven/moreParameters' has methods for the following verbs: get */
  (path: "/serviceDriven/moreParameters"): GetOptional;
}

export type DPGClient = Client & {
  path: Routes;
  params: ParamsOperations;
};
