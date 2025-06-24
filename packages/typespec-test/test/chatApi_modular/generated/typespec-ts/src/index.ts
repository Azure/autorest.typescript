// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
export { ChatProtocolClient } from "./chatProtocolClient.js";
export {
  ChatProtocolClientOptionalParams,
  CreateOptionalParams,
  CreateStreamingOptionalParams,
} from "./api/index.js";
