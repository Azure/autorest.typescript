// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** Details about a user. */
export interface User {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
}

/** */
export interface ResourceOperationStatus {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  status: OperationState;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: ExportedUser;
}

/** Enum describing allowed operation states. */
/** "InProgress", "Succeeded", "Failed", "Canceled" */
export type OperationState = string;

/** The exported user data. */
export interface ExportedUser {
  /** The name of user. */
  name: string;
  /** The exported URI. */
  resourceUri: string;
}
