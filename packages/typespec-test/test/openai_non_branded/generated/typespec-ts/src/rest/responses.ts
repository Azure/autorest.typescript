// Licensed under the MIT license.

import { HttpResponse } from "@typespec/ts-http-runtime";
import {
  CreateTranscriptionResponseOutput,
  ErrorResponseOutput,
  CreateTranslationResponseOutput,
  CreateChatCompletionResponseOutput,
  FineTuningJobOutput,
  ListPaginatedFineTuningJobsResponseOutput,
  ListFineTuningJobEventsResponseOutput,
  CreateCompletionResponseOutput,
  CreateEditResponseOutput,
  CreateEmbeddingResponseOutput,
  ListFilesResponseOutput,
  OpenAIFileOutput,
  DeleteFileResponseOutput,
  FineTuneOutput,
  ListFineTunesResponseOutput,
  ListFineTuneEventsResponseOutput,
  ListModelsResponseOutput,
  ModelOutput,
  DeleteModelResponseOutput,
  ImagesResponseOutput,
  CreateModerationResponseOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface AudioTranscriptionsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateTranscriptionResponseOutput;
}

export interface AudioTranscriptionsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface AudioTranslationsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateTranslationResponseOutput;
}

export interface AudioTranslationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ChatCompletionsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateChatCompletionResponseOutput;
}

export interface ChatCompletionsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTuningJobsCreate200Response extends HttpResponse {
  status: "200";
  body: FineTuningJobOutput;
}

export interface FineTuningJobsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTuningJobsList200Response extends HttpResponse {
  status: "200";
  body: ListPaginatedFineTuningJobsResponseOutput;
}

export interface FineTuningJobsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTuningJobsRetrieve200Response extends HttpResponse {
  status: "200";
  body: FineTuningJobOutput;
}

export interface FineTuningJobsRetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTuningJobsListEvents200Response extends HttpResponse {
  status: "200";
  body: ListFineTuningJobEventsResponseOutput;
}

export interface FineTuningJobsListEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTuningJobsCancel200Response extends HttpResponse {
  status: "200";
  body: FineTuningJobOutput;
}

export interface FineTuningJobsCancelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CompletionsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateCompletionResponseOutput;
}

export interface CompletionsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface EditsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateEditResponseOutput;
}

export interface EditsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface EmbeddingsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateEmbeddingResponseOutput;
}

export interface EmbeddingsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FilesList200Response extends HttpResponse {
  status: "200";
  body: ListFilesResponseOutput;
}

export interface FilesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FilesCreate200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface FilesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FilesRetrieve200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface FilesRetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FilesDelete200Response extends HttpResponse {
  status: "200";
  body: DeleteFileResponseOutput;
}

export interface FilesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FilesDownload200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface FilesDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTunesCreate200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface FineTunesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTunesList200Response extends HttpResponse {
  status: "200";
  body: ListFineTunesResponseOutput;
}

export interface FineTunesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTunesRetrieve200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface FineTunesRetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTunesListEvents200Response extends HttpResponse {
  status: "200";
  body: ListFineTuneEventsResponseOutput;
}

export interface FineTunesListEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FineTunesCancel200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface FineTunesCancelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModelsList200Response extends HttpResponse {
  status: "200";
  body: ListModelsResponseOutput;
}

export interface ModelsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModelsRetrieve200Response extends HttpResponse {
  status: "200";
  body: ModelOutput;
}

export interface ModelsRetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModelsDelete200Response extends HttpResponse {
  status: "200";
  body: DeleteModelResponseOutput;
}

export interface ModelsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ImagesCreate200Response extends HttpResponse {
  status: "200";
  body: ImagesResponseOutput;
}

export interface ImagesCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ImagesCreateEdit200Response extends HttpResponse {
  status: "200";
  body: ImagesResponseOutput;
}

export interface ImagesCreateEditDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ImagesCreateVariation200Response extends HttpResponse {
  status: "200";
  body: ImagesResponseOutput;
}

export interface ImagesCreateVariationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ModerationsCreate200Response extends HttpResponse {
  status: "200";
  body: CreateModerationResponseOutput;
}

export interface ModerationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
