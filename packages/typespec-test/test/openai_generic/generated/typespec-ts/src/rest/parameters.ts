// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  CreateTranscriptionRequest,
  CreateTranslationRequest,
  CreateChatCompletionRequest,
  CreateFineTuningJobRequest,
  CreateCompletionRequest,
  CreateEditRequest,
  CreateEmbeddingRequest,
  CreateFileRequest,
  CreateFineTuneRequest,
  CreateImageRequest,
  CreateImageEditRequest,
  CreateImageVariationRequest,
  CreateModerationRequest,
} from "./models.js";

export interface TranscriptionsCreateBodyParam {
  body: CreateTranscriptionRequest;
}

export interface TranscriptionsCreateMediaTypesParam {
  contentType: "multipart/form-data";
}

export type TranscriptionsCreateParameters =
  TranscriptionsCreateMediaTypesParam &
    TranscriptionsCreateBodyParam &
    RequestParameters;

export interface TranslationsCreateBodyParam {
  body: CreateTranslationRequest;
}

export interface TranslationsCreateMediaTypesParam {
  contentType: "multipart/form-data";
}

export type TranslationsCreateParameters = TranslationsCreateMediaTypesParam &
  TranslationsCreateBodyParam &
  RequestParameters;

export interface CompletionsCreateBodyParam {
  body?: CreateChatCompletionRequest;
}

export type CompletionsCreateParameters = CompletionsCreateBodyParam &
  RequestParameters;

export interface JobsCreateBodyParam {
  body: CreateFineTuningJobRequest;
}

export type JobsCreateParameters = JobsCreateBodyParam & RequestParameters;

export interface JobsListQueryParamProperties {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

export interface JobsListQueryParam {
  queryParameters?: JobsListQueryParamProperties;
}

export type JobsListParameters = JobsListQueryParam & RequestParameters;
export type JobsRetrieveParameters = RequestParameters;

export interface JobsListEventsQueryParamProperties {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

export interface JobsListEventsQueryParam {
  queryParameters?: JobsListEventsQueryParamProperties;
}

export type JobsListEventsParameters = JobsListEventsQueryParam &
  RequestParameters;
export type JobsCancelParameters = RequestParameters;

export interface CompletionsCreateBodyParam {
  body?: CreateCompletionRequest;
}

export type CompletionsCreateParameters = CompletionsCreateBodyParam &
  RequestParameters;

export interface EditsCreateBodyParam {
  body: CreateEditRequest;
}

export type EditsCreateParameters = EditsCreateBodyParam & RequestParameters;

export interface EmbeddingsCreateBodyParam {
  body: CreateEmbeddingRequest;
}

export type EmbeddingsCreateParameters = EmbeddingsCreateBodyParam &
  RequestParameters;
export type FilesListParameters = RequestParameters;

export interface FilesCreateBodyParam {
  body: CreateFileRequest;
}

export interface FilesCreateMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FilesCreateParameters = FilesCreateMediaTypesParam &
  FilesCreateBodyParam &
  RequestParameters;
export type FilesRetrieveParameters = RequestParameters;
export type FilesDeleteParameters = RequestParameters;
export type FilesDownloadParameters = RequestParameters;

export interface FineTunesCreateBodyParam {
  body: CreateFineTuneRequest;
}

export type FineTunesCreateParameters = FineTunesCreateBodyParam &
  RequestParameters;
export type FineTunesListParameters = RequestParameters;
export type FineTunesRetrieveParameters = RequestParameters;

export interface FineTunesListEventsQueryParamProperties {
  /**
   * Whether to stream events for the fine-tune job. If set to true, events will be sent as
   * data-only
   * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
   * as they become available. The stream will terminate with a `data: [DONE]` message when the
   * job is finished (succeeded, cancelled, or failed).
   *
   * If set to false, only events generated so far will be returned.
   */
  stream?: boolean;
}

export interface FineTunesListEventsQueryParam {
  queryParameters?: FineTunesListEventsQueryParamProperties;
}

export type FineTunesListEventsParameters = FineTunesListEventsQueryParam &
  RequestParameters;
export type FineTunesCancelParameters = RequestParameters;
export type ModelsListParameters = RequestParameters;
export type ModelsRetrieveParameters = RequestParameters;
export type ModelsDeleteParameters = RequestParameters;

export interface ImagesCreateBodyParam {
  body: CreateImageRequest;
}

export type ImagesCreateParameters = ImagesCreateBodyParam & RequestParameters;

export interface ImagesCreateEditBodyParam {
  body: CreateImageEditRequest;
}

export interface ImagesCreateEditMediaTypesParam {
  contentType: "multipart/form-data";
}

export type ImagesCreateEditParameters = ImagesCreateEditMediaTypesParam &
  ImagesCreateEditBodyParam &
  RequestParameters;

export interface ImagesCreateVariationBodyParam {
  body: CreateImageVariationRequest;
}

export interface ImagesCreateVariationMediaTypesParam {
  contentType: "multipart/form-data";
}

export type ImagesCreateVariationParameters =
  ImagesCreateVariationMediaTypesParam &
    ImagesCreateVariationBodyParam &
    RequestParameters;

export interface ModerationsCreateBodyParam {
  body: CreateModerationRequest;
}

export type ModerationsCreateParameters = ModerationsCreateBodyParam &
  RequestParameters;
