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
