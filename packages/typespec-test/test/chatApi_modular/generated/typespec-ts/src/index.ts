// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { ChatProtocolClient } from "./chatProtocolClient.js";
export {
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
  KnownAPIVersion,
} from "./models/azure/ai/chatProtocol/index.js";
export {
  ChatProtocolClientOptionalParams,
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./api/index.js";
