// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NoOperationParamsParameters,
  WithOperationPathParamParameters,
} from "./parameters.js";
import {
  NoOperationParams204Response,
  WithOperationPathParam204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface NoOperationParams {
  get(
    options?: NoOperationParamsParameters,
  ): StreamableMethod<NoOperationParams204Response>;
}

export interface WithOperationPathParam {
  get(
    options?: WithOperationPathParamParameters,
  ): StreamableMethod<WithOperationPathParam204Response>;
}

export interface Routes {
  /** Resource for '/' has methods for the following verbs: get */
  (path: "/"): NoOperationParams;
  /** Resource for '/\{keyword\}' has methods for the following verbs: get */
  (path: "/{keyword}", keyword: string): WithOperationPathParam;
}

export type MultipleContext = Client & {
  path: Routes;
};
