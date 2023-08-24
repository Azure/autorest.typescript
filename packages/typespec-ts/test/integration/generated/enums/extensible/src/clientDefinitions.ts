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
  GetKnownValueDefaultResponse,
  PutKnownValue204Response,
  PutKnownValueDefaultResponse,
  GetUnknownValue200Response,
  GetUnknownValueDefaultResponse,
  PutUnknownValue204Response,
  PutUnknownValueDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetKnownValue {
  get(
    options?: GetKnownValueParameters
  ): StreamableMethod<GetKnownValue200Response | GetKnownValueDefaultResponse>;
  put(
    options: PutKnownValueParameters
  ): StreamableMethod<PutKnownValue204Response | PutKnownValueDefaultResponse>;
}

export interface GetUnknownValue {
  get(
    options?: GetUnknownValueParameters
  ): StreamableMethod<
    GetUnknownValue200Response | GetUnknownValueDefaultResponse
  >;
  put(
    options: PutUnknownValueParameters
  ): StreamableMethod<
    PutUnknownValue204Response | PutUnknownValueDefaultResponse
  >;
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
