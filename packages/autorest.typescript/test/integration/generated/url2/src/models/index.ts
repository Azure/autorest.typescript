// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as coreClient from "@azure/core-client";

/** Optional parameters. */
export interface GetUrlOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the url operation. */
export type GetUrlResponse = {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface UrlClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
