// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ChatCompletionOptions,
  ChatMessage,
  StreamingChatCompletionOptions,
  ChatChoice,
  ChatCompletion,
  ChatMessageDelta,
  ChoiceDelta,
  ChatCompletionChunk,
} from "../models/models.js";
import {
  ChatCompletionOptions as RestChatCompletionOptions,
  ChatMessage as RestChatMessage,
  StreamingChatCompletionOptions as RestStreamingChatCompletionOptions,
  ChatChoiceOutput as RestChatChoice,
  ChatCompletionOutput as RestChatCompletion,
  ChatMessageDeltaOutput as RestChatMessageDelta,
  ChoiceDeltaOutput as RestChoiceDelta,
  ChatCompletionChunkOutput as RestChatCompletionChunk,
} from "../rest/index.js";

export function serializeChatCompletionOptions(
  o: ChatCompletionOptions,
): RestChatCompletionOptions {
  return {
    context: o["context"] === undefined ? o["context"] : FIXME,
    session_state: o["sessionState"] === undefined ? o["sessionState"] : FIXME,
    stream: o["stream"],
    messages: o["messages"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeChatMessage(o: ChatMessage): RestChatMessage {
  return {
    session_state: o["sessionState"] === undefined ? o["sessionState"] : FIXME,
    role: o["role"],
    content: o["content"],
  };
}

export function serializeStreamingChatCompletionOptions(
  o: StreamingChatCompletionOptions,
): RestStreamingChatCompletionOptions {
  return {
    context: o["context"] === undefined ? o["context"] : FIXME,
    session_state: o["sessionState"] === undefined ? o["sessionState"] : FIXME,
    stream: o["stream"],
    messages: o["messages"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeChatChoice(o: RestChatChoice): ChatChoice {
  return {
    finishReason: o["finish_reason"],
    context: o["context"] === undefined ? o["context"] : FIXME,
    sessionState: o["session_state"] === undefined ? o["session_state"] : FIXME,
    message: MISSING_DESERIALIZER(o["message"]),
    index: o["index"],
  };
}

export function deserializeChatCompletion(
  o: RestChatCompletion,
): ChatCompletion {
  return {
    choices: o["choices"].map((e: RestChatChoice) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeChatMessageDelta(
  o: RestChatMessageDelta,
): ChatMessageDelta {
  return {
    sessionState: o["session_state"] === undefined ? o["session_state"] : FIXME,
    role: o["role"],
    content: o["content"],
  };
}

export function deserializeChoiceDelta(o: RestChoiceDelta): ChoiceDelta {
  return {
    finishReason: o["finish_reason"],
    context: o["context"] === undefined ? o["context"] : FIXME,
    sessionState: o["session_state"] === undefined ? o["session_state"] : FIXME,
    delta: MISSING_SERIALIZER(o["delta"]),
    index: o["index"],
  };
}

export function deserializeChatCompletionChunk(
  o: RestChatCompletionChunk,
): ChatCompletionChunk {
  return {
    choices: o["choices"].map((e: RestChoiceDelta) => MISSING_SERIALIZER(e)),
  };
}
