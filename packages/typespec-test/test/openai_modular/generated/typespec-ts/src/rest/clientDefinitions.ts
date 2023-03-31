// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetEmbeddingsParameters,
  GetCompletionsParameters,
} from "./parameters.js";
import {
  GetEmbeddings200Response,
  GetEmbeddingsDefaultResponse,
  GetCompletions200Response,
  GetCompletionsDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetEmbeddings {
  /** Return the embeddings for a given prompt. */
  post(
    options?: GetEmbeddingsParameters
  ): StreamableMethod<GetEmbeddings200Response | GetEmbeddingsDefaultResponse>;
}

export interface GetCompletions {
  /** Return the completions for a given prompt. */
  post(
    options?: GetCompletionsParameters
  ): StreamableMethod<
    GetCompletions200Response | GetCompletionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/deployments/\{deploymentId\}/embeddings' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/embeddings",
    deploymentId: string
  ): GetEmbeddings;
  /** Resource for '/deployments/\{deploymentId\}/completions' has methods for the following verbs: post */
  (
    path: "/deployments/{deploymentId}/completions",
    deploymentId: string
  ): GetCompletions;
}

export type OpenAIContext = Client & {
  path: Routes;
};
