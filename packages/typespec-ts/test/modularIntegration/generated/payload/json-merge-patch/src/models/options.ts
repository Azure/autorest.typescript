// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface CreateResourceOptions extends OperationOptions {}

export interface UpdateResourceOptions extends OperationOptions {
  contentType?: string;
}

export interface UpdateOptionalResourceOptions extends OperationOptions {
  contentType?: string;
}
