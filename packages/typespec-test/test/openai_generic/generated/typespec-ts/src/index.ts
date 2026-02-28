// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";

export { OpenAIClient } from "./openAIClient.js";
export type {
  CreateCompletionRequest,
  Prompt,
  Stop,
  CreateCompletionResponse,
  CompletionUsage,
  ErrorResponse,
  ErrorModel,
  CreateEditRequest,
  CreateEditResponse,
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
  Embedding,
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
  CreateFineTuneRequest,
  FineTune,
  FineTuneEvent,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
  ListModelsResponse,
  Model,
  DeleteModelResponse,
  CreateImageEditRequest,
  ImagesResponse,
  Image,
  CreateImageVariationRequest,
  CreateModerationRequest,
  CreateModerationResponse,
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
  CreateTranslationRequest,
  CreateTranslationResponse,
  CreateChatCompletionRequest,
  ChatCompletionRequestMessage,
  ChatCompletionFunctions,
  ChatCompletionFunctionParameters,
  ChatCompletionFunctionCallOption,
  CreateChatCompletionResponse,
  ChatCompletionResponseMessage,
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
  FineTuningJobEvent,
} from "./models/index.js";
export type { OpenAIClientOptionalParams } from "./api/index.js";
export type { CompletionsCreateOptionalParams } from "./api/completions/index.js";
export type { EditsCreateOptionalParams } from "./api/edits/index.js";
export type { EmbeddingsCreateOptionalParams } from "./api/embeddings/index.js";
export type {
  FilesDownloadOptionalParams,
  FilesDeleteOptionalParams,
  FilesRetrieveOptionalParams,
  FilesCreateOptionalParams,
  FilesListOptionalParams,
} from "./api/files/index.js";
export type {
  FineTunesCancelOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesRetrieveOptionalParams,
  FineTunesListOptionalParams,
  FineTunesCreateOptionalParams,
} from "./api/fineTunes/index.js";
export type {
  ImagesCreateVariationOptionalParams,
  ImagesCreateEditOptionalParams,
} from "./api/images/index.js";
export type {
  ModelsDeleteOptionalParams,
  ModelsRetrieveOptionalParams,
  ModelsListOptionalParams,
} from "./api/models/index.js";
export type { ModerationsCreateOptionalParams } from "./api/moderations/index.js";
export type { AudioTranscriptionsCreateOptionalParams } from "./api/audio/transcriptions/index.js";
export type { AudioTranslationsCreateOptionalParams } from "./api/audio/translations/index.js";
export type { ChatCompletionsCreateOptionalParams } from "./api/chat/completions/index.js";
export type {
  FineTuningJobsCancelOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsCreateOptionalParams,
} from "./api/fineTuning/jobs/index.js";
export type {
  AudioOperations,
  ChatOperations,
  CompletionsOperations,
  EditsOperations,
  EmbeddingsOperations,
  FilesOperations,
  FineTunesOperations,
  FineTuningOperations,
  ImagesOperations,
  ModelsOperations,
  ModerationsOperations,
  AudioTranscriptionsOperations,
  AudioTranslationsOperations,
  ChatCompletionsOperations,
  FineTuningJobsOperations,
} from "./classic/index.js";
export type { FileContents };
