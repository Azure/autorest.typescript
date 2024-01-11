// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  RequestUnionBodyParameters,
  ResponseUnionBodyParameters,
} from "./parameters";
import {
  RequestUnionBody200Response,
  ResponseUnionBody200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface RequestUnionBody {
  post(
    options: RequestUnionBodyParameters,
  ): StreamableMethod<RequestUnionBody200Response>;
}

export interface ResponseUnionBody {
  get(
    options?: ResponseUnionBodyParameters,
  ): StreamableMethod<ResponseUnionBody200Response>;
}

export interface Routes {
  /** Resource for '/request-union-body' has methods for the following verbs: post */
  (path: "/request-union-body"): RequestUnionBody;
  /** Resource for '/response-union-body' has methods for the following verbs: get */
  (path: "/response-union-body"): ResponseUnionBody;
}

export type UnionBodyClient = Client & {
  path: Routes;
};
