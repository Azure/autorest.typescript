// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface GetAvatarAsPngOptions extends OperationOptions {
  contentType?: string;
}

export interface GetAvatarAsJpegOptions extends OperationOptions {
  contentType?: string;
}
