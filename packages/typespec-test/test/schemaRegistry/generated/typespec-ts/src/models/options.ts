// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface SchemaOperationsListSchemaGroupsOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-07-01";
}

export interface SchemaOperationsGetSchemaByIdOptions extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-07-01";
}

export interface SchemaOperationsListSchemaVersionsOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-07-01";
}

export interface SchemaOperationsGetSchemaByVersionOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-07-01";
}

export interface SchemaOperationsGetSchemaIdByContentOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-07-01";
}

export interface SchemaOperationsRegisterSchemaOptions
  extends OperationOptions {
  /** The API version to use for this operation. */
  apiVersion?: "2023-07-01";
}
