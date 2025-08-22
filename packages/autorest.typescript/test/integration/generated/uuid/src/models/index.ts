// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface GetUuidOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the uuid operation. */
export type GetUuidResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface UuidClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
