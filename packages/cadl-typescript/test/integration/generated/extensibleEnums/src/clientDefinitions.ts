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
    options?: GetKnownValueParameters
  ): StreamableMethod<GetKnownValue200Response>;
  put(
    options: PutKnownValueParameters
  ): StreamableMethod<PutKnownValue204Response>;
}

export interface GetUnknownValue {
  get(
    options?: GetUnknownValueParameters
  ): StreamableMethod<GetUnknownValue200Response>;
  put(
    options: PutUnknownValueParameters
  ): StreamableMethod<PutUnknownValue204Response>;
}

export interface Routes {
  /** Resource for '/extensible-enums/string/known-value' has methods for the following verbs: get, put */
  (path: "/extensible-enums/string/known-value"): GetKnownValue;
  /** Resource for '/extensible-enums/string/unknown-value' has methods for the following verbs: get, put */
  (path: "/extensible-enums/string/unknown-value"): GetUnknownValue;
}

export type ExtensibleEnumsClient = Client & {
  path: Routes;
};
