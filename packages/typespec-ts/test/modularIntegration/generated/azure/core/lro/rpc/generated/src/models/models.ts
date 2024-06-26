// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Options for the generation. */
export interface GenerationOptions {
  /** Prompt. */
  prompt: string;
}

/** Result of the generation. */
export interface GenerationResult {
  /** The data. */
  data: string;
}

/** The API version. */
export type Versions = "2022-12-01-preview";
