// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HeadNoParamsParameters,
  GetRequiredParameters,
  PutRequiredOptionalParameters,
  PostParametersParameters,
  GetOptionalParameters
} from "./parameters";
import {
  HeadNoParams200Response,
  GetRequired200Response,
  PutRequiredOptional200Response,
  PostParameters200Response,
  GetOptional200Response
} from "./responses";
import { Client } from "@azure-rest/core-client";

/** Contains operations for Params operations */
export interface ParamsOperations {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
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
  /** POST a JSON */
  postParameters(
    options: PostParametersParameters
  ): Promise<PostParameters200Response>;
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  getOptional(options?: GetOptionalParameters): Promise<GetOptional200Response>;
}

export interface HeadNoParams {
  /**
   * Head request, no params.
   *  Initially has no query parameters. After evolution, a new optional query parameter is added
   */
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
  /** POST a JSON */
  post(options: PostParametersParameters): Promise<PostParameters200Response>;
}

export interface GetOptional {
  /**
   * Get true Boolean value on path.
   *  Initially has one optional query parameter. After evolution, a new optional query parameter is added
   */
  get(options?: GetOptionalParameters): Promise<GetOptional200Response>;
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
