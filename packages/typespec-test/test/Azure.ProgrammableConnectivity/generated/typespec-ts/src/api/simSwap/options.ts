// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SimSwapVerifyOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}

/** Optional parameters. */
export interface SimSwapRetrieveOptionalParams extends OperationOptions {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  clientRequestId?: string;
}
