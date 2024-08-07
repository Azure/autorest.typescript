// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  WithoutApiVersionParameters,
  WithQueryApiVersionParameters,
  WithPathApiVersionParameters,
} from "./parameters.js";
import {
  WithoutApiVersion200Response,
  WithQueryApiVersion200Response,
  WithPathApiVersion200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface WithoutApiVersion {
  head(
    options: WithoutApiVersionParameters,
  ): StreamableMethod<WithoutApiVersion200Response>;
}

export interface WithQueryApiVersion {
  head(
    options: WithQueryApiVersionParameters,
  ): StreamableMethod<WithQueryApiVersion200Response>;
}

export interface WithPathApiVersion {
  head(
    options: WithPathApiVersionParameters,
  ): StreamableMethod<WithPathApiVersion200Response>;
}

export interface Routes {
  /** Resource for '/server/versions/not-versioned/without-api-version' has methods for the following verbs: head */
  (
    path: "/server/versions/not-versioned/without-api-version",
  ): WithoutApiVersion;
  /** Resource for '/server/versions/not-versioned/with-query-api-version' has methods for the following verbs: head */
  (
    path: "/server/versions/not-versioned/with-query-api-version",
  ): WithQueryApiVersion;
  /** Resource for '/server/versions/not-versioned/with-path-api-version/\{apiVersion\}' has methods for the following verbs: head */
  (
    path: "/server/versions/not-versioned/with-path-api-version/{apiVersion}",
    apiVersion: string,
  ): WithPathApiVersion;
}

export type NotVersionedParamInServerVersionsClient = Client & {
  path: Routes;
};
