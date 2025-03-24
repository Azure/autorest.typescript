// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChatMessageContentItemUnion,
  FunctionCallPreset,
  FunctionName,
  ChatCompletionsToolSelectionPreset,
  ChatCompletionsNamedToolSelectionUnion,
} from "./azure/openAI/models.js";

/** Alias for _ChatRequestUserMessageContent */
export type _ChatRequestUserMessageContent =
  | string
  | ChatMessageContentItemUnion[];

export function _chatRequestUserMessageContentSerializer(
  item: _ChatRequestUserMessageContent,
): any {
  return item;
}

/** Alias for _ChatCompletionsOptionsFunctionCall */
export type _ChatCompletionsOptionsFunctionCall =
  | FunctionCallPreset
  | FunctionName;

export function _chatCompletionsOptionsFunctionCallSerializer(
  item: _ChatCompletionsOptionsFunctionCall,
): any {
  return item;
}

/** Alias for _ChatCompletionsOptionsToolChoice */
export type _ChatCompletionsOptionsToolChoice =
  | ChatCompletionsToolSelectionPreset
  | ChatCompletionsNamedToolSelectionUnion;

export function _chatCompletionsOptionsToolChoiceSerializer(
  item: _ChatCompletionsOptionsToolChoice,
): any {
  return item;
}
