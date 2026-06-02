// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { ChatProtocolClient } from "./chatProtocolClient.js";
export type {
  StreamingChatCompletionOptionsRecord,
  ChatMessage,
  ChatCompletionChunkRecord,
  ChoiceDeltaRecord,
  ChatMessageDelta,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
  ChatChoiceRecord,
  ChatRole,
  FinishReason,
} from "./models/index.js";
export { KnownAPIVersion } from "./models/index.js";
export type {
  ChatProtocolClientOptionalParams,
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./api/index.js";
export { RestError, isRestError } from "@azure/core-rest-pipeline";
