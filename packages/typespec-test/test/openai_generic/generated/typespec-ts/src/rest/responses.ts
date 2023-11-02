// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
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
export interface CreateTranscription200Response extends HttpResponse {
  status: "200";
  body: CreateTranscriptionResponseOutput;
}

export interface CreateTranscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateTranslation200Response extends HttpResponse {
  status: "200";
  body: CreateTranslationResponseOutput;
}

export interface CreateTranslationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateChatCompletion200Response extends HttpResponse {
  status: "200";
  body: CreateChatCompletionResponseOutput;
}

export interface CreateChatCompletionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateFineTuningJob200Response extends HttpResponse {
  status: "200";
  body: FineTuningJobOutput;
}

export interface CreateFineTuningJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListPaginatedFineTuningJobs200Response extends HttpResponse {
  status: "200";
  body: ListPaginatedFineTuningJobsResponseOutput;
}

export interface ListPaginatedFineTuningJobsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface RetrieveFineTuningJob200Response extends HttpResponse {
  status: "200";
  body: FineTuningJobOutput;
}

export interface RetrieveFineTuningJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFineTuningEvents200Response extends HttpResponse {
  status: "200";
  body: ListFineTuningJobEventsResponseOutput;
}

export interface ListFineTuningEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CancelFineTuningJob200Response extends HttpResponse {
  status: "200";
  body: FineTuningJobOutput;
}

export interface CancelFineTuningJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateCompletion200Response extends HttpResponse {
  status: "200";
  body: CreateCompletionResponseOutput;
}

export interface CreateCompletionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateEdit200Response extends HttpResponse {
  status: "200";
  body: CreateEditResponseOutput;
}

export interface CreateEditDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateEmbedding200Response extends HttpResponse {
  status: "200";
  body: CreateEmbeddingResponseOutput;
}

export interface CreateEmbeddingDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFiles200Response extends HttpResponse {
  status: "200";
  body: ListFilesResponseOutput;
}

export interface ListFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface CreateFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface RetrieveFile200Response extends HttpResponse {
  status: "200";
  body: OpenAIFileOutput;
}

export interface RetrieveFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DeleteFile200Response extends HttpResponse {
  status: "200";
  body: DeleteFileResponseOutput;
}

export interface DeleteFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DownloadFile200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface DownloadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateFineTune200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface CreateFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFineTunes200Response extends HttpResponse {
  status: "200";
  body: ListFineTunesResponseOutput;
}

export interface ListFineTunesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface RetrieveFineTune200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface RetrieveFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListFineTuneEvents200Response extends HttpResponse {
  status: "200";
  body: ListFineTuneEventsResponseOutput;
}

export interface ListFineTuneEventsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CancelFineTune200Response extends HttpResponse {
  status: "200";
  body: FineTuneOutput;
}

export interface CancelFineTuneDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListModels200Response extends HttpResponse {
  status: "200";
  body: ListModelsResponseOutput;
}

export interface ListModelsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface Retrieve200Response extends HttpResponse {
  status: "200";
  body: ModelOutput;
}

export interface RetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface DeleteOperation200Response extends HttpResponse {
  status: "200";
  body: DeleteModelResponseOutput;
}

export interface DeleteOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateImage200Response extends HttpResponse {
  status: "200";
  body: ImagesResponseOutput;
}

export interface CreateImageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateImageEdit200Response extends HttpResponse {
  status: "200";
  body: ImagesResponseOutput;
}

export interface CreateImageEditDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateImageVariation200Response extends HttpResponse {
  status: "200";
  body: ImagesResponseOutput;
}

export interface CreateImageVariationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateModeration200Response extends HttpResponse {
  status: "200";
  body: CreateModerationResponseOutput;
}

export interface CreateModerationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
