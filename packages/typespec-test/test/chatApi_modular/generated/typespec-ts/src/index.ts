// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  ChatProtocolClient,
  ChatProtocolClientOptions,
} from "./chatProtocolClient.js";
export {
  chatMessageSerializer,
  streamingChatCompletionOptionsRecordSerializer,
  chatCompletionOptionsRecordSerializer,
  ChatMessage,
  ChatRole,
  StreamingChatCompletionOptionsRecord,
  ChatCompletionChunkRecord,
  ChoiceDeltaRecord,
  ChatMessageDelta,
  FinishReason,
  ChatCompletionOptionsRecord,
  ChatCompletionRecord,
  ChatChoiceRecord,
  APIVersion,
  CreateStreamingOptionalParams,
  CreateOptionalParams,
} from "./models/index.js";
