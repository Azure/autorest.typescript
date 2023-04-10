// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  JsonProjectionParameters,
  ClientProjectionParameters,
  LanguageProjectionParameters,
} from "./parameters";
import {
  JsonProjection204Response,
  ClientProjection204Response,
  LanguageProjection204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface JsonProjection {
  post(
    options?: JsonProjectionParameters
  ): StreamableMethod<JsonProjection204Response>;
}

export interface ClientProjection {
  post(
    options?: ClientProjectionParameters
  ): StreamableMethod<ClientProjection204Response>;
}

export interface LanguageProjection {
  post(
    options?: LanguageProjectionParameters
  ): StreamableMethod<LanguageProjection204Response>;
}

export interface Routes {
  /** Resource for '/projection/json' has methods for the following verbs: post */
  (path: "/projection/json"): JsonProjection;
  /** Resource for '/projection/client' has methods for the following verbs: post */
  (path: "/projection/client"): ClientProjection;
  /** Resource for '/projection/language' has methods for the following verbs: post */
  (path: "/projection/language"): LanguageProjection;
}

export type ProjectionClient = Client & {
  path: Routes;
};
