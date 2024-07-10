// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SameBodyGetAvatarAsPngOptionalParams extends OperationOptions {
  accept?: "image/png";
}

/** Optional parameters. */
export interface SameBodyGetAvatarAsJpegOptionalParams
  extends OperationOptions {
  accept?: "image/jpeg";
}

/** Optional parameters. */
export interface DifferentBodyGetAvatarAsPngOptionalParams
  extends OperationOptions {
  accept?: "image/png";
}

/** Optional parameters. */
export interface DifferentBodyGetAvatarAsJsonOptionalParams
  extends OperationOptions {
  accept?: "application/json";
}
