// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";

export { OpenAIClient } from "./openAIClient.js";
export {
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
  CreateImageRequest,
  ImagesResponse,
  Image,
  CreateImageEditRequest,
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
export { OpenAIClientOptionalParams } from "./api/index.js";
export { CompletionsCreateOptionalParams } from "./api/completions/index.js";
export { EditsCreateOptionalParams } from "./api/edits/index.js";
export { EmbeddingsCreateOptionalParams } from "./api/embeddings/index.js";
export {
  FilesDownloadOptionalParams,
  FilesDeleteOptionalParams,
  FilesRetrieveOptionalParams,
  FilesCreateOptionalParams,
  FilesListOptionalParams,
} from "./api/files/index.js";
export {
  FineTunesCancelOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesRetrieveOptionalParams,
  FineTunesListOptionalParams,
  FineTunesCreateOptionalParams,
} from "./api/fineTunes/index.js";
export {
  ImagesCreateVariationOptionalParams,
  ImagesCreateEditOptionalParams,
  ImagesCreateOptionalParams,
} from "./api/images/index.js";
export {
  ModelsDeleteOptionalParams,
  ModelsRetrieveOptionalParams,
  ModelsListOptionalParams,
} from "./api/models/index.js";
export { ModerationsCreateOptionalParams } from "./api/moderations/index.js";
export { AudioTranscriptionsCreateOptionalParams } from "./api/audio/transcriptions/index.js";
export { AudioTranslationsCreateOptionalParams } from "./api/audio/translations/index.js";
export { ChatCompletionsCreateOptionalParams } from "./api/chat/completions/index.js";
export {
  FineTuningJobsCancelOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsCreateOptionalParams,
} from "./api/fineTuning/jobs/index.js";
export {
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
export { FileContents };
