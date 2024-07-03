// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: GenerationResultOutput;
}

/** Result of the generation. */
export interface GenerationResultOutput {
  /** The data. */
  data: string;
}

/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
