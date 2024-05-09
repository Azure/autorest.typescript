// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface StringBodySendAsTextOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface StringBodyGetAsTextOptionalParams extends OperationOptions {}

export interface StringBodySendAsJsonOptionalParams extends OperationOptions {
  contentType?: string;
}

export interface StringBodyGetAsJsonOptionalParams extends OperationOptions {}
