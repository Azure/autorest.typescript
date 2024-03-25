// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface WithoutApiVersionOptions extends OperationOptions {}

export interface WithQueryApiVersionOptions extends OperationOptions {
  apiVersion?: string;
}

export interface WithPathApiVersionOptions extends OperationOptions {}
