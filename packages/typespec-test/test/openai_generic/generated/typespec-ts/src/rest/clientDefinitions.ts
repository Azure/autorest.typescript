// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranscriptionParameters,
  CreateTranslationParameters,
  CreateChatCompletionParameters,
  CreateFineTuningJobParameters,
  ListPaginatedFineTuningJobsParameters,
  RetrieveFineTuningJobParameters,
  ListFineTuningEventsParameters,
  CancelFineTuningJobParameters,
  CreateCompletionParameters,
  CreateEditParameters,
  CreateEmbeddingParameters,
  ListFilesParameters,
  CreateFileParameters,
  RetrieveFileParameters,
  DeleteFileParameters,
  DownloadFileParameters,
  CreateFineTuneParameters,
  ListFineTunesParameters,
  RetrieveFineTuneParameters,
  ListFineTuneEventsParameters,
  CancelFineTuneParameters,
  ListModelsParameters,
  RetrieveParameters,
  DeleteParameters,
  CreateImageParameters,
  CreateImageEditParameters,
  CreateImageVariationParameters,
  CreateModerationParameters,
} from "./parameters.js";
import {
  CreateTranscription200Response,
  CreateTranscriptionDefaultResponse,
  CreateTranslation200Response,
  CreateTranslationDefaultResponse,
  CreateChatCompletion200Response,
  CreateChatCompletionDefaultResponse,
  CreateFineTuningJob200Response,
  CreateFineTuningJobDefaultResponse,
  ListPaginatedFineTuningJobs200Response,
  ListPaginatedFineTuningJobsDefaultResponse,
  RetrieveFineTuningJob200Response,
  RetrieveFineTuningJobDefaultResponse,
  ListFineTuningEvents200Response,
  ListFineTuningEventsDefaultResponse,
  CancelFineTuningJob200Response,
  CancelFineTuningJobDefaultResponse,
  CreateCompletion200Response,
  CreateCompletionDefaultResponse,
  CreateEdit200Response,
  CreateEditDefaultResponse,
  CreateEmbedding200Response,
  CreateEmbeddingDefaultResponse,
  ListFiles200Response,
  ListFilesDefaultResponse,
  CreateFile200Response,
  CreateFileDefaultResponse,
  RetrieveFile200Response,
  RetrieveFileDefaultResponse,
  DeleteFile200Response,
  DeleteFileDefaultResponse,
  DownloadFile200Response,
  DownloadFileDefaultResponse,
  CreateFineTune200Response,
  CreateFineTuneDefaultResponse,
  ListFineTunes200Response,
  ListFineTunesDefaultResponse,
  RetrieveFineTune200Response,
  RetrieveFineTuneDefaultResponse,
  ListFineTuneEvents200Response,
  ListFineTuneEventsDefaultResponse,
  CancelFineTune200Response,
  CancelFineTuneDefaultResponse,
  ListModels200Response,
  ListModelsDefaultResponse,
  Retrieve200Response,
  RetrieveDefaultResponse,
  DeleteOperation200Response,
  DeleteOperationDefaultResponse,
  CreateImage200Response,
  CreateImageDefaultResponse,
  CreateImageEdit200Response,
  CreateImageEditDefaultResponse,
  CreateImageVariation200Response,
  CreateImageVariationDefaultResponse,
  CreateModeration200Response,
  CreateModerationDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateTranscription {
  post(
    options: CreateTranscriptionParameters
  ): StreamableMethod<
    CreateTranscription200Response | CreateTranscriptionDefaultResponse
  >;
}

export interface CreateTranslation {
  post(
    options: CreateTranslationParameters
  ): StreamableMethod<
    CreateTranslation200Response | CreateTranslationDefaultResponse
  >;
}

export interface CreateChatCompletion {
  post(
    options?: CreateChatCompletionParameters
  ): StreamableMethod<
    CreateChatCompletion200Response | CreateChatCompletionDefaultResponse
  >;
}

export interface CreateFineTuningJob {
  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name of the
   * fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  post(
    options: CreateFineTuningJobParameters
  ): StreamableMethod<
    CreateFineTuningJob200Response | CreateFineTuningJobDefaultResponse
  >;
  get(
    options?: ListPaginatedFineTuningJobsParameters
  ): StreamableMethod<
    | ListPaginatedFineTuningJobs200Response
    | ListPaginatedFineTuningJobsDefaultResponse
  >;
}

export interface RetrieveFineTuningJob {
  get(
    options?: RetrieveFineTuningJobParameters
  ): StreamableMethod<
    RetrieveFineTuningJob200Response | RetrieveFineTuningJobDefaultResponse
  >;
}

export interface ListFineTuningEvents {
  get(
    options?: ListFineTuningEventsParameters
  ): StreamableMethod<
    ListFineTuningEvents200Response | ListFineTuningEventsDefaultResponse
  >;
}

export interface CancelFineTuningJob {
  post(
    options?: CancelFineTuningJobParameters
  ): StreamableMethod<
    CancelFineTuningJob200Response | CancelFineTuningJobDefaultResponse
  >;
}

export interface CreateCompletion {
  post(
    options?: CreateCompletionParameters
  ): StreamableMethod<
    CreateCompletion200Response | CreateCompletionDefaultResponse
  >;
}

export interface CreateEdit {
  post(
    options: CreateEditParameters
  ): StreamableMethod<CreateEdit200Response | CreateEditDefaultResponse>;
}

export interface CreateEmbedding {
  post(
    options: CreateEmbeddingParameters
  ): StreamableMethod<
    CreateEmbedding200Response | CreateEmbeddingDefaultResponse
  >;
}

export interface ListFiles {
  get(
    options?: ListFilesParameters
  ): StreamableMethod<ListFiles200Response | ListFilesDefaultResponse>;
  post(
    options: CreateFileParameters
  ): StreamableMethod<CreateFile200Response | CreateFileDefaultResponse>;
}

export interface RetrieveFile {
  post(
    options?: RetrieveFileParameters
  ): StreamableMethod<RetrieveFile200Response | RetrieveFileDefaultResponse>;
  delete(
    options?: DeleteFileParameters
  ): StreamableMethod<DeleteFile200Response | DeleteFileDefaultResponse>;
}

export interface DownloadFile {
  get(
    options?: DownloadFileParameters
  ): StreamableMethod<DownloadFile200Response | DownloadFileDefaultResponse>;
}

export interface CreateFineTune {
  post(
    options: CreateFineTuneParameters
  ): StreamableMethod<
    CreateFineTune200Response | CreateFineTuneDefaultResponse
  >;
  get(
    options?: ListFineTunesParameters
  ): StreamableMethod<ListFineTunes200Response | ListFineTunesDefaultResponse>;
}

export interface RetrieveFineTune {
  get(
    options?: RetrieveFineTuneParameters
  ): StreamableMethod<
    RetrieveFineTune200Response | RetrieveFineTuneDefaultResponse
  >;
}

export interface ListFineTuneEvents {
  get(
    options?: ListFineTuneEventsParameters
  ): StreamableMethod<
    ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
  >;
}

export interface CancelFineTune {
  post(
    options?: CancelFineTuneParameters
  ): StreamableMethod<
    CancelFineTune200Response | CancelFineTuneDefaultResponse
  >;
}

export interface ListModels {
  get(
    options?: ListModelsParameters
  ): StreamableMethod<ListModels200Response | ListModelsDefaultResponse>;
}

export interface Retrieve {
  get(
    options?: RetrieveParameters
  ): StreamableMethod<Retrieve200Response | RetrieveDefaultResponse>;
  delete(
    options?: DeleteParameters
  ): StreamableMethod<
    DeleteOperation200Response | DeleteOperationDefaultResponse
  >;
}

export interface CreateImage {
  post(
    options: CreateImageParameters
  ): StreamableMethod<CreateImage200Response | CreateImageDefaultResponse>;
}

export interface CreateImageEdit {
  post(
    options: CreateImageEditParameters
  ): StreamableMethod<
    CreateImageEdit200Response | CreateImageEditDefaultResponse
  >;
}

export interface CreateImageVariation {
  post(
    options: CreateImageVariationParameters
  ): StreamableMethod<
    CreateImageVariation200Response | CreateImageVariationDefaultResponse
  >;
}

export interface CreateModeration {
  post(
    options: CreateModerationParameters
  ): StreamableMethod<
    CreateModeration200Response | CreateModerationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/audio/transcriptions' has methods for the following verbs: post */
  (path: "/audio/transcriptions"): CreateTranscription;
  /** Resource for '/audio/translations' has methods for the following verbs: post */
  (path: "/audio/translations"): CreateTranslation;
  /** Resource for '/chat/completions' has methods for the following verbs: post */
  (path: "/chat/completions"): CreateChatCompletion;
  /** Resource for '/fine_tuning/jobs' has methods for the following verbs: post, get */
  (path: "/fine_tuning/jobs"): CreateFineTuningJob;
  /** Resource for '/fine_tuning/jobs/\{fine_tuning_job_id\}' has methods for the following verbs: get */
  (
    path: "/fine_tuning/jobs/{fine_tuning_job_id}",
    fineTuningJobId: string
  ): RetrieveFineTuningJob;
  /** Resource for '/fine_tuning/jobs/\{fine_tuning_job_id\}/events' has methods for the following verbs: get */
  (
    path: "/fine_tuning/jobs/{fine_tuning_job_id}/events",
    fineTuningJobId: string
  ): ListFineTuningEvents;
  /** Resource for '/fine_tuning/jobs/\{fine_tuning_job_id\}/cancel' has methods for the following verbs: post */
  (
    path: "/fine_tuning/jobs/{fine_tuning_job_id}/cancel",
    fineTuningJobId: string
  ): CancelFineTuningJob;
  /** Resource for '/completions' has methods for the following verbs: post */
  (path: "/completions"): CreateCompletion;
  /** Resource for '/edits' has methods for the following verbs: post */
  (path: "/edits"): CreateEdit;
  /** Resource for '/embeddings' has methods for the following verbs: post */
  (path: "/embeddings"): CreateEmbedding;
  /** Resource for '/files' has methods for the following verbs: get, post */
  (path: "/files"): ListFiles;
  /** Resource for '/files/files/\{file_id\}' has methods for the following verbs: post, delete */
  (path: "/files/files/{file_id}", fileId: string): RetrieveFile;
  /** Resource for '/files/files/\{file_id\}/content' has methods for the following verbs: get */
  (path: "/files/files/{file_id}/content", fileId: string): DownloadFile;
  /** Resource for '/fine-tunes' has methods for the following verbs: post, get */
  (path: "/fine-tunes"): CreateFineTune;
  /** Resource for '/fine-tunes/\{fine_tune_id\}' has methods for the following verbs: get */
  (path: "/fine-tunes/{fine_tune_id}", fineTuneId: string): RetrieveFineTune;
  /** Resource for '/fine-tunes/\{fine_tune_id\}/events' has methods for the following verbs: get */
  (
    path: "/fine-tunes/{fine_tune_id}/events",
    fineTuneId: string
  ): ListFineTuneEvents;
  /** Resource for '/fine-tunes/\{fine_tune_id\}/cancel' has methods for the following verbs: post */
  (
    path: "/fine-tunes/{fine_tune_id}/cancel",
    fineTuneId: string
  ): CancelFineTune;
  /** Resource for '/models' has methods for the following verbs: get */
  (path: "/models"): ListModels;
  /** Resource for '/models/\{model\}' has methods for the following verbs: get, delete */
  (path: "/models/{model}", model: string): Retrieve;
  /** Resource for '/images/generations' has methods for the following verbs: post */
  (path: "/images/generations"): CreateImage;
  /** Resource for '/images/edits' has methods for the following verbs: post */
  (path: "/images/edits"): CreateImageEdit;
  /** Resource for '/images/variations' has methods for the following verbs: post */
  (path: "/images/variations"): CreateImageVariation;
  /** Resource for '/moderations' has methods for the following verbs: post */
  (path: "/moderations"): CreateModeration;
}

export type OpenAIContext = Client & {
  path: Routes;
};
