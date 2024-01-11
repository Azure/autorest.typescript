// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetByUnionOnlyParameters,
  GetBySharedRouteForStringParameters,
  GetBySharedRouteForModelParameters,
  GetBySharedRouteForBytesParameters,
  GetByOverloadParentParameters,
} from "./parameters";
import {
  GetByUnionOnly200Response,
  GetBySharedRouteForString200Response,
  GetBySharedRouteForModel200Response,
  GetBySharedRouteForBytes200Response,
  GetByOverloadParent200Response,
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

export interface Routes {
  /** Resource for '/mediatypes/union' has methods for the following verbs: post */
  (path: "/mediatypes/union"): GetByUnionOnly;
  /** Resource for '/mediatypes/shared-route' has methods for the following verbs: post */
  (path: "/mediatypes/shared-route"): GetBySharedRouteForString;
  /** Resource for '/mediatypes/overload' has methods for the following verbs: post */
  (path: "/mediatypes/overload"): GetByOverloadParent;
}

export type MediaTypesClient = Client & {
  path: Routes;
};
