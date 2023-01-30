// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface EmbeddingsHeaders {
  /** The ID of the end-user, for use in tracking and rate-limiting. */
  user?: string;
}

export interface EmbeddingsBodyParam {
  body?: {
    input_type: string;
    model: string;
    input: string | string[] | number[] | number[][];
  };
}

export interface EmbeddingsHeaderParam {
  headers?: RawHttpHeadersInput & EmbeddingsHeaders;
}

export type EmbeddingsParameters = EmbeddingsHeaderParam &
  EmbeddingsBodyParam &
  RequestParameters;

export interface CompletionsBodyParam {
  body?: {
    prompt: string | string[] | string[][];
    max_tokens: number;
    temperature: number;
    top_p: number;
    logit_bias: Record<string, number>;
    user: string;
    n: number;
    stream: boolean;
    logprobs: number;
    model: string;
    echo: boolean;
    stop: string | string[];
    completion_config: string;
    cache_level: number;
    presence_penalty: number;
    frequency_penalty: number;
    best_of: number;
  };
}

export type CompletionsParameters = CompletionsBodyParam & RequestParameters;
