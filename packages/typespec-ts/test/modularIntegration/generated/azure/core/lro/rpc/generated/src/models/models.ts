// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GenerationOptions as GenerationOptionsRest } from "../rest/index.js";
import { ErrorModel } from "@azure-rest/core-client";
import { OperationStatus as CoreOperationStatus } from "@azure/core-lro";

/** Options for the generation. */
export interface GenerationOptions {
  /** Prompt. */
  prompt: string;
}

export function generationOptionsSerializer(
  item: GenerationOptions,
): GenerationOptionsRest {
  return {
    prompt: item["prompt"],
  };
}

/** Provides status details for long running operations. */
export interface GenerationResponse {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  status: CoreOperationStatus;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: GenerationResult;
}

/** Result of the generation. */
export interface GenerationResult {
  /** The data. */
  data: string;
}

/** The API version. */
export type Versions = "2022-12-01-preview";
