// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringGetKnownValueParameters,
  StringPutKnownValueParameters,
  StringGetUnknownValueParameters,
  StringPutUnknownValueParameters,
} from "./parameters";
import {
  StringGetKnownValue200Response,
  StringPutKnownValue204Response,
  StringGetUnknownValue200Response,
  StringPutUnknownValue204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetKnownValue {
  get(
    options?: StringGetKnownValueParameters
  ): StreamableMethod<StringGetKnownValue200Response>;
  put(
    options: StringPutKnownValueParameters
  ): StreamableMethod<StringPutKnownValue204Response>;
}

export interface GetUnknownValue {
  get(
    options?: StringGetUnknownValueParameters
  ): StreamableMethod<StringGetUnknownValue200Response>;
  put(
    options: StringPutUnknownValueParameters
  ): StreamableMethod<StringPutUnknownValue204Response>;
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
