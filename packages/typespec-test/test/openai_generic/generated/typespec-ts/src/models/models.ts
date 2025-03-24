// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChatCompletionFunctionCallOption } from "./openAI/models.js";

/** Alias for _CreateModerationRequestInput */
export type _CreateModerationRequestInput = string | string[];

export function _createModerationRequestInputSerializer(
  item: _CreateModerationRequestInput,
): any {
  return item;
}

/** Alias for _CreateEmbeddingRequestInput */
export type _CreateEmbeddingRequestInput =
  | string
  | string[]
  | number[]
  | number[][];

export function _createEmbeddingRequestInputSerializer(
  item: _CreateEmbeddingRequestInput,
): any {
  return item;
}

/** Alias for _CreateFineTuningJobRequestHyperparametersNEpochs */
export type _CreateFineTuningJobRequestHyperparametersNEpochs = "auto" | number;

export function _createFineTuningJobRequestHyperparametersNEpochsSerializer(
  item: _CreateFineTuningJobRequestHyperparametersNEpochs,
): any {
  return item;
}

/** Alias for _FineTuningJobHyperparametersNEpochs */
export type _FineTuningJobHyperparametersNEpochs = "auto" | number;

export function _fineTuningJobHyperparametersNEpochsDeserializer(
  item: any,
): _FineTuningJobHyperparametersNEpochs {
  return item;
}

/** Alias for _CreateChatCompletionRequestFunctionCall1 */
export type _CreateChatCompletionRequestFunctionCall1 =
  | "none"
  | "auto"
  | ChatCompletionFunctionCallOption;

export function _createChatCompletionRequestFunctionCall1Serializer(
  item: _CreateChatCompletionRequestFunctionCall1,
): any {
  return item;
}
