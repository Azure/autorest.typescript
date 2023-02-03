// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface EmbeddingsOutput {
  object: "list";
  data: Array<EmbeddingOutput>;
}

export interface EmbeddingOutput {
  object: "embedding";
  embedding: number[];
  index: number;
}

/** Expected response schema to completion request */
export interface CompletionOutput {
  /** Id for completion response */
  id?: string;
  /** Object for completion response */
  object: "text_completion";
  /** Created time for completion response */
  created?: number;
  /** Model used for completion response */
  model?: string;
  /** Array of choices returned containing text completions to prompts sent */
  choices?: Array<ChoiceOutput>;
}

/** Choice model within completion response */
export interface ChoiceOutput {
  /** Generated text for given completion prompt */
  text?: string;
  /** Index */
  index?: number;
  /** Log Prob Model */
  logprobs?: CompletionsLogProbsModelOutput;
  /** Reason for finishing */
  finish_reason?: string;
}

/** LogProbs model within completion choice */
export interface CompletionsLogProbsModelOutput {
  /** Tokens */
  tokens?: string[];
  /** LogProbs of Tokens */
  token_logprobs?: number[];
  /** Top LogProbs */
  top_logprobs?: Record<string, number>[];
  /** Text offset */
  text_offset?: number[];
}
