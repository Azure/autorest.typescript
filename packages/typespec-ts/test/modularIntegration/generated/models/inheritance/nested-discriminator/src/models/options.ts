// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface GetModelOptions extends OperationOptions {}

export interface PutModelOptions extends OperationOptions {
  /** the discriminator possible values shark, salmon */
  kind?: string;
}

export interface GetRecursiveModelOptions extends OperationOptions {}

export interface PutRecursiveModelOptions extends OperationOptions {
  /** the discriminator possible values shark, salmon */
  kind?: string;
}

export interface GetMissingDiscriminatorOptions extends OperationOptions {}

export interface GetWrongDiscriminatorOptions extends OperationOptions {}
