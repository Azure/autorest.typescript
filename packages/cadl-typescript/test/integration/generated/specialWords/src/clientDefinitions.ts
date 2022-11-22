// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ForParameters,
  GetWithIfParameters,
  GetWithFilterParameters,
  GetParameters,
  PutParameters,
} from "./parameters";
import {
  For204Response,
  GetWithIf204Response,
  GetWithFilter204Response,
  Get200Response,
  Put204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface For {
  get(options?: ForParameters): StreamableMethod<For204Response>;
}

export interface GetWithIf {
  get(options: GetWithIfParameters): StreamableMethod<GetWithIf204Response>;
}

export interface GetWithFilter {
  get(
    options: GetWithFilterParameters
  ): StreamableMethod<GetWithFilter204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
}

export interface Put {
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Routes {
  /** Resource for '/special-words/operation/for' has methods for the following verbs: get */
  (path: "/special-words/operation/for"): For;
  /** Resource for '/special-words/parameter/if' has methods for the following verbs: get */
  (path: "/special-words/parameter/if"): GetWithIf;
  /** Resource for '/special-words/parameter/filter' has methods for the following verbs: get */
  (path: "/special-words/parameter/filter"): GetWithFilter;
  /** Resource for '/special-words/model/get' has methods for the following verbs: get */
  (path: "/special-words/model/get"): Get;
  /** Resource for '/special-words/model/put' has methods for the following verbs: put */
  (path: "/special-words/model/put"): Put;
}

export type SpecialWordsClient = Client & {
  path: Routes;
};
