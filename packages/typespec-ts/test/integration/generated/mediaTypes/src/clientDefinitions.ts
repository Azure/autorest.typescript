// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MediaTypesOperationsGetByUnionOnlyParameters,
  MediaTypesOperationsGetBySharedRouteForStringParameters,
  MediaTypesOperationsGetBySharedRouteForModelParameters,
  MediaTypesOperationsGetBySharedRouteForBytesParameters,
  MediaTypesOperationsGetByOverloadParentParameters,
  MediaTypesClientGetByUnionParameters,
  MediaTypesClientGetBySharedRouteForStringParameters,
  MediaTypesClientGetBySharedRouteForModelParameters,
  MediaTypesClientGetBySharedRouteForBytesParameters,
  MediaTypesClientGetByOverloadStringParameters,
  MediaTypesClientGetByOverloadForModelParameters,
  MediaTypesClientGetByOverloadForBytesParameters,
} from "./parameters";
import {
  MediaTypesOperationsGetByUnionOnly200Response,
  MediaTypesOperationsGetBySharedRouteForString200Response,
  MediaTypesOperationsGetBySharedRouteForModel200Response,
  MediaTypesOperationsGetBySharedRouteForBytes200Response,
  MediaTypesOperationsGetByOverloadParent200Response,
  MediaTypesClientGetByUnion200Response,
  MediaTypesClientGetBySharedRouteForString200Response,
  MediaTypesClientGetBySharedRouteForModel200Response,
  MediaTypesClientGetBySharedRouteForBytes200Response,
  MediaTypesClientGetByOverloadString200Response,
  MediaTypesClientGetByOverloadForModel200Response,
  MediaTypesClientGetByOverloadForBytes200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface MediaTypesOperationsGetByUnionOnly {
  /** Union of types map union of content types. */
  post(
    options: MediaTypesOperationsGetByUnionOnlyParameters,
  ): StreamableMethod<MediaTypesOperationsGetByUnionOnly200Response>;
}

export interface MediaTypesOperationsGetBySharedRouteForString {
  /** Using shared route to express the mapping info - string. */
  post(
    options: MediaTypesOperationsGetBySharedRouteForStringParameters,
  ): StreamableMethod<MediaTypesOperationsGetBySharedRouteForString200Response>;
  /** Using shared route to express the mapping info - model. */
  post(
    options: MediaTypesOperationsGetBySharedRouteForModelParameters,
  ): StreamableMethod<MediaTypesOperationsGetBySharedRouteForModel200Response>;
  /** Using shared route to express the mapping info - bytes. */
  post(
    options: MediaTypesOperationsGetBySharedRouteForBytesParameters,
  ): StreamableMethod<MediaTypesOperationsGetBySharedRouteForBytes200Response>;
}

export interface MediaTypesOperationsGetByOverloadParent {
  /** Union of types map union of content types. Then use @overload to detailed mapping. */
  post(
    options: MediaTypesOperationsGetByOverloadParentParameters,
  ): StreamableMethod<MediaTypesOperationsGetByOverloadParent200Response>;
}

export interface MediaTypesClientGetByUnion {
  /** Multiple content-type by union */
  post(
    options: MediaTypesClientGetByUnionParameters,
  ): StreamableMethod<MediaTypesClientGetByUnion200Response>;
}

export interface MediaTypesClientGetBySharedRouteForString {
  /** Multiple content-type by shared routes */
  post(
    options: MediaTypesClientGetBySharedRouteForStringParameters,
  ): StreamableMethod<MediaTypesClientGetBySharedRouteForString200Response>;
  /** Using shared route to express the mapping info - model. */
  post(
    options: MediaTypesClientGetBySharedRouteForModelParameters,
  ): StreamableMethod<MediaTypesClientGetBySharedRouteForModel200Response>;
  /** Using shared route to express the mapping info - bytes. */
  post(
    options: MediaTypesClientGetBySharedRouteForBytesParameters,
  ): StreamableMethod<MediaTypesClientGetBySharedRouteForBytes200Response>;
}

export interface MediaTypesClientGetByOverloadString {
  post(
    options: MediaTypesClientGetByOverloadStringParameters,
  ): StreamableMethod<MediaTypesClientGetByOverloadString200Response>;
  post(
    options: MediaTypesClientGetByOverloadForModelParameters,
  ): StreamableMethod<MediaTypesClientGetByOverloadForModel200Response>;
  post(
    options: MediaTypesClientGetByOverloadForBytesParameters,
  ): StreamableMethod<MediaTypesClientGetByOverloadForBytes200Response>;
}

export interface Routes {
  /** Resource for '/mediatypes/union' has methods for the following verbs: post */
  (path: "/mediatypes/union"): MediaTypesOperationsGetByUnionOnly;
  /** Resource for '/mediatypes/shared-route' has methods for the following verbs: post */
  (
    path: "/mediatypes/shared-route",
  ): MediaTypesOperationsGetBySharedRouteForString;
  /** Resource for '/mediatypes/overload' has methods for the following verbs: post */
  (path: "/mediatypes/overload"): MediaTypesOperationsGetByOverloadParent;
  /** Resource for '/union' has methods for the following verbs: post */
  (path: "/union"): MediaTypesClientGetByUnion;
  /** Resource for '/shared-route' has methods for the following verbs: post */
  (path: "/shared-route"): MediaTypesClientGetBySharedRouteForString;
  /** Resource for '/overload' has methods for the following verbs: post */
  (path: "/overload"): MediaTypesClientGetByOverloadString;
}

export type MediaTypesClient = Client & {
  path: Routes;
};
