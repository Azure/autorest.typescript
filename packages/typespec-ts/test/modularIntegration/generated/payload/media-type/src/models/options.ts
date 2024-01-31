// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface StringBodySendAsTextOptions extends OperationOptions {
  contentType?: string;
}

export interface StringBodyGetAsTextOptions extends OperationOptions {}

export interface StringBodySendAsJsonOptions extends OperationOptions {
  contentType?: string;
}

export interface StringBodyGetAsJsonOptions extends OperationOptions {}
