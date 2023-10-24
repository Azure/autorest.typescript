// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
  CreateTranslationRequest,
  CreateTranslationResponse,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
  CreateCompletionRequest,
  CreateCompletionResponse,
  CreateEditRequest,
  CreateEditResponse,
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
  ListModelsResponse,
  Model,
  DeleteModelResponse,
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
  CreateModerationRequest,
  CreateModerationResponse,
} from "./models/models.js";
import {
  CreateTranscriptionOptions,
  CreateTranslationOptions,
  CreateChatCompletionOptions,
  CreateFineTuningJobOptions,
  ListPaginatedFineTuningJobsOptions,
  RetrieveFineTuningJobOptions,
  ListFineTuningEventsOptions,
  CancelFineTuningJobOptions,
  CreateCompletionOptions,
  CreateEditOptions,
  CreateEmbeddingOptions,
  ListFilesOptions,
  CreateFileOptions,
  RetrieveFileOptions,
  DeleteFileOptions,
  DownloadFileOptions,
  CreateFineTuneOptions,
  ListFineTunesOptions,
  RetrieveFineTuneOptions,
  ListFineTuneEventsOptions,
  CancelFineTuneOptions,
  ListModelsOptions,
  RetrieveOptions,
  DeleteOptions,
  CreateImageOptions,
  CreateImageEditOptions,
  CreateImageVariationOptions,
  CreateModerationOptions,
} from "./models/options.js";
import {
  createOpenAI,
  OpenAIClientOptions,
  OpenAIContext,
} from "./api/index.js";
import { createTranscription } from "./api/audio/transcriptions/index.js";
import { createTranslation } from "./api/audio/translations/index.js";
import { createChatCompletion } from "./api/chat/completions/index.js";
import { createCompletion } from "./api/completions/index.js";
import { createEdit } from "./api/edits/index.js";
import { createEmbedding } from "./api/embeddings/index.js";
import {
  listFiles,
  createFile,
  retrieveFile,
  deleteFile,
  downloadFile,
} from "./api/files/index.js";
import {
  createFineTune,
  listFineTunes,
  retrieveFineTune,
  listFineTuneEvents,
  cancelFineTune,
} from "./api/fineTunes/index.js";
import {
  createFineTuningJob,
  listPaginatedFineTuningJobs,
  retrieveFineTuningJob,
  listFineTuningEvents,
  cancelFineTuningJob,
} from "./api/fineTuning/jobs/index.js";
import {
  createImage,
  createImageEdit,
  createImageVariation,
} from "./api/images/index.js";
import { listModels, retrieve, deleteOperation } from "./api/models/index.js";
import { createModeration } from "./api/moderations/index.js";

export { OpenAIClientOptions } from "./api/OpenAIContext.js";

export class OpenAIClient {
  private _client: OpenAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details. */
  constructor(credential: KeyCredential, options: OpenAIClientOptions = {}) {
    this._client = createOpenAI(credential, options);
    this.pipeline = this._client.pipeline;
  }

  audioTranscriptions = {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ): Promise<CreateTranscriptionResponse> => {
      return createTranscription(this._client, audio, options);
    },
  };
  audioTranslations = {
    createTranslation: (
      audio: CreateTranslationRequest,
      options?: CreateTranslationOptions
    ): Promise<CreateTranslationResponse> => {
      return createTranslation(this._client, audio, options);
    },
  };
  chatCompletions = {
    createChatCompletion: (
      body: CreateChatCompletionRequest,
      options?: CreateChatCompletionOptions
    ): Promise<CreateChatCompletionResponse> => {
      return createChatCompletion(this._client, body, options);
    },
  };
  fineTuningJobs = {
    createFineTuningJob: (
      job: CreateFineTuningJobRequest,
      options?: CreateFineTuningJobOptions
    ): Promise<FineTuningJob> => {
      return createFineTuningJob(this._client, job, options);
    },
    listPaginatedFineTuningJobs: (
      options?: ListPaginatedFineTuningJobsOptions
    ): Promise<ListPaginatedFineTuningJobsResponse> => {
      return listPaginatedFineTuningJobs(this._client, options);
    },
    retrieveFineTuningJob: (
      fineTuningJobId: string,
      options?: RetrieveFineTuningJobOptions
    ): Promise<FineTuningJob> => {
      return retrieveFineTuningJob(this._client, fineTuningJobId, options);
    },
    listFineTuningEvents: (
      fineTuningJobId: string,
      options?: ListFineTuningEventsOptions
    ): Promise<ListFineTuningJobEventsResponse> => {
      return listFineTuningEvents(this._client, fineTuningJobId, options);
    },
    cancelFineTuningJob: (
      fineTuningJobId: string,
      options?: CancelFineTuningJobOptions
    ): Promise<FineTuningJob> => {
      return cancelFineTuningJob(this._client, fineTuningJobId, options);
    },
  };
  completions = {
    createCompletion: (
      body: CreateCompletionRequest,
      options?: CreateCompletionOptions
    ): Promise<CreateCompletionResponse> => {
      return createCompletion(this._client, body, options);
    },
  };
  edits = {
    createEdit: (
      edit: CreateEditRequest,
      options?: CreateEditOptions
    ): Promise<CreateEditResponse> => {
      return createEdit(this._client, edit, options);
    },
  };
  embeddings = {
    createEmbedding: (
      embedding: CreateEmbeddingRequest,
      options?: CreateEmbeddingOptions
    ): Promise<CreateEmbeddingResponse> => {
      return createEmbedding(this._client, embedding, options);
    },
  };
  files = {
    listFiles: (options?: ListFilesOptions): Promise<ListFilesResponse> => {
      return listFiles(this._client, options);
    },
    createFile: (
      file: CreateFileRequest,
      options?: CreateFileOptions
    ): Promise<OpenAIFile> => {
      return createFile(this._client, file, options);
    },
    retrieveFile: (
      fileId: string,
      options?: RetrieveFileOptions
    ): Promise<OpenAIFile> => {
      return retrieveFile(this._client, fileId, options);
    },
    deleteFile: (
      fileId: string,
      options?: DeleteFileOptions
    ): Promise<DeleteFileResponse> => {
      return deleteFile(this._client, fileId, options);
    },
    downloadFile: (
      fileId: string,
      options?: DownloadFileOptions
    ): Promise<string> => {
      return downloadFile(this._client, fileId, options);
    },
  };
  fineTunes = {
    createFineTune: (
      fineTune: CreateFineTuneRequest,
      options?: CreateFineTuneOptions
    ): Promise<FineTune> => {
      return createFineTune(this._client, fineTune, options);
    },
    listFineTunes: (
      options?: ListFineTunesOptions
    ): Promise<ListFineTunesResponse> => {
      return listFineTunes(this._client, options);
    },
    retrieveFineTune: (
      fineTuneId: string,
      options?: RetrieveFineTuneOptions
    ): Promise<FineTune> => {
      return retrieveFineTune(this._client, fineTuneId, options);
    },
    listFineTuneEvents: (
      fineTuneId: string,
      options?: ListFineTuneEventsOptions
    ): Promise<ListFineTuneEventsResponse> => {
      return listFineTuneEvents(this._client, fineTuneId, options);
    },
    cancelFineTune: (
      fineTuneId: string,
      options?: CancelFineTuneOptions
    ): Promise<FineTune> => {
      return cancelFineTune(this._client, fineTuneId, options);
    },
  };
  models = {
    listModels: (options?: ListModelsOptions): Promise<ListModelsResponse> => {
      return listModels(this._client, options);
    },
    retrieve: (model: string, options?: RetrieveOptions): Promise<Model> => {
      return retrieve(this._client, model, options);
    },
    deleteOperation: (
      model: string,
      options?: DeleteOptions
    ): Promise<DeleteModelResponse> => {
      return deleteOperation(this._client, model, options);
    },
  };
  images = {
    createImage: (
      image: CreateImageRequest,
      options?: CreateImageOptions
    ): Promise<ImagesResponse> => {
      return createImage(this._client, image, options);
    },
    createImageEdit: (
      image: CreateImageEditRequest,
      options?: CreateImageEditOptions
    ): Promise<ImagesResponse> => {
      return createImageEdit(this._client, image, options);
    },
    createImageVariation: (
      image: CreateImageVariationRequest,
      options?: CreateImageVariationOptions
    ): Promise<ImagesResponse> => {
      return createImageVariation(this._client, image, options);
    },
  };
  moderations = {
    createModeration: (
      content: CreateModerationRequest,
      options?: CreateModerationOptions
    ): Promise<CreateModerationResponse> => {
      return createModeration(this._client, content, options);
    },
  };
}
