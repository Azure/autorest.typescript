// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface CreateTranscriptionOptions extends OperationOptions {
  contentType?: string;
}

export interface CreateTranslationOptions extends OperationOptions {
  contentType?: string;
}

export interface CreateChatCompletionOptions extends OperationOptions {}

export interface CreateFineTuningJobOptions extends OperationOptions {}

export interface ListPaginatedFineTuningJobsOptions extends OperationOptions {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

export interface RetrieveFineTuningJobOptions extends OperationOptions {}

export interface ListFineTuningEventsOptions extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

export interface CancelFineTuningJobOptions extends OperationOptions {}

export interface CreateCompletionOptions extends OperationOptions {}

export interface CreateEditOptions extends OperationOptions {}

export interface CreateEmbeddingOptions extends OperationOptions {}

export interface ListFilesOptions extends OperationOptions {}

export interface CreateFileOptions extends OperationOptions {
  contentType?: string;
}

export interface RetrieveFileOptions extends OperationOptions {}

export interface DeleteFileOptions extends OperationOptions {}

export interface DownloadFileOptions extends OperationOptions {}

export interface CreateFineTuneOptions extends OperationOptions {}

export interface ListFineTunesOptions extends OperationOptions {}

export interface RetrieveFineTuneOptions extends OperationOptions {}

export interface ListFineTuneEventsOptions extends OperationOptions {
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

export interface CancelFineTuneOptions extends OperationOptions {}

export interface ListModelsOptions extends OperationOptions {}

export interface RetrieveOptions extends OperationOptions {}

export interface DeleteOptions extends OperationOptions {}

export interface CreateImageOptions extends OperationOptions {}

export interface CreateImageEditOptions extends OperationOptions {
  contentType?: string;
}

export interface CreateImageVariationOptions extends OperationOptions {
  contentType?: string;
}

export interface CreateModerationOptions extends OperationOptions {}
