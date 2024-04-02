// Licensed under the MIT license.

import { OperationOptions } from "@typespec/ts-http-runtime";

export interface AudioTranscriptionsCreateOptions extends OperationOptions {
  contentType?: string;
}

export interface AudioTranslationsCreateOptions extends OperationOptions {
  contentType?: string;
}

export interface ChatCompletionsCreateOptions extends OperationOptions {}

export interface FineTuningJobsCreateOptions extends OperationOptions {}

export interface FineTuningJobsListOptions extends OperationOptions {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

export interface FineTuningJobsRetrieveOptions extends OperationOptions {}

export interface FineTuningJobsListEventsOptions extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

export interface FineTuningJobsCancelOptions extends OperationOptions {}

export interface CompletionsCreateOptions extends OperationOptions {}

export interface EditsCreateOptions extends OperationOptions {}

export interface EmbeddingsCreateOptions extends OperationOptions {}

export interface FilesListOptions extends OperationOptions {}

export interface FilesCreateOptions extends OperationOptions {
  contentType?: string;
}

export interface FilesRetrieveOptions extends OperationOptions {}

export interface FilesDeleteOptions extends OperationOptions {}

export interface FilesDownloadOptions extends OperationOptions {}

export interface FineTunesCreateOptions extends OperationOptions {}

export interface FineTunesListOptions extends OperationOptions {}

export interface FineTunesRetrieveOptions extends OperationOptions {}

export interface FineTunesListEventsOptions extends OperationOptions {
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

export interface FineTunesCancelOptions extends OperationOptions {}

export interface ModelsListOptions extends OperationOptions {}

export interface ModelsRetrieveOptions extends OperationOptions {}

export interface ModelsDeleteOptions extends OperationOptions {}

export interface ImagesCreateOptions extends OperationOptions {}

export interface ImagesCreateEditOptions extends OperationOptions {
  contentType?: string;
}

export interface ImagesCreateVariationOptions extends OperationOptions {
  contentType?: string;
}

export interface ModerationsCreateOptions extends OperationOptions {}
