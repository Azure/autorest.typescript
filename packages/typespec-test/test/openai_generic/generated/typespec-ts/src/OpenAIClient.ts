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
  createTranscription,
  createTranslation,
  createChatCompletion,
  createFineTuningJob,
  listPaginatedFineTuningJobs,
  retrieveFineTuningJob,
  listFineTuningEvents,
  cancelFineTuningJob,
  createCompletion,
  createEdit,
  createEmbedding,
  listFiles,
  createFile,
  retrieveFile,
  deleteFile,
  downloadFile,
  createFineTune,
  listFineTunes,
  retrieveFineTune,
  listFineTuneEvents,
  cancelFineTune,
  listModels,
  retrieve,
  deleteOperation,
  createImage,
  createImageEdit,
  createImageVariation,
  createModeration,
} from "./api/index.js";

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

  createTranscription(
    audio: CreateTranscriptionRequest,
    options: CreateTranscriptionOptions = { requestOptions: {} }
  ): Promise<CreateTranscriptionResponse> {
    return createTranscription(this._client, audio, options);
  }

  createTranslation(
    audio: CreateTranslationRequest,
    options: CreateTranslationOptions = { requestOptions: {} }
  ): Promise<CreateTranslationResponse> {
    return createTranslation(this._client, audio, options);
  }

  createChatCompletion(
    body: CreateChatCompletionRequest,
    options: CreateChatCompletionOptions = { requestOptions: {} }
  ): Promise<CreateChatCompletionResponse> {
    return createChatCompletion(this._client, body, options);
  }

  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name of the
   * fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  createFineTuningJob(
    job: CreateFineTuningJobRequest,
    options: CreateFineTuningJobOptions = { requestOptions: {} }
  ): Promise<FineTuningJob> {
    return createFineTuningJob(this._client, job, options);
  }

  listPaginatedFineTuningJobs(
    options: ListPaginatedFineTuningJobsOptions = { requestOptions: {} }
  ): Promise<ListPaginatedFineTuningJobsResponse> {
    return listPaginatedFineTuningJobs(this._client, options);
  }

  retrieveFineTuningJob(
    fineTuningJobId: string,
    options: RetrieveFineTuningJobOptions = { requestOptions: {} }
  ): Promise<FineTuningJob> {
    return retrieveFineTuningJob(this._client, fineTuningJobId, options);
  }

  listFineTuningEvents(
    fineTuningJobId: string,
    options: ListFineTuningEventsOptions = { requestOptions: {} }
  ): Promise<ListFineTuningJobEventsResponse> {
    return listFineTuningEvents(this._client, fineTuningJobId, options);
  }

  cancelFineTuningJob(
    fineTuningJobId: string,
    options: CancelFineTuningJobOptions = { requestOptions: {} }
  ): Promise<FineTuningJob> {
    return cancelFineTuningJob(this._client, fineTuningJobId, options);
  }

  createCompletion(
    body: CreateCompletionRequest,
    options: CreateCompletionOptions = { requestOptions: {} }
  ): Promise<CreateCompletionResponse> {
    return createCompletion(this._client, body, options);
  }

  createEdit(
    edit: CreateEditRequest,
    options: CreateEditOptions = { requestOptions: {} }
  ): Promise<CreateEditResponse> {
    return createEdit(this._client, edit, options);
  }

  createEmbedding(
    embedding: CreateEmbeddingRequest,
    options: CreateEmbeddingOptions = { requestOptions: {} }
  ): Promise<CreateEmbeddingResponse> {
    return createEmbedding(this._client, embedding, options);
  }

  listFiles(
    options: ListFilesOptions = { requestOptions: {} }
  ): Promise<ListFilesResponse> {
    return listFiles(this._client, options);
  }

  createFile(
    file: CreateFileRequest,
    options: CreateFileOptions = { requestOptions: {} }
  ): Promise<OpenAIFile> {
    return createFile(this._client, file, options);
  }

  retrieveFile(
    fileId: string,
    options: RetrieveFileOptions = { requestOptions: {} }
  ): Promise<OpenAIFile> {
    return retrieveFile(this._client, fileId, options);
  }

  deleteFile(
    fileId: string,
    options: DeleteFileOptions = { requestOptions: {} }
  ): Promise<DeleteFileResponse> {
    return deleteFile(this._client, fileId, options);
  }

  downloadFile(
    fileId: string,
    options: DownloadFileOptions = { requestOptions: {} }
  ): Promise<string> {
    return downloadFile(this._client, fileId, options);
  }

  createFineTune(
    fineTune: CreateFineTuneRequest,
    options: CreateFineTuneOptions = { requestOptions: {} }
  ): Promise<FineTune> {
    return createFineTune(this._client, fineTune, options);
  }

  listFineTunes(
    options: ListFineTunesOptions = { requestOptions: {} }
  ): Promise<ListFineTunesResponse> {
    return listFineTunes(this._client, options);
  }

  retrieveFineTune(
    fineTuneId: string,
    options: RetrieveFineTuneOptions = { requestOptions: {} }
  ): Promise<FineTune> {
    return retrieveFineTune(this._client, fineTuneId, options);
  }

  listFineTuneEvents(
    fineTuneId: string,
    options: ListFineTuneEventsOptions = { requestOptions: {} }
  ): Promise<ListFineTuneEventsResponse> {
    return listFineTuneEvents(this._client, fineTuneId, options);
  }

  cancelFineTune(
    fineTuneId: string,
    options: CancelFineTuneOptions = { requestOptions: {} }
  ): Promise<FineTune> {
    return cancelFineTune(this._client, fineTuneId, options);
  }

  listModels(
    options: ListModelsOptions = { requestOptions: {} }
  ): Promise<ListModelsResponse> {
    return listModels(this._client, options);
  }

  retrieve(
    model: string,
    options: RetrieveOptions = { requestOptions: {} }
  ): Promise<Model> {
    return retrieve(this._client, model, options);
  }

  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
   *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
   */
  deleteOperation(
    model: string,
    options: DeleteOptions = { requestOptions: {} }
  ): Promise<DeleteModelResponse> {
    return deleteOperation(this._client, model, options);
  }

  createImage(
    image: CreateImageRequest,
    options: CreateImageOptions = { requestOptions: {} }
  ): Promise<ImagesResponse> {
    return createImage(this._client, image, options);
  }

  createImageEdit(
    image: CreateImageEditRequest,
    options: CreateImageEditOptions = { requestOptions: {} }
  ): Promise<ImagesResponse> {
    return createImageEdit(this._client, image, options);
  }

  createImageVariation(
    image: CreateImageVariationRequest,
    options: CreateImageVariationOptions = { requestOptions: {} }
  ): Promise<ImagesResponse> {
    return createImageVariation(this._client, image, options);
  }

  createModeration(
    content: CreateModerationRequest,
    options: CreateModerationOptions = { requestOptions: {} }
  ): Promise<CreateModerationResponse> {
    return createModeration(this._client, content, options);
  }
}
