// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HeadNoParamsParameters,
  GetRequiredParameters,
  PutRequiredOptionalParameters,
  PostParametersParameters,
  GetOptionalParameters,
} from "./parameters";
import {
  HeadNoParams200Response,
  GetRequired200Response,
  PutRequiredOptional200Response,
  PostParameters200Response,
  GetOptional200Response,
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
}

export interface PostParameters {
  /** POST a JSON */
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

export interface Routes {
  /** Resource for '/resiliency/servicedriven1/parameters' has methods for the following verbs: head, get, put */
  (path: "/resiliency/servicedriven1/parameters"): HeadNoParams;
  /** Resource for '/resiliency/servicedriven1/parameters/\{contentTypePath\}' has methods for the following verbs: post */
  (
    path: "/resiliency/servicedriven1/parameters/{contentTypePath}",
    contentTypePath: "json"
  ): PostParameters;
  /** Resource for '/resiliency/servicedriven1/moreParameters' has methods for the following verbs: get */
  (path: "/resiliency/servicedriven1/moreParameters"): GetOptional;
}

export type ResiliencyServiceDriven1Client = Client & {
  path: Routes;
};
