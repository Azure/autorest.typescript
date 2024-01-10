// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetKnownValueParameters,
  PutKnownValueParameters,
  GetUnknownValueParameters,
  PutUnknownValueParameters,
} from "./parameters";
import {
  GetKnownValue200Response,
  PutKnownValue204Response,
  GetUnknownValue200Response,
  PutUnknownValue204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetKnownValue {
  get(
    options?: GetKnownValueParameters,
  ): StreamableMethod<GetKnownValue200Response>;
  put(
    options: PutKnownValueParameters,
  ): StreamableMethod<PutKnownValue204Response>;
}

export interface GetUnknownValue {
  get(
    options?: GetUnknownValueParameters,
  ): StreamableMethod<GetUnknownValue200Response>;
  put(
    options: PutUnknownValueParameters,
  ): StreamableMethod<PutUnknownValue204Response>;
}

export interface Routes {
  /** Resource for '/type/enum/extensible/string/known-value' has methods for the following verbs: get, put */
  (path: "/type/enum/extensible/string/known-value"): GetKnownValue;
  /** Resource for '/type/enum/extensible/string/unknown-value' has methods for the following verbs: get, put */
  (path: "/type/enum/extensible/string/unknown-value"): GetUnknownValue;
}

export type ExtensibleClient = Client & {
  path: Routes;
};
