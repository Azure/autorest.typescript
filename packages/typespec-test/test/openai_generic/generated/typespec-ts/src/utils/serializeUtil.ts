// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  CreateModerationRequest,
  CreateModerationRequestModel,
  CreateModerationResponse,
  CreateModerationResponseResult,
  CreateModerationResponseResultCategories,
  CreateModerationResponseResultCategoryScores,
  ErrorResponse,
  Error,
  CreateImageRequest,
  CreateImageRequestSize,
  CreateImageRequestResponseFormat,
  ImagesResponse,
  Image,
  CreateImageEditRequest,
  CreateImageVariationRequest,
  ListModelsResponse,
  Model,
  DeleteModelResponse,
  CreateFineTuneRequest,
  CreateFineTuneRequestModel,
  FineTune,
  FineTuneStatus,
  FineTuneHyperparams,
  OpenAIFile,
  OpenAIFileStatus,
  FineTuneEvent,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
  ListFilesResponse,
  CreateFileRequest,
  DeleteFileResponse,
  CreateEmbeddingRequest,
  CreateEmbeddingRequestModel,
  CreateEmbeddingResponse,
  Embedding,
  CreateEmbeddingResponseUsage,
  CreateEditRequest,
  CreateEditRequestModel,
  CreateEditResponse,
  CreateEditResponseChoice,
  CreateEditResponseChoiceFinishReason,
  CompletionUsage,
  CreateCompletionRequestModel,
  CreateCompletionRequest,
  CreateCompletionResponse,
  CreateCompletionResponseChoice,
  CreateCompletionResponseChoiceLogprobs,
  CreateCompletionResponseChoiceFinishReason,
  CreateFineTuningJobRequest,
  CreateFineTuningJobRequestModel,
  CreateFineTuningJobRequestHyperparameters,
  FineTuningJob,
  FineTuningJobStatus,
  FineTuningJobHyperparameters,
  FineTuningJobError,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
  FineTuningJobEvent,
  FineTuningJobEventLevel,
  CreateChatCompletionRequestModel,
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRole,
  ChatCompletionRequestMessageFunctionCall,
  ChatCompletionFunctions,
  ChatCompletionFunctionParameters,
  ChatCompletionFunctionCallOption,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  CreateChatCompletionResponseChoice,
  ChatCompletionResponseMessage,
  ChatCompletionResponseMessageRole,
  ChatCompletionResponseMessageFunctionCall,
  CreateChatCompletionResponseChoiceFinishReason,
  CreateTranslationRequest,
  CreateTranslationRequestModel,
  CreateTranslationRequestResponseFormat,
  CreateTranslationResponse,
  CreateTranscriptionRequest,
  CreateTranscriptionRequestModel,
  CreateTranscriptionRequestResponseFormat,
  CreateTranscriptionResponse,
  CreateModerationRequestInput,
  CreateEmbeddingRequestInput,
  Prompt,
  Stop,
  CreateFineTuningJobRequestHyperparametersNEpochs,
  FineTuningJobHyperparametersNEpochs,
  CreateChatCompletionRequestFunctionCall,
} from "../models/models.js";
import {
  CreateModerationRequest as CreateModerationRequestRest,
  CreateModerationRequestModel as CreateModerationRequestModelRest,
  CreateModerationResponseOutput as CreateModerationResponseRest,
  CreateModerationResponseResultOutput as CreateModerationResponseResultRest,
  CreateModerationResponseResultCategoriesOutput as CreateModerationResponseResultCategoriesRest,
  CreateModerationResponseResultCategoryScoresOutput as CreateModerationResponseResultCategoryScoresRest,
  ErrorResponseOutput as ErrorResponseRest,
  ErrorOutput as ErrorRest,
  CreateImageRequest as CreateImageRequestRest,
  CreateImageRequestSize as CreateImageRequestSizeRest,
  CreateImageRequestResponseFormat as CreateImageRequestResponseFormatRest,
  ImagesResponseOutput as ImagesResponseRest,
  ImageOutput as ImageRest,
  CreateImageEditRequest as CreateImageEditRequestRest,
  CreateImageVariationRequest as CreateImageVariationRequestRest,
  ListModelsResponseOutput as ListModelsResponseRest,
  ModelOutput as ModelRest,
  DeleteModelResponseOutput as DeleteModelResponseRest,
  CreateFineTuneRequest as CreateFineTuneRequestRest,
  CreateFineTuneRequestModel as CreateFineTuneRequestModelRest,
  FineTuneOutput as FineTuneRest,
  FineTuneStatusOutput as FineTuneStatusRest,
  FineTuneHyperparamsOutput as FineTuneHyperparamsRest,
  OpenAIFileOutput as OpenAIFileRest,
  OpenAIFileStatusOutput as OpenAIFileStatusRest,
  FineTuneEventOutput as FineTuneEventRest,
  ListFineTunesResponseOutput as ListFineTunesResponseRest,
  ListFineTuneEventsResponseOutput as ListFineTuneEventsResponseRest,
  ListFilesResponseOutput as ListFilesResponseRest,
  CreateFileRequest as CreateFileRequestRest,
  DeleteFileResponseOutput as DeleteFileResponseRest,
  CreateEmbeddingRequest as CreateEmbeddingRequestRest,
  CreateEmbeddingRequestModel as CreateEmbeddingRequestModelRest,
  CreateEmbeddingResponseOutput as CreateEmbeddingResponseRest,
  EmbeddingOutput as EmbeddingRest,
  CreateEmbeddingResponseUsageOutput as CreateEmbeddingResponseUsageRest,
  CreateEditRequest as CreateEditRequestRest,
  CreateEditRequestModel as CreateEditRequestModelRest,
  CreateEditResponseOutput as CreateEditResponseRest,
  CreateEditResponseChoiceOutput as CreateEditResponseChoiceRest,
  CreateEditResponseChoiceFinishReasonOutput as CreateEditResponseChoiceFinishReasonRest,
  CompletionUsageOutput as CompletionUsageRest,
  CreateCompletionRequestModel as CreateCompletionRequestModelRest,
  CreateCompletionRequest as CreateCompletionRequestRest,
  CreateCompletionResponseOutput as CreateCompletionResponseRest,
  CreateCompletionResponseChoiceOutput as CreateCompletionResponseChoiceRest,
  CreateCompletionResponseChoiceLogprobsOutput as CreateCompletionResponseChoiceLogprobsRest,
  CreateCompletionResponseChoiceFinishReasonOutput as CreateCompletionResponseChoiceFinishReasonRest,
  CreateFineTuningJobRequest as CreateFineTuningJobRequestRest,
  CreateFineTuningJobRequestModel as CreateFineTuningJobRequestModelRest,
  CreateFineTuningJobRequestHyperparameters as CreateFineTuningJobRequestHyperparametersRest,
  FineTuningJobOutput as FineTuningJobRest,
  FineTuningJobStatusOutput as FineTuningJobStatusRest,
  FineTuningJobHyperparametersOutput as FineTuningJobHyperparametersRest,
  FineTuningJobErrorOutput as FineTuningJobErrorRest,
  ListPaginatedFineTuningJobsResponseOutput as ListPaginatedFineTuningJobsResponseRest,
  ListFineTuningJobEventsResponseOutput as ListFineTuningJobEventsResponseRest,
  FineTuningJobEventOutput as FineTuningJobEventRest,
  FineTuningJobEventLevelOutput as FineTuningJobEventLevelRest,
  CreateChatCompletionRequestModel as CreateChatCompletionRequestModelRest,
  ChatCompletionRequestMessage as ChatCompletionRequestMessageRest,
  ChatCompletionRequestMessageRole as ChatCompletionRequestMessageRoleRest,
  ChatCompletionRequestMessageFunctionCall as ChatCompletionRequestMessageFunctionCallRest,
  ChatCompletionFunctions as ChatCompletionFunctionsRest,
  ChatCompletionFunctionParameters as ChatCompletionFunctionParametersRest,
  ChatCompletionFunctionCallOption as ChatCompletionFunctionCallOptionRest,
  CreateChatCompletionRequest as CreateChatCompletionRequestRest,
  CreateChatCompletionResponseOutput as CreateChatCompletionResponseRest,
  CreateChatCompletionResponseChoiceOutput as CreateChatCompletionResponseChoiceRest,
  ChatCompletionResponseMessageOutput as ChatCompletionResponseMessageRest,
  ChatCompletionResponseMessageRoleOutput as ChatCompletionResponseMessageRoleRest,
  ChatCompletionResponseMessageFunctionCallOutput as ChatCompletionResponseMessageFunctionCallRest,
  CreateChatCompletionResponseChoiceFinishReasonOutput as CreateChatCompletionResponseChoiceFinishReasonRest,
  CreateTranslationRequest as CreateTranslationRequestRest,
  CreateTranslationRequestModel as CreateTranslationRequestModelRest,
  CreateTranslationRequestResponseFormat as CreateTranslationRequestResponseFormatRest,
  CreateTranslationResponseOutput as CreateTranslationResponseRest,
  CreateTranscriptionRequest as CreateTranscriptionRequestRest,
  CreateTranscriptionRequestModel as CreateTranscriptionRequestModelRest,
  CreateTranscriptionRequestResponseFormat as CreateTranscriptionRequestResponseFormatRest,
  CreateTranscriptionResponseOutput as CreateTranscriptionResponseRest,
} from "../rest/index.js";

export function serializeCreateModerationRequest(
  o: CreateModerationRequest,
): CreateModerationRequestRest {
  return {
    ...o,
    input: serializeCreateModerationRequestInput(o["input"]),
    ...(o["model"] === undefined
      ? {}
      : { model: serializeCreateModerationRequestModel(o["model"]) }),
  };
}

export function deserializeCreateModerationRequest(
  o: CreateModerationRequestRest,
): CreateModerationRequest {
  return {
    ...o,
    input: deserializeCreateModerationRequestInput(o["input"]),
    ...(o["model"] === undefined
      ? {}
      : { model: deserializeCreateModerationRequestModel(o["model"]) }),
  };
}

export function serializeCreateModerationRequestModel(o: any): any {
  return o;
}

export function deserializeCreateModerationRequestModel(o: any): any {
  return o;
}

export function serializeCreateModerationResponse(
  o: CreateModerationResponse,
): CreateModerationResponseRest {
  return {
    ...o,
    id: o["id"],
    model: o["model"],
    results: o["results"].map((e) =>
      serializeCreateModerationResponseResult(e),
    ),
  };
}

export function deserializeCreateModerationResponse(
  o: CreateModerationResponseRest,
): CreateModerationResponse {
  return {
    ...o,
    id: o["id"],
    model: o["model"],
    results: o["results"].map((e) =>
      deserializeCreateModerationResponseResult(e),
    ),
  };
}

export function serializeCreateModerationResponseResult(o: any): any {
  return {
    ...o,
    flagged: o["flagged"],
    categories: serializeCreateModerationResponseResultCategories(
      o["categories"],
    ),
    category_scores: serializeCreateModerationResponseResultCategoryScores(
      o["category_scores"],
    ),
  };
}

export function deserializeCreateModerationResponseResult(o: any): any {
  return {
    ...o,
    flagged: o["flagged"],
    categories: deserializeCreateModerationResponseResultCategories(
      o["categories"],
    ),
    category_scores: deserializeCreateModerationResponseResultCategoryScores(
      o["category_scores"],
    ),
  };
}

export function serializeCreateModerationResponseResultCategories(o: any): any {
  return {
    ...o,
    hate: o["hate"],
    "hate/threatening": o["hate/threatening"],
    harassment: o["harassment"],
    "harassment/threatening": o["harassment/threatening"],
    "self-harm": o["self-harm"],
    "self-harm/intent": o["self-harm/intent"],
    "self-harm/instructive": o["self-harm/instructive"],
    sexual: o["sexual"],
    "sexual/minors": o["sexual/minors"],
    violence: o["violence"],
    "violence/graphic": o["violence/graphic"],
  };
}

export function deserializeCreateModerationResponseResultCategories(
  o: any,
): any {
  return {
    ...o,
    hate: o["hate"],
    "hate/threatening": o["hate/threatening"],
    harassment: o["harassment"],
    "harassment/threatening": o["harassment/threatening"],
    "self-harm": o["self-harm"],
    "self-harm/intent": o["self-harm/intent"],
    "self-harm/instructive": o["self-harm/instructive"],
    sexual: o["sexual"],
    "sexual/minors": o["sexual/minors"],
    violence: o["violence"],
    "violence/graphic": o["violence/graphic"],
  };
}

export function serializeCreateModerationResponseResultCategoryScores(
  o: any,
): any {
  return {
    ...o,
    hate: o["hate"],
    "hate/threatening": o["hate/threatening"],
    harassment: o["harassment"],
    "harassment/threatening": o["harassment/threatening"],
    "self-harm": o["self-harm"],
    "self-harm/intent": o["self-harm/intent"],
    "self-harm/instructive": o["self-harm/instructive"],
    sexual: o["sexual"],
    "sexual/minors": o["sexual/minors"],
    violence: o["violence"],
    "violence/graphic": o["violence/graphic"],
  };
}

export function deserializeCreateModerationResponseResultCategoryScores(
  o: any,
): any {
  return {
    ...o,
    hate: o["hate"],
    "hate/threatening": o["hate/threatening"],
    harassment: o["harassment"],
    "harassment/threatening": o["harassment/threatening"],
    "self-harm": o["self-harm"],
    "self-harm/intent": o["self-harm/intent"],
    "self-harm/instructive": o["self-harm/instructive"],
    sexual: o["sexual"],
    "sexual/minors": o["sexual/minors"],
    violence: o["violence"],
    "violence/graphic": o["violence/graphic"],
  };
}

export function serializeErrorResponse(o: ErrorResponse): ErrorResponseRest {
  return { ...o, error: serializeError(o["error"]) };
}

export function deserializeErrorResponse(o: ErrorResponseRest): ErrorResponse {
  return { ...o, error: deserializeError(o["error"]) };
}

export function serializeError(o: Error): ErrorRest {
  return {
    ...o,
    type: o["type"],
    message: o["message"],
    param: o["param"] === null ? o["param"] : o["param"],
    code: o["code"] === null ? o["code"] : o["code"],
  };
}

export function deserializeError(o: ErrorRest): Error {
  return {
    ...o,
    type: o["type"],
    message: o["message"],
    param: o["param"] === null ? o["param"] : o["param"],
    code: o["code"] === null ? o["code"] : o["code"],
  };
}

export function serializeCreateImageRequest(
  o: CreateImageRequest,
): CreateImageRequestRest {
  return {
    ...o,
    prompt: o["prompt"],
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : {
          size:
            o["size"] === null
              ? o["size"]
              : serializeCreateImageRequestSize(o["size"]),
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format:
            o["response_format"] === null
              ? o["response_format"]
              : serializeCreateImageRequestResponseFormat(o["response_format"]),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function deserializeCreateImageRequest(
  o: CreateImageRequestRest,
): CreateImageRequest {
  return {
    ...o,
    prompt: o["prompt"],
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : {
          size:
            o["size"] === null
              ? o["size"]
              : deserializeCreateImageRequestSize(o["size"]),
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format:
            o["response_format"] === null
              ? o["response_format"]
              : deserializeCreateImageRequestResponseFormat(
                  o["response_format"],
                ),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function serializeCreateImageRequestSize(o: any): any {
  return o;
}

export function deserializeCreateImageRequestSize(o: any): any {
  return o;
}

export function serializeCreateImageRequestResponseFormat(o: any): any {
  return o;
}

export function deserializeCreateImageRequestResponseFormat(o: any): any {
  return o;
}

export function serializeImagesResponse(o: ImagesResponse): ImagesResponseRest {
  return {
    ...o,
    created: o["created"].getTime(),
    data: o["data"].map((e) => serializeImage(e)),
  };
}

export function deserializeImagesResponse(
  o: ImagesResponseRest,
): ImagesResponse {
  return {
    ...o,
    created: new Date(o["created"]),
    data: o["data"].map((e) => deserializeImage(e)),
  };
}

export function serializeImage(o: Image): ImageRest {
  return {
    ...o,
    ...(o["url"] === undefined ? {} : { url: o["url"] }),
    ...(o["b64_json"] === undefined
      ? {}
      : { b64_json: uint8ArrayToString(o["b64_json"], "base64") }),
  };
}

export function deserializeImage(o: ImageRest): Image {
  return {
    ...o,
    ...(o["url"] === undefined ? {} : { url: o["url"] }),
    ...(o["b64_json"] === undefined
      ? {}
      : {
          b64_json:
            typeof o["b64_json"] === "string"
              ? stringToUint8Array(o["b64_json"], "base64")
              : o["b64_json"],
        }),
  };
}

export function serializeCreateImageEditRequest(
  o: CreateImageEditRequest,
): CreateImageEditRequestRest {
  return {
    ...o,
    prompt: o["prompt"],
    image: uint8ArrayToString(o["image"], "base64"),
    ...(o["mask"] === undefined
      ? {}
      : { mask: uint8ArrayToString(o["mask"], "base64") }),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : {
          size:
            o["size"] === null
              ? o["size"]
              : serializeCreateImageRequestSize(o["size"]),
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format:
            o["response_format"] === null
              ? o["response_format"]
              : serializeCreateImageRequestResponseFormat(o["response_format"]),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function deserializeCreateImageEditRequest(
  o: CreateImageEditRequestRest,
): CreateImageEditRequest {
  return {
    ...o,
    prompt: o["prompt"],
    image:
      typeof o["image"] === "string"
        ? stringToUint8Array(o["image"], "base64")
        : o["image"],
    ...(o["mask"] === undefined
      ? {}
      : {
          mask:
            typeof o["mask"] === "string"
              ? stringToUint8Array(o["mask"], "base64")
              : o["mask"],
        }),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : {
          size:
            o["size"] === null
              ? o["size"]
              : deserializeCreateImageRequestSize(o["size"]),
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format:
            o["response_format"] === null
              ? o["response_format"]
              : deserializeCreateImageRequestResponseFormat(
                  o["response_format"],
                ),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function serializeCreateImageVariationRequest(
  o: CreateImageVariationRequest,
): CreateImageVariationRequestRest {
  return {
    ...o,
    image: uint8ArrayToString(o["image"], "base64"),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : {
          size:
            o["size"] === null
              ? o["size"]
              : serializeCreateImageRequestSize(o["size"]),
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format:
            o["response_format"] === null
              ? o["response_format"]
              : serializeCreateImageRequestResponseFormat(o["response_format"]),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function deserializeCreateImageVariationRequest(
  o: CreateImageVariationRequestRest,
): CreateImageVariationRequest {
  return {
    ...o,
    image:
      typeof o["image"] === "string"
        ? stringToUint8Array(o["image"], "base64")
        : o["image"],
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["size"] === undefined
      ? {}
      : {
          size:
            o["size"] === null
              ? o["size"]
              : deserializeCreateImageRequestSize(o["size"]),
        }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format:
            o["response_format"] === null
              ? o["response_format"]
              : deserializeCreateImageRequestResponseFormat(
                  o["response_format"],
                ),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function serializeListModelsResponse(
  o: ListModelsResponse,
): ListModelsResponseRest {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => serializeModel(e)),
  };
}

export function deserializeListModelsResponse(
  o: ListModelsResponseRest,
): ListModelsResponse {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => deserializeModel(e)),
  };
}

export function serializeModel(o: Model): ModelRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created: o["created"].getTime(),
    owned_by: o["owned_by"],
  };
}

export function deserializeModel(o: ModelRest): Model {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created: new Date(o["created"]),
    owned_by: o["owned_by"],
  };
}

export function serializeDeleteModelResponse(
  o: DeleteModelResponse,
): DeleteModelResponseRest {
  return { ...o, id: o["id"], object: o["object"], deleted: o["deleted"] };
}

export function deserializeDeleteModelResponse(
  o: DeleteModelResponseRest,
): DeleteModelResponse {
  return { ...o, id: o["id"], object: o["object"], deleted: o["deleted"] };
}

export function serializeCreateFineTuneRequest(
  o: CreateFineTuneRequest,
): CreateFineTuneRequestRest {
  return {
    ...o,
    training_file: o["training_file"],
    ...(o["validation_file"] === undefined
      ? {}
      : {
          validation_file:
            o["validation_file"] === null
              ? o["validation_file"]
              : o["validation_file"],
        }),
    ...(o["model"] === undefined
      ? {}
      : {
          model:
            o["model"] === null
              ? o["model"]
              : serializeCreateFineTuneRequestModel(o["model"]),
        }),
    ...(o["n_epochs"] === undefined
      ? {}
      : { n_epochs: o["n_epochs"] === null ? o["n_epochs"] : o["n_epochs"] }),
    ...(o["batch_size"] === undefined
      ? {}
      : {
          batch_size:
            o["batch_size"] === null ? o["batch_size"] : o["batch_size"],
        }),
    ...(o["learning_rate_multiplier"] === undefined
      ? {}
      : {
          learning_rate_multiplier:
            o["learning_rate_multiplier"] === null
              ? o["learning_rate_multiplier"]
              : o["learning_rate_multiplier"],
        }),
    ...(o["prompt_loss_rate"] === undefined
      ? {}
      : {
          prompt_loss_rate:
            o["prompt_loss_rate"] === null
              ? o["prompt_loss_rate"]
              : o["prompt_loss_rate"],
        }),
    ...(o["compute_classification_metrics"] === undefined
      ? {}
      : {
          compute_classification_metrics:
            o["compute_classification_metrics"] === null
              ? o["compute_classification_metrics"]
              : o["compute_classification_metrics"],
        }),
    ...(o["classification_n_classes"] === undefined
      ? {}
      : {
          classification_n_classes:
            o["classification_n_classes"] === null
              ? o["classification_n_classes"]
              : o["classification_n_classes"],
        }),
    ...(o["classification_positive_class"] === undefined
      ? {}
      : {
          classification_positive_class:
            o["classification_positive_class"] === null
              ? o["classification_positive_class"]
              : o["classification_positive_class"],
        }),
    ...(o["classification_betas"] === undefined
      ? {}
      : {
          classification_betas:
            o["classification_betas"] === null
              ? o["classification_betas"]
              : o["classification_betas"],
        }),
    ...(o["suffix"] === undefined
      ? {}
      : { suffix: o["suffix"] === null ? o["suffix"] : o["suffix"] }),
  };
}

export function deserializeCreateFineTuneRequest(
  o: CreateFineTuneRequestRest,
): CreateFineTuneRequest {
  return {
    ...o,
    training_file: o["training_file"],
    ...(o["validation_file"] === undefined
      ? {}
      : {
          validation_file:
            o["validation_file"] === null
              ? o["validation_file"]
              : o["validation_file"],
        }),
    ...(o["model"] === undefined
      ? {}
      : {
          model:
            o["model"] === null
              ? o["model"]
              : deserializeCreateFineTuneRequestModel(o["model"]),
        }),
    ...(o["n_epochs"] === undefined
      ? {}
      : { n_epochs: o["n_epochs"] === null ? o["n_epochs"] : o["n_epochs"] }),
    ...(o["batch_size"] === undefined
      ? {}
      : {
          batch_size:
            o["batch_size"] === null ? o["batch_size"] : o["batch_size"],
        }),
    ...(o["learning_rate_multiplier"] === undefined
      ? {}
      : {
          learning_rate_multiplier:
            o["learning_rate_multiplier"] === null
              ? o["learning_rate_multiplier"]
              : o["learning_rate_multiplier"],
        }),
    ...(o["prompt_loss_rate"] === undefined
      ? {}
      : {
          prompt_loss_rate:
            o["prompt_loss_rate"] === null
              ? o["prompt_loss_rate"]
              : o["prompt_loss_rate"],
        }),
    ...(o["compute_classification_metrics"] === undefined
      ? {}
      : {
          compute_classification_metrics:
            o["compute_classification_metrics"] === null
              ? o["compute_classification_metrics"]
              : o["compute_classification_metrics"],
        }),
    ...(o["classification_n_classes"] === undefined
      ? {}
      : {
          classification_n_classes:
            o["classification_n_classes"] === null
              ? o["classification_n_classes"]
              : o["classification_n_classes"],
        }),
    ...(o["classification_positive_class"] === undefined
      ? {}
      : {
          classification_positive_class:
            o["classification_positive_class"] === null
              ? o["classification_positive_class"]
              : o["classification_positive_class"],
        }),
    ...(o["classification_betas"] === undefined
      ? {}
      : {
          classification_betas:
            o["classification_betas"] === null
              ? o["classification_betas"]
              : o["classification_betas"],
        }),
    ...(o["suffix"] === undefined
      ? {}
      : { suffix: o["suffix"] === null ? o["suffix"] : o["suffix"] }),
  };
}

export function serializeCreateFineTuneRequestModel(o: any): any {
  return o;
}

export function deserializeCreateFineTuneRequestModel(o: any): any {
  return o;
}

export function serializeFineTune(o: FineTune): FineTuneRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created_at: o["created_at"].getTime(),
    updated_at: o["updated_at"].getTime(),
    model: o["model"],
    fine_tuned_model:
      o["fine_tuned_model"] === null
        ? o["fine_tuned_model"]
        : o["fine_tuned_model"],
    organization_id: o["organization_id"],
    status: serializeFineTuneStatus(o["status"]),
    hyperparams: serializeFineTuneHyperparams(o["hyperparams"]),
    training_files: o["training_files"].map((e) => serializeOpenAIFile(e)),
    validation_files: o["validation_files"].map((e) => serializeOpenAIFile(e)),
    result_files: o["result_files"].map((e) => serializeOpenAIFile(e)),
    ...(o["events"] === undefined
      ? {}
      : { events: o["events"].map((e) => serializeFineTuneEvent(e)) }),
  };
}

export function deserializeFineTune(o: FineTuneRest): FineTune {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created_at: new Date(o["created_at"]),
    updated_at: new Date(o["updated_at"]),
    model: o["model"],
    fine_tuned_model:
      o["fine_tuned_model"] === null
        ? o["fine_tuned_model"]
        : o["fine_tuned_model"],
    organization_id: o["organization_id"],
    status: deserializeFineTuneStatus(o["status"]),
    hyperparams: deserializeFineTuneHyperparams(o["hyperparams"]),
    training_files: o["training_files"].map((e) => deserializeOpenAIFile(e)),
    validation_files: o["validation_files"].map((e) =>
      deserializeOpenAIFile(e),
    ),
    result_files: o["result_files"].map((e) => deserializeOpenAIFile(e)),
    ...(o["events"] === undefined
      ? {}
      : { events: o["events"].map((e) => deserializeFineTuneEvent(e)) }),
  };
}

export function serializeFineTuneStatus(o: any): any {
  return o;
}

export function deserializeFineTuneStatus(o: any): any {
  return o;
}

export function serializeFineTuneHyperparams(o: any): any {
  return {
    ...o,
    n_epochs: o["n_epochs"],
    batch_size: o["batch_size"],
    prompt_loss_weight: o["prompt_loss_weight"],
    learning_rate_multiplier: o["learning_rate_multiplier"],
    ...(o["compute_classification_metrics"] === undefined
      ? {}
      : {
          compute_classification_metrics: o["compute_classification_metrics"],
        }),
    ...(o["classification_positive_class"] === undefined
      ? {}
      : { classification_positive_class: o["classification_positive_class"] }),
    ...(o["classification_n_classes"] === undefined
      ? {}
      : { classification_n_classes: o["classification_n_classes"] }),
  };
}

export function deserializeFineTuneHyperparams(o: any): any {
  return {
    ...o,
    n_epochs: o["n_epochs"],
    batch_size: o["batch_size"],
    prompt_loss_weight: o["prompt_loss_weight"],
    learning_rate_multiplier: o["learning_rate_multiplier"],
    ...(o["compute_classification_metrics"] === undefined
      ? {}
      : {
          compute_classification_metrics: o["compute_classification_metrics"],
        }),
    ...(o["classification_positive_class"] === undefined
      ? {}
      : { classification_positive_class: o["classification_positive_class"] }),
    ...(o["classification_n_classes"] === undefined
      ? {}
      : { classification_n_classes: o["classification_n_classes"] }),
  };
}

export function serializeOpenAIFile(o: OpenAIFile): OpenAIFileRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    bytes: o["bytes"],
    createdAt: o["createdAt"].getTime(),
    filename: o["filename"],
    purpose: o["purpose"],
    status: serializeOpenAIFileStatus(o["status"]),
    ...(o["status_details"] === undefined
      ? {}
      : {
          status_details:
            o["status_details"] === null
              ? o["status_details"]
              : o["status_details"],
        }),
  };
}

export function deserializeOpenAIFile(o: OpenAIFileRest): OpenAIFile {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    bytes: o["bytes"],
    createdAt: new Date(o["createdAt"]),
    filename: o["filename"],
    purpose: o["purpose"],
    status: deserializeOpenAIFileStatus(o["status"]),
    ...(o["status_details"] === undefined
      ? {}
      : {
          status_details:
            o["status_details"] === null
              ? o["status_details"]
              : o["status_details"],
        }),
  };
}

export function serializeOpenAIFileStatus(o: any): any {
  return o;
}

export function deserializeOpenAIFileStatus(o: any): any {
  return o;
}

export function serializeFineTuneEvent(o: FineTuneEvent): FineTuneEventRest {
  return {
    ...o,
    object: o["object"],
    created_at: o["created_at"].getTime(),
    level: o["level"],
    message: o["message"],
  };
}

export function deserializeFineTuneEvent(o: FineTuneEventRest): FineTuneEvent {
  return {
    ...o,
    object: o["object"],
    created_at: new Date(o["created_at"]),
    level: o["level"],
    message: o["message"],
  };
}

export function serializeListFineTunesResponse(
  o: ListFineTunesResponse,
): ListFineTunesResponseRest {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => serializeFineTune(e)),
  };
}

export function deserializeListFineTunesResponse(
  o: ListFineTunesResponseRest,
): ListFineTunesResponse {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => deserializeFineTune(e)),
  };
}

export function serializeListFineTuneEventsResponse(
  o: ListFineTuneEventsResponse,
): ListFineTuneEventsResponseRest {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => serializeFineTuneEvent(e)),
  };
}

export function deserializeListFineTuneEventsResponse(
  o: ListFineTuneEventsResponseRest,
): ListFineTuneEventsResponse {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => deserializeFineTuneEvent(e)),
  };
}

export function serializeListFilesResponse(
  o: ListFilesResponse,
): ListFilesResponseRest {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => serializeOpenAIFile(e)),
  };
}

export function deserializeListFilesResponse(
  o: ListFilesResponseRest,
): ListFilesResponse {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => deserializeOpenAIFile(e)),
  };
}

export function serializeCreateFileRequest(
  o: CreateFileRequest,
): CreateFileRequestRest {
  return {
    ...o,
    file: uint8ArrayToString(o["file"], "base64"),
    purpose: o["purpose"],
  };
}

export function deserializeCreateFileRequest(
  o: CreateFileRequestRest,
): CreateFileRequest {
  return {
    ...o,
    file:
      typeof o["file"] === "string"
        ? stringToUint8Array(o["file"], "base64")
        : o["file"],
    purpose: o["purpose"],
  };
}

export function serializeDeleteFileResponse(
  o: DeleteFileResponse,
): DeleteFileResponseRest {
  return { ...o, id: o["id"], object: o["object"], deleted: o["deleted"] };
}

export function deserializeDeleteFileResponse(
  o: DeleteFileResponseRest,
): DeleteFileResponse {
  return { ...o, id: o["id"], object: o["object"], deleted: o["deleted"] };
}

export function serializeCreateEmbeddingRequest(
  o: CreateEmbeddingRequest,
): CreateEmbeddingRequestRest {
  return {
    ...o,
    model: serializeCreateEmbeddingRequestModel(o["model"]),
    input: serializeCreateEmbeddingRequestInput(o["input"]),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function deserializeCreateEmbeddingRequest(
  o: CreateEmbeddingRequestRest,
): CreateEmbeddingRequest {
  return {
    ...o,
    model: deserializeCreateEmbeddingRequestModel(o["model"]),
    input: deserializeCreateEmbeddingRequestInput(o["input"]),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
  };
}

export function serializeCreateEmbeddingRequestModel(o: any): any {
  return o;
}

export function deserializeCreateEmbeddingRequestModel(o: any): any {
  return o;
}

export function serializeCreateEmbeddingResponse(
  o: CreateEmbeddingResponse,
): CreateEmbeddingResponseRest {
  return {
    ...o,
    object: o["object"],
    model: o["model"],
    data: o["data"].map((e) => serializeEmbedding(e)),
    usage: serializeCreateEmbeddingResponseUsage(o["usage"]),
  };
}

export function deserializeCreateEmbeddingResponse(
  o: CreateEmbeddingResponseRest,
): CreateEmbeddingResponse {
  return {
    ...o,
    object: o["object"],
    model: o["model"],
    data: o["data"].map((e) => deserializeEmbedding(e)),
    usage: deserializeCreateEmbeddingResponseUsage(o["usage"]),
  };
}

export function serializeEmbedding(o: Embedding): EmbeddingRest {
  return {
    ...o,
    index: o["index"],
    object: o["object"],
    embedding: o["embedding"],
  };
}

export function deserializeEmbedding(o: EmbeddingRest): Embedding {
  return {
    ...o,
    index: o["index"],
    object: o["object"],
    embedding: o["embedding"],
  };
}

export function serializeCreateEmbeddingResponseUsage(o: any): any {
  return {
    ...o,
    prompt_tokens: o["prompt_tokens"],
    total_tokens: o["total_tokens"],
  };
}

export function deserializeCreateEmbeddingResponseUsage(o: any): any {
  return {
    ...o,
    prompt_tokens: o["prompt_tokens"],
    total_tokens: o["total_tokens"],
  };
}

export function serializeCreateEditRequest(
  o: CreateEditRequest,
): CreateEditRequestRest {
  return {
    ...o,
    model: serializeCreateEditRequestModel(o["model"]),
    ...(o["input"] === undefined
      ? {}
      : { input: o["input"] === null ? o["input"] : o["input"] }),
    instruction: o["instruction"],
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["temperature"] === undefined
      ? {}
      : {
          temperature:
            o["temperature"] === null ? o["temperature"] : o["temperature"],
        }),
    ...(o["top_p"] === undefined
      ? {}
      : { top_p: o["top_p"] === null ? o["top_p"] : o["top_p"] }),
  };
}

export function deserializeCreateEditRequest(
  o: CreateEditRequestRest,
): CreateEditRequest {
  return {
    ...o,
    model: deserializeCreateEditRequestModel(o["model"]),
    ...(o["input"] === undefined
      ? {}
      : { input: o["input"] === null ? o["input"] : o["input"] }),
    instruction: o["instruction"],
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["temperature"] === undefined
      ? {}
      : {
          temperature:
            o["temperature"] === null ? o["temperature"] : o["temperature"],
        }),
    ...(o["top_p"] === undefined
      ? {}
      : { top_p: o["top_p"] === null ? o["top_p"] : o["top_p"] }),
  };
}

export function serializeCreateEditRequestModel(o: any): any {
  return o;
}

export function deserializeCreateEditRequestModel(o: any): any {
  return o;
}

export function serializeCreateEditResponse(
  o: CreateEditResponse,
): CreateEditResponseRest {
  return {
    ...o,
    object: o["object"],
    created: o["created"].getTime(),
    choices: o["choices"].map((e) => serializeCreateEditResponseChoice(e)),
    usage: serializeCompletionUsage(o["usage"]),
  };
}

export function deserializeCreateEditResponse(
  o: CreateEditResponseRest,
): CreateEditResponse {
  return {
    ...o,
    object: o["object"],
    created: new Date(o["created"]),
    choices: o["choices"].map((e) => deserializeCreateEditResponseChoice(e)),
    usage: deserializeCompletionUsage(o["usage"]),
  };
}

export function serializeCreateEditResponseChoice(o: any): any {
  return {
    ...o,
    text: o["text"],
    index: o["index"],
    finish_reason: serializeCreateEditResponseChoiceFinishReason(
      o["finish_reason"],
    ),
  };
}

export function deserializeCreateEditResponseChoice(o: any): any {
  return {
    ...o,
    text: o["text"],
    index: o["index"],
    finish_reason: deserializeCreateEditResponseChoiceFinishReason(
      o["finish_reason"],
    ),
  };
}

export function serializeCreateEditResponseChoiceFinishReason(o: any): any {
  return o;
}

export function deserializeCreateEditResponseChoiceFinishReason(o: any): any {
  return o;
}

export function serializeCompletionUsage(
  o: CompletionUsage,
): CompletionUsageRest {
  return {
    ...o,
    prompt_tokens: o["prompt_tokens"],
    completion_tokens: o["completion_tokens"],
    total_tokens: o["total_tokens"],
  };
}

export function deserializeCompletionUsage(
  o: CompletionUsageRest,
): CompletionUsage {
  return {
    ...o,
    prompt_tokens: o["prompt_tokens"],
    completion_tokens: o["completion_tokens"],
    total_tokens: o["total_tokens"],
  };
}

export function serializeCreateCompletionRequestModel(o: any): any {
  return o;
}

export function deserializeCreateCompletionRequestModel(o: any): any {
  return o;
}

export function serializeCreateCompletionRequest(
  o: CreateCompletionRequest,
): CreateCompletionRequestRest {
  return {
    ...o,
    model: serializeCreateCompletionRequestModel(o["model"]),
    prompt: o["prompt"] === null ? o["prompt"] : serializePrompt(o["prompt"]),
    ...(o["suffix"] === undefined
      ? {}
      : { suffix: o["suffix"] === null ? o["suffix"] : o["suffix"] }),
    ...(o["temperature"] === undefined
      ? {}
      : {
          temperature:
            o["temperature"] === null ? o["temperature"] : o["temperature"],
        }),
    ...(o["top_p"] === undefined
      ? {}
      : { top_p: o["top_p"] === null ? o["top_p"] : o["top_p"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["max_tokens"] === undefined
      ? {}
      : {
          max_tokens:
            o["max_tokens"] === null ? o["max_tokens"] : o["max_tokens"],
        }),
    ...(o["stop"] === undefined
      ? {}
      : { stop: o["stop"] === null ? o["stop"] : serializeStop(o["stop"]) }),
    ...(o["presence_penalty"] === undefined
      ? {}
      : {
          presence_penalty:
            o["presence_penalty"] === null
              ? o["presence_penalty"]
              : o["presence_penalty"],
        }),
    ...(o["frequency_penalty"] === undefined
      ? {}
      : {
          frequency_penalty:
            o["frequency_penalty"] === null
              ? o["frequency_penalty"]
              : o["frequency_penalty"],
        }),
    ...(o["logit_bias"] === undefined
      ? {}
      : {
          logit_bias:
            o["logit_bias"] === null
              ? o["logit_bias"]
              : (() => {
                  throw Error("Not implemented.");
                })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["stream"] === undefined
      ? {}
      : { stream: o["stream"] === null ? o["stream"] : o["stream"] }),
    ...(o["logprobs"] === undefined
      ? {}
      : { logprobs: o["logprobs"] === null ? o["logprobs"] : o["logprobs"] }),
    ...(o["echo"] === undefined
      ? {}
      : { echo: o["echo"] === null ? o["echo"] : o["echo"] }),
    ...(o["best_of"] === undefined
      ? {}
      : { best_of: o["best_of"] === null ? o["best_of"] : o["best_of"] }),
  };
}

export function deserializeCreateCompletionRequest(
  o: CreateCompletionRequestRest,
): CreateCompletionRequest {
  return {
    ...o,
    model: deserializeCreateCompletionRequestModel(o["model"]),
    prompt: o["prompt"] === null ? o["prompt"] : deserializePrompt(o["prompt"]),
    ...(o["suffix"] === undefined
      ? {}
      : { suffix: o["suffix"] === null ? o["suffix"] : o["suffix"] }),
    ...(o["temperature"] === undefined
      ? {}
      : {
          temperature:
            o["temperature"] === null ? o["temperature"] : o["temperature"],
        }),
    ...(o["top_p"] === undefined
      ? {}
      : { top_p: o["top_p"] === null ? o["top_p"] : o["top_p"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["max_tokens"] === undefined
      ? {}
      : {
          max_tokens:
            o["max_tokens"] === null ? o["max_tokens"] : o["max_tokens"],
        }),
    ...(o["stop"] === undefined
      ? {}
      : { stop: o["stop"] === null ? o["stop"] : deserializeStop(o["stop"]) }),
    ...(o["presence_penalty"] === undefined
      ? {}
      : {
          presence_penalty:
            o["presence_penalty"] === null
              ? o["presence_penalty"]
              : o["presence_penalty"],
        }),
    ...(o["frequency_penalty"] === undefined
      ? {}
      : {
          frequency_penalty:
            o["frequency_penalty"] === null
              ? o["frequency_penalty"]
              : o["frequency_penalty"],
        }),
    ...(o["logit_bias"] === undefined
      ? {}
      : {
          logit_bias:
            o["logit_bias"] === null
              ? o["logit_bias"]
              : (() => {
                  throw Error("Not implemented.");
                })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["stream"] === undefined
      ? {}
      : { stream: o["stream"] === null ? o["stream"] : o["stream"] }),
    ...(o["logprobs"] === undefined
      ? {}
      : { logprobs: o["logprobs"] === null ? o["logprobs"] : o["logprobs"] }),
    ...(o["echo"] === undefined
      ? {}
      : { echo: o["echo"] === null ? o["echo"] : o["echo"] }),
    ...(o["best_of"] === undefined
      ? {}
      : { best_of: o["best_of"] === null ? o["best_of"] : o["best_of"] }),
  };
}

export function serializeCreateCompletionResponse(
  o: CreateCompletionResponse,
): CreateCompletionResponseRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created: o["created"].getTime(),
    model: o["model"],
    choices: o["choices"].map((e) =>
      serializeCreateCompletionResponseChoice(e),
    ),
    ...(o["usage"] === undefined
      ? {}
      : { usage: serializeCompletionUsage(o["usage"]) }),
  };
}

export function deserializeCreateCompletionResponse(
  o: CreateCompletionResponseRest,
): CreateCompletionResponse {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created: new Date(o["created"]),
    model: o["model"],
    choices: o["choices"].map((e) =>
      deserializeCreateCompletionResponseChoice(e),
    ),
    ...(o["usage"] === undefined
      ? {}
      : { usage: deserializeCompletionUsage(o["usage"]) }),
  };
}

export function serializeCreateCompletionResponseChoice(o: any): any {
  return {
    ...o,
    index: o["index"],
    text: o["text"],
    logprobs:
      o["logprobs"] === null
        ? o["logprobs"]
        : serializeCreateCompletionResponseChoiceLogprobs(o["logprobs"]),
    finish_reason: serializeCreateCompletionResponseChoiceFinishReason(
      o["finish_reason"],
    ),
  };
}

export function deserializeCreateCompletionResponseChoice(o: any): any {
  return {
    ...o,
    index: o["index"],
    text: o["text"],
    logprobs:
      o["logprobs"] === null
        ? o["logprobs"]
        : deserializeCreateCompletionResponseChoiceLogprobs(o["logprobs"]),
    finish_reason: deserializeCreateCompletionResponseChoiceFinishReason(
      o["finish_reason"],
    ),
  };
}

export function serializeCreateCompletionResponseChoiceLogprobs(o: any): any {
  return {
    ...o,
    tokens: o["tokens"],
    token_logprobs: o["token_logprobs"],
    top_logprobs: o["top_logprobs"].map((e: undefined) =>
      (() => {
        throw Error("Not implemented.");
      })(),
    ),
    text_offset: o["text_offset"],
  };
}

export function deserializeCreateCompletionResponseChoiceLogprobs(o: any): any {
  return {
    ...o,
    tokens: o["tokens"],
    token_logprobs: o["token_logprobs"],
    top_logprobs: o["top_logprobs"].map((e: undefined) =>
      (() => {
        throw Error("Not implemented.");
      })(),
    ),
    text_offset: o["text_offset"],
  };
}

export function serializeCreateCompletionResponseChoiceFinishReason(
  o: any,
): any {
  return o;
}

export function deserializeCreateCompletionResponseChoiceFinishReason(
  o: any,
): any {
  return o;
}

export function serializeCreateFineTuningJobRequest(
  o: CreateFineTuningJobRequest,
): CreateFineTuningJobRequestRest {
  return {
    ...o,
    training_file: o["training_file"],
    ...(o["validation_file"] === undefined
      ? {}
      : {
          validation_file:
            o["validation_file"] === null
              ? o["validation_file"]
              : o["validation_file"],
        }),
    model: serializeCreateFineTuningJobRequestModel(o["model"]),
    ...(o["hyperparameters"] === undefined
      ? {}
      : {
          hyperparameters: serializeCreateFineTuningJobRequestHyperparameters(
            o["hyperparameters"],
          ),
        }),
    ...(o["suffix"] === undefined
      ? {}
      : { suffix: o["suffix"] === null ? o["suffix"] : o["suffix"] }),
  };
}

export function deserializeCreateFineTuningJobRequest(
  o: CreateFineTuningJobRequestRest,
): CreateFineTuningJobRequest {
  return {
    ...o,
    training_file: o["training_file"],
    ...(o["validation_file"] === undefined
      ? {}
      : {
          validation_file:
            o["validation_file"] === null
              ? o["validation_file"]
              : o["validation_file"],
        }),
    model: deserializeCreateFineTuningJobRequestModel(o["model"]),
    ...(o["hyperparameters"] === undefined
      ? {}
      : {
          hyperparameters: deserializeCreateFineTuningJobRequestHyperparameters(
            o["hyperparameters"],
          ),
        }),
    ...(o["suffix"] === undefined
      ? {}
      : { suffix: o["suffix"] === null ? o["suffix"] : o["suffix"] }),
  };
}

export function serializeCreateFineTuningJobRequestModel(o: any): any {
  return o;
}

export function deserializeCreateFineTuningJobRequestModel(o: any): any {
  return o;
}

export function serializeCreateFineTuningJobRequestHyperparameters(
  o: any,
): any {
  return {
    ...o,
    ...(o["n_epochs"] === undefined
      ? {}
      : {
          n_epochs: serializeCreateFineTuningJobRequestHyperparametersNEpochs(
            o["n_epochs"],
          ),
        }),
  };
}

export function deserializeCreateFineTuningJobRequestHyperparameters(
  o: any,
): any {
  return {
    ...o,
    ...(o["n_epochs"] === undefined
      ? {}
      : {
          n_epochs: deserializeCreateFineTuningJobRequestHyperparametersNEpochs(
            o["n_epochs"],
          ),
        }),
  };
}

export function serializeFineTuningJob(o: FineTuningJob): FineTuningJobRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created_at: o["created_at"].getTime(),
    finished_at:
      o["finished_at"] === null ? o["finished_at"] : o["finished_at"].getTime(),
    model: o["model"],
    fine_tuned_model:
      o["fine_tuned_model"] === null
        ? o["fine_tuned_model"]
        : o["fine_tuned_model"],
    organization_id: o["organization_id"],
    status: serializeFineTuningJobStatus(o["status"]),
    hyperparameters: serializeFineTuningJobHyperparameters(
      o["hyperparameters"],
    ),
    training_file: o["training_file"],
    validation_file:
      o["validation_file"] === null
        ? o["validation_file"]
        : o["validation_file"],
    result_files: o["result_files"],
    trained_tokens:
      o["trained_tokens"] === null ? o["trained_tokens"] : o["trained_tokens"],
    error:
      o["error"] === null
        ? o["error"]
        : serializeFineTuningJobError(o["error"]),
  };
}

export function deserializeFineTuningJob(o: FineTuningJobRest): FineTuningJob {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created_at: new Date(o["created_at"]),
    finished_at:
      o["finished_at"] === null ? o["finished_at"] : new Date(o["finished_at"]),
    model: o["model"],
    fine_tuned_model:
      o["fine_tuned_model"] === null
        ? o["fine_tuned_model"]
        : o["fine_tuned_model"],
    organization_id: o["organization_id"],
    status: deserializeFineTuningJobStatus(o["status"]),
    hyperparameters: deserializeFineTuningJobHyperparameters(
      o["hyperparameters"],
    ),
    training_file: o["training_file"],
    validation_file:
      o["validation_file"] === null
        ? o["validation_file"]
        : o["validation_file"],
    result_files: o["result_files"],
    trained_tokens:
      o["trained_tokens"] === null ? o["trained_tokens"] : o["trained_tokens"],
    error:
      o["error"] === null
        ? o["error"]
        : deserializeFineTuningJobError(o["error"]),
  };
}

export function serializeFineTuningJobStatus(o: any): any {
  return o;
}

export function deserializeFineTuningJobStatus(o: any): any {
  return o;
}

export function serializeFineTuningJobHyperparameters(o: any): any {
  return {
    ...o,
    ...(o["n_epochs"] === undefined
      ? {}
      : {
          n_epochs: serializeFineTuningJobHyperparametersNEpochs(o["n_epochs"]),
        }),
  };
}

export function deserializeFineTuningJobHyperparameters(o: any): any {
  return {
    ...o,
    ...(o["n_epochs"] === undefined
      ? {}
      : {
          n_epochs: deserializeFineTuningJobHyperparametersNEpochs(
            o["n_epochs"],
          ),
        }),
  };
}

export function serializeFineTuningJobError(o: any): any {
  return {
    ...o,
    ...(o["message"] === undefined ? {} : { message: o["message"] }),
    ...(o["code"] === undefined ? {} : { code: o["code"] }),
    ...(o["param"] === undefined
      ? {}
      : { param: o["param"] === null ? o["param"] : o["param"] }),
  };
}

export function deserializeFineTuningJobError(o: any): any {
  return {
    ...o,
    ...(o["message"] === undefined ? {} : { message: o["message"] }),
    ...(o["code"] === undefined ? {} : { code: o["code"] }),
    ...(o["param"] === undefined
      ? {}
      : { param: o["param"] === null ? o["param"] : o["param"] }),
  };
}

export function serializeListPaginatedFineTuningJobsResponse(
  o: ListPaginatedFineTuningJobsResponse,
): ListPaginatedFineTuningJobsResponseRest {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => serializeFineTuningJob(e)),
    has_more: o["has_more"],
  };
}

export function deserializeListPaginatedFineTuningJobsResponse(
  o: ListPaginatedFineTuningJobsResponseRest,
): ListPaginatedFineTuningJobsResponse {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => deserializeFineTuningJob(e)),
    has_more: o["has_more"],
  };
}

export function serializeListFineTuningJobEventsResponse(
  o: ListFineTuningJobEventsResponse,
): ListFineTuningJobEventsResponseRest {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => serializeFineTuningJobEvent(e)),
  };
}

export function deserializeListFineTuningJobEventsResponse(
  o: ListFineTuningJobEventsResponseRest,
): ListFineTuningJobEventsResponse {
  return {
    ...o,
    object: o["object"],
    data: o["data"].map((e) => deserializeFineTuningJobEvent(e)),
  };
}

export function serializeFineTuningJobEvent(
  o: FineTuningJobEvent,
): FineTuningJobEventRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created_at: o["created_at"].getTime(),
    level: serializeFineTuningJobEventLevel(o["level"]),
    message: o["message"],
  };
}

export function deserializeFineTuningJobEvent(
  o: FineTuningJobEventRest,
): FineTuningJobEvent {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created_at: new Date(o["created_at"]),
    level: deserializeFineTuningJobEventLevel(o["level"]),
    message: o["message"],
  };
}

export function serializeFineTuningJobEventLevel(o: any): any {
  return o;
}

export function deserializeFineTuningJobEventLevel(o: any): any {
  return o;
}

export function serializeCreateChatCompletionRequestModel(o: any): any {
  return o;
}

export function deserializeCreateChatCompletionRequestModel(o: any): any {
  return o;
}

export function serializeChatCompletionRequestMessage(
  o: ChatCompletionRequestMessage,
): ChatCompletionRequestMessageRest {
  return {
    ...o,
    role: serializeChatCompletionRequestMessageRole(o["role"]),
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
    ...(o["function_call"] === undefined
      ? {}
      : {
          function_call: serializeChatCompletionRequestMessageFunctionCall(
            o["function_call"],
          ),
        }),
  };
}

export function deserializeChatCompletionRequestMessage(
  o: ChatCompletionRequestMessageRest,
): ChatCompletionRequestMessage {
  return {
    ...o,
    role: deserializeChatCompletionRequestMessageRole(o["role"]),
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["name"] === undefined ? {} : { name: o["name"] }),
    ...(o["function_call"] === undefined
      ? {}
      : {
          function_call: deserializeChatCompletionRequestMessageFunctionCall(
            o["function_call"],
          ),
        }),
  };
}

export function serializeChatCompletionRequestMessageRole(o: any): any {
  return o;
}

export function deserializeChatCompletionRequestMessageRole(o: any): any {
  return o;
}

export function serializeChatCompletionRequestMessageFunctionCall(o: any): any {
  return { ...o, name: o["name"], arguments: o["arguments"] };
}

export function deserializeChatCompletionRequestMessageFunctionCall(
  o: any,
): any {
  return { ...o, name: o["name"], arguments: o["arguments"] };
}

export function serializeChatCompletionFunctions(
  o: ChatCompletionFunctions,
): ChatCompletionFunctionsRest {
  return {
    ...o,
    name: o["name"],
    ...(o["description"] === undefined
      ? {}
      : { description: o["description"] }),
    parameters: serializeChatCompletionFunctionParameters(o["parameters"]),
  };
}

export function deserializeChatCompletionFunctions(
  o: ChatCompletionFunctionsRest,
): ChatCompletionFunctions {
  return {
    ...o,
    name: o["name"],
    ...(o["description"] === undefined
      ? {}
      : { description: o["description"] }),
    parameters: deserializeChatCompletionFunctionParameters(o["parameters"]),
  };
}

export function serializeChatCompletionFunctionParameters(
  o: ChatCompletionFunctionParameters,
): ChatCompletionFunctionParametersRest {
  return { ...o };
}

export function deserializeChatCompletionFunctionParameters(
  o: ChatCompletionFunctionParametersRest,
): ChatCompletionFunctionParameters {
  return { ...o };
}

export function serializeChatCompletionFunctionCallOption(
  o: ChatCompletionFunctionCallOption,
): ChatCompletionFunctionCallOptionRest {
  return { ...o, name: o["name"] };
}

export function deserializeChatCompletionFunctionCallOption(
  o: ChatCompletionFunctionCallOptionRest,
): ChatCompletionFunctionCallOption {
  return { ...o, name: o["name"] };
}

export function serializeCreateChatCompletionRequest(
  o: CreateChatCompletionRequest,
): CreateChatCompletionRequestRest {
  return {
    ...o,
    model: serializeCreateChatCompletionRequestModel(o["model"]),
    messages: o["messages"].map((e) =>
      serializeChatCompletionRequestMessage(e),
    ),
    ...(o["functions"] === undefined
      ? {}
      : {
          functions: o["functions"].map((e) =>
            serializeChatCompletionFunctions(e),
          ),
        }),
    ...(o["function_call"] === undefined
      ? {}
      : {
          function_call: serializeCreateChatCompletionRequestFunctionCall(
            o["function_call"],
          ),
        }),
    ...(o["temperature"] === undefined
      ? {}
      : {
          temperature:
            o["temperature"] === null ? o["temperature"] : o["temperature"],
        }),
    ...(o["top_p"] === undefined
      ? {}
      : { top_p: o["top_p"] === null ? o["top_p"] : o["top_p"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["max_tokens"] === undefined
      ? {}
      : {
          max_tokens:
            o["max_tokens"] === null ? o["max_tokens"] : o["max_tokens"],
        }),
    ...(o["stop"] === undefined
      ? {}
      : { stop: o["stop"] === null ? o["stop"] : serializeStop(o["stop"]) }),
    ...(o["presence_penalty"] === undefined
      ? {}
      : {
          presence_penalty:
            o["presence_penalty"] === null
              ? o["presence_penalty"]
              : o["presence_penalty"],
        }),
    ...(o["frequency_penalty"] === undefined
      ? {}
      : {
          frequency_penalty:
            o["frequency_penalty"] === null
              ? o["frequency_penalty"]
              : o["frequency_penalty"],
        }),
    ...(o["logit_bias"] === undefined
      ? {}
      : {
          logit_bias:
            o["logit_bias"] === null
              ? o["logit_bias"]
              : (() => {
                  throw Error("Not implemented.");
                })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["stream"] === undefined
      ? {}
      : { stream: o["stream"] === null ? o["stream"] : o["stream"] }),
  };
}

export function deserializeCreateChatCompletionRequest(
  o: CreateChatCompletionRequestRest,
): CreateChatCompletionRequest {
  return {
    ...o,
    model: deserializeCreateChatCompletionRequestModel(o["model"]),
    messages: o["messages"].map((e) =>
      deserializeChatCompletionRequestMessage(e),
    ),
    ...(o["functions"] === undefined
      ? {}
      : {
          functions: o["functions"].map((e) =>
            deserializeChatCompletionFunctions(e),
          ),
        }),
    ...(o["function_call"] === undefined
      ? {}
      : {
          function_call: deserializeCreateChatCompletionRequestFunctionCall(
            o["function_call"],
          ),
        }),
    ...(o["temperature"] === undefined
      ? {}
      : {
          temperature:
            o["temperature"] === null ? o["temperature"] : o["temperature"],
        }),
    ...(o["top_p"] === undefined
      ? {}
      : { top_p: o["top_p"] === null ? o["top_p"] : o["top_p"] }),
    ...(o["n"] === undefined ? {} : { n: o["n"] === null ? o["n"] : o["n"] }),
    ...(o["max_tokens"] === undefined
      ? {}
      : {
          max_tokens:
            o["max_tokens"] === null ? o["max_tokens"] : o["max_tokens"],
        }),
    ...(o["stop"] === undefined
      ? {}
      : { stop: o["stop"] === null ? o["stop"] : deserializeStop(o["stop"]) }),
    ...(o["presence_penalty"] === undefined
      ? {}
      : {
          presence_penalty:
            o["presence_penalty"] === null
              ? o["presence_penalty"]
              : o["presence_penalty"],
        }),
    ...(o["frequency_penalty"] === undefined
      ? {}
      : {
          frequency_penalty:
            o["frequency_penalty"] === null
              ? o["frequency_penalty"]
              : o["frequency_penalty"],
        }),
    ...(o["logit_bias"] === undefined
      ? {}
      : {
          logit_bias:
            o["logit_bias"] === null
              ? o["logit_bias"]
              : (() => {
                  throw Error("Not implemented.");
                })(),
        }),
    ...(o["user"] === undefined ? {} : { user: o["user"] }),
    ...(o["stream"] === undefined
      ? {}
      : { stream: o["stream"] === null ? o["stream"] : o["stream"] }),
  };
}

export function serializeCreateChatCompletionResponse(
  o: CreateChatCompletionResponse,
): CreateChatCompletionResponseRest {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created: o["created"].getTime(),
    model: o["model"],
    choices: o["choices"].map((e) =>
      serializeCreateChatCompletionResponseChoice(e),
    ),
    ...(o["usage"] === undefined
      ? {}
      : { usage: serializeCompletionUsage(o["usage"]) }),
  };
}

export function deserializeCreateChatCompletionResponse(
  o: CreateChatCompletionResponseRest,
): CreateChatCompletionResponse {
  return {
    ...o,
    id: o["id"],
    object: o["object"],
    created: new Date(o["created"]),
    model: o["model"],
    choices: o["choices"].map((e) =>
      deserializeCreateChatCompletionResponseChoice(e),
    ),
    ...(o["usage"] === undefined
      ? {}
      : { usage: deserializeCompletionUsage(o["usage"]) }),
  };
}

export function serializeCreateChatCompletionResponseChoice(o: any): any {
  return {
    ...o,
    index: o["index"],
    message: serializeChatCompletionResponseMessage(o["message"]),
    finish_reason: serializeCreateChatCompletionResponseChoiceFinishReason(
      o["finish_reason"],
    ),
  };
}

export function deserializeCreateChatCompletionResponseChoice(o: any): any {
  return {
    ...o,
    index: o["index"],
    message: deserializeChatCompletionResponseMessage(o["message"]),
    finish_reason: deserializeCreateChatCompletionResponseChoiceFinishReason(
      o["finish_reason"],
    ),
  };
}

export function serializeChatCompletionResponseMessage(
  o: ChatCompletionResponseMessage,
): ChatCompletionResponseMessageRest {
  return {
    ...o,
    role: serializeChatCompletionResponseMessageRole(o["role"]),
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["function_call"] === undefined
      ? {}
      : {
          function_call: serializeChatCompletionResponseMessageFunctionCall(
            o["function_call"],
          ),
        }),
  };
}

export function deserializeChatCompletionResponseMessage(
  o: ChatCompletionResponseMessageRest,
): ChatCompletionResponseMessage {
  return {
    ...o,
    role: deserializeChatCompletionResponseMessageRole(o["role"]),
    content: o["content"] === null ? o["content"] : o["content"],
    ...(o["function_call"] === undefined
      ? {}
      : {
          function_call: deserializeChatCompletionResponseMessageFunctionCall(
            o["function_call"],
          ),
        }),
  };
}

export function serializeChatCompletionResponseMessageRole(o: any): any {
  return o;
}

export function deserializeChatCompletionResponseMessageRole(o: any): any {
  return o;
}

export function serializeChatCompletionResponseMessageFunctionCall(
  o: any,
): any {
  return { ...o, name: o["name"], arguments: o["arguments"] };
}

export function deserializeChatCompletionResponseMessageFunctionCall(
  o: any,
): any {
  return { ...o, name: o["name"], arguments: o["arguments"] };
}

export function serializeCreateChatCompletionResponseChoiceFinishReason(
  o: any,
): any {
  return o;
}

export function deserializeCreateChatCompletionResponseChoiceFinishReason(
  o: any,
): any {
  return o;
}

export function serializeCreateTranslationRequest(
  o: CreateTranslationRequest,
): CreateTranslationRequestRest {
  return {
    ...o,
    file: uint8ArrayToString(o["file"], "base64"),
    model: serializeCreateTranslationRequestModel(o["model"]),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format: serializeCreateTranslationRequestResponseFormat(
            o["response_format"],
          ),
        }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
  };
}

export function deserializeCreateTranslationRequest(
  o: CreateTranslationRequestRest,
): CreateTranslationRequest {
  return {
    ...o,
    file:
      typeof o["file"] === "string"
        ? stringToUint8Array(o["file"], "base64")
        : o["file"],
    model: deserializeCreateTranslationRequestModel(o["model"]),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format: deserializeCreateTranslationRequestResponseFormat(
            o["response_format"],
          ),
        }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
  };
}

export function serializeCreateTranslationRequestModel(o: any): any {
  return o;
}

export function deserializeCreateTranslationRequestModel(o: any): any {
  return o;
}

export function serializeCreateTranslationRequestResponseFormat(o: any): any {
  return o;
}

export function deserializeCreateTranslationRequestResponseFormat(o: any): any {
  return o;
}

export function serializeCreateTranslationResponse(
  o: CreateTranslationResponse,
): CreateTranslationResponseRest {
  return { ...o, text: o["text"] };
}

export function deserializeCreateTranslationResponse(
  o: CreateTranslationResponseRest,
): CreateTranslationResponse {
  return { ...o, text: o["text"] };
}

export function serializeCreateTranscriptionRequest(
  o: CreateTranscriptionRequest,
): CreateTranscriptionRequestRest {
  return {
    ...o,
    file: uint8ArrayToString(o["file"], "base64"),
    model: serializeCreateTranscriptionRequestModel(o["model"]),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format: serializeCreateTranscriptionRequestResponseFormat(
            o["response_format"],
          ),
        }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
  };
}

export function deserializeCreateTranscriptionRequest(
  o: CreateTranscriptionRequestRest,
): CreateTranscriptionRequest {
  return {
    ...o,
    file:
      typeof o["file"] === "string"
        ? stringToUint8Array(o["file"], "base64")
        : o["file"],
    model: deserializeCreateTranscriptionRequestModel(o["model"]),
    ...(o["prompt"] === undefined ? {} : { prompt: o["prompt"] }),
    ...(o["response_format"] === undefined
      ? {}
      : {
          response_format: deserializeCreateTranscriptionRequestResponseFormat(
            o["response_format"],
          ),
        }),
    ...(o["temperature"] === undefined
      ? {}
      : { temperature: o["temperature"] }),
    ...(o["language"] === undefined ? {} : { language: o["language"] }),
  };
}

export function serializeCreateTranscriptionRequestModel(o: any): any {
  return o;
}

export function deserializeCreateTranscriptionRequestModel(o: any): any {
  return o;
}

export function serializeCreateTranscriptionRequestResponseFormat(o: any): any {
  return o;
}

export function deserializeCreateTranscriptionRequestResponseFormat(
  o: any,
): any {
  return o;
}

export function serializeCreateTranscriptionResponse(
  o: CreateTranscriptionResponse,
): CreateTranscriptionResponseRest {
  return { ...o, text: o["text"] };
}

export function deserializeCreateTranscriptionResponse(
  o: CreateTranscriptionResponseRest,
): CreateTranscriptionResponse {
  return { ...o, text: o["text"] };
}

export function serializeCreateModerationRequestInput(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeCreateModerationRequestInput(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeCreateEmbeddingRequestInput(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeCreateEmbeddingRequestInput(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializePrompt(o: Prompt): FIXMYNAME {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializePrompt(o: FIXMYNAME): Prompt {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeStop(o: Stop): FIXMYNAME {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeStop(o: FIXMYNAME): Stop {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeCreateFineTuningJobRequestHyperparametersNEpochs(
  o: any,
): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeCreateFineTuningJobRequestHyperparametersNEpochs(
  o: any,
): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeFineTuningJobHyperparametersNEpochs(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeFineTuningJobHyperparametersNEpochs(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function serializeCreateChatCompletionRequestFunctionCall(o: any): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}

export function deserializeCreateChatCompletionRequestFunctionCall(
  o: any,
): any {
  return (() => {
    throw Error("Not implemented.");
  })();
}
