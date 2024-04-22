// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** Options for the generation. */
export interface GenerationOptionsOutput {
  /** Prompt. */
  prompt: string;
}

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

/** Enum describing allowed operation states. */
export type OperationStateOutput =
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Canceled";
