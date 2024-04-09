// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface WithoutApiVersionOptionalParams extends OperationOptions {}

export interface WithQueryApiVersionOptionalParams extends OperationOptions {
  apiVersion?: string;
}

export interface WithPathApiVersionOptionalParams extends OperationOptions {}
