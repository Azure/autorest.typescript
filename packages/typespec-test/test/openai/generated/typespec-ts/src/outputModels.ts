// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** A specific deployment */
export interface DeploymentOutput {
  /** deployment id of the deployed model */
  readonly deploymentId: string;
}

/** Expected response schema to embeddings request */
export interface EmbeddingsOutput {
  /** Type of the data field */
  object: "list";
  /** Embedding values for the prompts submitted in the request */
  data: Array<EmbeddingItemOutput>;
  /** ID of the model to use */
  model?: string;
  /** Usage counts for tokens input using the embeddings API */
  usage: EmbeddingsUsageOutput;
}

/** Expected response schema to embeddings object list item request */
export interface EmbeddingItemOutput {
  /** Name of the field in which the embedding is contained */
  object: "embedding";
  /** List of embeddings value for the input prompt. These represents a measurement of releated of text strings */
  embedding: number[];
  /** Index of the prompt to which the EmbeddingItem corresponds */
  index: number;
}

/** Measurment of the amount of tokens used in this request and response */
export interface EmbeddingsUsageOutput {
  /** Number of tokens sent in the original request */
  prompt_tokens: number;
  /** Total number of tokens transacted in this request/response */
  total_tokens: number;
}

/** Expected response schema to completion request */
export interface CompletionsOutput {
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
  /** Usage counts for tokens input using the completions API */
  usage: CompletionsUsageOutput;
}

/** Choice model within completion response */
export interface ChoiceOutput {
  /** Generated text for given completion prompt */
  text?: string;
  /** Index */
  index?: number;
  /** Log Prob Model */
  logprobs?: CompletionsLogProbsOutput;
  /** Reason for finishing */
  finish_reason?: string;
}

/** LogProbs model within completion choice */
export interface CompletionsLogProbsOutput {
  /** Tokens */
  tokens?: string[];
  /** LogProbs of Tokens */
  token_logprobs?: number[];
  /** Top LogProbs */
  top_logprobs?: Record<string, number>[];
  /** Text offset */
  text_offset?: number[];
}

/** Measurment of the amount of tokens used in this request and response */
export interface CompletionsUsageOutput {
  /** Number of tokens received in the completion */
  completion_token: number;
  /** Number of tokens sent in the original request */
  prompt_tokens: number;
  /** Total number of tokens transacted in this request/response */
  total_tokens: number;
}
