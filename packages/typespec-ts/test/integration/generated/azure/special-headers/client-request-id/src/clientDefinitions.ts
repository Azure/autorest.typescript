// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetParameters } from "./parameters.js";
import { Get204Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** Get operation with azure `x-ms-client-request-id` header. */
  get(options?: GetParameters): StreamableMethod<Get204Response>;
}

export interface Routes {
  /** Resource for '/azure/special-headers/x-ms-client-request-id/' has methods for the following verbs: get */
  (path: "/azure/special-headers/x-ms-client-request-id/"): Get;
}

export type XmsClientRequestIdClient = Client & {
  path: Routes;
};
