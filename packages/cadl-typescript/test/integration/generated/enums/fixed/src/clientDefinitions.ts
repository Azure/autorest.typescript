// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetKnownValueParameters,
  PutKnownValueParameters,
  PutUnknownValueParameters,
} from "./parameters";
import {
  GetKnownValue200Response,
  PutKnownValue204Response,
  PutUnknownValue204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetKnownValue {
  /** getKnownValue */
  get(
    options?: GetKnownValueParameters
  ): StreamableMethod<GetKnownValue200Response>;
  /** putKnownValue */
  put(
    options: PutKnownValueParameters
  ): StreamableMethod<PutKnownValue204Response>;
}

export interface PutUnknownValue {
  /** putUnknownValue */
  put(
    options: PutUnknownValueParameters
  ): StreamableMethod<PutUnknownValue204Response>;
}

export interface Routes {
  /** Resource for '/enums/fixed/string/known-value' has methods for the following verbs: get, put */
  (path: "/enums/fixed/string/known-value"): GetKnownValue;
  /** Resource for '/enums/fixed/string/unknown-value' has methods for the following verbs: put */
  (path: "/enums/fixed/string/unknown-value"): PutUnknownValue;
}

export type EnumsFixedClient = Client & {
  path: Routes;
};
