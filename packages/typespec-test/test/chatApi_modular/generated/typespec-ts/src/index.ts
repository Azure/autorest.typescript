// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { ChatProtocolClient } from "./chatProtocolClient.js";
export type {
  StreamingChatCompletionOptionsRecord,
  ChatMessage,
  ChatRole,
  ChatCompletionChunkRecord,
  ChoiceDeltaRecord,
  ChatMessageDelta,
  FinishReason,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
  ChatChoiceRecord,
} from "./models/index.js";
export { KnownAPIVersion } from "./models/index.js";
export type {
  ChatProtocolClientOptionalParams,
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./api/index.js";
