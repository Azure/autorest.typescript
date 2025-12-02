// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureSearchDocumentsIndexesKnowledgeSourceKind } from "../indexes/models.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Base type for reasoning effort. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort {
  /** The kind of reasoning effort. */
  /** The discriminator possible values: minimal, low, medium, high */
  kind: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortKind;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort {
  return {
    kind: item["kind"],
  };
}

/** Alias for AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnion */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnion =

    | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffort
    | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffort
    | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffort
    | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffort
    | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort;

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnion,
): any {
  switch (item.kind) {
    case "minimal":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffortSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffort,
      );

    case "low":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffortSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffort,
      );

    case "medium":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffortSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffort,
      );

    case "high":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffortSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffort,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionSerializer(
        item,
      );
  }
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnion {
  switch (item.kind) {
    case "minimal":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffortDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffort,
      );

    case "low":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffortDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffort,
      );

    case "medium":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffortDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffort,
      );

    case "high":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffortDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffort,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionDeserializer(
        item,
      );
  }
}

/** The amount of effort to use during retrieval. */
export enum KnownAzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortKind {
  /** Does not perform any source selections, any query planning, or any iterative search. */
  Minimal = "minimal",
  /** Use low reasoning during retrieval. */
  Low = "low",
  /** Use a moderate amount of reasoning during retrieval. */
  Medium = "medium",
  /** Use a high amount of reasoning during retrieval. */
  High = "high",
}

/**
 * The amount of effort to use during retrieval. \
 * {@link KnownAzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortKind} can be used interchangeably with AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **minimal**: Does not perform any source selections, any query planning, or any iterative search. \
 * **low**: Use low reasoning during retrieval. \
 * **medium**: Use a moderate amount of reasoning during retrieval. \
 * **high**: Use a high amount of reasoning during retrieval.
 */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortKind =
  string;

/** Run knowledge retrieval with minimal reasoning effort. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffort
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort {
  /** The discriminator value. */
  kind: "minimal";
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffortSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffort,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffortDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMinimalReasoningEffort {
  return {
    kind: item["kind"],
  };
}

/** Run knowledge retrieval with low reasoning effort. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffort
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort {
  /** The discriminator value. */
  kind: "low";
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffortSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffort,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffortDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalLowReasoningEffort {
  return {
    kind: item["kind"],
  };
}

/** Run knowledge retrieval with medium reasoning effort. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffort
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort {
  /** The discriminator value. */
  kind: "medium";
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffortSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffort,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffortDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalMediumReasoningEffort {
  return {
    kind: item["kind"],
  };
}

/** Run knowledge retrieval with high reasoning effort. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffort
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffort {
  /** The discriminator value. */
  kind: "high";
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffortSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffort,
): any {
  return { kind: item["kind"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffortDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalHighReasoningEffort {
  return {
    kind: item["kind"],
  };
}

/** The output configuration for this retrieval. */
export enum KnownAzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode {
  /** Return data from the knowledge sources directly without generative alteration. */
  ExtractiveData = "extractiveData",
  /** Synthesize an answer for the response payload. */
  AnswerSynthesis = "answerSynthesis",
}

/**
 * The output configuration for this retrieval. \
 * {@link KnownAzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode} can be used interchangeably with AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **extractiveData**: Return data from the knowledge sources directly without generative alteration. \
 * **answerSynthesis**: Synthesize an answer for the response payload.
 */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode =
  string;

/** The input contract for the retrieval request. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRetrievalRequest {
  /** A list of chat message style input. */
  messages?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage[];
  /** A list of intended queries to execute without model query planning. */
  intents?: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnion[];
  /** The maximum runtime in seconds. */
  maxRuntimeInSeconds?: number;
  /** Limits the maximum size of the content in the output. */
  maxOutputSize?: number;
  /** The retrieval reasoning effort configuration. */
  retrievalReasoningEffort?: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnion;
  /** Indicates retrieval results should include activity information. */
  includeActivity?: boolean;
  /** The output configuration for this retrieval. */
  outputMode?: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalOutputMode;
  /** A list of runtime parameters for the knowledge sources. */
  knowledgeSourceParams?: AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnion[];
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseRetrievalRequestSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRetrievalRequest,
): any {
  return {
    messages: !item["messages"]
      ? item["messages"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageArraySerializer(
          item["messages"],
        ),
    intents: !item["intents"]
      ? item["intents"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnionArraySerializer(
          item["intents"],
        ),
    maxRuntimeInSeconds: item["maxRuntimeInSeconds"],
    maxOutputSize: item["maxOutputSize"],
    retrievalReasoningEffort: !item["retrievalReasoningEffort"]
      ? item["retrievalReasoningEffort"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionSerializer(
          item["retrievalReasoningEffort"],
        ),
    includeActivity: item["includeActivity"],
    outputMode: item["outputMode"],
    knowledgeSourceParams: !item["knowledgeSourceParams"]
      ? item["knowledgeSourceParams"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnionArraySerializer(
          item["knowledgeSourceParams"],
        ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageArraySerializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageArrayDeserializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageDeserializer(
      item,
    );
  });
}

/** The natural language message style object. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage {
  /** The role of the tool response. */
  role?: string;
  /** The content of the message. */
  content: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion[];
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage,
): any {
  return {
    role: item["role"],
    content:
      azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionArraySerializer(
        item["content"],
      ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage {
  return {
    role: item["role"],
    content:
      azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionArrayDeserializer(
        item["content"],
      ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionArraySerializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionSerializer(
      item,
    );
  });
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionDeserializer(
      item,
    );
  });
}

/** Specifies the type of the message content. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContent {
  /** The type of the message */
  /** The discriminator possible values: text, image */
  type: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentType;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContent,
): any {
  return { type: item["type"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContent {
  return {
    type: item["type"],
  };
}

/** Alias for AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion =
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContent
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContent
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContent;

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion,
): any {
  switch (item.type) {
    case "text":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContentSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContent,
      );

    case "image":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContentSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContent,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionSerializer(
        item,
      );
  }
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnion {
  switch (item.type) {
    case "text":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContentDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContent,
      );

    case "image":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContentDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContent,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentUnionDeserializer(
        item,
      );
  }
}

/** The type of message content. */
export enum KnownAzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentType {
  /** Text message content kind. */
  Text = "text",
  /** Image message content kind. */
  Image = "image",
}

/**
 * The type of message content. \
 * {@link KnownAzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentType} can be used interchangeably with AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **text**: Text message content kind. \
 * **image**: Image message content kind.
 */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContentType =
  string;

/** Text message type. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContent
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContent {
  /** The discriminator value. */
  type: "text";
  /** The text content. */
  text: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContentSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContent,
): any {
  return { type: item["type"], text: item["text"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContentDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageTextContent {
  return {
    type: item["type"],
    text: item["text"],
  };
}

/** Image message type. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContent
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageContent {
  /** The discriminator value. */
  type: "image";
  /** The image content. */
  image: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContent;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContentSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContent,
): any {
  return {
    type: item["type"],
    image: azureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContentSerializer(
      item["image"],
    ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContentDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageImageContent {
  return {
    type: item["type"],
    image:
      azureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContentDeserializer(
        item["image"],
      ),
  };
}

/** Image content. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContent {
  /** The url of the image. */
  url: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContentSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContent,
): any {
  return { url: item["url"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContentDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseImageContent {
  return {
    url: item["url"],
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnionArraySerializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnionSerializer(
      item,
    );
  });
}

/** An intended query to execute without model query planning. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntent {
  /** The type of the intent. */
  /** The discriminator possible values: semantic */
  type: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentType;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntent,
): any {
  return { type: item["type"] };
}

/** Alias for AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnion */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnion =
  | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalSemanticIntent
  | AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntent;

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnionSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnion,
): any {
  switch (item.type) {
    case "semantic":
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalSemanticIntentSerializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalSemanticIntent,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentUnionSerializer(
        item,
      );
  }
}

/** The kind of knowledge base configuration to use. */
export enum KnownAzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentType {
  /** A natural language semantic query intent. */
  Semantic = "semantic",
}

/**
 * The kind of knowledge base configuration to use. \
 * {@link KnownAzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentType} can be used interchangeably with AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **semantic**: A natural language semantic query intent.
 */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntentType =
  string;

/** A semantic query intent. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalSemanticIntent
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalIntent {
  /** The discriminator value. */
  type: "semantic";
  /** The semantic query to execute */
  search: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalSemanticIntentSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalSemanticIntent,
): any {
  return { type: item["type"], search: item["search"] };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnionArraySerializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnionSerializer(
      item,
    );
  });
}

/** Base type for knowledge source runtime parameters. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The name of the index the params apply to. */
  knowledgeSourceName: string;
  /** Indicates whether references should be included for data retrieved from this source. */
  includeReferences?: boolean;
  /** Indicates whether references should include the structured data obtained during retrieval in their payload. */
  includeReferenceSourceData?: boolean;
  /** Indicates that this knowledge source should bypass source selection and always be queried at retrieval time. */
  alwaysQuerySource?: boolean;
  /** The reranker threshold all retrieved documents must meet to be included in the response. */
  rerankerThreshold?: number;
  /** The type of the knowledge source. */
  /** The discriminator possible values: searchIndex, azureBlob, indexedSharePoint, indexedOneLake, web, remoteSharePoint */
  kind: AzureSearchDocumentsIndexesKnowledgeSourceKind;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
  };
}

/** Alias for AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnion */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnion =
  | AzureSearchDocumentsKnowledgeBaseSearchIndexKnowledgeSourceParams
  | AzureSearchDocumentsKnowledgeBaseAzureBlobKnowledgeSourceParams
  | AzureSearchDocumentsKnowledgeBaseIndexedSharePointKnowledgeSourceParams
  | AzureSearchDocumentsKnowledgeBaseIndexedOneLakeKnowledgeSourceParams
  | AzureSearchDocumentsKnowledgeBaseWebKnowledgeSourceParams
  | AzureSearchDocumentsKnowledgeBaseRemoteSharePointKnowledgeSourceParams
  | AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams;

export function azureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnionSerializer(
  item: AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnion,
): any {
  switch (item.kind) {
    case "searchIndex":
      return azureSearchDocumentsKnowledgeBaseSearchIndexKnowledgeSourceParamsSerializer(
        item as AzureSearchDocumentsKnowledgeBaseSearchIndexKnowledgeSourceParams,
      );

    case "azureBlob":
      return azureSearchDocumentsKnowledgeBaseAzureBlobKnowledgeSourceParamsSerializer(
        item as AzureSearchDocumentsKnowledgeBaseAzureBlobKnowledgeSourceParams,
      );

    case "indexedSharePoint":
      return azureSearchDocumentsKnowledgeBaseIndexedSharePointKnowledgeSourceParamsSerializer(
        item as AzureSearchDocumentsKnowledgeBaseIndexedSharePointKnowledgeSourceParams,
      );

    case "indexedOneLake":
      return azureSearchDocumentsKnowledgeBaseIndexedOneLakeKnowledgeSourceParamsSerializer(
        item as AzureSearchDocumentsKnowledgeBaseIndexedOneLakeKnowledgeSourceParams,
      );

    case "web":
      return azureSearchDocumentsKnowledgeBaseWebKnowledgeSourceParamsSerializer(
        item as AzureSearchDocumentsKnowledgeBaseWebKnowledgeSourceParams,
      );

    case "remoteSharePoint":
      return azureSearchDocumentsKnowledgeBaseRemoteSharePointKnowledgeSourceParamsSerializer(
        item as AzureSearchDocumentsKnowledgeBaseRemoteSharePointKnowledgeSourceParams,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeSourceParamsUnionSerializer(
        item,
      );
  }
}

/** Specifies runtime parameters for a search index knowledge source */
export interface AzureSearchDocumentsKnowledgeBaseSearchIndexKnowledgeSourceParams
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The discriminator value. */
  kind: "searchIndex";
  /** A filter condition applied to the index (e.g., 'State eq VA'). */
  filterAddOn?: string;
}

export function azureSearchDocumentsKnowledgeBaseSearchIndexKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseSearchIndexKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
    filterAddOn: item["filterAddOn"],
  };
}

/** Specifies runtime parameters for a azure blob knowledge source */
export interface AzureSearchDocumentsKnowledgeBaseAzureBlobKnowledgeSourceParams
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The discriminator value. */
  kind: "azureBlob";
}

export function azureSearchDocumentsKnowledgeBaseAzureBlobKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseAzureBlobKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
  };
}

/** Specifies runtime parameters for a indexed SharePoint knowledge source */
export interface AzureSearchDocumentsKnowledgeBaseIndexedSharePointKnowledgeSourceParams
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The discriminator value. */
  kind: "indexedSharePoint";
}

export function azureSearchDocumentsKnowledgeBaseIndexedSharePointKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseIndexedSharePointKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
  };
}

/** Specifies runtime parameters for a indexed OneLake knowledge source */
export interface AzureSearchDocumentsKnowledgeBaseIndexedOneLakeKnowledgeSourceParams
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The discriminator value. */
  kind: "indexedOneLake";
}

export function azureSearchDocumentsKnowledgeBaseIndexedOneLakeKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseIndexedOneLakeKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
  };
}

/** Specifies runtime parameters for a web knowledge source */
export interface AzureSearchDocumentsKnowledgeBaseWebKnowledgeSourceParams
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The discriminator value. */
  kind: "web";
  /** The language of the web results. */
  language?: string;
  /** The market of the web results. */
  market?: string;
  /** The number of web results to return. */
  count?: number;
  /** The freshness of web results. */
  freshness?: string;
}

export function azureSearchDocumentsKnowledgeBaseWebKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseWebKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
    language: item["language"],
    market: item["market"],
    count: item["count"],
    freshness: item["freshness"],
  };
}

/** Specifies runtime parameters for a remote SharePoint knowledge source */
export interface AzureSearchDocumentsKnowledgeBaseRemoteSharePointKnowledgeSourceParams
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeSourceParams {
  /** The discriminator value. */
  kind: "remoteSharePoint";
  /** A filter condition applied to the SharePoint data source. It must be specified in the Keyword Query Language syntax. It will be combined as a conjunction with the filter expression specified in the knowledge source definition. */
  filterExpressionAddOn?: string;
}

export function azureSearchDocumentsKnowledgeBaseRemoteSharePointKnowledgeSourceParamsSerializer(
  item: AzureSearchDocumentsKnowledgeBaseRemoteSharePointKnowledgeSourceParams,
): any {
  return {
    knowledgeSourceName: item["knowledgeSourceName"],
    includeReferences: item["includeReferences"],
    includeReferenceSourceData: item["includeReferenceSourceData"],
    alwaysQuerySource: item["alwaysQuerySource"],
    rerankerThreshold: item["rerankerThreshold"],
    kind: item["kind"],
    filterExpressionAddOn: item["filterExpressionAddOn"],
  };
}

/** The output contract for the retrieval response. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRetrievalResponse {
  /** The response messages. */
  response?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseMessage[];
  /** The activity records for tracking progress and billing implications. */
  activity?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnion[];
  /** The references for the retrieval data used in the response. */
  references?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnion[];
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseRetrievalResponseDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRetrievalResponse {
  return {
    response: !item["response"]
      ? item["response"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseMessageArrayDeserializer(
          item["response"],
        ),
    activity: !item["activity"]
      ? item["activity"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnionArrayDeserializer(
          item["activity"],
        ),
    references: !item["references"]
      ? item["references"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnionArrayDeserializer(
          item["references"],
        ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnionDeserializer(
      item,
    );
  });
}

/** Base type for activity records. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecord {
  /** The ID of the activity record. */
  id: number;
  /** The type of the activity record. */
  /** The discriminator possible values: modelQueryPlanning, modelAnswerSynthesis, agenticReasoning */
  type: string;
  /** The elapsed time in milliseconds for the retrieval activity. */
  elapsedMs?: number;
  /** The error detail explaining why the operation failed. This property is only included when the activity does not succeed. */
  error?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetail;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecord {
  return {
    id: item["id"],
    type: item["type"],
    elapsedMs: item["elapsedMs"],
    error: !item["error"]
      ? item["error"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailDeserializer(
          item["error"],
        ),
  };
}

/** Alias for AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnion */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnion =
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelQueryPlanningActivityRecord
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelAnswerSynthesisActivityRecord
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAgenticReasoningActivityRecord
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecord;

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnionDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnion {
  switch (item.type) {
    case "modelQueryPlanning":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseModelQueryPlanningActivityRecordDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelQueryPlanningActivityRecord,
      );

    case "modelAnswerSynthesis":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseModelAnswerSynthesisActivityRecordDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelAnswerSynthesisActivityRecord,
      );

    case "agenticReasoning":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseAgenticReasoningActivityRecordDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAgenticReasoningActivityRecord,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecordUnionDeserializer(
        item,
      );
  }
}

/** The error details. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetail {
  /** The error code. */
  code?: string;
  /** The error message. */
  message?: string;
  /** The error target. */
  target?: string;
  /** The error details. */
  details?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetail[];
  /** The error additional info. */
  additionalInfo?: AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfo[];
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailArrayDeserializer(
          item["details"],
        ),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfoArrayDeserializer(
          item["additionalInfo"],
        ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailArrayDeserializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetail>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailDeserializer(
      item,
    );
  });
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfoArrayDeserializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfoDeserializer(
      item,
    );
  });
}

/** The resource management error additional info. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfo {
  /** The additional info type. */
  type?: string;
  /** The additional info. */
  info?: Record<string, string>;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfoDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** Represents an LLM query planning activity record. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelQueryPlanningActivityRecord
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecord {
  /** The discriminator value. */
  type: "modelQueryPlanning";
  /** The number of input tokens for the LLM query planning activity. */
  inputTokens?: number;
  /** The number of output tokens for the LLM query planning activity. */
  outputTokens?: number;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseModelQueryPlanningActivityRecordDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelQueryPlanningActivityRecord {
  return {
    id: item["id"],
    type: item["type"],
    elapsedMs: item["elapsedMs"],
    error: !item["error"]
      ? item["error"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailDeserializer(
          item["error"],
        ),
    inputTokens: item["inputTokens"],
    outputTokens: item["outputTokens"],
  };
}

/** Represents an LLM answer synthesis activity record. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelAnswerSynthesisActivityRecord
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecord {
  /** The discriminator value. */
  type: "modelAnswerSynthesis";
  /** The number of input tokens for the LLM answer synthesis activity. */
  inputTokens?: number;
  /** The number of output tokens for the LLM answer synthesis activity. */
  outputTokens?: number;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseModelAnswerSynthesisActivityRecordDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseModelAnswerSynthesisActivityRecord {
  return {
    id: item["id"],
    type: item["type"],
    elapsedMs: item["elapsedMs"],
    error: !item["error"]
      ? item["error"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailDeserializer(
          item["error"],
        ),
    inputTokens: item["inputTokens"],
    outputTokens: item["outputTokens"],
  };
}

/** Represents an agentic reasoning activity record. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAgenticReasoningActivityRecord
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseActivityRecord {
  /** The discriminator value. */
  type: "agenticReasoning";
  /** The number of input tokens for agentic reasoning. */
  reasoningTokens?: number;
  /** The retrieval reasoning effort configuration. */
  retrievalReasoningEffort?: AzureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnion;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseAgenticReasoningActivityRecordDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAgenticReasoningActivityRecord {
  return {
    id: item["id"],
    type: item["type"],
    elapsedMs: item["elapsedMs"],
    error: !item["error"]
      ? item["error"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeBaseErrorDetailDeserializer(
          item["error"],
        ),
    reasoningTokens: item["reasoningTokens"],
    retrievalReasoningEffort: !item["retrievalReasoningEffort"]
      ? item["retrievalReasoningEffort"]
      : azureSearchDocumentsKnowledgeBaseKnowledgeRetrievalReasoningEffortUnionDeserializer(
          item["retrievalReasoningEffort"],
        ),
  };
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnionArrayDeserializer(
  result: Array<AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnion>,
): any[] {
  return result.map((item) => {
    return azureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnionDeserializer(
      item,
    );
  });
}

/** Base type for references. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The type of the reference. */
  /** The discriminator possible values: searchIndex, azureBlob, indexedSharePoint, indexedOneLake, web, remoteSharePoint */
  type: string;
  /** The ID of the reference. */
  id: string;
  /** The source activity ID for the reference. */
  activitySource: number;
  /** The source data for the reference. */
  sourceData?: Record<string, string>;
  /** The reranker score for the document reference. */
  rerankerScore?: number;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
  };
}

/** Alias for AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnion */
export type AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnion =
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseSearchIndexReference
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAzureBlobReference
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedSharePointReference
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedOneLakeReference
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseWebReference
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRemoteSharePointReference
  | AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference;

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnionDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnion {
  switch (item.type) {
    case "searchIndex":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseSearchIndexReferenceDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseSearchIndexReference,
      );

    case "azureBlob":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseAzureBlobReferenceDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAzureBlobReference,
      );

    case "indexedSharePoint":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedSharePointReferenceDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedSharePointReference,
      );

    case "indexedOneLake":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedOneLakeReferenceDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedOneLakeReference,
      );

    case "web":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseWebReferenceDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseWebReference,
      );

    case "remoteSharePoint":
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseRemoteSharePointReferenceDeserializer(
        item as AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRemoteSharePointReference,
      );

    default:
      return azureSearchDocumentsKnowledgeBaseKnowledgeBaseReferenceUnionDeserializer(
        item,
      );
  }
}

/** Represents an Azure Search document reference. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseSearchIndexReference
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The discriminator value. */
  type: "searchIndex";
  /** The document key for the reference. */
  docKey?: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseSearchIndexReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseSearchIndexReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
    docKey: item["docKey"],
  };
}

/** Represents an Azure Blob Storage document reference. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAzureBlobReference
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The discriminator value. */
  type: "azureBlob";
  /** The blob URL for the reference. */
  blobUrl?: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseAzureBlobReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseAzureBlobReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
    blobUrl: item["blobUrl"],
  };
}

/** Represents an indexed SharePoint document reference. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedSharePointReference
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The discriminator value. */
  type: "indexedSharePoint";
  /** The document URL for the reference. */
  docUrl?: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedSharePointReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedSharePointReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
    docUrl: item["docUrl"],
  };
}

/** Represents an indexed OneLake document reference. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedOneLakeReference
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The discriminator value. */
  type: "indexedOneLake";
  /** The document URL for the reference. */
  docUrl?: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedOneLakeReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseIndexedOneLakeReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
    docUrl: item["docUrl"],
  };
}

/** Represents a web document reference. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseWebReference
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The discriminator value. */
  type: "web";
  /** The url the reference data originated from. */
  url: string;
  /** The title of the web document. */
  title?: string;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseWebReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseWebReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
    url: item["url"],
    title: item["title"],
  };
}

/** Represents a remote SharePoint document reference. */
export interface AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRemoteSharePointReference
  extends AzureSearchDocumentsKnowledgeBaseKnowledgeBaseReference {
  /** The discriminator value. */
  type: "remoteSharePoint";
  /** The url the reference data originated from. */
  webUrl: string;
  /** Information about the sensitivity label applied to the SharePoint document. */
  searchSensitivityLabelInfo?: AzureSearchDocumentsKnowledgeBaseSharePointSensitivityLabelInfo;
}

export function azureSearchDocumentsKnowledgeBaseKnowledgeBaseRemoteSharePointReferenceDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseKnowledgeBaseRemoteSharePointReference {
  return {
    type: item["type"],
    id: item["id"],
    activitySource: item["activitySource"],
    sourceData: item["sourceData"],
    rerankerScore: item["rerankerScore"],
    webUrl: item["webUrl"],
    searchSensitivityLabelInfo: !item["searchSensitivityLabelInfo"]
      ? item["searchSensitivityLabelInfo"]
      : azureSearchDocumentsKnowledgeBaseSharePointSensitivityLabelInfoDeserializer(
          item["searchSensitivityLabelInfo"],
        ),
  };
}

/** Information about the sensitivity label applied to a SharePoint document. */
export interface AzureSearchDocumentsKnowledgeBaseSharePointSensitivityLabelInfo {
  /** The display name for the sensitivity label. */
  displayName?: string;
  /** The ID of the sensitivity label. */
  sensitivityLabelId?: string;
  /** The tooltip that should be displayed for the label in a UI. */
  tooltip?: string;
  /** The priority in which the sensitivity label is applied. */
  priority?: number;
  /** The color that the UI should display for the label, if configured. */
  color?: string;
  /** Indicates whether the sensitivity label enforces encryption. */
  isEncrypted?: boolean;
}

export function azureSearchDocumentsKnowledgeBaseSharePointSensitivityLabelInfoDeserializer(
  item: any,
): AzureSearchDocumentsKnowledgeBaseSharePointSensitivityLabelInfo {
  return {
    displayName: item["displayName"],
    sensitivityLabelId: item["sensitivityLabelId"],
    tooltip: item["tooltip"],
    priority: item["priority"],
    color: item["color"],
    isEncrypted: item["isEncrypted"],
  };
}
