// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** Details about a user. */
export interface UserOutput {
  /** The name of user. */
  readonly name: string;
  /** The role of user */
  role: string;
}

/** Provides status details for long running operations. */
export interface OperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: ExportedUserOutput;
}

/** The exported user data. */
export interface ExportedUserOutput {
  /** The name of user. */
  name: string;
  /** The exported URI. */
  resourceUri: string;
}
