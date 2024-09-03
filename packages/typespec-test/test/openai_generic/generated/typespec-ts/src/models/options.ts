// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AudioTranscriptionsCreateOptionalParams
  extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface AudioTranslationsCreateOptionalParams
  extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface ChatCompletionsCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTuningJobsCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTuningJobsListOptionalParams extends OperationOptions {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

/** Optional parameters. */
export interface FineTuningJobsRetrieveOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface FineTuningJobsListEventsOptionalParams
  extends OperationOptions {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

/** Optional parameters. */
export interface FineTuningJobsCancelOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CompletionsCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EditsCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EmbeddingsCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FilesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FilesCreateOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface FilesRetrieveOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FilesDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FilesDownloadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTunesCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTunesListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTunesRetrieveOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface FineTunesListEventsOptionalParams extends OperationOptions {
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

/** Optional parameters. */
export interface FineTunesCancelOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ModelsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ModelsRetrieveOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ModelsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ImagesCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ImagesCreateEditOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface ImagesCreateVariationOptionalParams extends OperationOptions {
  contentType?: string;
}

/** Optional parameters. */
export interface ModerationsCreateOptionalParams extends OperationOptions {}
