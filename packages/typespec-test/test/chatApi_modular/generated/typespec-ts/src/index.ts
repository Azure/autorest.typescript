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
} from "./models/index.js";
export { ChatProtocolClientOptionalParams } from "./api/index.js";
export { GenericChatClient } from "./genericChat/genericChatClient.js";
export {
  GenericChatClientOptionalParams,
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./genericChat/api/index.js";
