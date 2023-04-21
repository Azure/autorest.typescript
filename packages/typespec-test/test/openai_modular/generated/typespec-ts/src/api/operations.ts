// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestOptions } from "../common/interfaces.js";
import { OpenAIContext as Client, isUnexpected } from "../rest/index.js";
import {
  Embeddings,
  Completions,
  ChatCompletions,
  ChatMessage,
} from "./models.js";

export interface GetEmbeddingsOptions extends RequestOptions {
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The model name to provide as part of this embeddings request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /** Accept header. */
  accept?: "application/json";
  /** Body parameter Content-Type. Known values are: application/json. */
  content_type?: string;
}

/** Return the embeddings for a given prompt. */
export async function getEmbeddings(
  context: Client,
  input: string | string[],
  deploymentId: string,
  options: GetEmbeddingsOptions = { requestOptions: {} }
): Promise<Embeddings> {
  const result = await context
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post({
      contentType: (options.content_type as any) ?? "application/json",
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        ...(options.user && { user: options.user }),
        ...(options.model && { model: options.model }),
        input: input,
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    data: (result.body["data"] ?? []).map((p) => ({
      embedding: p["embedding"],
      index: p["index"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export interface GetCompletionsOptions extends RequestOptions {
  /**
   * The prompts to generate completions from. Defaults to a single prompt of <|endoftext|> if not
   * otherwise specified.
   */
  prompt?: string[] | string;
  /** The maximum number of tokens to generate. */
  maxTokens?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  topP?: number;
  /**
   * A map between GPT token IDs and bias scores that influences the probability of specific tokens
   * appearing in a completions response. Token IDs are computed via external tokenizer tools, while
   * bias scores reside in the range of -100 to 100 with minimum and maximum values corresponding to
   * a full ban or exclusive selection of a token, respectively. The exact behavior of a given bias
   * score varies by model.
   */
  logitBias?: Record<string, number>;
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The number of completions choices that should be generated per provided prompt as part of an
   * overall completions response.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  n?: number;
  /**
   * A value that controls the emission of log probabilities for the provided number of most likely
   * tokens within a completions response.
   */
  logprobs?: number;
  /**
   * A value specifying whether completions responses should include input prompts as prefixes to
   * their generated output.
   */
  echo?: boolean;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   */
  presencePenalty?: number;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   */
  frequencyPenalty?: number;
  /**
   * A value that controls how many completions will be internally generated prior to response
   * formulation.
   * When used together with n, best_of controls the number of candidate completions and must be
   * greater than n.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  bestOf?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /**
   * The model name to provide as part of this completions request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /** Accept header. */
  accept?: "application/json";
  /** Body parameter Content-Type. Known values are: application/json. */
  content_type?: string;
}

/**
 * Gets completions for the provided input prompts.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getCompletions(
  context: Client,
  deploymentId: string,
  options: GetCompletionsOptions = { requestOptions: {} }
): Promise<Completions> {
  const result = await context
    .path("/deployments/{deploymentId}/completions", deploymentId)
    .post({
      contentType: (options.content_type as any) ?? "application/json",
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        ...(options.prompt && { prompt: options.prompt }),
        ...(options.maxTokens && { max_tokens: options.maxTokens }),
        ...(options.temperature && { temperature: options.temperature }),
        ...(options.topP && { top_p: options.topP }),
        ...(options.logitBias && { logit_bias: options.logitBias }),
        ...(options.user && { user: options.user }),
        ...(options.n && { n: options.n }),
        ...(options.logprobs && { logprobs: options.logprobs }),
        ...(options.echo && { echo: options.echo }),
        ...(options.stop && { stop: options.stop }),
        ...(options.presencePenalty && {
          presence_penalty: options.presencePenalty,
        }),
        ...(options.frequencyPenalty && {
          frequency_penalty: options.frequencyPenalty,
        }),
        ...(options.bestOf && { best_of: options.bestOf }),
        ...(options.stream && { stream: options.stream }),
        ...(options.model && { model: options.model }),
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    created: result.body["created"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      text: p["text"],
      index: p["index"],
      logprobs: !p.logprobs
        ? undefined
        : {
            tokens: p.logprobs?.["tokens"],
            tokenLogprobs: p.logprobs?.["token_logprobs"],
            topLogprobs: p.logprobs?.["top_logprobs"],
            textOffset: p.logprobs?.["text_offset"],
          },
      finishReason: p["finish_reason"],
    })),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export interface GetChatCompletionsOptions extends RequestOptions {
  /** The maximum number of tokens to generate. */
  maxTokens?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  topP?: number;
  /**
   * A map between GPT token IDs and bias scores that influences the probability of specific tokens
   * appearing in a completions response. Token IDs are computed via external tokenizer tools, while
   * bias scores reside in the range of -100 to 100 with minimum and maximum values corresponding to
   * a full ban or exclusive selection of a token, respectively. The exact behavior of a given bias
   * score varies by model.
   */
  logitBias?: Record<string, number>;
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The number of completions choices that should be generated per provided prompt as part of an
   * overall completions response.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  n?: number;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   */
  presencePenalty?: number;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   */
  frequencyPenalty?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /**
   * The model name to provide as part of this completions request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /** Accept header. */
  accept?: "application/json";
  /** Body parameter Content-Type. Known values are: application/json. */
  content_type?: string;
}

/**
 * Gets chat completions for the provided chat messages.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export async function getChatCompletions(
  context: Client,
  messages: ChatMessage[],
  deploymentId: string,
  options: GetChatCompletionsOptions = { requestOptions: {} }
): Promise<ChatCompletions> {
  const result = await context
    .path("/deployments/{deploymentId}/chat/completions", deploymentId)
    .post({
      contentType: (options.content_type as any) ?? "application/json",
      headers: {
        Accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: {
        messages: messages,
        ...(options.maxTokens && { max_tokens: options.maxTokens }),
        ...(options.temperature && { temperature: options.temperature }),
        ...(options.topP && { top_p: options.topP }),
        ...(options.logitBias && { logit_bias: options.logitBias }),
        ...(options.user && { user: options.user }),
        ...(options.n && { n: options.n }),
        ...(options.stop && { stop: options.stop }),
        ...(options.presencePenalty && {
          presence_penalty: options.presencePenalty,
        }),
        ...(options.frequencyPenalty && {
          frequency_penalty: options.frequencyPenalty,
        }),
        ...(options.stream && { stream: options.stream }),
        ...(options.model && { model: options.model }),
      },
    });
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    created: result.body["created"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      message: !p.message
        ? undefined
        : { role: p.message?.["role"], content: p.message?.["content"] },
      index: p["index"],
      finishReason: p["finish_reason"],
      delta: !p.delta
        ? undefined
        : { role: p.delta?.["role"], content: p.delta?.["content"] },
    })),
    usage: {
      completionTokens: result.body.usage["completion_tokens"],
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}
