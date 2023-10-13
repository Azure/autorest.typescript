// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface CreateFileOptions extends OperationOptions {
  contentType?: string;
}
