// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface SameBodyGetAvatarAsPngOptionalParams extends OperationOptions {
  accept?: "image/png";
}

export interface SameBodyGetAvatarAsJpegOptionalParams
  extends OperationOptions {
  accept?: "image/jpeg";
}

export interface DifferentBodyGetAvatarAsPngOptionalParams
  extends OperationOptions {
  accept?: "image/png";
}

export interface DifferentBodyGetAvatarAsJsonOptionalParams
  extends OperationOptions {
  accept?: "application/json";
}
