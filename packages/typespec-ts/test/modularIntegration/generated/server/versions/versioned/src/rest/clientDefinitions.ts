// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WithoutApiVersionParameters,
  WithQueryApiVersionParameters,
  WithPathApiVersionParameters,
  WithQueryOldApiVersionParameters,
} from "./parameters.js";
import {
  WithoutApiVersion200Response,
  WithQueryApiVersion200Response,
  WithPathApiVersion200Response,
  WithQueryOldApiVersion200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface WithoutApiVersion {
  head(
    options?: WithoutApiVersionParameters,
  ): StreamableMethod<WithoutApiVersion200Response>;
}

export interface WithQueryApiVersion {
  head(
    options?: WithQueryApiVersionParameters,
  ): StreamableMethod<WithQueryApiVersion200Response>;
}

export interface WithPathApiVersion {
  head(
    options?: WithPathApiVersionParameters,
  ): StreamableMethod<WithPathApiVersion200Response>;
}

export interface WithQueryOldApiVersion {
  head(
    options?: WithQueryOldApiVersionParameters,
  ): StreamableMethod<WithQueryOldApiVersion200Response>;
}

export interface Routes {
  /** Resource for '/server/versions/versioned/without-api-version' has methods for the following verbs: head */
  (path: "/server/versions/versioned/without-api-version"): WithoutApiVersion;
  /** Resource for '/server/versions/versioned/with-query-api-version' has methods for the following verbs: head */
  (
    path: "/server/versions/versioned/with-query-api-version",
  ): WithQueryApiVersion;
  /** Resource for '/server/versions/versioned/with-path-api-version/\{apiVersion\}' has methods for the following verbs: head */
  (
    path: "/server/versions/versioned/with-path-api-version/{apiVersion}",
    apiVersion: string,
  ): WithPathApiVersion;
  /** Resource for '/server/versions/versioned/with-query-old-api-version' has methods for the following verbs: head */
  (
    path: "/server/versions/versioned/with-query-old-api-version",
  ): WithQueryOldApiVersion;
}

export type VersionedContext = Client & {
  path: Routes;
};
