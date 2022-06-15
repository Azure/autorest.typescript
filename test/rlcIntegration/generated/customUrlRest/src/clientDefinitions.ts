// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetEmptyParameters } from "./parameters";
import { GetEmpty200Response, GetEmptydefaultResponse } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for Paths operations */
export interface PathsOperations {
  /** Get a 200 to test a valid base uri */
  getEmpty(
    options?: GetEmptyParameters
  ): StreamableMethod<GetEmpty200Response | GetEmptydefaultResponse>;
}

export interface GetEmpty {
  /** Get a 200 to test a valid base uri */
  get(
    options?: GetEmptyParameters
  ): StreamableMethod<GetEmpty200Response | GetEmptydefaultResponse>;
}

export interface Routes {
  /** Resource for '/customuri' has methods for the following verbs: get */
  (path: "/customuri"): GetEmpty;
}

export type CustomUrlRestClient = Client & {
  path: Routes;
  paths: PathsOperations;
};
