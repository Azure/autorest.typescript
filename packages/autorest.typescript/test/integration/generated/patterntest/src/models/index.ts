// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";
import * as coreHttpCompat from "@azure/core-http-compat";

/** Optional parameters. */
export interface HomeOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the home operation. */
export type HomeResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface PatternTestClientOptionalParams
  extends coreHttpCompat.ExtendedServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
