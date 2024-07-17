// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface StringBodySendAsTextOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface StringBodyGetAsTextOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface StringBodySendAsJsonOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface StringBodyGetAsJsonOptionalParams extends OperationOptions {}
