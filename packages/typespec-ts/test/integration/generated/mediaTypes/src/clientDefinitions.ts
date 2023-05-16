// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetByUnionParameters,
  GetBySharedRouteForStringParameters,
  GetBySharedRouteForModelParameters,
  GetBySharedRouteForBytesParameters,
  GetByOverloadParameters,
  GetByOverloadStringParameters,
  GetByOverloadForModelParameters,
  GetByOverloadForBytesParameters,
} from "./parameters";
import {
  GetByUnion200Response,
  GetBySharedRouteForString200Response,
  GetBySharedRouteForModel200Response,
  GetBySharedRouteForBytes200Response,
  GetByOverload200Response,
  GetByOverloadString200Response,
  GetByOverloadForModel200Response,
  GetByOverloadForBytes200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetByUnion {
  /** Union of types map union of content types. */
  post(options: GetByUnionParameters): StreamableMethod<GetByUnion200Response>;
}

export interface GetBySharedRouteForString {
  /** Using shared route to express the mapping info - string. */
  post(
    options: GetBySharedRouteForStringParameters
  ): StreamableMethod<GetBySharedRouteForString200Response>;
  /** Using shared route to express the mapping info - model. */
  post(
    options: GetBySharedRouteForModelParameters
  ): StreamableMethod<GetBySharedRouteForModel200Response>;
  /** Using shared route to express the mapping info - bytes. */
  post(
    options: GetBySharedRouteForBytesParameters
  ): StreamableMethod<GetBySharedRouteForBytes200Response>;
}

export interface GetByOverload {
  /** Union of types map union of content types. Then use @overload to detailed mapping. */
  post(
    options: GetByOverloadParameters
  ): StreamableMethod<GetByOverload200Response>;
  post(
    options: GetByOverloadStringParameters
  ): StreamableMethod<GetByOverloadString200Response>;
  post(
    options: GetByOverloadForModelParameters
  ): StreamableMethod<GetByOverloadForModel200Response>;
  post(
    options: GetByOverloadForBytesParameters
  ): StreamableMethod<GetByOverloadForBytes200Response>;
}

export interface Routes {
  /** Resource for '/union' has methods for the following verbs: post */
  (path: "/union"): GetByUnion;
  /** Resource for '/shared-route' has methods for the following verbs: post */
  (path: "/shared-route"): GetBySharedRouteForString;
  /** Resource for '/overload' has methods for the following verbs: post */
  (path: "/overload"): GetByOverload;
}

export type MediaTypesClient = Client & {
  path: Routes;
};
