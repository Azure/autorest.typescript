// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetByUnionOnlyParameters,
  GetBySharedRouteForStringParameters,
  GetBySharedRouteForModelParameters,
  GetBySharedRouteForBytesParameters,
  GetByOverloadParentParameters,
  GetByUnionParameters,
  GetByOverloadStringParameters,
  GetByOverloadForModelParameters,
  GetByOverloadForBytesParameters,
} from "./parameters";
import {
  GetByUnionOnly200Response,
  GetBySharedRouteForString200Response,
  GetBySharedRouteForModel200Response,
  GetBySharedRouteForBytes200Response,
  GetByOverloadParent200Response,
  GetByUnion200Response,
  GetByOverloadString200Response,
  GetByOverloadForModel200Response,
  GetByOverloadForBytes200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetByUnionOnly {
  /** Union of types map union of content types. */
  post(
    options: GetByUnionOnlyParameters,
  ): StreamableMethod<GetByUnionOnly200Response>;
}

export interface GetBySharedRouteForString {
  /** Using shared route to express the mapping info - string. */
  post(
    options: GetBySharedRouteForStringParameters,
  ): StreamableMethod<GetBySharedRouteForString200Response>;
  /** Using shared route to express the mapping info - model. */
  post(
    options: GetBySharedRouteForModelParameters,
  ): StreamableMethod<GetBySharedRouteForModel200Response>;
  /** Using shared route to express the mapping info - bytes. */
  post(
    options: GetBySharedRouteForBytesParameters,
  ): StreamableMethod<GetBySharedRouteForBytes200Response>;
}

export interface GetByOverloadParent {
  /** Union of types map union of content types. Then use @overload to detailed mapping. */
  post(
    options: GetByOverloadParentParameters,
  ): StreamableMethod<GetByOverloadParent200Response>;
}

export interface GetByUnion {
  /** Multiple content-type by union */
  post(options: GetByUnionParameters): StreamableMethod<GetByUnion200Response>;
}

export interface GetBySharedRouteForString {
  /** Multiple content-type by shared routes */
  post(
    options: GetBySharedRouteForStringParameters,
  ): StreamableMethod<GetBySharedRouteForString200Response>;
  /** Using shared route to express the mapping info - model. */
  post(
    options: GetBySharedRouteForModelParameters,
  ): StreamableMethod<GetBySharedRouteForModel200Response>;
  /** Using shared route to express the mapping info - bytes. */
  post(
    options: GetBySharedRouteForBytesParameters,
  ): StreamableMethod<GetBySharedRouteForBytes200Response>;
}

export interface GetByOverloadString {
  post(
    options: GetByOverloadStringParameters,
  ): StreamableMethod<GetByOverloadString200Response>;
  post(
    options: GetByOverloadForModelParameters,
  ): StreamableMethod<GetByOverloadForModel200Response>;
  post(
    options: GetByOverloadForBytesParameters,
  ): StreamableMethod<GetByOverloadForBytes200Response>;
}

export interface Routes {
  /** Resource for '/mediatypes/union' has methods for the following verbs: post */
  (path: "/mediatypes/union"): GetByUnionOnly;
  /** Resource for '/mediatypes/shared-route' has methods for the following verbs: post */
  (path: "/mediatypes/shared-route"): GetBySharedRouteForString;
  /** Resource for '/mediatypes/overload' has methods for the following verbs: post */
  (path: "/mediatypes/overload"): GetByOverloadParent;
  /** Resource for '/union' has methods for the following verbs: post */
  (path: "/union"): GetByUnion;
  /** Resource for '/shared-route' has methods for the following verbs: post */
  (path: "/shared-route"): GetBySharedRouteForString;
  /** Resource for '/overload' has methods for the following verbs: post */
  (path: "/overload"): GetByOverloadString;
}

export type MediaTypesClient = Client & {
  path: Routes;
};
