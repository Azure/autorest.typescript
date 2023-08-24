// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PutEmptyParameters,
  GetEmptyParameters,
  PostRoundTripEmptyParameters,
} from "./parameters";
import {
  PutEmpty204Response,
  PutEmptyDefaultResponse,
  GetEmpty200Response,
  GetEmptyDefaultResponse,
  PostRoundTripEmpty200Response,
  PostRoundTripEmptyDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface PutEmpty {
  put(
    options: PutEmptyParameters
  ): StreamableMethod<PutEmpty204Response | PutEmptyDefaultResponse>;
  get(
    options?: GetEmptyParameters
  ): StreamableMethod<GetEmpty200Response | GetEmptyDefaultResponse>;
}

export interface PostRoundTripEmpty {
  post(
    options: PostRoundTripEmptyParameters
  ): StreamableMethod<
    PostRoundTripEmpty200Response | PostRoundTripEmptyDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/type/model/empty/alone' has methods for the following verbs: put, get */
  (path: "/type/model/empty/alone"): PutEmpty;
  /** Resource for '/type/model/empty/round-trip' has methods for the following verbs: post */
  (path: "/type/model/empty/round-trip"): PostRoundTripEmpty;
}

export type EmptyClient = Client & {
  path: Routes;
};
