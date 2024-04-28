// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";
import { OperationStatus as CoreOperationStatus } from "@azure/core-lro";

/** Details about a user. */
export interface User {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
}

/** The exported user data. */
export interface ExportedUser {
  /** The name of user. */
  name: string;
  /** The exported URI. */
  resourceUri: string;
}

/** The API version. */
/** */
export type Versions = "2022-12-01-preview";

export interface OperationStatus {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: CoreOperationStatus;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

export interface ErrorResponseUserUserExportParamsExportedUserError {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: CoreOperationStatus;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: ExportedUser;
}

/** Provides status details for long running operations. */
export interface OperationStatusExportedUserError {
  /** The unique ID of the operation. */
  id: string;
  /** The status of the operation */
  status: CoreOperationStatus;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: ExportedUser;
}
